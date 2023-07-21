import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import the Font Awesome CSS file
import "font-awesome/css/font-awesome.min.css";
import styles from "../styles/carousel.module.css";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3000ms (3 seconds)
    // prevArrow: (
    //   <button
    //     onClick={() => sliderRef.current.slickPrev()}
    //     style={{
    //       position: "absolute",
    //       top: "50%",
    //       left: "10px",
    //       zIndex: 1,
    //       transform: "translateY(-50%)",
    //     }}
    //   >
    //     Previous
    //   </button>
    // ),
    // nextArrow: (
    //   <button
    //     onClick={() => sliderRef.current.slickNext()}
    //     style={{
    //       position: "absolute",
    //       top: "50%",
    //       right: "10px",
    //       zIndex: 1,
    //       transform: "translateY(-50%)",
    //     }}
    //   >
    //     Next
    //   </button>
    // ),
  };

  return (
    <div>
      {/* <h2 id={styles.heading}>Movie Carousel</h2> */}
      <Slider {...settings} ref={sliderRef} style={{padding:"10px"}}>
        <div key="image1">
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1689600351621_indarsahanidesktop.jpg"
            alt="Image1"
            style={{ width: "100%", height: "350px" }}
          />
        </div>
        <div key="image2">
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688198088033_motogpdesktop.jpg"
            alt="Image2"
            style={{ width: "100%", height: "350px" }}
          />
        </div>
        <div key="image3">
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688970894022_bigweb.jpg"
            alt="Image3"
            style={{ width: "100%", height: "350px" }}
          />
        </div>

        <div key="image4">
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688363625984_delhitheatredesktop.jpg"
            alt="Image4"
            style={{ width: "100%", height: "350px" }}
          />
        </div>
      </Slider>
      <div className={styles.carousel_buttons}>
        <button onClick={() => sliderRef.current.slickPrev()}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button onClick={() => sliderRef.current.slickNext()}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
