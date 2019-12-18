


//Phần 1: các Import
import React, { Component } from 'react'
import './App.css';
import { Grid, Image, Modal } from 'semantic-ui-react';

import Iron_Vader from './Anakin Droid/Iron Vader (for BT-1).jpg';
import ASP_7 from './Anakin Droid/ASP-7 x10 (The Dark Lord of Naboo).jpg';
import G7_68 from './Anakin Droid/G7-68 (The Sith Apprentice) (for 0-0-0 or Triple-Zero).jpg';
import C_3PO from './Anakin Droid/C-3PO (See-Threepio) (call Threepio).jpg';
import Cam from './Anakin Droid/Cam droid (Orbie).jpg';
import HK_7 from './Anakin Droid/HK-47.jpg';
import T3_M4 from './Anakin Droid/T3-M4.jpg';
import T7_O1 from './Anakin Droid/T7-O1.jpg';
import X2_C3 from './Anakin Droid/X2-C3.jpg';
import J9 from './Anakin Droid/J9 (The Dark Lord of Naboo).jpg';
import Model_88 from './Anakin Droid/Model-88 or M88-AD (The Dark Lord of Naboo).jpg';
import PROXY from './Anakin Droid/PROXY.jpg';
import R1_G4 from './Anakin Droid/R1-G4 (The Dark Lord of Naboo).jpg';
import R2_D2 from './Anakin Droid/R2-D2 (Artoo-Detoo) (call Artoo).jpg';
import R4_P22 from './Anakin Droid/R4-P22 (R4-G4).jpg';
import R4_P44 from './Anakin Droid/R4-P44 (Petey).jpg';
import DRK_1 from './Anakin Droid/DRK-1 x3 (Sith Probe Droid SFB).jpg';
import ID_10 from './Anakin Droid/ID10 seeker droid x3.jpg';

const Droid = [
  {
    name: 'HK-7 (for Revan)',
    image: HK_7
  }, 
  {
    name: 'T3-M4 (for Jolee)',
    image: T3_M4
  }, 
  {
    name: 'T7-O1 (for Jolee)',
    image: T7_O1
  }, 
  {
    name: 'X2-C3 (for Jolee)',
    image: X2_C3
  }, 
  {
    name: 'C-3PO',
    image: C_3PO
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
    name: 'R1-G4',
    image: R1_G4
  }, 
  {
    name: 'ASP-7 x10',
    image: ASP_7
  },
  {
    name: 'PROXY',
    image: PROXY
  }, 
  {
    name: 'G7-68 (doctor) (for 0-0-0 or Triple-Zero)',
    image: G7_68
  }, 
  {
    name: 'Iron Vader (for BT-1)',
    image: Iron_Vader
  }, 
  {
    name: 'R2-D2',
    image: R2_D2
  }, 
  {
    name: 'Cam',
    image: Cam
  }, 
  {
    name: 'R4-P44',
    image: R4_P44
  }, 
  {
    name: 'R4-P22',
    image: R4_P22
  }, 
  {
    name: 'DRK-1 x3 (for Dark Maul)',
    image: DRK_1
  },
  {
    name: 'ID10 x3 (for Seventh Sister ID9)',
    image: ID_10
  }
]


class Robot extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Robot" textAlign='center'>
        <p>
          <br/><br/><br/><br/>
          <h1>Anakin's 31 droid</h1>
          <br/>
          <Grid columns={3} divided>
            { Droid.map( (moiRobot, index) =>
              <div>
                <Modal trigger={<Image src={moiRobot.image} size='medium'/>} basic >
                  <Modal.Content>
                    <Image src={moiRobot.image} size='big'/>
                  </Modal.Content>
                </Modal>
                <br/>
                {moiRobot.name}
              </div>
              )
            }
          </Grid>
          <br/>
        </p>
      </div>
    )
  }
}
export default Robot;