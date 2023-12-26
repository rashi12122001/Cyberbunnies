import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/modules";
import { Navigation } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import "./Explore.css";
import "swiper/css";
import 'swiper/css/navigation';
// Import Swiper styles
import "swiper/css";
import profilePic1 from "../../img/NASA-Logo-Large.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Explore = () => {
  const clients = [
    {
      img: profilePic1,
      name: "THE TIMES OF INDIA",
      review:
        "NASA releases space security guide to enhance mission cybers on 26 dec 2023,NASA has unveiled the initial version of its Space Security Best Practices Guide",
      a: <a href="https://timesofindia.indiatimes.com/world/us/nasa-releases-space-security-guide-to-enhance-mission-cybersecurity/articleshow/106280176.cms">Learn more</a>
    },
    {
      img: profilePic2,
      name: "News Today",
      review:
        "Cyber risks are cited as the biggest threat faced by Indian organisations with 38 per cent of respondents feeling highly or extremely exposed to it, says a survey. With this, cybersecurity has jumped two spots from number three to number one on the risk radar when compared to the 2022 Global Risk Survey",
      a: <a href="https://newstodaynet.com/2023/12/26/cyber-risks-biggest-threat-faced-by-indian-organisations-says-survey/">Learn more</a>
    },    {
      img: profilePic3,
      name: "Bussiness Standard India",
      review:
        "New Delhi [India], December 21: Threatcop, a pioneer in people security management category with an exclusive AAPE framework, is proud to announce the launch of , 'People Security,' at the prestigious Annual Information Security Service (AISS) 2023. ",
      a: <a href="https://www.business-standard.com/content/press-releases-ani/threatcop-launches-revolutionary-cybersecurity-guide-at-aiss-2023-123122101061_1.html">Learn more</a>
    },    {
      img: profilePic4,
      name: "THE ECONOMIC TIMES",
      review:
        "UTM and Cybersecurity Malaysia charts path to 2029 with cybersecurity technology roadmap",
      a: <a href="https://ciosea.economictimes.indiatimes.com/news/security/utm-and-cybersecurity-malaysia-charts-path-to-2029-with-cybersecurity-technology-roadmap/106138743">Learn more</a>
    }, 
  ];

  return (
    <div className="t-wrapper" id="testimonial">
        <div className="Heading">News</div>
      <div className="t-heading">
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper 
              pagination={{
                type: 'progressbar',
              }}
        // install Swiper modules
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <h2>{client.name}</h2>
                <span>{client.review}</span>
                <button className="e-button">{client.a}</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Explore;