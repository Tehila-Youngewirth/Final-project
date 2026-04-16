using System;

namespace RealEstateAPI.Models
{
    public class Inquiry
    {
        public int InquiryId { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public int PropertyId { get; set; }

        public Property Property { get; set; }

        public string Message { get; set; }

        public DateTime DateSent { get; set; }
    }
}
