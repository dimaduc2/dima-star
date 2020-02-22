//Phần 1: các Import
import React, { Component } from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'
const options = [
  { key: 1, text: 'Jedi', value: 'Jedi' },
  { key: 2, text: 'Grey Jedi', value: 'GreyJedi' },
  { key: 3, text: 'Sith', value: 'Sith' },
]

//import './Compare.css';

class Admin extends Component {

//Phần 2: các State
  state = {
    fullname: '', 
    side: '', 
    imagesStarWars: '', 
  }

//Phần 3: các Function

  choThem = () => {
    const { GREYJEDI, JEDI, SITH } = this.props;
    const { fullname, imagesStarWars, side } = this.state;
    // alert('3423r')
    // GREYJEDI.push('1');
    // JEDI.push('2');
    // SITH.push('3');
    
    if (side === 'Jedi') {
      JEDI.push({name:fullname, image:imagesStarWars})
    }
    else if (side === 'Sith') {
      SITH.push({name:fullname, image:imagesStarWars})
    }
    else if (side === 'GreyJedi') {
      GREYJEDI.push({name:fullname, image:imagesStarWars})
    }
    else {
      alert("Không liên quan đến Side")
    }

    // JEDI.push({name:fullname, image:imagesStarWars})
    // GREYJEDI.push({name:fullname, image:imagesStarWars})
    // SITH.push({name:fullname, image:imagesStarWars})
    this.forceUpdate()
  }

  // xua = () => {
  //   JEDI[].name = fullname
  //   JEDI[].image = imagesStarWars
  // }

  thayDoiSide = (e, { value }) => {
    this.setState({ side: value })
  }
  thayDoiTen = (e, { value }) => {
    this.setState({ fullname: value })
  }
  thayDoiAnh = (e, { value }) => {
    this.setState({ imagesStarWars: value })
  }

  render() {
    const { fullname, side, imagesStarWars } = this.state
    const { GREYJEDI, JEDI, SITH } = this.props;

    return (
      
      <div className="Admin">
        <br/><br/><br/><br/>
        <Form inverted>
          <Form.Dropdown inline label='Sides' 
            clearable 
            options={options}
            selection
            placeholder='Side'
            name='side'
            value={side}
            onChange={this.thayDoiSide}
            />

          {/* <Form.Input inline label='Sides' 
            placeholder='Sides'
            name='side'
            value={side}
            onChange={this.thayDoiSide}
            /> */}

          <Form.Input inline label='Name' 
            placeholder='Fullname'
            name='fullname'
            value={fullname}
            onChange={this.thayDoiTen}
            />

          <Form.Input inline label='Image' 
            placeholder='Image'
            name='image'
            value={imagesStarWars}
            onChange={this.thayDoiAnh}
            />

        </Form>
        <br/>
        <Button onClick={this.choThem} color="blue">Submit </Button>
        <br/>
      </div>
    )
  }
}
export default Admin;