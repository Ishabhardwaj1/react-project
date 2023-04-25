import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>Tutor</span> for your learning
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Search "your maths Tutor"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Maths</button>
            <button>History</button>
            <button>Programming</button>
            <button>Science</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Featured;
