import React, { useState } from "react";
import { IoHome } from "react-icons/io5";

// import SimpleBar from "simplebar-react";
// import "simplebar-react/dist/simplebar.min.css";
import DatePickerOne from "./components/DatePicker";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaCity,
  FaFireAlt,
  FaRegSnowflake,
  FaUmbrellaBeach,
  FaUserCircle,
} from "react-icons/fa";
import {
  PiBarn,
  PiCactusFill,
  PiFarm,
  PiIsland,
  PiIslandFill,
  PiWindmill,
} from "react-icons/pi";
import { MdCabin, MdCastle, MdOutlinePool, MdVilla } from "react-icons/md";
import {
  GiCampingTent,
  GiGrapes,
  GiMountainCave,
  GiTreehouse,
} from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { SlStar } from "react-icons/sl";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Login from "./pages/Auth/Login";
import ProfileDropdown from "./components/ProfileDropdown";

const CATEGORY = [
  {
    key: 0,
    icon: <PiIsland size={20} />,
    label: "Islands",
  },
  {
    key: 1,
    icon: <FaRegSnowflake size={20} />,
    label: "Arctic",
  },
  {
    key: 2,
    icon: <PiFarm size={20} />,
    label: "Farms",
  },
  {
    key: 3,
    icon: <MdOutlinePool size={20} />,
    label: "Amazing pools",
  },
  {
    key: 4,
    icon: <GiTreehouse size={20} />,
    label: "Treehouses",
  },
  {
    key: 5,
    icon: <HiHomeModern size={20} />,
    label: "Luxe",
  },
  {
    key: 6,
    icon: <MdVilla size={20} />,
    label: "Mansions",
  },
  {
    key: 7,
    icon: <FaUmbrellaBeach size={20} />,
    label: "Beachfronts",
  },
  {
    key: 8,
    icon: <FaFireAlt size={20} />,
    label: "Trending",
  },
  {
    key: 9,
    icon: <PiIslandFill size={20} />,
    label: "Lakefront",
  },
  {
    key: 10,
    icon: <MdCabin size={20} />,
    label: "Cabins",
  },
  {
    key: 11,
    icon: <MdCastle size={20} />,
    label: "Castle",
  },
  {
    key: 12,
    icon: <GiMountainCave size={20} />,
    label: "Caves",
  },
  {
    key: 13,
    icon: <PiBarn size={20} />,
    label: "Barns",
  },
  {
    key: 14,
    icon: <PiCactusFill size={20} />,
    label: "Desert",
  },
  {
    key: 15,
    icon: <PiWindmill size={20} />,
    label: "Windmill",
  },
  {
    key: 16,
    icon: <GiGrapes size={20} />,
    label: "Wineyard",
  },
  {
    key: 17,
    icon: <GiCampingTent size={20} />,
    label: "Camping",
  },
  {
    key: 18,
    icon: <FaCity size={20} />,
    label: "Top Cities",
  },
];

