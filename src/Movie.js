//Phần 1: các Import
import Iframe from 'react-iframe';
import React, { Component } from 'react'
import { Dropdown, Grid, Image, Button } from 'semantic-ui-react'
import KyloRenVSDarthVader from './image movie/KYLO REN VS. DARTH VADER IN REAL LIFE.jpg'
import RevanStarWarsFanFilm from './image movie/Revan - Star Wars Fan Film (2015).jpg'
import SkywalkerApprentice from './image movie/SKYWALKER APPRENTICE (2019 Star Wars Fan Film).jpg'
import StarWarsCloneWars2003 from './image movie/Star Wars Clone Wars 2003 Full SS1 - SS2.jpg'

// import './Compare.css';

const danhBaPhimStarWars = [
  {
    key: 'StarWarsCloneWars2003FullSS1SS2',
    value: 0,
    text: 'Star Wars Clone Wars 2003 Full SS1 - SS2',
    ten: "Star Wars Clone Wars 2003 Full SS1 - SS2",
    diaChi: 'https://www.youtube.com/embed/wLdlwZUO5mo',
    picture: StarWarsCloneWars2003,
    anhGioiTieu: "https://img.youtube.com/vi/wLdlwZUO5mo/0.jpg" 
  },

  {
    key: 'StarWarsFanFilm',
    value: 1,
    text: 'Revan - Star Wars Fan Film (2015)',
    ten: "Revan - Star Wars Fan Film (2015)",
    diaChi: 'https://www.youtube.com/embed/-DtvTM1Am4I',
    picture: RevanStarWarsFanFilm,
    anhGioiTieu: "https://img.youtube.com/vi/-DtvTM1Am4I/2.jpg"
  },
  
  {
    key: 'SkywalkerApprentice',
    value: 2,
    text: 'SKYWALKER APPRENTICE (2019 Star Wars Fan Film)',
    ten:  'SKYWALKER APPRENTICE (2019 Star Wars Fan Film)',
    diaChi: 'https://www.youtube.com/embed/7ZfWU-3OL_s',
    picture: SkywalkerApprentice,
    anhGioiTieu: "https://img.youtube.com/vi/7ZfWU-3OL_s/2.jpg"
  },

  {
    key: 'KyloRenVsDarthVaderInRealLife',
    value: 3,
    text: 'KYLO REN VS. DARTH VADER IN REAL LIFE',
    ten: "KYLO REN VS. DARTH VADER IN REAL LIFE",
    diaChi: 'https://www.youtube.com/embed/LVYWkkZCC-Y',
    picture: KyloRenVSDarthVader,
    anhGioiTieu: "https://img.youtube.com/vi/LVYWkkZCC-Y/0.jpg"
  },
]

class Movie extends Component {

  //Phần 2: các State
  state = {
    soPhimDangXem: '',
    soAnhDangXem: '',
    dangXemAnhGioiThieu: false,


    widthPhim: '450px',
    heightPhim: '150px'
  }

  // Phần 3: các Function  
  chonPhim  = (e, {value}) => {
    this.setState({soPhimDangXem: value })
  }


  xemPhim = ( soPhimMoi ) => {
    if (this.state.soPhimDangXem === soPhimMoi) {
      this.setState({soPhimDangXem: ""})
    }
    else {
      // nếu đang xem phim thì cho chống rỗng vào state để phim biến mất
      this.setState({soPhimDangXem: soPhimMoi})
    }
  }

  // hienCuaSo = (tenPhim) => {
  //     alert(tenPhim)
  // }

  hienAnh = ( soAnhMoi ) => {
    this.setState({soAnhDangXem: soAnhMoi})
    this.setState({dangXemAnhGioiThieu: true})
  }

  goiHello = ()=>{
    alert("hello")
  }
  

  phimTo = () => {
    this.setState({widthPhim: '650px'})
    this.setState({heightPhim: '350px'})
  }

  phimNho = () => {
    this.setState({widthPhim: '450px'})
    this.setState({heightPhim: '250px'})
  }


  //4 HTML và Component
  render() {
    const { soPhimDangXem, dangXemAnhGioiThieu, soAnhDangXem, widthPhim, heightPhim } = this.state


    return (
      <div className="Movie">
        <br/><br/><br/><br/><br/>
        <Dropdown
          placeholder='phim Star Wars'
          fluid
          selection
          options={danhBaPhimStarWars}
          onChange={this.chonPhim}
        /><br/><br/>
        
        {soPhimDangXem === ''
          ? null
          : <Iframe  url={danhBaPhimStarWars[soPhimDangXem].diaChi}



          width={widthPhim}
          height={heightPhim}
          
          
          
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>}

        <br/><br/>
        <Button circular icon='search plus' onClick={this.phimTo}></Button>
        <Button circular icon='search minus' onClick={this.phimNho}></Button>
        <br/><br/>

        <p onClick={this.goiHello}>hello</p>

        <br/><br/><br/><br/>


        <Grid columns={4} divided>
          <Grid.Row>
            {danhBaPhimStarWars.map( (moiPhim, index) => <Grid.Column>
              


              {/* <Button onClick={() => this.xemPhim(moiPhim.value)}
                      onClick={() => this.xemPhim(index)}
                color = {soPhimDangXem === index ? "violet" : "purple" }>
                <Image src={dangXemAnhPicture
                  ? moiPhim.picture
                  : moiPhim.anhGioiTieu
                } />
                {moiPhim.ten}
              </Button>  */}
            



              <Button onClick={() => this.xemPhim(index)}
                      onMouseEnter={() => this.hienAnh(index)}
                color = {soPhimDangXem === index ? "violet" : "purple" }>
                <Image src={dangXemAnhGioiThieu && (index === soAnhDangXem)
                  ? danhBaPhimStarWars[index].anhGioiTieu
                  : danhBaPhimStarWars[index].picture
                } />
                {danhBaPhimStarWars[index].ten}
              </Button>

            </Grid.Column> )}

          </Grid.Row>
        </Grid>

      

        {/* {danhBaPhimStarWars.map(
          (moiPhim, index) => 
          <div>
            <h1>{moiPhim.ten}</h1>
            <Iframe url={moiPhim.diaChi}
            width="750px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen />
          </div>
        )} */}
      </div>
    )
  }
}
export default Movie;