import React from "react";
import Footer from "../componentss/Footer";
import Main from "../componentss/Main";
import Navbar from "../componentss/Navbar";
import Newsletter from "../componentss/Newsletter";
import Post from "../componentss/Post";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Post />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
