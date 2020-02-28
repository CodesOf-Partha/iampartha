import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import Lottie from 'react-lottie';
import animationData from '../Assets/Lotties/hr.json';
import analytics from '../Assets/Lotties/analytics.json';
import {Button} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Experience() {
    const hrAnimation = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const iitmAnimation = {
        loop: true,
        autoplay: true,
        animationData: analytics,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <div className="row pt-0 pr-5 pl-5 pb-5">
                <div className='col-lg-12'>
                    <div className='row mb-5'>
                        <div className='col-lg-12 text-center'>
                            <h1 className='font-oleo'>Experience</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 text-center p-2">
                            <Jumbotron className="mb-0 pt-5" fluid>
                                <Container fluid>
                                    <img className="img-fluid experience-logo-size mb-5"
                                        src={
                                            require("../Assets/Images/Experience/springworks.png")
                                        }
                                        alt=" "/>
                                    <Lottie options={hrAnimation}
                                        height={250}
                                        width={250}/>
                                    <h2 className='font-oleo mt-3'>Full Stack Developer</h2>
                                    <h3>SpringWorks Inc</h3>
                                    <h6>Sep 2019 - Present</h6>
                                    <p>Full Stack Developer Working on MERN Stack<br/>
                                        ( &ensp;<span className="highlight-Letter">M</span>ongoDB &ensp;<span className="highlight-Letter">E</span>xpress.JS &ensp;<span className="highlight-Letter">R</span>eact.js &ensp;<span className="highlight-Letter">N</span>ode.js &ensp;)</p>
                                    <Button variant="contained" className="btn-purple"
                                        endIcon={<ChevronRightIcon/>}>
                                        Checkout our work
                                    </Button>
                                </Container>
                            </Jumbotron>
                        </div>
                        <div className="col-lg-6 text-center p-2">
                            <Jumbotron className="mb-0 pt-5" fluid>
                                <Container fluid>
                                    <img className="img-fluid iitm-logo mb-3"
                                        src={
                                            require("../Assets/Images/Experience/iitm-logo.png")
                                        }
                                        alt=" "/>
                                    <Lottie options={iitmAnimation}
                                        height={200}
                                        width={200}/>
                                    <h2 className='font-oleo mt-5'>Research and Development Intern</h2>
                                    <h3>IIT - Madras</h3>
                                    <h6>Feb 2019 - Aug 2019</h6>
                                    <p>DA & ML<br/>
                                        (&ensp;
                                        <span className="highlight-Letter">D</span>ata &ensp;<span className="highlight-Letter">A</span>nalytics &ensp;&&ensp;
                                        <span className="highlight-Letter">M</span>achine &ensp;<span className="highlight-Letter">L</span>earning &ensp;)</p>
                                    <Button variant="contained" className="btn-purple"
                                        endIcon={<ChevronRightIcon/>}>
                                        Newspaper Coverages
                                    </Button>
                                </Container>
                            </Jumbotron>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
