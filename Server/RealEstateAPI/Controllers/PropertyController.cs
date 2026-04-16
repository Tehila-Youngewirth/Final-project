using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstateAPI.Data;
using RealEstateAPI.Models;

namespace RealEstateAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertyController : ControllerBase
    {
        private readonly RealEstateContext _context;

        public PropertyController(RealEstateContext context)
        {
            _context = context;
        }

        // GET: api/property
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Property>>> GetProperties()
        {
            return await _context.Properties.ToListAsync();
        }

        // GET: api/property/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Property>> GetPropertyById(int id)
        {
            var property = await _context.Properties.FindAsync(id);
            if (property == null) return NotFound();
            return Ok(property);
        }

        // POST: api/property
        [HttpPost]
        public async Task<ActionResult<Property>> CreateProperty(Property property)
        {
            _context.Properties.Add(property);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPropertyById), new { id = property.PropertyId }, property);
        }

        // PUT: api/property/5 - הקוד המעודכן ששאלת עליו
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProperty(int id, Property updatedProperty)
        {
            // 1. בדיקה שה-ID בכתובת תואם ל-ID של האובייקט שנשלח
            if (id != updatedProperty.PropertyId)
                return BadRequest("Property ID mismatch");

            // 2. סימון האובייקט כ"שונה" ממה שיש בבסיס הנתונים
            _context.Entry(updatedProperty).State = EntityState.Modified;

            try
            {
                // 3. שמירה אסנכרונית - ה-await כאן קריטי
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // 4. טיפול במקרה שבו הדירה נמחקה בזמן שניסינו לעדכן אותה
                if (!PropertyExists(id)) return NotFound();
                else throw;
            }

            return NoContent(); // מחזיר הצלחה ללא תוכן
        }

        // DELETE: api/property/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProperty(int id)
        {
            var property = await _context.Properties.FindAsync(id);
            if (property == null) return NotFound();

            _context.Properties.Remove(property);
            await _context.SaveChangesAsync();
            return Ok("Property deleted successfully");
        }

        // פונקציית עזר לבדיקה אם דירה קיימת
        private bool PropertyExists(int id)
        {
            return _context.Properties.Any(e => e.PropertyId == id);
        }
    }
}