import React from "react";
import { Link } from "react-router-dom";
import Button from "./assets/Button";

const NotFound404 = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="container mt-5 text-center ">
        <div className=" d-flex flex-column flex-md-row align-items-center justify-content-center gap-md-5 mb-5">
          <div className="">
            <h1 className="display-1 text-white mb-4">404</h1>
          </div>
         <div className=" d-flex flex-column align-items-center align-items-md-start">
             <h2 className=" text-primary mb-4">Page Not Found</h2>
          <p className="lead text-light">
            The page you are looking for does not exist.
          </p>

          
         </div>
        </div>
        <Button className="">
          <Link
            to="/"
           
          >
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound404;
