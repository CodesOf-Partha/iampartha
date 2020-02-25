import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import {Button, Icon} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Home() {
    return (
        <div>
        <div className='row'>
            <div className='col-lg-6 text-center p-5'>
                <img className="img-fluid"
                    src={
                        require("../Assets/Images/Home/home.png")
                    }/>
            </div>
            <div className='col-lg-6 text-center p-5'>
                <Jumbotron className="mb-0" fluid>
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

                <img className="img-fluid home-gif"
                    src={
                        require("../Assets/Images/Gif/partha_multitasking.gif")
                    }/>
            </div>
        </div>
        </div>
    )
}
