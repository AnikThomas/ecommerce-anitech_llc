import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import Footer from './FooterComponent';
import ProductsList from './ProductsListComponent';
import CategoryInfo from './CategoryInfoComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PRODUCTS } from '../shared/product_array';
import { CATEGORIES } from '../shared/categories';
import { FEATURED_PRODUCTS } from '../shared/featured_products';



class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
      categories: CATEGORIES,
      featured_products: FEATURED_PRODUCTS  
    };
  }
  
  render(){
    const HomePage = () =>{
      return(
        <Home 
        product={this.state.products.filter(product => product.featured)[0]}
        featured_products={this.state.featured_products.filter(featured_product =>featured_product.featured)[0]}
        />
      );
    }
    const ProductWithId = ({match}) =>{
      return(
        <CategoryInfo product={this.state.products[match.params.productId]}
        categories={this.state.categories.filter(category => category.productId === +match.params.productId)}
        />
      );
    };
    return(
      <div>
        <NavbarComponent/>
        <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/productlist' render={() => <ProductsList products={this.state.products} />} />
        <Route path='/productlist/:productId' component={ProductWithId} />
        <Route exact path='/contactus' component={Contact}/>
        <Route exact path='/aboutus' render={()=><About featured_products={this.state.featured_products} />} />

        <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}


export default Main;
