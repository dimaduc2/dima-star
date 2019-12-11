import React, { Component } from 'react'
import './App.css';
import { Menu, Image, Dropdown, Checkbox, Icon, Button, Label, Flag } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Gray_Jedi from './Gray_Jedi_(Jedi_&_Sith)_symbol.png';
import Symbol_Jedi from './Symbol Jedi.png';
import Symbol_Sith from './Symbol Sith.png';

import Home from './Home';
import Characters from './Characters';
import Weapons from './Weapons';
import Movie from './Movie';
import Comic from './Comic';
import Anakin_Side from './Anakin Side';
import Robot from './Robot';
import About from './About';

import ScrollableAnchor from 'react-scrollable-anchor'

class App extends Component {

  //2 State
  state = {
    // dangXemGi: "dangXemHome",
    activeItem: "",
    side: 'grey jedi',
    language: 'en'
  }

  //3 Function

  changeSide = (tenMoi) => {
    this.setState({side: tenMoi})
  }

  changeLanguage = (langMoi) => {
    this.setState({language: langMoi})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // bamHome = () => {
  //   this.setState({activeItem: "" });
  // }

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
    const { activeItem, light_or_dark, side, language } = this.state    

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App" style={{backgroundColor: light_or_dark ?'white' :'black', color: light_or_dark ?'black' :'white'}}>
        
          <ScrollableAnchor id={'denTrenCung'}>
            <div></div> 
          </ScrollableAnchor>
          
          <Menu borderless inverted fixed='top' 
            style={{backgroundColor: side === 'sith'
              ? 'black'
              : side === 'jedi'
                ? 'white'
                : 'grey'
            }} >

            <Menu.Item
              name='home'
              as={Link}
              to="/"
              // active={activeItem === 'home'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'home'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'home'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}
              ><Image src={side === 'sith'
                ? Symbol_Sith
                : side === 'jedi'
                  ? Symbol_Jedi
                  : Gray_Jedi
              } size='mini' style={{marginRight: '10px'}} />
              {language === 'en'
                ? "Home"
                : "Trang chủ"
              }
            </Menu.Item>
            
            <Menu.Item
              as={Link}
              to="/Characters"
              name='characters'
              // active={activeItem === 'characters'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'characters'
                ?'transparent'
                :  side === 'sith'
                  ? '#b30000'
                  : side === 'jedi'
                    ? 'blue'
                    : 'white',
                color: activeItem === 'characters'
                ?'black'
                : side === 'sith'
                  ? 'red'
                  : side === 'jedi'
                    ? 'blue'
                    : 'white'}}>
              {language === 'en'
                ? "Characters"
                : "Nhân vật"
              }
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Weapons"
              name='weapons'
              // active={activeItem === 'weapons'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'weapons'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'weapons'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}> 
              {language === 'en'
                ? "Weapons"
                : "Vũ khí"
              }
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Movie"
              name='movie'
              // active={activeItem === 'movie'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'movie'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'movie'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}> 
              {language === 'en'
                ? "Movie"
                : "Phim"
              }
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Comic"
              name='comic'
              // active={activeItem === 'comic'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'comic'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'comic'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}> 
              {language === 'en'
                ? "Comic"
                : "Truyện"
              }
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Anakin_Side"
              name='AnakinSide'
              // active={activeItem === 'AnakinSide'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'AnakinSide'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'AnakinSide'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}>
            </Menu.Item>
            
            <Menu.Item
              as={Link}
              to="/Robot"
              name='anakin hunter bounty droid'
              // active={activeItem === 'anakin hunter bounty droid'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'anakin hunter bounty droid'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'anakin hunter bounty droid'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}>
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/About"
              name='about'
              // active={activeItem === 'about'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'about'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'about'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}> 
              {language === 'en'
                ? "About"
                : "Giới thiệu"
              }
            </Menu.Item>

            <Dropdown item icon='setting' simple
              style={{color: side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name='adjust' />
                  <Checkbox toggle onChange={this.doimau} style={{marginLeft:"5px", marginRight:"5px"}} />
                </Dropdown.Item>

                <Dropdown item text="Side">
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={ () => this.changeSide('sith')}><Label color='red'>Sith</Label>
                      {side === 'sith'
                        ? <Icon name='star' color='red'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeSide('grey jedi')}><Label color='grey'>Grey Jedi</Label>
                      {side === 'grey jedi'
                        ? <Icon name='star' color='grey'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeSide('jedi')}><Label color='blue'>Jedi</Label>
                      {side === 'jedi'
                        ? <Icon name='star' color='blue'/>
                        : null
                      }
                    </Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text="Language">
                  <Dropdown.Menu>
                    
                    <Dropdown.Item onClick={ () => this.changeLanguage('en')}><Flag name='us' />EN
                      {language === 'en'
                        ? <Icon name='check' />
                        : null
                      }
                    </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeLanguage('vn')}><Flag name='vn' />VN
                      {language === 'vn'
                        ? <Icon name='check' />
                        : null
                      }
                    </Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>

              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          <Route exact path = "/" component = {Home} />
          <Route path = "/Weapons" component = {Weapons} />
          <Route path = "/Characters" component = {Characters} />
          <Route path = "/Movie" component = {Movie} />
          <Route path = "/Comic" component = {Comic} />
          <Route path = "/Anakin_Side" component = {Anakin_Side} />
          <Route path = "/Robot" component = {Robot} />
          <Route path = "/About" component = {About} />
          <header className="App-header">
            <img src={Gray_Jedi} className="App-logo" alt="logo" />
            <p>Star Wars <br/>{side}</p>
          </header>
          
          <br/><br/>
          <header className="App-header">
            <img src={Gray_Jedi} className="App-logo-quay-xuoi" alt="Gray_Jedi" />
          </header>

          <a href='#denTrenCung' className='nut-bam-len-tren'> <Icon bordered inverted color='teal' name='angle double up' /> </a>

        </div>
      </Router>
    );
  }
}
export default App;