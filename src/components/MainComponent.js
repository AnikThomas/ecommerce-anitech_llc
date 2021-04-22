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
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';



class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
      categories: CATEGORIES,
      partners: PARTNERS,
      promotions: PROMOTIONS  
    };
  }
  
  render(){
    const HomePage = () =>{
      return(
        <Home 
        product={this.state.products.filter(product => product.featured)[0]}
        promotion={this.state.promotions.filter(promotion =>promotion.featured)[0]}
        partner={this.state.partners.filter(partner =>partner.featured)[0]}
        />
      );
    }
    const ProductWithId = ({match}) =>{
      return(
        <CategoryInfo product={this.state.products[0]}
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
        <Route exact path='/aboutus' render={()=><About partners={this.state.partners} />} />

        <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}


export default Main;
