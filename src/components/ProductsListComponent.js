import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Jumbotron} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProductItem({product}){
    return(
        <Card>
            <Link to={`/productlist/${product.id}`}>
                <CardImg className="p-4" top width="100%" src={product.image} alt={product.name} />
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
                <div key={product.id} className="col-sm-4 mb-3">
                    <RenderProductItem product={product}/>
                </div>
            );
        });
        return (
            <Jumbotron fluid className="bg-dark">
                <div className="container text-center mt-4 p-4 bg-white">
                    <div className="col bg-dark p-4">
                    <h2 className="display-4 mb-4 text-white text-center image-fluid">OUR PRODUCTS</h2>
                        <div className="row">
                            {product}
                        </div> 
                    </div>
                </div>
            </Jumbotron>
        );
    
}

export default ProductsList;