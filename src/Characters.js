//Phần 1: các Import
import React, { Component } from 'react'
import { Image, Grid } from 'semantic-ui-react'

//import './Compare.css';


import Anakin_Skywalker from './Anakin_Skywalker.jpg';
import Anakin_Vader_Skywalker from './Anakin_Vader_Skywalker.jpg';
import Darth_Vader from './Darth_Vader.jpg';



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
      <Grid.Column>
        <Image src={Anakin_Skywalker} size='medium' />
        <br/>
        <p>Anakin Skywalker Jedi</p>
        <br/><br/>
      </Grid.Column>
      <Grid.Column>
        <Image src={Anakin_Vader_Skywalker} size='medium' />
        <br/>
        <p>Anakin Vader Skywalker Grey Jedi</p>
        <br/><br/>
      </Grid.Column>
      <Grid.Column>
        <Image src={Darth_Vader} size='medium' />
        <br/>
        <p>Darth Vader Sith</p>
        <br/>
      </Grid.Column>
    </Grid.Row>
  </Grid>


        
      </div>
    )
  }
}
export default Characters;