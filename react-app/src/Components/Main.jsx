import React, { useState } from 'react';
import '../styles/main.css';
// import Quote from './Quote';
import Clock from './Clock';
// import TimeZone from './TimeZone';
import dayBackground from '../assets/mobile/bg-image-daytime.jpg';
import nightBackground from '../assets/mobile/bg-image-nighttime.jpg';

function Main() {

   const [hour, setHour] = useState(0);

   const getTime = () => {
      let hour = new Date().getHours();
      setHour(hour);
      console.log(hour)
   }

   return (
      <div
         className="background"
         style={
            hour >= 5 && hour < 12
               ? { backgroundImage: `url(${dayBackground})` }
               : hour >= 12 && hour < 24
                  ? { backgroundImage: `url(${nightBackground})` }
                  : { backgroundImage: `url(${nightBackground})` }
         }>
         <Clock hour={hour} />
      </div>
   )
}

export default Main


