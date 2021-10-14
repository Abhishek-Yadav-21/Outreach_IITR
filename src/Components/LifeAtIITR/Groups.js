import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./Groups.css";
import { techData } from "./techDetails";

const Groups = () => {
  const [scrollTech, setScrollTech] = useState(0);
  const [scrollCul, setScrollCul] = useState(0);
  const [scrollValTech, setScollValTech] = useState(0);
  const [scrollValCul, setScollValCul] = useState(0);
  const myRef = useRef();
  const culRef = useRef();

  useLayoutEffect(() => {
    function UpdateSize() {
      setScrollTech(myRef.current.scrollWidth - myRef.current.clientWidth);
      setScrollCul(culRef.current.scrollWidth - culRef.current.clientWidth);
    }
    UpdateSize();
  }, []);

  useEffect(() => {
    function size() {
      setScollValTech(myRef.current.scrollLeft);
    }
    size();
    // window.onscroll()
  }, []);

  const handleScrollTech = (e) => {
    setScollValTech(myRef.current.scrollLeft);
  };

  const handleScrollCul = (e) => {
    setScollValCul(culRef.current.scrollLeft);
  };

  return (
    <div className="containerG">
      <h1 id="groupsHeading">Campus Groups</h1>
      <div className="subBoxGroup">
        <h2 id="subheadingGroup">
          Technical
          <input
            type="range"
            name="scroll"
            min="0"
            value={scrollValTech}
            max={scrollTech}
          />
        </h2>
        <div
          className="sliderGroup"
          onScroll={handleScrollTech}
          ref={myRef}
          id="test"
        >
          {techData.map((data, idx) => {
            return (
              <div className="cardG" key={idx}>
                <img src={data.image} alt="" />
                <h6>{data.name}</h6>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="subBoxGroup">
        <h2 id="subheadingGroup">
          Cultural and Social
          <input
            type="range"
            name="scroll"
            min="0"
            value={scrollValCul}
            max={scrollCul}
          />
        </h2>
        <div className="sliderGroup" ref={culRef} onScroll={handleScrollCul}>
          {techData.map((data, idx) => {
            return (
              <div className="cardG" key={idx + 67}>
                <img src={data.image} alt="" />
                <h6>{data.name}</h6>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Groups;