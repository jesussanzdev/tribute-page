import React from "react";
import Slider1 from "../images/slider1.jpg";
import Slider2 from "../images/slider2.jpg";
import Slider3 from "../images/slider3.jpg";
import Slider4 from "../images/slider4.jpg";

const Presentation = props => {

    return (
        <section id="presentation">
            <div id="slider">
                <figure>
                    <img src={Slider1} alt="slider1" />
                    <img src={Slider2} alt="slider2"/>
                    <img src={Slider3} alt="slider3"/>
                    <img src={Slider4} alt="slider4"/>
                    <img src={Slider1} alt="slider1"/>
                </figure>
            </div>
        </section>
    );
};

export default Presentation;