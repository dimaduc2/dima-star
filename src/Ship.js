//Phần 1: các Import
import React, { Component } from 'react'

import Sith_Dreadnought_Class from './Ship/Sith Dreadnought-Class (Leviathan).jpg';
import Kappa_Class from './Ship/Kappa-Class (Susanoo).jpg';
import Sith_Infiltrator from './Ship/Sith Infiltrator.jpg';
import Frigate_Class from './Ship/CC-9600 Frigate-Class.jpg';
import Azure_Angel from './Ship/Azure Angel for R4-P22.jpg';
import Delta_7B from './Ship/Delta-7B for R2-D2.jpg';
import Eta_2 from './Ship/Eta-2 for R2-D2.jpg';

import { Image, Modal } from 'semantic-ui-react'

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
    name: 'Sith Infiltrator',
    image: Sith_Infiltrator
  },
  {
    name: 'Azure Angel for R4-P22',
    image: Azure_Angel
  },
  {
    name: 'Delta-7B for R2-D2',
    image: Delta_7B
  },
  {
    name: 'Eta-2 for R2-D2',
    image: Eta_2
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


          <h1>Grey Jedi</h1>
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