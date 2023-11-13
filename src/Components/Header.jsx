import { useState } from "react";

const Header = () => {
  const [destinationsState, setDestinationsState] = useState(false);
  const [experiencesState, setExperiencesState] = useState(false);
  const [aboutUsState, setAboutUsState] = useState(false);

  const handleDestinationsHover = () => {
    setDestinationsState(true);
    setExperiencesState(false);
    setAboutUsState(false);
  };

  const handleDestinationsLeave = () => {
    setDestinationsState(false);
  };

  const handleExperiencesHover = () => {
    setExperiencesState(true);
    setDestinationsState(false);
    setAboutUsState(false);
  };

  const handleExperiencesLeave = () => {
    setExperiencesState(false);
  };

  const handleAboutUsHover = () => {
    setAboutUsState(true);
    setDestinationsState(false);
    setExperiencesState(false);
  };

  const handleAboutUsLeave = () => {
    setAboutUsState(false);
  };

  return (
    <div className="bg-blue-400 w-full h-20 text-center rounded-lg flex justify-end items-center">
      <ul className="flex justify-end gap-5 mr-[15%]  cursor-pointer relative">
        <div
          onMouseEnter={handleDestinationsHover}
          onMouseLeave={handleDestinationsLeave}
        >
          Destinations
          {destinationsState && (
            <ul className="absolute mt-2 bg-white border w-24 ">
              <li>
                <a href="/Banglore">Bangalore</a>
              </li>
              <li>
                <a href="/Delhi">Delhi</a>
              </li>
            </ul>
          )}
        </div>
        <div
          onMouseEnter={handleExperiencesHover}
          onMouseLeave={handleExperiencesLeave}
        >
          Experiences
          {experiencesState && (
            <ul className="absolute mt-2 bg-white border w-24">
              <li>
                <a href="/weightloss">Weight loss</a>
              </li>
              <li>
                <a href="/Detox">Detox</a>
              </li>
            </ul>
          )}
        </div>
        <div
          onMouseEnter={handleAboutUsHover}
          onMouseLeave={handleAboutUsLeave}
        >
          About Us
          {aboutUsState && (
            <ul className= "absolute mt-2 bg-white border w-auto">
              <li>
                <a href="/weightloss">+919000025852</a>
              </li>
              <li>
                <a href="/Detox">info@retreatesoul.com</a>
              </li>
            </ul>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Header;
