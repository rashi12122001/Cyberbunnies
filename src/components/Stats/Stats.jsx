import React, { useContext } from "react";
import "./Stats.css";
const Stats = () => {

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color:"#9760bb"}}>5+</div>
        <span  style={{color:"rgb(156, 71, 172);"}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:"#9760bb"}}>20+</div>
        <span  style={{color:"rgb(156, 71, 172);"}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:"#9760bb"}}>5+</div>
        <span  style={{color:"rgb(156, 71, 172);"}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Stats;