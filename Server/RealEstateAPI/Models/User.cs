using System;
using System.Collections.Generic;

namespace RealEstateAPI.Models
{
    public class User
    {
        public int UserId { get; set; }

        public string FullName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PasswordHash { get; set; } = string.Empty;

        public string Role { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; }

        public IList<Inquiry> Inquiries { get; set; }
    }
}
