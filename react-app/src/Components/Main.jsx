import React from 'react';
import Quote from './Quote';
import Clock from './Clock';
import TimeZone from './TimeZone';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().getHours()
        };
    }

    render() {
        return (
            <>
                <div className={(this.state.time >= 5 && this.state.time < 12) ? 'bg-wrapper__morning' : (this.state.time >= 12 && this.state.time < 18 ? 'bg-wrapper__afternoon' : 'bg-wrapper__evening')}>
                    {this.state.time}
                </div>
            </>
        )
    }
}

export default Main
