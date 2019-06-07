import React from "react";
import "./layout.css";
import Header from '../components/header';
import Footer from '../components/footer';
import Head from '../components/head';

export default ({ children }) => 
<div>
    <Head />
    <Header/>
    {children}
    <Footer/>
</div>