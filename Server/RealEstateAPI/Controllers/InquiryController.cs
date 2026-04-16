using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstateAPI.Data;
using RealEstateAPI.Models;

namespace RealEstateAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InquiryController : ControllerBase
    {
        private readonly RealEstateContext _context;

        public InquiryController(RealEstateContext context)
        {
            _context = context;
        }

        // GET: api/Inquiry
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Inquiry>>> GetAll()
        {
            return await _context.Inquiries
                .Include(i => i.User)
                .Include(i => i.Property)
                .ToListAsync();
        }

        // GET: api/Inquiry/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Inquiry>> GetById(int id)
        {
            var inquiry = await _context.Inquiries
                .Include(i => i.User)
                .Include(i => i.Property)
                .FirstOrDefaultAsync(i => i.InquiryId == id);

            if (inquiry == null)
                return NotFound();

            return inquiry;
        }

        // POST: api/Inquiry
        [HttpPost]
        public async Task<ActionResult<Inquiry>> Create(Inquiry inquiry)
        {
            inquiry.DateSent = DateTime.Now;

            _context.Inquiries.Add(inquiry);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = inquiry.InquiryId }, inquiry);
        }

        // DELETE: api/Inquiry/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var inquiry = await _context.Inquiries.FindAsync(id);

            if (inquiry == null)
                return NotFound();

            _context.Inquiries.Remove(inquiry);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
