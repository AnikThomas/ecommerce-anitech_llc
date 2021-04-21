import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../components/assets/images/fisher.png";
import image2 from "../components/assets/images/keystone.png";
import image3 from "../components/assets/images/masoneilan.png";
import image4 from "../components/assets/images/rosemount.png";
import image5 from "../components/assets/images/ultraflo.png";
import image6 from "../components/assets/images/valtex.png";



const brands = [
    {
        img: image1,
        title: 'Dolore magna',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        img: image2,
        title: 'Eget est lorem',
        text: 'Lorem Ipsum adipiscing elit ipsum.'
    },
    {
        img: image3,
        title: 'Tempus imperdiet',
        text: 'Orci porta non pulvinar neque laoreet.'
    },
    {
        img: image4,
        title: 'Mattis rhoncus',
        text: 'Bibendum neque egestas congue quisque.'
    },
    {
        img: image5,
        title: 'Odio ut enim',
        text: 'Mattis rhoncus urna neque viverra justo.'
    },
    {
        img: image6,
        title: 'Odio ut enim',
        text: 'Mattis rhoncus urna neque viverra justo.'     
    }
  ]

  class BrandSlider extends Component {
      render(){
        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '5rem'
        };
        return(
            <Jumbotron Fluid className="jumbo3">
                <h2 className="text-center mb-5 display-4">Our Brands</h2>
                <Slider {... settings}>
                {brands.map((x, i)=>{
                    return (
                        <div key={i} className="img-card">
                            <img className="img" src={x.img} alt={""} style={{width:"100%"}}/>
                        </div>   
                    )      
                })}
                </Slider>
            </Jumbotron>
        );
      }
  }

  

export default BrandSlider;