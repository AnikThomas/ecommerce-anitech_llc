import React from 'react';
import { Card, CardBody, CardHeader, Media, Jumbotron, Container } from 'reactstrap';

function RenderPartner({partner}){
    if({partner}){
        return(
            <React.Fragment>
                <Media object src={partner.image} alt={"partner.name"} width="100"/>
                <Media body className="ml-5 mb-4"></Media>
            </React.Fragment>
        );
    }
    return <div />
}
function About(props){
    const partners = props.partners.map(partner=>{
        return(
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner}/>
           </Media>
        );
    });
    return(
        <Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="display-4 mt-5">About us</h2>
                        <p className="lead text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus
                            consequatur aut, expedita veniam quae error? Ex cum, nisi,
                            minima quisquam dolorem nulla modi aspernatur beatae aliquid animi accusamus voluptas!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit ea amet,ullam totam
                            nulla id itaque eum accusantium ratione doloribus minima.
                            Beatae aliquid id rerum obcaecati eum? Rerum corrupti eaque, cum vitae fugiat error,
                            consectetur, quia quos fuga praesentium amet molestiae veniam voluptas beatae ipsum.</p><hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-sm-6">
                        <h3 className="mt-2 display-4">Our Mission</h3><hr/>
                        <p className="lead text-justify mb-5 mr-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus
                            consequatur aut, expedita veniam quae error? Ex cum, nisi,
                            minima quisquam dolorem nulla modi aspernatur beatae aliquid animi accusamus voluptas!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit ea amet,ullam totam
                            nulla id itaque eum accusantium ratione doloribus minima.
                            Beatae aliquid id rerum obcaecati eum? Rerum corrupti eaque, cum vitae fugiat error,
                            consectetur, quia quos fuga praesentium amet molestiae veniam voluptas beatae ipsum.</p>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <Card>
                            <CardHeader className="bg-danger text-white"><h3 className="display-5">ANITECH BRANDS</h3></CardHeader>
                            <CardBody>
                                <dl className="row">
                                <dt className="col-6">Fisher</dt>
                                    <dt className="col-6">Keystone</dt>
                                    <dt className="col-6">Masoneilan</dt>
                                    <dt className="col-6">Rosemount</dt>
                                    <dt className="col-6">Ultraflo</dt>
                                    <dt className="col-6">Valtex</dt>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    
                </div>
                <Jumbotron className="jumbo4">
                    <Container>
                        <div className="container">
                            <div className="row mb-0">
                                <div className="col">
                                    <Media>
                                        {partners}
                                    </Media>
                                </div>
                                    
                            </div>
                        </div>
                    </Container>
                </Jumbotron>
                    
                
            </div>
    </Jumbotron>
    );
}

export default About;