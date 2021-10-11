//*************Created By Rahul Modi*************
import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css";

// import { slides } from "./AcadCarouselData";

const Crousel = (props) => {
  let slides = props.slides;
  const [current, setCurrent] = useState(2);
  const length = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [current, nextSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="Carousel">
      <section className="slider">
        <i className="large angle left icon left-arrow" onClick={prevSlide} />
        {slides.map((img, indx) => {
          return (
            <div
              className={`slide ${indx === current ? "active " : ""}${
                (indx < current && `prevImg${current - indx}`) ||
                (indx > current && `nextImg${indx - current}`) ||
                (indx === current && "currentImg")
              }`}
              key={indx}
            >
              <img src={img.image} alt="travel" className={`Img`} />

              <div className="gradient" />
              {indx === current && (
                <>
                  <p className="img__caption">{img.caption}</p>
                </>
              )}
            </div>
          );
        })}
        <i className="large angle right icon right-arrow" onClick={nextSlide} />
      </section>
      {slides.map((img, indx) => {
        return (
          indx === current && (
            <div key={indx} className="img__descp">
              {/* {img.description} */}
              {/* {props.} */}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Crousel;