//Phần 1: các Import
import React, { Component } from 'react'
import { Image, Grid } from 'semantic-ui-react'

//import './Compare.css';


import Anakin_Vader_Skywalker from './Anakin_Vader_Skywalker.jpg';
import Jolee_Bindo from './Jolee_Bindo.jpg';

import Anakin_Skywalker from './Anakin_Skywalker.jpg';
import Leia_Skywalker from './Leia_Skywalker.jpg';
import Luke_Skywalker from './Luke_Skywalker.jpg';
import Mara_Jade from './Mara_Jade.jpg';
import Ahsoka_Tano from './Ahsoka_Tano.jpg';
import Qui_Gon_Jinn from './Qui_Gon_Jinn.jpg';

import Darth_Vader from './Darth_Vader.jpg';
import Darth_Maul from './Darth_Maul.jpg';
import Savage_Opress from './Savage_Opress.jpg';
import Aasajj_Ventress from './Aasajj_Ventress.jpg';





class Characters extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Characters" align="center">

<Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column><br/><br/><br/>
        <h1>Jedi</h1>
        <Image src={Anakin_Skywalker} size='medium' />
        <br/>
        <p>Anakin Skywalker Jedi</p>
        <br/><br/>
        <Image src={Leia_Skywalker} size='medium' />
        <br/>
        <p>Leia Skywalker</p>
        <br/><br/>
        <Image src={Luke_Skywalker} size='medium' />
        <br/>
        <p>Luke Skywalker</p>
        <br/><br/>
        <Image src={Mara_Jade} size='medium' />
        <br/>
        <p>Mara Jade</p>
        <br/><br/>
        <Image src={Ahsoka_Tano} size='medium' />
        <br/>
        <p>Ahsoka Tano</p>
        <br/><br/>
        <Image src={Qui_Gon_Jinn} size='medium' />
        <br/>
        <p>Qui-Gon Jinn</p>
        <br/><br/>
      </Grid.Column>
      <Grid.Column><br/><br/><br/>
        <h1>Grey Jedi</h1>
        <Image src={Anakin_Vader_Skywalker} size='medium' />
        <br/>
        <p>Anakin Vader Skywalker Grey Jedi</p>
        <br/><br/>
        <Image src={Jolee_Bindo} size='medium' />
        <br/>
        <p>Jolee Bindo</p>
        <br/><br/>
      </Grid.Column>
      <Grid.Column><br/><br/><br/>
        <h1>Sith</h1>
        <Image src={Darth_Vader} size='medium' />
        <br/>
        <p>Darth Vader Sith</p>
        <br/><br/>
        <Image src={Darth_Maul} size='medium' />
        <br/>
        <p>Darth Maul</p>
        <br/><br/>
        <Image src={Savage_Opress} size='medium' />
        <br/>
        <p>Savage Opress</p>
        <br/><br/>
        <Image src={Aasajj_Ventress} size='medium' />
        <br/>
        <p>Aasajj Ventress</p>
        <br/><br/>
      </Grid.Column>
    </Grid.Row>
  </Grid>














        
      </div>
    )
  }
}
export default Characters;