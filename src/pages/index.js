import React from "react";
import Layout from '../components/layout';
import Presentation from '../components/presentation';
import Biography from '../components/biography';
import Legacy from '../components/legacy';
import Works from '../components/works';
import Quotes from '../components/quotes';


const index = () => {

    return (
        <Layout>
            <Presentation />
            <Biography Biography="biography"/>
            <Legacy Legacy="legacy" />
            <Quotes Quotes="famous quotes" />
            <Works Works="list of works" />
        </Layout>
    )

}

export default index;