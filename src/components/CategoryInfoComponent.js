import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron, Button } from 'reactstrap';

function RenderProduct({product}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={product.image} alt={product.name}/>
                <CardBody>
                    <CardTitle className="text-center">{product.name}</CardTitle>
                    <CardText className="text-center text-danger font-weight-bold">{product.price}</CardText>
                    <CardSubtitle className="text-center">{product.partnumber}</CardSubtitle>
                    <Button className="bg-danger btn-block mt-2 font-weight-bold"><i class="fa fa-shopping-cart"/> Buy Now</Button>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderCategory({categories}){
    if(categories){
        return(
            <div className="col-md-5 m-1">
                <h4 className="text-white mt-2">Categories:</h4>
                {categories.map(categories =><div className="p-2 text-white" key={categories.id}>{categories.type}<br/></div>)}
            </div>
        );     
        }
        return <div/>
        
        
}
function CategoryInfo(props){
    if(props.product){
        return(
            <Jumbotron className="bg-dark mt-5 p-4">
                <div className="container bg-white p-4">
                    <div className="col bg-danger p-4">
                        <h2 className="display-5 mb-3 text-white text-center image-fluid p-3">PRODUCTS DESCRIPTION</h2>
                            <div className="row bg-dark p-5">
                                <RenderProduct product={props.product}/>
                                <RenderCategory categories={props.categories}/>
                                
                            </div>
                    </div>
                
            </div>   
            </Jumbotron>
            
        );
    }
        return <div />
            
        
}



export default CategoryInfo;