import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  

  const currentUser = {
    id: 1,
    username: "Isha",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">E Commerce Tutors</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      User
                    </Link>
                    <Link className="link" to="/add">
                      Add New User
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
             Programming 
            </Link>
            <Link className="link menuLink" to="/">
              Data science
            </Link>
            <Link className="link menuLink" to="/">
             Psychology 
            </Link>
            <Link className="link menuLink" to="/">
              AI 
            </Link>
            <Link className="link menuLink" to="/">
             Electronics
            </Link>
            <Link className="link menuLink" to="/">
            web Development
            </Link>
            <Link className="link menuLink" to="/">
             Maths
            </Link>
            <Link className="link menuLink" to="/">
              History
            </Link>
            <Link className="link menuLink" to="/">
              Science
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
