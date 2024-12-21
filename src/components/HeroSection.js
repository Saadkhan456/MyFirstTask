import React from "react";

const HeroSection = () => {
  return (
    <>
      <section
        className="hero bg-cover bg-center h-auto w-full flex flex-col relative"
        style={{ backgroundImage: `url('../images/herobg0.2.jpeg')` }}
      >
        <div className="container mx-auto text-white flex flex-col justify-start h-96 pt-10 pl-10">
          <h2 className="text-7xl font-serif font-bold">
            Opinionated About Dining
          </h2>
          <p
            className="absolute bottom-20 right-10 text-xl md:text-2xl lg:text-3xl text-right bg-opacity-70 p-4 
            md:bottom-16 md:right-8 sm:bottom-10 sm:right-5 sm:text-base font-serif"
          >
            QAD is where people review counts.
            <br />
            With over 400,000 reviews by more than 10,000 people,
            <p>we are lovers of good cuisine.</p>
          </p>
        </div>

        <div className="image-grid absolute w-full" style={{ bottom: "-6rem" }}>
          <div className="container mx-auto grid grid-cols-5 gap-2 px-10 py-4">
            <div className="image-item relative">
              <img
                src="../images/HeroSlides/desede1911.jpg"
                alt="Desde 1911"
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 flex flex-col justify-center items-center text-white py-2">
                <p className="text-sm font-semibold">Desde 1911</p>
                <p className="text-xs">Madrid, Spain</p>
              </div>
            </div>
            <div className="image-item relative">
              <img
                src="../images/HeroSlides/nickhoney.jpg"
                alt="Nick Honey"
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 flex flex-col justify-center items-center text-white py-2">
                <p className="text-sm font-semibold">Nick Honey</p>
                <p className="text-xs">La Petite, France</p>
              </div>
            </div>
            <div className="image-item relative">
              <img
                src="../images/HeroSlides/rome.jpg.crdownload"
                alt="Rome"
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 flex flex-col justify-center items-center text-white py-2">
                <p className="text-sm font-semibold">Rome</p>
                <p className="text-xs">155 Restaurants</p>
              </div>
            </div>
            <div className="image-item relative">
              <img
                src="../images/HeroSlides/crocco.jpg"
                alt="Cracco"
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 flex flex-col justify-center items-center text-white py-2">
                <p className="text-sm font-semibold">Cracco</p>
                <p className="text-xs">Rome, Italy</p>
              </div>
            </div>
            <div className="image-item relative">
              <img
                src="../images/HeroSlides/andalusia.jpg.crdownload"
                alt="Andalusia"
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 flex flex-col justify-center items-center text-white py-2">
                <p className="text-sm font-semibold">Andalusia</p>
                <p className="text-xs">Andalus, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-section bg-white py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4"></h3>
          <p className="text-lg mb-6"></p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
