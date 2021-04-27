import React from 'react';
import { Card, CardImgOverlay, CardImg, CardTitle, Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import anitech from './assets/images/slc.jpg';

function RenderFeaturedProduct({featured_product}){
    if({featured_product}){
        return(
            <Card>
                <Link to={`/productlist`}>
                <CardImg className="p-4" top width="100%" src={featured_product.image} alt={featured_product.name}/>
                    <CardImgOverlay>
                        <CardTitle className="d-none d-sm-block text-center">{featured_product.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    return <div />
}

function About(props){
    const Featuredproducts = props.featured_products.map(featured_product=>{
        return(
            <div key={featured_product.id} className="col-sm-4 mb-3">
                <RenderFeaturedProduct featured_product={featured_product}/>
            </div>
        );
    });
    return(
        <Jumbotron className="bg-light jumbo-about">
            <div className="container bg-dark mt-5">
                <div className="row">
                    <div className="col-md-6 sm-4 mt-4">
                        <h2 className="display-4 mt-4 text-white ml-2">About Us</h2>
                        <p className="text-justify text-white ml-2"><span className="font-weight-bold font-italic">Anitech </span>ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus
                            consequatur aut, expedita veniam quae error? Ex cum, nisi,
                            minima quisquam dolorem nulla modi aspernatur beatae aliquid animi accusamus voluptas!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit ea amet,ullam totam
                            nulla id itaque eum accusantium ratione doloribus minima.
                            Beatae aliquid id rerum obcaecati eum? Rerum corrupti eaque, cum vitae fugiat error,
                            consectetur, quia quos fuga praesentium amet molestiae veniam voluptas beatae ipsum.</p><hr />
                            <Button color="/" className="btn btn-warning mb-2 ml-2 text-dark">Learn More...</Button>
                    </div>
                    <div class="col-md-6 align-self-center">
                            <img src={anitech} className="img-fluid border border-dark mt-4 mb-5" alt="Salt Lake City Office"/>
                    </div> 
                </div>
            </div>

            <div className="container bg-dark p-4 mt-4">
                <div className="col bg-danger">
                <h2 className="display-5 mb-3 text-white text-center image-fluid p-2">OUR FEATURED PRODUCTS</h2>
                    <div className="row">
                        {Featuredproducts}  
                    </div>    
                </div>
            </div>
        </Jumbotron>      
          
    );
}

export default About;