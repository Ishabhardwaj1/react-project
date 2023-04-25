import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Isha",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Tutors" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Tutor</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Maths tutor-Mr.rohit shukla</td>
            <td>2000 per month</td>
            <td>13</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>History tutor-Mr.mohit shukla</td>
            <td>3000 per month</td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>C++ tutor-Mr.Vikas kapoor</td>
            <td>4000 per month</td>
            <td>55</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Python tutor-Mr.naresh</td>
            <td>3000 per month</td>
            <td>29</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>French tutor-Mr.rohit shukla</td>
            <td>1000 per month</td>
            <td>34</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Java tutor-Mr.rohit shukla</td>
            <td>5000 per month</td>
            <td>16</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
