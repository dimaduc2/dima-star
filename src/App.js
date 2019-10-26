import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Menu, Image, Dropdown, Checkbox, Icon, Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Gray_Jedi from './Gray_Jedi_(Jedi_&_Sith)_symbol.png';

import Home from './Home';
import Characters from './Characters';
import Weapons from './Weapons';
import About from './About';

import ScrollableAnchor from 'react-scrollable-anchor'

class App extends Component {

  //2 State
  state = {
    dangXemGi: "dangXemHome",
    activeItem: "",
  }

  //3 Function
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  bamHome = () => {
    this.setState({dangXemGi:"dangXemHome", activeItem: "" });
  }

  doimau = () => {
    if (this.state.light_or_dark === true) {
      this.setState({light_or_dark: false});
    }
    else {
      this.setState({light_or_dark: true});
    }
  }

  //4 HTML và Component
  render() {
    const { activeItem, light_or_dark } = this.state    

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App" style={{backgroundColor: light_or_dark ?'white' :'black', color: light_or_dark ?'black' :'white'}}>
          <ScrollableAnchor id={'denTrenCung'}>
            <div></div> 
          </ScrollableAnchor>
          
          <Menu borderless inverted fixed='top'>
            <Menu.Item
              name='home'
              as={Link}
              to="/"
              active={activeItem === 'home'}
              onClick={this.bamHome}
            ><Image src={Gray_Jedi} size='mini' style={{marginRight: '10px'}} />Home
            </Menu.Item>
            
            <Menu.Item
              as={Link}
              to="/Characters"
              name='characters'
              active={activeItem === 'characters'}
              onClick={this.handleItemClick}
            >Characters
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Weapons"
              name='weapons'
              active={activeItem === 'weapons'}
              onClick={this.handleItemClick}
            >Weapons
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/About"
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >About
            </Menu.Item>

            <Dropdown item icon='setting' simple>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name='adjust' />
                  <Checkbox toggle onChange={this.doimau} style={{marginLeft:"5px", marginRight:"5px"}} />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          <Route exact path = "/" component = {Home} />
          <Route path = "/Weapons" component = {Weapons} />
          <Route path = "/Characters" component = {Characters} />
          <Route path = "/About" component = {About} />
          <header className="App-header">
            <img src={Gray_Jedi} className="App-logo" alt="logo" />
            <p>Star Wars</p>
          </header>

          <a href='#denTrenCung' className='nut-bam-len-tren'> <Icon bordered inverted color='teal' name='angle double up' /> </a>

        </div>
      </Router>
    );
  }
}
export default App;