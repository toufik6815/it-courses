import React from 'react';
import { useState } from 'react';
import coursesList from '../../fakeData/coursesList';
import './Courses.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Courses = () => {
    const data = coursesList;
    const [courses] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    };

    return (
      <div className="container">
        <div className="course-container">
            {
                courses.map(cor => <Product
                    handleAddCourse = {handleAddCourse}
                    course = {cor}
                    ></Product>)
            }
        </div>
        
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Courses;