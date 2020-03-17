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
    dangHienAnh: '',  
    dangHienAnh: false, 
    tenPhim: '', 
    MaPhim: '', 
  }

//Phần 3: các Function
  choThemAnh = () => {
    const { GREYJEDI, JEDI, SITH, danhBaPhimStarWars } = this.props;
    const { fullname, imagesStarWars, side } = this.state;
    
// cách 1
    // if (side === 'Jedi') {
    //   if(this.state.fullname === "" || this.state.imagesStarWars === ""){
    //     alert('phải viết đủ 2 ô text')
    //   }
    //   else{
    //     JEDI.push({name:fullname, image:imagesStarWars})
    //   }
    // }
    // else if (side === 'Sith') {
    //   if(this.state.fullname === "" || this.state.imagesStarWars === ""){
    //     alert('phải viết đủ 2 ô text')
    //   }
    //   else{
    //     SITH.push({name:fullname, image:imagesStarWars})
    //   }
    // }
    // else if (side === 'GreyJedi') {
    //   if(this.state.fullname === "" || this.state.imagesStarWars === ""){
    //     alert('phải viết đủ 2 ô text')
    //   }
    //   else{
    //     GREYJEDI.push({name:fullname, image:imagesStarWars})
    //   }
    // }
    // else {
    //   alert("Không liên quan đến Side")
    // }
    
// cách 2
    if(this.state.fullname === "" || this.state.imagesStarWars === "" || this.state.side === ""){
      alert('phải viết đủ 3 ô text')
    }
    else{
      if (side === 'Jedi') {
        JEDI.push({name:fullname, image:imagesStarWars})
      }
      if (side === 'Sith') {
        SITH.push({name:fullname, image:imagesStarWars})
      }
      if (side === 'GreyJedi') {
        GREYJEDI.push({name:fullname, image:imagesStarWars})
      } 
      alert("đã cho thêm")

      this.setState({fullname: ""})
      this.setState({imagesStarWars: ""})
    }
    this.forceUpdate()
  }
  choThemPhim = () => {
    const { tenPhim, MaPhim, anhPhim } = this.state
    const { danhBaPhimStarWars } = this.props;
  
  
    if(tenPhim === "" || MaPhim === ""){
      alert('phải viết trong ô text')
    }
    else{
      this.setState({tenPhim: ""})
      this.setState({MaPhim: ""})
      alert("đã cho thêm")
      danhBaPhimStarWars.push({ten: tenPhim, text: tenPhim, value: danhBaPhimStarWars.length, 
        // picture: anhPhim, 
        
        anhGioiTieu: 'https://img.youtube.com/vi/' + MaPhim + '/3.jpg', 
        picture: 'https://img.youtube.com/vi/' + MaPhim + '/0.jpg', 
        
        diaChi: 'https://www.youtube.com/embed/' + MaPhim})
    }
  }
  
  thayDoiTenPhim = (e, { value }) => {
    this.setState({tenPhim: value})
  }
  thayDoiMaPhim = (e, { value }) => {
    this.setState({MaPhim : value})
  }

  thayDoiSide = (e, { value }) => {
    this.setState({side: value})
  }
  thayDoiTen = (e, { value }) => {
    this.setState({fullname: value})
  }
  thayDoiAnh = (e, { value }) => {
    this.setState({imagesStarWars: value})
  }

  render() {
    const { fullname, side, imagesStarWars, dangHienAnh, themPhim } = this.state
    const { GREYJEDI, JEDI, SITH } = this.props;

    return (
      
      <div className="Admin">
        <br/><br/><br/><br/>
        
        <Button 
        // primary={dangHienAnh===false} 
        color={dangHienAnh===false ? 'red' : 'grey'} 
        onClick={this.thongTinPhim}>thông tin phim</Button>
        <Button 
        // primary={dangHienAnh===true} 
        color={dangHienAnh===true ? 'red' : 'grey'} 
        onClick={this.thongTinAnh}>thông tin ảnh</Button>
        <br/><br/>

        {dangHienAnh === true

          ? <span>
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
                <br/><br/>
              <Button onClick={this.choThemAnh} color="blue">Submit Anh</Button>
            </span>
          : <span>
              tên phim
              <Form.Input inline
                name=''
                value={this.state.tenPhim}
                onChange={this.thayDoiTenPhim}
              />
              <br/>
              mã phim youtube
              <Form.Input inline
                name=''
                value={this.state.MaPhim}
                onChange={this.thayDoiMaPhim}
              />
              <br/><br/>

            <Button onClick={this.choThemPhim} color="blue">Submit Phim</Button>
            </span>
        }

        <br/>
      </div>
    )
  }
}
export default Admin;