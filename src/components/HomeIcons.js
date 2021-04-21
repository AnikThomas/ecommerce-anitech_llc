import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const HomeIcon = (props)=>{
    return(
        
        <Jumbotron fluid className="jumbo2">
                <Container fluid>
                    <div className="container">
                        <div className="row mb-0">
                            <div className="col-md-4 text-center">
                                <i className="fa fa-cogs fa-5x mb-2"></i>
                                <h3>Quality Products</h3>
                                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, unde perspiciatis.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fa fa-globe fa-5x"></i>
                                <h3>Serve Globally</h3>
                                <p className="lead">Lorem ipsum dolor sit, amet Debitis, unde perspiciatis.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fa fa-certificate fa-5x"></i>
                                <h3>Certificate of Origin</h3>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias blanditiis.</p>
                            </div>
                        </div>
                    </div>
                </Container>
                </Jumbotron>
    )
}

export default HomeIcon;