import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const venues = [
  {
    "Venue Name": "Royal Palace Hall",
    Location: "Mumbai",
    "Cost per Day (INR)": 150000,
    "Area (sq ft)": 5000,
    "Catering Services": "In-house catering",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 500,
    "Additional Services": "Decoration, Security, Valet Parking",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Sunshine Venue",
    Location: "Delhi",
    "Cost per Day (INR)": 120000,
    "Area (sq ft)": 4500,
    "Catering Services": "Outside catering",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 400,
    "Additional Services": "Valet Parking, Cleaning, Security",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Elite Banquet",
    Location: "Bangalore",
    "Cost per Day (INR)": 200000,
    "Area (sq ft)": 6000,
    "Catering Services": "In-house catering",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 600,
    "Additional Services": "Event Planning, Cleaning, Lighting",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Cozy Corner Hall",
    Location: "Chennai",
    "Cost per Day (INR)": 100000,
    "Area (sq ft)": 3500,
    "Catering Services": "No catering",
    Parking: "Yes",
    "AV Equipment": "Limited",
    "Wi-Fi": "Yes",
    "Capacity (people)": 300,
    "Additional Services": "Decoration, Cleaning",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Gala Banquets",
    Location: "Hyderabad",
    "Cost per Day (INR)": 180000,
    "Area (sq ft)": 5500,
    "Catering Services": "In-house catering",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 450,
    "Additional Services": "Lighting, Security, Event Planning",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Harmony Hall",
    Location: "Pune",
    "Cost per Day (INR)": 130000,
    "Area (sq ft)": 4000,
    "Catering Services": "Outside catering",
    Parking: "No",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 350,
    "Additional Services": "Decoration, Event Planning, Security",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Regal Celebrations",
    Location: "Kolkata",
    "Cost per Day (INR)": 170000,
    "Area (sq ft)": 4800,
    "Catering Services": "In-house catering",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 400,
    "Additional Services": "Decoration, Lighting, Sound System",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Serene Haven",
    Location: "Jaipur",
    "Cost per Day (INR)": 140000,
    "Area (sq ft)": 4300,
    "Catering Services": "Outside catering",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 350,
    "Additional Services": "Event Planning, Cleaning, Security",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Tranquil Grove",
    Location: "Goa",
    "Cost per Day (INR)": 250000,
    "Area (sq ft)": 5000,
    "Catering Services": "In-house catering",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 450,
    "Additional Services": "Beachside Venue, Barbecue, Outdoor Activities",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Blissful Meadows",
    Location: "Pune",
    "Cost per Day (INR)": "₹90,000 - ₹2,50,000",
    "Area (sq ft)": 3500,
    "Catering Services": "Yes",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 200,
    "Additional Services": "Camping, Nature Trails, Horse Riding",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Golden Sands",
    Location: "Chennai",
    "Cost per Day (INR)": "₹70,000 - ₹1,80,000",
    "Area (sq ft)": 3000,
    "Catering Services": "Yes",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 150,
    "Additional Services": "Beachfront Venue, Water Sports, Yoga Sessions",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Tranquil Retreat",
    Location: "Hyderabad",
    "Cost per Day (INR)": "₹1,10,000 - ₹3,00,000",
    "Area (sq ft)": 4200,
    "Catering Services": "Yes",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 260,
    "Additional Services": "Spa Services, Indoor Games, Cultural Performances",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Oasis Gardens",
    Location: "Ahmedabad",
    "Cost per Day (INR)": "₹60,000 - ₹1,50,000",
    "Area (sq ft)": 2500,
    "Catering Services": "Yes",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 120,
    "Additional Services": "Garden Venue, BBQ, Dance Floor",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
  {
    "Venue Name": "Pearl Pavilion",
    Location: "Kolkata",
    "Cost per Day (INR)": "₹80,000 - ₹2,00,000",
    "Area (sq ft)": 3200,
    "Catering Services": "Yes",
    Parking: "Yes",
    "AV Equipment": "Available",
    "Wi-Fi": "Yes",
    "Capacity (people)": 180,
    "Additional Services": "Banquet Hall, Stage, Photography",
    img_url:
      "https://primovenues.com/wp-content/uploads/2016/08/glass-garden-event-venue-catering-garden-theme.jpg",
  },
];

const VenueFilter = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/card");
  };
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [filters, setFilters] = useState({
    costRange: [0, 300000],
    location: "",
    parking: "",
    avEquipment: "",
    wifi: "",
  });

  useEffect(() => {
    let filtered = venues;

    // Filter by cost range
    filtered = filtered.filter((ven) => {
      const cost =
        typeof ven["Cost per Day (INR)"] === "string"
          ? parseInt(ven["Cost per Day (INR)"].replace(/[₹,]/g, ""), 10)
          : ven["Cost per Day (INR)"];
      return cost >= filters.costRange[0] && cost <= filters.costRange[1];
    });

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((ven) =>
        ven.Location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by parking
    if (filters.parking) {
      filtered = filtered.filter(
        (ven) => ven.Parking.toLowerCase() === filters.parking.toLowerCase()
      );
    }

    // Filter by AV Equipment
    if (filters.avEquipment) {
      filtered = filtered.filter(
        (ven) =>
          ven["AV Equipment"].toLowerCase() ===
          filters.avEquipment.toLowerCase()
      );
    }

    // Filter by Wi-Fi
    if (filters.wifi) {
      filtered = filtered.filter(
        (ven) => ven["Wi-Fi"].toLowerCase() === filters.wifi.toLowerCase()
      );
    }

    setFilteredVenues(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCostRangeChange = (e) => {
    const { value, name } = e.target;
    const newRange = [...filters.costRange];
    if (name === "minCost") {
      newRange[0] = parseInt(value, 10);
    } else {
      newRange[1] = parseInt(value, 10);
    }
    setFilters((prev) => ({
      ...prev,
      costRange: newRange,
    }));
  };

  return (
    <main>
      <div className="flex justify-center mt-16 mb-16">
        <h1 className="text-3xl ">EVENTS</h1>
      </div>

      <div className=" flex">
        <div className="filter-container px-16 mt-4 mb-16">
          <p className="font-bold text-[1.5rem] mb-8">Filter By </p>
          <div className="flex items-center">
            <label className="whitespace-nowrap">Cost Range:</label>
            <input
              type="number"
              name="minCost"
              value={filters.costRange[0]}
              onChange={handleCostRangeChange}
              min="0"
              className="border p-2 m-2 whitespace-nowrap"
            />

            <input
              type="number"
              name="maxCost"
              value={filters.costRange[1]}
              onChange={handleCostRangeChange}
              max="300000"
              className="border p-2 m-2"
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="border p-2 m-2"
            />
          </div>
          <div>
            <label>Parking:</label>
            <select
              name="parking"
              value={filters.parking}
              onChange={handleFilterChange}
              className="border p-2 m-2"
            >
              <option value="">All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label>AV Equipment:</label>
            <select
              name="avEquipment"
              value={filters.avEquipment}
              onChange={handleFilterChange}
              className="border p-2 m-2"
            >
              <option value="">All</option>
              <option value="available">Available</option>
              <option value="limited">Limited</option>
            </select>
          </div>
          <div>
            <label>Wi-Fi:</label>
            <select
              name="wifi"
              value={filters.wifi}
              onChange={handleFilterChange}
              className="border p-2 m-2"
            >
              <option value="">All</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center ">
          {filteredVenues.map((data, index) => (
            <div
              key={index}
              className="w-[300px] h-[300px] overflow-hidden rounded-lg flex flex-col justify-end transition-transform transform hover:scale-105 hover:bg-gray-300"
              style={{
                backgroundImage: `url(${data["img_url"]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[277px] h-[122px] bg-white rounded-md p-5 space-y-1 m-3 transition-opacity duration-300 opacity-100 hover:opacity-0">
                <div className="flex flex-col justify-center space-y-1">
                  <h1 className="text-[20px] font-poppins">
                    {data["Venue Name"]}
                  </h1>
                  <p className="text-[16px] font-poppins text-gray-400">
                    {data.Location}
                  </p>
                </div>
                <p className="text-[16px] font-poppins text-gray-400">
                  {data["Cost per Day (INR)"]}
                </p>
                <div className="flex justify-end"></div>
              </div>
              <div className="w-[277px] h-[300px] text-gray-500 rounded-md p-4 space-y-1 m-3  absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-white text-left">
                <div className="flex flex-col justify-center space-y-1">
                  <p className="text-[16px] font-poppins">
                    Area : {data["Area (sq ft)"]}
                  </p>
                  <p className="text-[16px] font-poppins ">
                    Catering Services : {data["Catering Services"]}
                  </p>
                </div>
                <p className="text-[16px] font-poppins">
                  Parking : {data.Parking}
                </p>
                <p className="text-[16px] font-poppins">
                  AV Equiment : {data["AV Equipment"]}
                </p>
                <p className="text-[16px] font-poppins">
                  Wi-Fi : {data["Wi-Fi"]}
                </p>
                <p className="text-[16px] font-poppins">
                  Capacity : {data["Capacity (people)"]}
                </p>
                <p className="text-[16px] font-poppins">
                  Additional Services : {data["Additional Services"]}
                </p>
                <button
                  className="font-poppins  w-24 text-[12px] h-7 mt-[1rem] rounded-lg text-white  bg-black"
                  onClick={redirect}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VenueFilter;
