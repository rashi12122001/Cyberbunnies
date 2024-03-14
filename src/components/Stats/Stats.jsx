import React, { useContext } from "react";
import "./Stats.css";
const Stats = () => {

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color:"#9760bb"}}>500+</div>
        <span  style={{color:"rgb(156, 71, 172);"}}>Cyber </span>
        <span>Users</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:"#9760bb"}}>20+</div>
        <span  style={{color:"rgb(156, 71, 172);"}}>Latest </span>
        <span>Courses</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:"#9760bb"}}>4+</div>
        <span  style={{color:"rgb(156, 71, 172);"}}>News </span>
        <span>Letters</span>
      </div>
    </div>
  );
};

export default Stats;