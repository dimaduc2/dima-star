//Phần 1: các Import
import React, { Component } from 'react'
import { Image, Grid, Modal, Button } from 'semantic-ui-react'

//import './Compare.css';


class Characters extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function



  render() {
    //const {  } = this.state
    const { GREYJEDI, JEDI, SITH } = this.props;

    return (
      <div className="Characters" align="center">
<br/><br/>
                    
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column><br/><br/><br/>
              <h1>Jedi</h1>
              {JEDI
                ? JEDI.map( (moiJEDI, index) =>
                  <div>
                    <Button onClick={()=>this.props.xoaBotJedi(moiJEDI, index)} color="red">X</Button>
                    <Button onClick={()=>this.props.xuaJedi(moiJEDI, index)} color="green">!</Button>

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
                : null
              }
            </Grid.Column>
            
            <Grid.Column><br/><br/><br/>
              <h1>Grey Jedi</h1>
              {GREYJEDI
                ? GREYJEDI.map( (moiGREYJEDI, index) =>
                  <div>
                    <Button onClick={()=>this.props.xoaBotGreyJedi(moiGREYJEDI, index)} color="red">X</Button>
                    <Button onClick={()=>this.props.xuaGreyJedi(moiGREYJEDI, index)} color="green">!</Button>
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
                : null
              }
            </Grid.Column>



            <Grid.Column><br/><br/><br/>
              <h1>Sith</h1>
              {SITH
                ? SITH.map( (moiSITH, index) =>
                  <div>
                    <Button onClick={()=>this.props.xoaBotSith(moiSITH, index)} color="red">X </Button>
                    <Button onClick={()=>this.props.xuaSith(moiSITH, index)} color="green">!</Button>
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
                : null
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </div>
    )
  }
}
export default Characters;