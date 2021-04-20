import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent';
import CarouselHeader from './CarouselHeader'
import ProductsList from './ProductsListComponent';
import CategoryInfo from './CategoryInfoComponent';
import { PRODUCTS } from '../shared/product_array';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
      selectedProduct: null,
    };
  }
  onProductSelect(productId){
    this.setState({selectedProduct: productId});
}
  render(){
    return(
      <div>
        <Navbar/>
        <CarouselHeader/>
        <ProductsList products={this.state.products} onClick={productId => this.onProductSelect(productId)}/>
        <CategoryInfo product={this.state.products.filter(product =>product.id===this.state.selectedProduct)[0]}/>
        <Footer/>
      </div>
    )
  }
}


export default Main;