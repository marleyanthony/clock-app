import React from 'react';
// import Quote from './Quote';
// import Clock from './Clock';
// import TimeZone from './TimeZone';
import dayBackground from '../assets/mobile/bg-image-daytime.jpg';
import nightBackground from '../assets/mobile/bg-image-nighttime.jpg';

class Main extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         time: new Date().getHours()
      };
   }

   render() {
      return (
         <div className="background"
            style={(this.state.time >= 5 && this.state.time < 12) ?
               { backgroundImage: `url(${dayBackground})` } :
               (this.state.time >= 12 && this.state.time < 18 ?
                  { backgroundImage: `url(${nightBackground})` } :
                  { backgroundImage: `url(${dayBackground})` })} >
            {this.state.time}
         </div>
      )
   }
}

export default Main


