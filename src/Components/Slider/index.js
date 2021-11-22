import SlickSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

const Slider = () => {
  const settings = {
    dots: false,
    Arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <SlickSlider {...settings}>
        <div>
          <h3 className="slider-title">A picture is worth a thousand words</h3>
          <p className="slider-content">
            It clearly and beautifully captures your emotions- the joy, the
            laughter, the tears, you name it. Our pride is in offering the best
            shoots as we help you tell your story in photos.
          </p>
          <p>
            <a href="#" className="slider-btn">
              View Gallery
            </a>
          </p>
        </div>
        <div>
          <h3 className="slider-title">
            A picture is worth a thousand words 2
          </h3>
          <p className="slider-content">
            It clearly and beautifully captures your emotions- the joy, the
            laughter, the tears, you name it. Our pride is in offering the best
            shoots as we help you tell your story in photos.
          </p>
          <p>
            <a href="#" className="slider-btn">
              View Gallery
            </a>
          </p>
        </div>
        <div>
          <h3 className="slider-title">
            A picture is worth a thousand words 3{" "}
          </h3>
          <p className="slider-content">
            It clearly and beautifully captures your emotions- the joy, the
            laughter, the tears, you name it. Our pride is in offering the best
            shoots as we help you tell your story in photos.
          </p>
          <p>
            <a href="#" className="slider-btn">
              View Gallery
            </a>
          </p>
        </div>
      </SlickSlider>
    </div>
  );
};

export default Slider;
