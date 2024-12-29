import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../constant/router";

const Home = () => {
  return (
    <>
      <div className="main">
        <p>
          Add <span>Url</span> and 2 number then start
        </p>
        <p>
          <Link to={ROUTER.Addition}>/plus</Link>
          <Link to={ROUTER.Subtraction}>/minus</Link>
          <Link to={ROUTER.Multiplication}>/multiply</Link>
          <Link to={ROUTER.Division}>/divide</Link>
        </p>
        <h3>For Example:</h3>
        <p>http://localhost:5173/plus/5/10</p>
        <p>http://localhost:5173/minus/10/5</p>
        <p>http://localhost:5173/divide/49/7</p>
        <p>http://localhost:5173/multiply/5/5</p>
      </div>
    </>
  );
};

export default Home;
