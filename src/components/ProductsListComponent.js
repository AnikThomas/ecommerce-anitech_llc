import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProductItem({product}){
    return(
        <Card>
            <Link to={`/productlist/${product.id}`}>
                <CardImg width="100%" src={product.image} alt={product.name} />
                <CardImgOverlay>
                    <CardTitle>{product.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function ProductsList(props) {

        const product = props.products.map(product => {
            return(
                <div key={product.id} className="col-md-5 m-1">
                    <RenderProductItem product={product}/>
                </div>
            );
        });
        return (
            <div className="container product text-center">
                <div className="row">
                    {product}
                </div> 
            </div>
            
        );
    
}

export default ProductsList;