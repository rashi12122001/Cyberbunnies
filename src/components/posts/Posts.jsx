import React from 'react'
import './posts.css';
import wink from '../../img/wink_bunny.png';
import heart from '../../img/heart_bunny.png';
import sleepy from '../../img/sleepy_bunny.png';
import bow from '../../img/bow_bunny.png';
import Card from '../card/Card';
function Posts() {
  return (
    <div className="posts">
<div className="heading">
Explore
</div>
<div className="writeup">Look what bunnies are learning about!</div>
<div className="cards">
  <div>
    <Card emoji={heart} 
    heading={'Learn'}
    detail={"Learn about wifi security,hacking,protecting and more"}
    />
  </div>
  {/* sec card */}
  <div style={{left: '22rem'}}>
    <Card emoji={sleepy} 
    heading={'Test'}
    detail={"Test your knowlege by challenging the smartest bunny"}
    />
  </div>
  {/* 3rd card */}
  <div style={{left: '44rem'}}>
    <Card emoji={wink} 
    heading={'Network'}
    detail={"Connect with other bunnies to grow more in the field of Cybersecurity"}
    />
  </div>
</div>
    </div>
  )
}
export default Posts