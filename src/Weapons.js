//Phần 1: các Import
import React, { Component } from 'react'

import LightsaberKrayt from './Lightsaber Krayt Dragon.jpg';
import Westar34 from './Westar-34.jpg';
import Westar35 from './Westar-35.jpg';
import Lightsabers from './Lightsabers (One Hand or Two Hand).jpg';
import LightsaberDouble from './Lightsaber Double Bladed.jpg';

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
        <br/>
        
      </div>
    )
  }
}
export default Weapons;