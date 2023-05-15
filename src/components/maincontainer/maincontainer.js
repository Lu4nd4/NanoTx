import React from "react";
import './maincontainer.css';
import sony from "../../images/Sony-Logo-white 1.png";
import senheizer from "../../images/sennheiser-logo-white 1.png";
import marshall from "../../images/Marshall-logo-white 1.png";
import pansonic from "../../images/Panasonic-logo-white 2.png";
import tv from "../../images/1249443_20190319_073817 1.png";
import vidEo from "../../images/Untitledvideo2.mp4";

const MainContainer = (props) =>{
    
    return (
    <div className="mainDiv">
        <div className="zindex" style={{position:"sticky", top: 0}}>{props.navbar}</div>

        <video src={vidEo} autoPlay={true} muted loop/>
        
        <div className="mainContainer row">
            <div className="col-6 textpart">
                <h3>Refresh Your</h3>
                <h1>TV EXPERIENCE</h1>
                <div className="row ">
                    <img alt="hello3" src={sony} className="col-3 logopart1"/>
                    <img alt="hello3" src={senheizer} className="col-2 logopart2"/>
                    <img alt="hello3" src={marshall} className="col-3 logopart3"/>
                    <img alt="hello3" src={pansonic} className="col-3 logopart4" />
                   
                </div>
            </div>
            <div className="col-5">
                <img alt="hello" src={tv}/>
            </div>
            
        </div>
        </div>
    )
}

export default MainContainer;