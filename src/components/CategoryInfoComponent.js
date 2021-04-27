import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap';

function RenderProduct({product}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={product.image} alt={product.name}/>
                <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.price}</CardText>
                    <CardSubtitle>{product.partnumber}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderCategory({categories}){
    if(categories){
        return(
            <div className="col-md-5 m-1">
                <h4 className="text-white">Categories:</h4>
                {categories.map(categories =><div className="p-2 text-white" key={categories.id}>{categories.type}<br/></div>)}
            </div>
        );     
        }
        return <div/>
        
        
}
function CategoryInfo(props){
    if(props.product){
        return(
            <Jumbotron>
                <div className="container bg-dark mt-5 p-4">
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