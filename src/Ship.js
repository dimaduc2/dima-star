//Phần 1: các Import
import React, { Component } from 'react'

import Sith_Dreadnought_Class from './Ship/Sith Dreadnought-Class (Leviathan).jpg';
import Kappa_Class from './Ship/Kappa-Class (Susanoo).jpg';
import Sith_Infiltrator from './Ship/Sith Infiltrator.jpg';
import Frigate_Class from './Ship/CC-9600 Frigate-Class.jpg';
import Azure_Angel from './Ship/Azure Angel for R4-P22.jpg';
import Delta_7B from './Ship/Delta-7B for R2-D2.jpg';
import Ginivex_Class_Starfighter from './Ship/Ginivex-Class Starfighter.jpg';
import Eta_2_yellow from './Ship/Eta-2 yellow for R2-D2.jpg';
import Eta_2_green from './Ship/Eta-2 green for R2-D2.jpg';

import { Image, Modal, Grid, Button } from 'semantic-ui-react'

import './Ship.css';

const SHIP  = [
  {
    name: 'Sith Dreadnought-Class (Leviathan)',
    image: Sith_Dreadnought_Class
  },
  {
    name: 'Kappa-Class (Susanoo)',
    image: Kappa_Class
  },
  {
    name: 'CC-9600 Frigate-Class',
    image: Frigate_Class
  },
  {
    name: 'Sith Infiltrator (for Dark Maul)',
    image: Sith_Infiltrator
  },
  {
    name: 'Azure Angel with R4-P22 (for Delta-7 Red with R4-P22)',
    image: Azure_Angel
  },
  {
    name: 'Delta-7B with R2-D2',
    image: Delta_7B
  },
  {
    name: 'Eta-2 yellow with R2-D2',
    image: Eta_2_yellow
  },
  {
    name: 'Eta-2 green with R4-P44',
    image: Eta_2_green
  },
  {
    name: 'Ginivex-Class Starfighter (for Asajj)',
    image: Ginivex_Class_Starfighter
  },
]

//import './Compare.css';

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
      this.setState({thongTinAnh: SHIP[this.state.soAnhDangXem-1].image})
      this.setState({soAnhDangXem: this.state.soAnhDangXem-1})
    }
    else{
      alert("không trở lại tiếp được")
    }
  }
  anhTiepTheo = () => {
    if(this.state.soAnhDangXem < SHIP.length-1){
      this.setState({thongTinAnh: SHIP[this.state.soAnhDangXem+1].image})
      this.setState({soAnhDangXem: this.state.soAnhDangXem+1})
    }
    else{
      alert("không thể tiếp theo được")
    }
  }
  phongToRa = (index) => {
    this.setState({thongTinAnh: SHIP[index].image, phongTo: true})
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
        <h1>Anakin's Ship {this.state.soAnhDangXem}</h1>
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
          { SHIP.map( (moiSHIP, index) =>
            <div>{index}
              <Image src={moiSHIP.image} size='medium' onClick={() => this.phongToRa(index)} />
              <br/>
              {moiSHIP.name}
              <br/><br/><br/><br/>
            </div>
            )
          }
        </Grid>
      </div>
    )
  }
}
export default Weapons;