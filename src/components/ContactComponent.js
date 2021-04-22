import React from 'react';
import { Jumbotron } from 'reactstrap';

function Contact(){
    return(
        <Jumbotron className="jumbo5">
            <div className="container">
                <div className="row">
                    <div className="col align-self-center">
                        <h2 className="display-3 text-dark text-center">Contact Us</h2><hr/>
                    </div>
                    <div className="col-md-6 align-items-center">
                        <h5 className="display-5"> Address:</h5>
                        <p>565 S Revere Dr. Suite #300 <br/>
                        Salt Lake City, UT 84119</p><br/>
                        <p>Phone:
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-435-200-1234</a><br/>
                           Email: <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> info@anitech.llc</a></p>
                    </div>
                   
                    
                </div>
            </div>
            
        </Jumbotron>




        
    );
}

export default Contact;