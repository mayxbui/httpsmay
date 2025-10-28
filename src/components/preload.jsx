import React from "react";
import preloader from "../assets/preloader.svg"; 

function Preload(prop) {
  return <div id={prop.load ? "preloader" : "preloader-none"}>
    {
      prop.load && (
        <img 
          src={preloader}
          style={{boxShadow:'none'}}
          alt="Please wait an itty bitty second. Sit back and have a sip of coffee... Loading..."
          className="preloader-img"
        />
      )
    }
  </div>;
}

export default Preload;