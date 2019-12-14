//Phần 1: các Import
import React, { Component } from 'react'
import { Image, Grid, Modal, Button } from 'semantic-ui-react'

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
import Siri from './Jedi/Siri_Tachi.jpg';

import Sith_Padme from './Sith/Sith_Padme.jpg';
import Darth_Vader from './Sith/Darth_Vader.jpg';
import Darth_Maul from './Sith/Darth_Maul.jpg';
import Savage_Opress from './Sith/Savage_Opress.jpg';
import Aasajj_Ventress from './Sith/Aasajj_Ventress.jpg';
import Komari_Vosa from './Sith/Komari_Vosa.jpg';

const GREYJEDI  = [
  {
    name: 'Anakin Vader Skywalker Grey Jedi',
    image: Anakin_Vader_Skywalker
  },
  {
    name: 'Jolee Bindo',
    image: Jolee_Bindo
  },
  {
    name: 'Revan',
    image: Revan
  },
  {
    name: 'Galen Marek (Starkiller)',
    image: Galen_Marek_Starkiller
  },
  {
    name: 'Qui-Gon Jinn',
    image: Qui_Gon_Jinn
  },
]

const JEDI  = [
  {
    name: 'Anakin Skywalker',
    image: Anakin_Skywalker
  },
  {
    name: 'Leia Skywalker',
    image: Leia_Skywalker
  },
  {
    name: 'Luke Skywalker',
    image: Luke_Skywalker
  },
  {
    name: 'Mara Jade',
    image: Mara_Jade
  },
  {
    name: 'Ahsoka Tano',
    image: Ahsoka_Tano
  },
  {
    name: 'Tahl',
    image: Tahl
  },
  {
    name: 'Obi-Wan Kenobi',
    image: Obi_Wan
  },
  {
    name: 'Siri Tachi',
    image: Siri
  }
]

const SITH  = [
  {
    name: 'Darth Vader Sith',
    image: Darth_Vader
  },
  {
    name: 'Lady Senior Sith Padme',
    image: Sith_Padme
  },
  {
    name: 'Darth Maul',
    image: Darth_Maul
  },
  {
    name: 'Savage Opress',
    image: Savage_Opress
  },
  {
    name: 'Aasajj Ventress',
    image: Aasajj_Ventress
  },
  {
    name: 'Komari Vosa',
    image: Komari_Vosa
  }
]



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
              { JEDI.map( (moiJEDI, index) =>
                <div>
                  <Modal trigger={<Image src={moiJEDI.image} size='medium'/>} basic >
                    <Modal.Content>
                      <Image src={moiJEDI.image} size='big'/>
                    </Modal.Content>
                  </Modal>
                  <br/>
                  {moiJEDI.name}
                  <br/><br/><br/><br/>
                </div>
                )
              }
            </Grid.Column>
            
            <Grid.Column><br/><br/><br/>
              <h1>Grey Jedi</h1>
              { GREYJEDI.map( (moiGREYJEDI, index) =>
                <div>
                  <Modal trigger={<Image src={moiGREYJEDI.image} size='medium'/>} basic >
                    <Modal.Content>
                      <Image src={moiGREYJEDI.image} size='big'/>
                    </Modal.Content>
                  </Modal>
                  <br/>
                  {moiGREYJEDI.name}
                  <br/><br/><br/><br/>
                </div>
                )
              }
            </Grid.Column>



            <Grid.Column><br/><br/><br/>
              <h1>Sith</h1>
              { SITH.map( (moiSITH, index) =>
                <div>
                  <Modal trigger={<Image src={moiSITH.image} size='medium'/>} basic >
                    <Modal.Content>
                      <Image src={moiSITH.image} size='big'/>
                    </Modal.Content>
                  </Modal>
                  <br/>
                  {moiSITH.name}
                  <br/><br/><br/><br/>
                </div>
                )
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </div>
    )
  }
}
export default Characters;