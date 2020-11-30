import React from 'react';
// import Quote from './Quote';
import Clock from './Clock';
// import TimeZone from './TimeZone';
import dayBackground from '../assets/mobile/bg-image-daytime.jpg';
import nightBackground from '../assets/mobile/bg-image-nighttime.jpg';

class Main extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         hour: new Date().getHours(),
         time: new Date().toLocaleTimeString(),
      };
   }

   render() {
      return (
         <div className="background"
            style={(this.state.hour >= 5 && this.state.hour < 12) ?
               { backgroundImage: `url(${dayBackground})` } :
               (this.state.hour >= 12 && this.state.hour < 18 ?
                  { backgroundImage: `url(${dayBackground})` } :
                  { backgroundImage: `url(${nightBackground})` })} >

            <Clock hour={this.state.hour} />
         </div>
      )
   }
}

export default Main


