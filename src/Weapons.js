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



import { Image } from 'semantic-ui-react'

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
        <h1>Anakin's weapons</h1>
        <br/>
        <Image src={LightsaberKrayt} size='medium' />
        <br/>
        <p>Lightsaber Krayt Dragon</p>
        <br/><br/>
        <Image src={Westar34} size='medium' />
        <br/>
        <p>Westar-34</p>
        <br/><br/>
        <Image src={Westar35} size='medium' />
        <br/>
        <p>Westar-35</p>
        <br/><br/>
        <Image src={Lightsabers} size='medium' />
        <br/>
        <p>Lightsabers</p>
        <br/><br/>
        <Image src={LightsaberDouble} size='medium' />
        <p>Lightsaber Double Bladed</p>
        <br/><br/>
        <Image src={DC_15A} size='medium' />
        <p>DC-15A (Clone Trooper)</p>
        <br/><br/>
        <Image src={DC_15S} size='medium' />
        <p>DC-15S (Clone Trooper)</p>
        <br/><br/>
        <Image src={DC_17} size='medium' />
        <p>DC-17 (Clone Trooper Commander)</p>
        <br/><br/>
        <Image src={WESTAR_M5} size='medium' />
        <p>WESTAR-M5 (Clone Trooper ARC)</p>
        <br/>
        
      </div>
    )
  }
}
export default Weapons;
