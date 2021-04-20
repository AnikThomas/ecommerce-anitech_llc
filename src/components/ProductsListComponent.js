import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function RenderProductItem({product, onClick}){
    return(
        <Card onClick={()=>onClick(product.id)}>
            <CardImg width="100%" src={product.image} alt={product.name} />
            <CardImgOverlay>
                <CardTitle>{product.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function ProductsList(props) {

        const product = props.products.map(product => {
            return(
                <div key={product.id} className="col-md-5 m-1">
                    <RenderProductItem product={product} onClick={props.onClick}/>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {product}
                </div> 
            </div>
            
        );
    
}

export default ProductsList;