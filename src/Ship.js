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

import { Image, Modal, Grid } from 'semantic-ui-react'

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
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Weapons" align="center">
        <br/><br/><br/><br/><br/>
        <h1>Anakin's Ship</h1>
        <br/>
        <Grid columns={3} textAlign="center">
          { SHIP.map( (moiSHIP, index) =>
            <div>
              <Modal trigger={<Image src={moiSHIP.image} size='medium'/>} basic >
                <Modal.Content>
                  <Image src={moiSHIP.image} size='bigmassive'/>
                </Modal.Content>
              </Modal>
              <br/>
              {moiSHIP.name}
              <br/><br/><br/><br/>
            </div>
            )
          }
        </Grid>

        {/* <Image src={Sith_Dreadnought_Class} size='medium' />
        <br/>
        <p>Sith Dreadnought-Class (Leviathan)</p>
        <br/><br/>
        <Image src={Kappa_Class} size='medium' />
        <br/>
        <p>Kappa-Class (Susanoo)</p>
        <br/><br/>
        <Image src={Sith_Infiltrator} size='medium' />
        <br/>
        <p>Sith Infiltrator</p>
        <br/><br/>
        <Image src={Azure_Angel} size='medium' />
        <p>Azure Angel for R4-P22</p>
        <br/><br/>
        <Image src={Delta_7B} size='medium' />
        <p>Delta-7B for R2-D2</p>
        <br/><br/>
        <Image src={Eta_2} size='medium' />
        <p>Eta-2 for R2-D2</p>
        <br/> */}
        
      </div>
    )
  }
}
export default Weapons;