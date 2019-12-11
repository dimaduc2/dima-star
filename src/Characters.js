//Phần 1: các Import
import React, { Component } from 'react'
import { Image, Grid } from 'semantic-ui-react'

//import './Compare.css';

import Anakin_Vader_Skywalker from './Grey Jedi/Anakin_Vader_Skywalker.jpg';
import Jolee_Bindo from './Grey Jedi/Jolee_Bindo.jpg';
import Revan from './Grey Jedi/Revan.jpg';
import Galen_Marek_Starkiller from './Grey Jedi/Galen_Marek_(Starkiller).jpg';
import Qui_Gon_Jinn from './Grey Jedi/Qui_Gon_Jinn.jpg';

import Anakin_Skywalker from './Jedi/Anakin_Skywalker.jpg';
import Leia_Skywalker from './Jedi/Leia_Skywalker.jpg';
import Luke_Skywalker from './Jedi/Luke_Skywalker.jpg';
import Mara_Jade from './Jedi/Mara_Jade.jpg';
import Ahsoka_Tano from './Jedi/Ahsoka_Tano.jpg';
import Tahl from './Jedi/Tahl.jpg';
import Obi_Wan from './Jedi/Obi-Wan_Kenobi_Jar_Kai.jpg';

import Sith_Padme from './Sith/Sith_Padme.jpg';
import Darth_Vader from './Sith/Darth_Vader.jpg';
import Darth_Maul from './Sith/Darth_Maul.jpg';
import Savage_Opress from './Sith/Savage_Opress.jpg';
import Aasajj_Ventress from './Sith/Aasajj_Ventress.jpg';
import Komari_Vosa from './Sith/Komari_Vosa.jpg';

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
              <Image src={Tahl} size='medium' />
              <br/>
              <p>Tahl</p>
              <br/><br/>
              <Image src={Obi_Wan} size='medium' />
              <br/>
              <p>Obi-Wan Kenobi Jar'Kai</p>
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
              <Image src={Revan} size='medium' />
              <br/>
              <p>Revan</p>
              <br/><br/>
              <Image src={Galen_Marek_Starkiller} size='medium' />
              <br/>
              <p>Galen Marek (Starkiller)</p>
              <br/><br/>
              <Image src={Qui_Gon_Jinn} size='medium' />
              <br/>
              <p>Qui-Gon Jinn</p>
              <br/><br/>
            </Grid.Column>
            <Grid.Column><br/><br/><br/>
              <h1>Sith</h1>
              <Image src={Darth_Vader} size='medium' />
              <br/>
              <p>Darth Vader Sith</p>
              <br/><br/>
              <Image src={Sith_Padme} size='medium' />
              <br/>
              <p>Lady Senior Sith Padme</p>
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
              <Image src={Komari_Vosa} size='medium' />
              <br/>
              <p>Komari Vosa</p>
              <br/><br/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </div>
    )
  }
}
export default Characters;