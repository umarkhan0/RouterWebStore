

import React from 'react';
import { Slide , Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import "../App.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Slider = () => {
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><KeyboardArrowLeftIcon  fontSize="large" style={{ fill: '#fff' }}  /></button>,
        nextArrow: <button style={{ ...buttonStyle }}><ChevronRightIcon  fontSize='large'  style={{ fill: '#fff' }}  /></button>
    }
    const images = [
        "https://static.tp-link.com/banner-Wi-Fi-Routers_1471676626825t.jpg",
        "https://blog.bestbuy.ca/wp-content/uploads/2023/10/PXL_20231030_063900739.MP-min.jpg",
        "https://i.insider.com/625831c51ab402001927b0b3?width=1136&format=jpeg",
    ];

   
    return (
        <div className="slide-container">
           
          <Zoom scale={0.4} {...properties}>
            {
              images.map((each, index) => <img key={index} style={{width: "100%" , height: "300px"}} src={each} />)
            }
          </Zoom>
          
        </div>
      )
};

export default Slider; 