import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import Footer from './FooterComponent';
import CarouselHeader from './CarouselHeader'
import ProductsList from './ProductsListComponent';
// import CategoryInfo from './CategoryInfoComponent';
import HomeIcon from './HomeIcons';
import HomeService from './HomeService';
import BrandSlider from './HomeBrandSlider';
import HomeOffer from './HomeOffer';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PRODUCTS } from '../shared/product_array';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
      
    };
  }
  
  render(){
    const HomePage = () =>{
      return(
        <Home />
      );
    }
    return(
      <div>
        <NavbarComponent/>
        <Switch>
        <CarouselHeader/>
        <HomeIcon/>
        <HomeService/>
        <BrandSlider/>
        <HomeOffer/>
        
        <Route path='/home' component={HomePage} />
        <Route exact path='/productlist' render={() => <ProductsList products={this.state.products} />} />
        <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}


export default Main;
