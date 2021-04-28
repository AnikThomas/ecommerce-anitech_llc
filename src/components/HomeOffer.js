import React from 'react';
import { Button, Jumbotron } from 'reactstrap';
import imageEngineer from './assets/images/Anitech_engineers.jpg';
import { Link } from 'react-router-dom';

const HomeOffer = ()=>{
    return(
        <Jumbotron className="jumbo4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h3>Anitech</h3>
                        <p className="lead">Field Engineers Lorem ipsum dolor!<br/>
                        voluptate culpa reiciendis beatae nobis hic similique nesciunt reprehenderit non eum repellat
                        facere id incidunt adipisci tempore ea excepturi<br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aut ipsa facere quibusdam corrupti
                        iure impedit possimus quas optio itaque.</p>
                        <Link to={`/aboutus`}><Button className="btn bg-warning text-dark mb-3 border-dark">Learn more</Button></Link>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <img src={imageEngineer} className="img-fluid" alt={"Anitech Engineers"} />
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

export default HomeOffer;