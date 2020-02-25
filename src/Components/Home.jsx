import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import {Button} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Lottie from 'react-lottie';
import multiTasking from '../Assets/Lotties/multiTasking.json';

export default function Home() {
    const multiTaskingAnimation = {
        loop: true,
        autoplay: true,
        animationData: multiTasking,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <div className='row mb-4'>
                <div className='col-lg-6 text-center p-5'>
                    <img className="img-fluid"
                        src={
                            require("../Assets/Images/Home/home.png")
                        }/>
                </div>
                <div className='col-lg-6 text-center p-5'>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1>Parthasarathi RV</h1>
                            <p>Full Stack Developer ( MERN ) @ Springworks Inc<br/>
                                Former Research and Development Intern from IIT - Madras
                            </p>
                            <Button variant="contained" className="btn-purple"
                                endIcon={<ChevronRightIcon/>}>
                                Join for coffee
                            </Button>
                        </Container>
                    </Jumbotron>
                    <div className="home-height"></div>
                    <Lottie options={multiTaskingAnimation}
                        height={250}
                        width={350}/>
                </div>
            </div>
        </div>
    )
}
