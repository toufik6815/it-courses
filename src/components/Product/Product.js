import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import './Product.css';
import { Button } from "react-bootstrap";



const Product = (props) => {
    const {img, title, name, price} = props.course;

    return (
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>

        <div className="product-text">
          <h5>{title}</h5>
          <h6>{name}</h6>
          <p>৳ {price}</p>

          <div className="main-btn">
            <Button
              onClick={() => props.handleAddCourse(props.course)}
              variant="success"
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} /> ENROLL NOW
            </Button>
          </div>
        </div>
      </div>
    );
};

export default Product;