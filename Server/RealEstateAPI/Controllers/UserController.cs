using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstateAPI.Data;
using RealEstateAPI.Models;

namespace RealEstateAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly RealEstateContext _context;

        public UserController(RealEstateContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            return await _context.Users
                .Include(u => u.Inquiries)
                .ToListAsync();
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(int id)
        {
            var user = await _context.Users
                .Include(u => u.Inquiries)
                .FirstOrDefaultAsync(u => u.UserId == id);

            if (user == null)
                return NotFound();

            return user;
        }

        // POST: api/User
        [HttpPost]
        public async Task<ActionResult<User>> Create(User user)
        {
            // בדיקה אם המשתמש כבר קיים כדי למנוע כפיליות
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            {
                return BadRequest("משתמש עם אימייל זה כבר קיים במערכת");
            }

            user.CreatedAt = DateTime.Now;
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = user.UserId }, user);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, User updatedUser)
        {
            if (id != updatedUser.UserId)
                return BadRequest();

            var user = await _context.Users.FindAsync(id);

            if (user == null)
                return NotFound();

            user.FullName = updatedUser.FullName;
            user.Email = updatedUser.Email;
            user.PasswordHash = updatedUser.PasswordHash;
            user.Role = updatedUser.Role;

            await _context.SaveChangesAsync();

            return Ok(user);
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
                return NotFound();

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] LoginRequest loginInfo)
        {
            // חיפוש משתמש לפי אימייל וסיסמה (בצורה פשוטה כרגע)
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginInfo.Email && u.PasswordHash == loginInfo.Password);

            if (user == null)
                return Unauthorized("אימייל או סיסמה שגויים");

            return Ok(user);
        }

        // מחלקה פשוטה לקבלת נתוני התחברות
        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
    }
}
