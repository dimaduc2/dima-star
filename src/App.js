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
import Ship from './Ship';
import Admin from './Admin';
import About from './About';

import ScrollableAnchor from 'react-scrollable-anchor'


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
import Asajj_Ventress from './Sith/Asajj_Ventress.jpg';
import Komari_Vosa from './Sith/Komari_Vosa.jpg';

var GREYJEDI  = [
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

var JEDI  = [ // JEDI là gì? -> 
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

var SITH  = [
  {
    name: 'Darth Vader Sith',
    image: Darth_Vader
  },
  {
    name: 'Lady Padme',
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
    name: 'Asajj Ventress',
    image: Asajj_Ventress
  },
  {
    name: 'Komari Vosa',
    image: Komari_Vosa
  }
]

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

  // xoaBotJedi = (moiJEDI) => {
  //   var coXoaHayKhong = window.confirm("có xóa " + moiJEDI + " không?");
  //   if (coXoaHayKhong === true){
  //     delete JEDI[moiJEDI]
  //     this.forceUpdate()
  //   }
  // }

  // xoaBotGreyJedi = (moiGREYJEDI) => {
  //   var coXoaHayKhong = window.confirm("có xóa " + moiGREYJEDI + " không?");
  //   if (coXoaHayKhong === true){
  //     delete GREYJEDI[moiGREYJEDI]
  //     this.forceUpdate()
  //   }
  // }


  // xoaBotSith = (moiSITH) => {
  //   var coXoaHayKhong = window.confirm("có xóa " + moiSITH + " không?");
  //   if (coXoaHayKhong === true){
  //     delete SITH[moiSITH]
  //     this.forceUpdate()
  //   }
  // }

  
  xoaBotJedi = (moiJEDI, index) => {
    var coXoaHayKhong = window.confirm("có xóa " + moiJEDI.name + " không?");
    if(coXoaHayKhong === true){
      JEDI.splice(index, 1)
      this.forceUpdate()
    }
  }

  xoaBotGreyJedi = (moiGREYJEDI, index) => {
    var coXoaHayKhong = window.confirm("có xóa " + moiGREYJEDI.name + " không?");
    if(coXoaHayKhong === true){
      GREYJEDI.splice(index, 1)
      this.forceUpdate()
    }
  }

  xoaBotSith = (moiSITH, index) => {
    var coXoaHayKhong = window.confirm("có xóa " + moiSITH.name + " không?");
    if(coXoaHayKhong === true){
      SITH.splice(index, 1)
      this.forceUpdate()
    }
  }

  xuaJedi = (moiJEDI, index) => {
    var coXuaAnhHayKhong = window.prompt("co xua Anh " + moiJEDI.image + " không?");
    if(coXuaAnhHayKhong != null){
      // alert('co Xua Anh Jedi')
      JEDI[index].image = coXuaAnhHayKhong
    }
    var coXuaTenHayKhong = window.prompt("co xua ten " + moiJEDI.name + " không?");
    if(coXuaTenHayKhong != null){
      // alert('co Xua Ten Jedi')
      JEDI[index].name = coXuaTenHayKhong
    }
    this.forceUpdate()
  }

  xuaGreyJedi = (moiGREYJEDI, index) => {
    var coXuaAnhHayKhong = window.prompt("có xua Anh " + moiGREYJEDI.image + " không?");
    if(coXuaAnhHayKhong != null){
      // alert('co Xua Anh GreyJedi')
      GREYJEDI[index].image = coXuaAnhHayKhong
    }
    var coXuaTenHayKhong = window.prompt("có xua ten " + moiGREYJEDI.name + " không?");
    if(coXuaTenHayKhong != null){
      // alert('co Xua Ten GreyJedi')
      GREYJEDI[index].name = coXuaTenHayKhong
    }
    this.forceUpdate()
  }

  xuaSith = (moiSITH, index) => {
    var coXuaAnhHayKhong = window.prompt("có xua Anh " + moiSITH.image + " không?");
    if(coXuaAnhHayKhong != null){
      // alert('co Xua Anh Sith')
      SITH[index].image = coXuaAnhHayKhong
    }
    var coXuaTenHayKhong = window.prompt("có xua ten " + moiSITH.name + " không?");
    if(coXuaTenHayKhong != null){
      // alert('co Xua Ten Sith')
      SITH[index].name = coXuaTenHayKhong
    }
    this.forceUpdate()
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
              to="/Ship"
              name='ship'
              // active={activeItem === 'weapons'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'ship'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'ship'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}> 
              {language === 'en'
                ? "Ship"
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
              to="/Admin"
              name='admin'
              // active={activeItem === 'admin'}
              onClick={this.handleItemClick}
              style={{backgroundColor: activeItem !== 'admin'
              ?'transparent'
              :  side === 'sith'
                ? '#b30000'
                : side === 'jedi'
                  ? 'blue'
                  : 'white',
              color: activeItem === 'admin'
              ?'black'
              : side === 'sith'
                ? 'red'
                : side === 'jedi'
                  ? 'blue'
                  : 'white'}}> 
              {language === 'en'
                ? "Admin"
                : "Giới thiệu"
              }
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
          <Route path = "/Ship" component = {Ship} />
          <Route path = "/Characters" render={() => <Characters  GREYJEDI={GREYJEDI} JEDI={JEDI} SITH={SITH} 
                                  xoaBotGreyJedi={this.xoaBotGreyJedi} xoaBotJedi={this.xoaBotJedi} xoaBotSith={this.xoaBotSith}
                                  xuaGreyJedi={this.xuaGreyJedi} xuaJedi={this.xuaJedi} xuaSith={this.xuaSith}
                                  
                                  
                                  
                                  
                                  />} />
          <Route path = "/Movie" component = {Movie} />
          <Route path = "/Comic" component = {Comic} />
          <Route path = "/Anakin_Side" component = {Anakin_Side} />
          <Route path = "/Robot" component = {Robot} />
          <Route path = "/About" component = {About} />
          <Route path = "/Admin" render={() => <Admin GREYJEDI={GREYJEDI} JEDI={JEDI} SITH={SITH} />} />

          <header className="App-header">
            <img src={Gray_Jedi} className="App-logo" alt="logo" />
            <p>Star Wars <br/>{side}</p>
          </header>
          
          <br/><br/>

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