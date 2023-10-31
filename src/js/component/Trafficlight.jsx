import React from 'react';


export default class TrafficeLight extends React.Component {

    constructor () {
        super ();
        this.state = {
            brightLight: null
        }
    }

    render (){

        let redExtraClass = '';
        if(this.state.brightLight =='red') redExtraClass = 'selected';
        
        let yellowExtraClass = '';
        if(this.state.brightLight =='yellow') yellowExtraClass = 'selected';

        let greenExtraClass = '';
        if(this.state.brightLight =='green') greenExtraClass = 'selected';

        return <div>
            <div id ="trafficBox"></div>
            <div id ="container">
                <div className={"red light " + redExtraClass} onClick={()=> this.setState ({brightLight: 'red'})}></div>
                <div className={"yellow light " + yellowExtraClass} onClick={()=> this.setState ({brightLight: 'yellow'})}></div>
                <div className={"green light " + greenExtraClass } onClick={()=> this.setState ({brightLight: 'green'})}></div>
            </div>
        </div>
    }

}