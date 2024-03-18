import React from 'react'
import './posts.css';
import { motion } from "framer-motion";
import wink from '../../img/wink_bunny.png';
import heart from '../../img/heart_bunny.png';
import sleepy from '../../img/sleepy_bunny.png';
import bow from '../../img/bow_bunny.png';
import Card from '../card/Card';
function Posts() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
//     <div className="posts" id='#posts'>
// <div className="heading">
// Explore
// </div>
// <div className="writeup">Look what bunnies are learning about!</div>
// <div className="cards">
//   <div className='card_holder'>
//   <motion.div
//           initial={{ left: "25rem" }}
//           whileInView={{ left: "14rem" }}
//           transition={transition}
//         >
//     <Card emoji={heart} 
//     heading={'Learn'}
//     detail={"Learn about wifi security,hacking,protecting and more"}
//     />
//      </motion.div>
//   </div>
//   {/* sec card */}
//   <div style={{left: '22rem'}} className='card_holder'>
//     <Card emoji={sleepy} 
//     heading={'Test'}
//     detail={"Test your knowlege by challenging the smartest bunny"}
//     />
//   </div>
//   {/* 3rd card */}
//   <div style={{left: '44rem'}} className='card_holder'>
//     <Card emoji={wink} 
//     heading={'Network'}
//     detail={"Connect with other bunnies to grow more in the field of Cybersecurity"}
//     />
//   </div>
// </div>
//     </div>




 <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span >Explore</span>
        <spane >
        Look what bunnies are learning about!
        </spane>
        {/* <div className="post-blur"></div> */}
      </div>
      {/* right */}
      <div className="cards post-blur">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={heart}
            heading={"Learn"}
            detail={"Explore about wifi security,hacking,protecting and more"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={sleepy}
            heading={"Compete"}
            detail={"Test your knowlege by challenging the smartest bunny"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={wink}
            heading={"Network"}
            detail={
              "Connect with other bunnies to grow more in the field of Cybersecurity"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
      </div>
    </div>
  ); 
}
export default Posts