import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderr = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const mainSliderRef = useRef();
  const verticalSliderRef = useRef();
  const [mainItemIndex, setMainItemIndex] = useState(0); // Index of item displayed in the main box

  useEffect(() => {
    if (verticalSliderRef.current) {
      // Synchronize the vertical slider with the main slider
      verticalSliderRef.current.slickGoTo(mainItemIndex);
    }
  }, [mainItemIndex]);

  const mainSliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const verticalSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
  };

  const mainSliderItems = items.slice(mainItemIndex, mainItemIndex + 1);
  const verticalSliderItems = items.filter(
    (item, index) => index !== mainItemIndex
  );

  const goToNextMainItem = () => {
    const newIndex = mainItemIndex === items.length - 1 ? 0 : mainItemIndex + 1;
    setMainItemIndex(newIndex);
    mainSliderRef.current.slickGoTo(newIndex);
  };

  const goToPrevMainItem = () => {
    const newIndex = mainItemIndex === 0 ? items.length - 1 : mainItemIndex - 1;
    setMainItemIndex(newIndex);
    mainSliderRef.current.slickGoTo(newIndex);
  };

  return (
    <div className="flex ">
      {/* Main Slider */}
      <div className="w-1/2 mr-4">
        <div className="relative">
          <Slider ref={mainSliderRef} {...mainSliderSettings}>
            {mainSliderItems.map((item, index) => (
              <div
                key={index}
                className="bg-blue-500 h-40 flex justify-center items-center"
              >
                {item}
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 pb-4">
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={goToPrevMainItem}
            >
              Prev
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={goToNextMainItem}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Vertical Slider */}
      <div className="w-1/2">
        <Slider ref={verticalSliderRef} {...verticalSliderSettings}>
          {verticalSliderItems.map((item, index) => (
            <div
              key={index}
              className="bg-green-500 h-16 flex justify-center items-center"
            >
              {item}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliderr;
