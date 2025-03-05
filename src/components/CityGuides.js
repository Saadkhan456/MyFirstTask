import React, { useState } from "react";

const guidesData = {
  City: [
    { name: "Roma", img: "./images/1.Roma.jpg" },
    { name: "Barcellona", img: "./images/2.barcellona.webp" },
    { name: "Lisbona", img: "./images/3.Lisbona.jpg" },
    { name: "Santorini", img: "./images/4.Santorini.avif" },
    { name: "Praga", img: "./images/5.Praga.jpg" },
    { name: "Tallinn", img: "./images/6.Tallinn.jpg" },
    { name: "Manchester", img: "./images/7.Manchestar.avif" },
    { name: "Paris", img: "./images/8.Paris.jpg" },
  ],
  Country: [
    { name: "Italy", img: "./images/1.Italy.jpg.crdownload" },
    { name: "Spain", img: "./images/2.Spain.jpg.crdownload" },
    { name: "Portugal", img: "./images/3.Portugal.jpg" },
    { name: "Greece", img: "./images/4.Greece.jpg" },
  ],
};

const CityGuides = () => {
  const [activeTab, setActiveTab] = useState("City");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const dataToDisplay = guidesData[activeTab];

  return (
    <section className="py-8 font-serif">
      <div className="container mx-auto">
        <div className="relative flex justify-between items-center mb-6">
          <div className="relative flex space-x-8 text-xl font-bold">
            <button
              onClick={() => handleTabClick("City")}
              className={`${
                activeTab === "City" ? "text-black" : "text-gray-500"
              }`}
            >
              City Guides
            </button>

            <button
              onClick={() => handleTabClick("Country")}
              className={`${
                activeTab === "Country" ? "text-black" : "text-gray-500"
              }`}
            >
              Country Guides
            </button>

            <div
              className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-300"
              style={{
                width: activeTab === "City" ? "100px" : "150px",
                transform:
                  activeTab === "City" ? "translateX(0)" : "translateX(120px)",
              }}
            ></div>
          </div>
          <button className="text-sm text-gray-600">
            View all our guides <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataToDisplay.map((item, index) => (
            <div key={index} className="relative overflow-hidden shadow-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-lg">{item.name}</p>
                <p className="text-white font-semibold text-sm">
                  100 restaurants
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityGuides;
