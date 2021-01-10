import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sun from '../assets/desktop/icon-sun.svg';
import moon from '../assets/desktop/icon-moon.svg';

const Clock = (props) => {
   let getTime = () => {
      let d = new Date();
      let hr = d.getHours();
      let min = d.getMinutes();

      if (min < 10) {
         min = '0' + min;
      }

      let currentTime = hr + ':' + min;

      return currentTime;
   }

   useEffect(() => {
      axios.get('https://freegeoip.app/')
         .then(res => {
            const locationData = res.data;
            console.log(locationData);
         })
   }, []);

   const [location, setLocation] = useState('');

   return (
      <div className="time">
         <div className="time__greeting-wrapper">
            {
               props.hour >= 5 && props.hour < 12 ? (
                  <div className="time__greeting">
                     <img src={sun} alt="sun" className="time__greeting-icon" />
                     <h3 className="time__greeting-text">Good Morning</h3>
                  </div>
               ) : (
                     <div className="time__greeting">
                        <img src={moon} alt="moon" className="time__greeting-icon" />
                        <h3 className="time__greeting-text">Good Evening</h3>
                     </div>
                  )
            }
         </div>
         <h1 className="time__stamp">{getTime()}</h1>
      </div>
   )
}

export default Clock
