import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderProduct({product}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={product.image} alt={product.name}/>
                <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.price}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderCategory({categories}){
    if(categories){
        return(
            <div className="col-md-5 m-1">
                <h4>Categories</h4>
                {categories.map(categories =><div className="p-2" key={categories.id}>{categories.type}<br/></div>)}
            </div>
        );     
        }
        return <div/>
        
}
function CategoryInfo(props){
    if(props.product){
        return(
            <div className="container">
                <div className="row">
                    <RenderProduct product={props.product}/>
                    <RenderCategory categories={props.product.categories}/>
                </div>
            </div>   
        );
    }
        return <div />
            
        
}



export default CategoryInfo;