const PROPERTIES = [
  {
    key: 0,
    imgSrc:
      "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Imereti, Georgia",
    rating: 4.9,
    price: 10731,
  },
  {
    key: 1,
    imgSrc:
      "https://images.pexels.com/photos/1542499/pexels-photo-1542499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Santorini, Greece",
    rating: 4.8,
    price: 15250,
  },
  {
    key: 2,
    imgSrc:
      "https://images.pexels.com/photos/210557/pexels-photo-210557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Malibu, California",
    rating: 4.9,
    price: 20350,
  },
  {
    key: 3,
    imgSrc:
      "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bali, Indonesia",
    rating: 5.0,
    price: 11200,
  },
  {
    key: 4,
    imgSrc:
      "https://images.pexels.com/photos/241693/pexels-photo-241693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Tuscany, Italy",
    rating: 4.7,
    price: 17500,
  },
  {
    key: 5,
    imgSrc:
      "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Capri, Italy",
    rating: 4.9,
    price: 18750,
  },
  {
    key: 6,
    imgSrc:
      "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ibiza, Spain",
    rating: 4.8,
    price: 14100,
  },
  {
    key: 7,
    imgSrc:
      "https://images.pexels.com/photos/708764/pexels-photo-708764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Crete, Greece",
    rating: 4.9,
    price: 16200,
  },
  {
    key: 8,
    imgSrc:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Marrakech, Morocco",
    rating: 4.7,
    price: 11500,
  },
  {
    key: 9,
    imgSrc:
      "https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Phuket, Thailand",
    rating: 5.0,
    price: 9500,
  },
  {
    key: 10,
    imgSrc:
      "https://images.pexels.com/photos/417321/pexels-photo-417321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Santorini, Greece",
    rating: 4.9,
    price: 12850,
  },
  {
    key: 11,
    imgSrc:
      "https://images.pexels.com/photos/544968/pexels-photo-544968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Majorca, Spain",
    rating: 4.8,
    price: 15400,
  },
  {
    key: 12,
    imgSrc:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Mykonos, Greece",
    rating: 5.0,
    price: 13400,
  },
  {
    key: 13,
    imgSrc:
      "https://images.pexels.com/photos/221475/pexels-photo-221475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Amalfi Coast, Italy",
    rating: 4.9,
    price: 16500,
  },
  {
    key: 14,
    imgSrc:
      "https://images.pexels.com/photos/415234/pexels-photo-415234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Palma, Spain",
    rating: 4.8,
    price: 13800,
  },
  {
    key: 15,
    imgSrc:
      "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bora Bora, French Polynesia",
    rating: 5.0,
    price: 20300,
  },
  {
    key: 16,
    imgSrc:
      "https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Dubai, UAE",
    rating: 4.9,
    price: 22100,
  },
  {
    key: 17,
    imgSrc:
      "https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Barbados, Caribbean",
    rating: 4.7,
    price: 16550,
  },
  {
    key: 18,
    imgSrc:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Koh Samui, Thailand",
    rating: 5.0,
    price: 14250,
  },
  {
    key: 19,
    imgSrc:
      "https://images.pexels.com/photos/221528/pexels-photo-221528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Hvar, Croatia",
    rating: 4.9,
    price: 17300,
  },
  {
    key: 20,
    imgSrc:
      "https://images.pexels.com/photos/258192/pexels-photo-258192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Corfu, Greece",
    rating: 4.8,
    price: 13400,
  },
  {
    key: 21,
    imgSrc:
      "https://images.pexels.com/photos/325826/pexels-photo-325826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Zanzibar, Tanzania",
    rating: 5.0,
    price: 16250,
  },
  {
    key: 22,
    imgSrc:
      "https://images.pexels.com/photos/1778123/pexels-photo-1778123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bahamas, Caribbean",
    rating: 4.9,
    price: 19800,
  },
  {
    key: 23,
    imgSrc:
      "https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Puerto Rico, USA",
    rating: 4.7,
    price: 14450,
  },
  {
    key: 24,
    imgSrc:
      "https://images.pexels.com/photos/1382615/pexels-photo-1382615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Cyprus, Europe",
    rating: 4.9,
    price: 12250,
  },
  {
    key: 25,
    imgSrc:
      "https://images.pexels.com/photos/274174/pexels-photo-274174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Goa, India",
    rating: 5.0,
    price: 11500,
  },
  {
    key: 26,
    imgSrc:
      "https://images.pexels.com/photos/1408662/pexels-photo-1408662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Hawaii, USA",
    rating: 4.8,
    price: 21500,
  },
  {
    key: 27,
    imgSrc:
      "https://images.pexels.com/photos/1872200/pexels-photo-1872200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Malé, Maldives",
    rating: 5.0,
    price: 20900,
  },
  {
    key: 28,
    imgSrc:
      "https://images.pexels.com/photos/210196/pexels-photo-210196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Langkawi, Malaysia",
    rating: 4.7,
    price: 18250,
  },
  {
    key: 29,
    imgSrc:
      "https://images.pexels.com/photos/273263/pexels-photo-273263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Seychelles, Africa",
    rating: 4.9,
    price: 20100,
  },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <SimpleBar style={{ height: "100vh" }}>
        <div className="flex flex-col space-y-2">
          {/* Header */}
          <div className="flex flex-row items-center justify-between px-6 py-6 border-b border-stroke">
            <div className="flex flex-row items-center space-x-2">
              <IoHome size={24} className="text-primary" />
              <div className="font-semibold text-xl text-primary">HomeAway</div>
            </div>

            <div className="py-4 px-4 border border-stroke rounded-full shadow-2 flex flex-row items-center space-x-3 divide-x-2 divide-stroke">
              <DatePickerOne placeholder="Check in" />
              <DatePickerOne placeholder="Check out" />

              <div className="bg-primary p-2 rounded-full text-white">
                <IoIosSearch size={28} />
              </div>
            </div>

        {/*  */}
        <ProfileDropdown />
          </div>
          <div className="flex flex-col space-y-4 max-w-screen-xl mx-auto min-w">
            {/* Categories */}
            <SimpleBar style={{ maxWidth: "100%" }}>
              <div className="flex flex-row items-center justify-between space-x-8 px-4 py-2 min-w-min">
                {CATEGORY.map(({ icon, key, label }) => (
                  <div
                    key={key}
                    className="flex flex-col items-center space-y-2"
                  >
                    {icon}
                    <div className="text-xs text-nowrap">{label}</div>
                  </div>
                ))}
              </div>
            </SimpleBar>
            {/* Cards */}
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6  px-6 py-8">
              {PROPERTIES.map(({ imgSrc, key, name, rating, price }) => (
                <div
                  key={key}
                  className="flex flex-col space-y-2 border border-stroke rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={imgSrc}
                    alt={name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex flex-col p-4 space-y-3">
                    <div className="flex flex-row items-center justify-between">
                      <div className="font-semibold text-sm">{name}</div>
                      <div className="flex items-center space-x-1">
                        <SlStar size={16} className="text-yellow-500" />
                        <span className="text-sm">{rating}</span>
                      </div>
                    </div>
                    <div className="font-medium text-primary text-sm">
                      ${price.toLocaleString()} / night
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SimpleBar>
      {open && <Login open={open} handleClose={handleToggle} />}
    </>
  );
}
