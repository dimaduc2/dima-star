


//Phần 1: các Import
import React, { Component } from 'react'
import './App.css';
import { Grid, Image, Modal, Button } from 'semantic-ui-react';

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
import G8_R3 from './Anakin Droid/G8-R3.jpg';
import R2_B1 from './Anakin Droid/R2-B1.jpg';
import R2_M5 from './Anakin Droid/R2-M5.jpg';
import R2_N3 from './Anakin Droid/R2-N3.jpg';
import R2_R9 from './Anakin Droid/R2-R9.jpg';
import R4_P22 from './Anakin Droid/R4-P22 (R4-G4).jpg';
import R4_P44 from './Anakin Droid/R4-P44 (Petey).jpg';
import DRK_1 from './Anakin Droid/DRK-1 x3 (Sith Probe Droid SFB).jpg';
import ID_10 from './Anakin Droid/ID10 seeker droid x3.jpg';
import IG_Assassin from './Anakin Droid/IG Assassin.jpg';

import './Robot.css';

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
    name: 'G8-R3',
    image: G8_R3
  }, 
  {
    name: 'R2-B1',
    image: R2_B1
  }, 
  {
    name: 'R2-M5',
    image: R2_M5
  }, 
  {
    name: 'R2-N3',
    image: R2_N3
  }, 
  {
    name: 'R2-R9',
    image: R2_R9
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
  },
  {
    name: 'IG Assassin',
    image: IG_Assassin
  }
]


class Robot extends Component {

  //Phần 2: các State
    state = {
      phongTo: false,
      soAnhDangXem: 0
    }

  //Phần 3: các Function
  anhTroVe = () => {
    if(this.state.soAnhDangXem > 0){
      this.setState({thongTinAnh: Droid[this.state.soAnhDangXem-1].image})
      this.setState({soAnhDangXem: this.state.soAnhDangXem-1})
    }
    else{
      alert("không trở lại tiếp được")
    }
  }
  anhTiepTheo = () => {
    if(this.state.soAnhDangXem < Droid.length-1){
      this.setState({thongTinAnh: Droid[this.state.soAnhDangXem+1].image})
      this.setState({soAnhDangXem: this.state.soAnhDangXem+1})
    }
    else{
      alert("không thể tiếp theo được")
    }
  }
  phongToRa = (index) => {
    this.setState({thongTinAnh: Droid[index].image, phongTo: true})
    this.setState({soAnhDangXem: index})
  }
  phongNhoLai = () => {
    this.setState({phongTo: false})
    this.setState({soAnhDangXem: ''})
  }

  render() {
    const { thongTinAnh } = this.state
    return (
      <div className="Robot" textAlign='center' style={{marginLeft: '80px', marginRight: '80px'}}>
        <p>
          <br/><br/><br/><br/>
          <h1>Anakin's 36 droid {this.state.soAnhDangXem}</h1>
          <br/>
          {this.state.phongTo === true
            ? <div>
              <Button circular icon='angle left' onClick={() => this.anhTroVe()} className="nutBamTroVe"></Button>
              <Button circular icon='angle right' onClick={() => this.anhTiepTheo()} className="nutBamTiepTheo"></Button>
              </div>
            : null
          }
          <Modal basic open={this.state.phongTo} onClose={this.phongNhoLai}>
            <Modal.Content align='center'>
              <Image src={thongTinAnh} size='big' />
            </Modal.Content>
          </Modal>
          <Grid columns={3} divided>
            { Droid.map( (moiRobot, index) =>
              <div>{index}
                <Image src={moiRobot.image} size='small' onClick={() => this.phongToRa(index)} />
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