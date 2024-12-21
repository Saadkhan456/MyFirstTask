import React from "react";

const BestOfPage = () => {
  const bestOfItems = [
    {
      title: "Best Of Food",
      description: "Best Sushi Restaurant in Italy",
      image: "../images/BestOf/BOfood.jpg!d",
    },
    {
      title: "Best Of City",
      description: "Cinque Terre is the best food",
      image: "../images/BestOf/BOcity.webp",
    },
    {
      title: "Best Of Chefs",
      description: "Best 20 Sushi Restaurants in Italy",
      image: "../images/BestOf/BOchef.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-orange-950 text-white py-8 text-center">
        <h1 className="text-5xl font-serif">OAD Best Of</h1>
      </header>

      {/* Best Of Section */}
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestOfItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:translate-y-[-10px]"
              />

              {/* Blurred Background and Text */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 backdrop-blur-sm p-4">
                <h3 className="text-title text-white font-cursive">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best 2024 Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-4xl font-thin text-left">Best 2024</h3>
            <button className="text-lg text-gray-500 flex items-center space-x-2 px-4 py-2 transform transition duration-300 hover:scale-105">
              <span>View Our List</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex justify-start space-x-4 mb-6">
            <button className="px-4 py-2 bg-gray-200 rounded transform transition duration-300 hover:scale-105">
              Europe
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded transform transition duration-300 hover:scale-105">
              North America
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded transform transition duration-300 hover:scale-105">
              Asia
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex justify-start items-center border-b pb-4 group transition duration-300">
              <span className="text-xl font-thin mr-auto group-hover:font-bold transition duration-300">
                Restaurants
              </span>
              <span className="text-lg font-thin group-hover:font-bold transition duration-300">
                555 →
              </span>
            </div>
            <div className="flex justify-start items-center border-b pb-4 group transition duration-300">
              <span className="text-xl font-thin mr-auto group-hover:font-bold transition duration-300">
                New Restaurants
              </span>
              <span className="text-lg font-thin group-hover:font-bold transition duration-300">
                60 →
              </span>
            </div>
            <div className="flex justify-start items-center border-b pb-4 group transition duration-300">
              <span className="text-xl font-thin mr-auto group-hover:font-bold transition duration-300">
                Local
              </span>
              <span className="text-lg font-thin group-hover:font-bold transition duration-300">
                340 →
              </span>
            </div>
            <div className="flex justify-start items-center border-b pb-4 group transition duration-300">
              <span className="text-xl font-thin mr-auto group-hover:font-bold transition duration-300">
                Casual
              </span>
              <span className="text-lg font-thin group-hover:font-bold transition duration-300">
                120 →
              </span>
            </div>
            <div className="flex justify-start items-center border-b pb-4 group transition duration-300">
              <span className="text-xl font-thin mr-auto group-hover:font-bold transition duration-300">
                Top Eats
              </span>
              <span className="text-lg font-thin group-hover:font-bold transition duration-300">
                98 →
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <h3 className="text-4xl font-thin text-left mb-6">Recently Posted</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="relative group">
            <img
              src="../images/BestOf/post1.jpg"
              alt="Post 1"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">
                Barry (Awarded as Best Chef)
              </p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="../images/BestOf/post2.avif"
              alt="Post 2"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">
                New Burger Sandwich
                <br></br>(launched)
              </p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="../images/BestOf/post3.jpg"
              alt="Post 3"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">New Parking Lot</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="../images/BestOf/post4.webp"
              alt="Post 4"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">
                Now Drive Thru orders
              </p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="../images/BestOf/post5.jpg"
              alt="Post 5"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">
                Online Orders Accepted
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

        .text-title {
          font-family: "Great Vibes", cursive;
          font-size: 2rem; /* Smooth and larger font size for elegance */
          border: 3px solid white;
          padding: 8px;
          display: inline-block;
          border-radius: 4px;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5); /* Subtle shadow */
        }
      `}</style>
    </div>
  );
};

export default BestOfPage;
