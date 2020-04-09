//Phần 1: các Import
import React, { Component } from 'react'

import LightsaberKrayt from './weapon/Lightsaber Krayt Dragon.jpg';
import Westar34 from './weapon/Westar-34.jpg';
import Westar35 from './weapon/Westar-35.jpg';
import Lightsabers from './weapon/Lightsabers (One Hand or Two Hand).jpg';
import LightsaberDouble from './weapon/Lightsaber Double Bladed.jpg';

import DC_15A from './weapon/DC-15A Blaster Rifle.jpg';
import DC_15S from './weapon/DC-15S Blaster Carbine.jpg';
import DC_17 from './weapon/DC-17 Blaster Pistol.jpg';
import WESTAR_M5 from './weapon/WESTAR-M5 Blaster Rifle.jpg';


import { Image, Modal, Button, Grid } from 'semantic-ui-react'

//import './Compare.css';

const WEAPONS = [
  {
    name: "Lightsaber Krayt Dragon",
    image: LightsaberKrayt
  },
  {
    name: "Westar-34",
    image: Westar34
  },
  {
    name: "Westar-35",
    image: Westar35
  },
  {
    name: "Lightsabers",
    image: Lightsabers
  },
  {
    name: "Lightsaber Double Bladed",
    image: LightsaberDouble
  },
  {
    name: "DC-15A (Clone Trooper)",
    image: DC_15A
  },
  {
    name: "DC-15S (Clone Trooper)",
    image: DC_15S
  },
  {
    name: "DC-17 (Clone Trooper Commander)",
    image: DC_17
  },
  {
    name: "WESTAR-M5 (Clone Trooper ARC)",
    image: WESTAR_M5
  },
]


class Weapons extends Component {

//Phần 2: các State
  state = {
    thongTinAnh: '',
    phongTo: false,
    soAnhDangXem: ''
  }

//Phần 3: các Function

  anhTroVe = () => {
    if(this.state.soAnhDangXem > 0){
      this.setState({thongTinAnh: WEAPONS[this.state.soAnhDangXem-1].image})
      this.setState({soAnhDangXem: this.state.soAnhDangXem-1})
    }
    else{
      alert("không trở lại tiếp được")
    }
  }
  anhTiepTheo = () => {
    if(this.state.soAnhDangXem < WEAPONS.length-1){
      this.setState({thongTinAnh: WEAPONS[this.state.soAnhDangXem+1].image})
      this.setState({soAnhDangXem: this.state.soAnhDangXem+1})
    }
    else{
      alert("không thể tiếp theo được")
    }
  }
  phongToRa = (index) => {
    this.setState({thongTinAnh: WEAPONS[index].image, phongTo: true})
    this.setState({soAnhDangXem: index})
  }
  phongNhoLai = () => {
    this.setState({phongTo: false})
    this.setState({soAnhDangXem: ''})
  }
  render() {
    const { thongTinAnh } = this.state

    return (
      <div className="Weapons" align="center">
        <br/><br/><br/><br/><br/>
        <h1>Anakin's weapons {this.state.soAnhDangXem}</h1>
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
            <Image src={thongTinAnh} size='bigmassive' />  
          </Modal.Content>
        </Modal>

        <Grid columns={3} textAlign="center">
          { WEAPONS.map( (moiWEAPONS, index) =>
            <div>{index}
              <Image src={moiWEAPONS.image} size='medium' onClick={() => this.phongToRa(index)} />
              <br/>
              {moiWEAPONS.name}
              <br/><br/><br/><br/>
            </div>
            )
          }
        </Grid>
        <br/>
      </div>
    )
  }
}
export default Weapons;
