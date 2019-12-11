


//Phần 1: các Import
import React, { Component } from 'react'
import './App.css';
import { Grid, Image } from 'semantic-ui-react';


import ASP_7 from './Anakin Droid/ASP-7 x10 (The Dark Lord of Naboo).jpg';
import Triple_Zero from './Anakin Droid/0-0-0 or Triple-Zero.jpg';
import BT_1 from './Anakin Droid/BT-1.jpg';
import C_3PO from './Anakin Droid/C-3PO (See-Threepio) (call Threepio).jpg';
import Cam from './Anakin Droid/Cam droid (Orbie).jpg';
import HK_7 from './Anakin Droid/HK-47.jpg';
import J9 from './Anakin Droid/J9 (The Dark Lord of Naboo).jpg';
import Model_88 from './Anakin Droid/Model-88 or M88-AD (The Dark Lord of Naboo).jpg';
import PROXY from './Anakin Droid/PROXY.jpg';
import R1_G4 from './Anakin Droid/R1-G4 (The Dark Lord of Naboo).jpg';
import R2_D2 from './Anakin Droid/R2-D2 (Artoo-Detoo) (call Artoo).jpg';
import R4_G4 from './Anakin Droid/R4-G4.jpg';
import R4_P44 from './Anakin Droid/R4-P44 (Petey).jpg';
import DRK_1 from './Anakin Droid/DRK-1 (Sith Probe Droid SFB).jpg';

const Droid = [
  {
    name: 'ASP-7',
    image: ASP_7
  },
  {
    name: 'Triple Zero (0-0-0)',
    image: Triple_Zero
  }, 
  {
    name: 'BT 1',
    image: BT_1
  }, 
  {
    name: 'C-3PO',
    image: C_3PO
  }, 
  {
    name: 'Cam',
    image: Cam
  }, 
  {
    name: 'HK 7',
    image: HK_7
  }, 
  {
    name: 'J9',
    image: J9
  }, 
  {
    name: 'Model 88',
    image: Model_88
  }, 
  {
    name: 'PROXY',
    image: PROXY
  }, 
  {
    name: 'R1-G4',
    image: R1_G4
  }, 
  {
    name: 'R2-D2',
    image: R2_D2
  }, 
  {
    name: 'R4-G4',
    image: R4_G4
  }, 
  {
    name: 'R4-P44',
    image: R4_P44
  }, 
  {
    name: 'DRK-1',
    image: DRK_1
  }
]


class Robot extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Robot" align='center'>
        <p>
          <br/><br/><br/><br/>
          <Grid columns={3} divided>
            { Droid.map( (moiRobot, index) =>
              <Grid.Column>
                <Image src={moiRobot.image} size='medium'/>
                <br/>
                {moiRobot.name}
              </Grid.Column>)
            }
          </Grid>


          
          <br/>
        </p>
        
      </div>
    )
  }
}
export default Robot;