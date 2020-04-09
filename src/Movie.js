//Phần 1: các Import
import Iframe from 'react-iframe';
import React, { Component } from 'react'
import { Dropdown, Grid, Image, Button } from 'semantic-ui-react'

import './Movie.css';

class Movie extends Component {

  //Phần 2: các State
  state = {
    soPhimDangXem: '',
    soAnhDangXem: '',
    dangXemAnhGioiThieu: false,
    widthPhim: '450px',
    heightPhim: '250px'
  }
  
  // Phần 3: các Function
  chonPhim  = (e, {value}) => {
    this.setState({soPhimDangXem: value })
  }
  xemPhim = (soPhimMoi) => {
    if (this.state.soPhimDangXem === soPhimMoi) {   // nếu đang xem phim đấy rồi thì cho chống rỗng vào state để phim biến mất
      this.setState({soPhimDangXem: ""})
    }
    else {
      this.setState({soPhimDangXem: soPhimMoi})
    }
  }
  xoaBotPhim = (moiPhim, index) => {
    var coXoaPhimHayKhong = window.confirm("có xóa " + moiPhim.ten + " không?");
    if(coXoaPhimHayKhong === true){
      this.setState({soPhimDangXem: ""})
      this.props.danhBaPhimStarWars.splice(index, 1)

      for(var i = index; i < this.props.danhBaPhimStarWars.length; i++){
        this.props.danhBaPhimStarWars[i].value = i
      }

      this.forceUpdate()
    }
  }

  hienAnh = (soAnhMoi) => {
    this.setState({soAnhDangXem: soAnhMoi})
    this.setState({dangXemAnhGioiThieu: true})
  }

  giauAnh = () => {
    this.setState({dangXemAnhGioiThieu: false})
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
    const { danhBaPhimStarWars } = this.props;
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
            
            <Button onClick={()=>this.xoaBotPhim(moiPhim, index)} color="red">X</Button>
              <Button onClick={() => this.xemPhim(index)}
                      onMouseEnter={() => this.hienAnh(index)}
                      onMouseLeave={this.giauAnh}
                color = {soPhimDangXem === index ? "violet" : "purple" }>
                <Image size="massive" src={dangXemAnhGioiThieu && (index === soAnhDangXem)
                  ? danhBaPhimStarWars[index].anhGioiTieu
                  : danhBaPhimStarWars[index].picture
                } />
                {danhBaPhimStarWars[index].ten}
              </Button>

            </Grid.Column> )}

          </Grid.Row>
        </Grid>

        <br/><br/>
        <Button color='red' circular icon='search minus' onClick={this.phimNho} className="nut-phong-nho"></Button>
        <Button color='blue' circular icon='search plus' onClick={this.phimTo} className="nut-phong-to"></Button>
      
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