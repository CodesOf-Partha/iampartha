import React from 'react';
import Navbar from './NavbarDesign';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useCommonContext} from '../Context/CommonContext';
import HomeComponent from '../Components/Home';
import ExperienceComponent from '../Components/Experience';

function App() {
  const { status } = useCommonContext();
  return (
    <div className="App">
      <LinearProgress variant="determinate" value={status} color="secondary" />
      <Navbar />
      <div className='row'>
        <div className='col-lg-12'>
          <HomeComponent />
          <ExperienceComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
