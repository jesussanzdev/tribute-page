import React from "react";
import {Helmet} from "react-helmet";
import Favicon from "../images/favicon.ico";


const Head = props => {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Virginia Woolf</title>
                <link rel="icon" type="image/x-icon" href={Favicon} />
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"/>
            </Helmet>
        </div>
    );
};

export default Head;