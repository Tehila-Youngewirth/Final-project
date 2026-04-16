using System;
using System.Collections.Generic;



namespace RealEstateAPI.Models
{
    public class Property
    {
        public int PropertyId { get; set; }

        public string City { get; set; } = string.Empty;

        public string Street { get; set; }

        public int HouseNumber { get; set; }

        public int ApartmentNumber { get; set; }

        public int Rooms { get; set; }

        public bool HasParking { get; set; }

        public bool HasElevator { get; set; }

        public bool HasView { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }

        public DateTime DateAdded { get; set; }

        public string ImageUrl { get; set; }

        public IList<Inquiry> Inquiries { get; set; } 


    }
}
