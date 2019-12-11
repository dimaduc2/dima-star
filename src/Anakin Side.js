//Phần 1: các Import
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Checkbox, Image } from 'semantic-ui-react';

import Anakin_Grey from './Anakin_Grey.jpg';
import Anakin_Skywalker from './Anakin_Skywalker.jpg';
import Anakin_Vader from './Anakin_Vader.jpg';

const tenAnhAnakin = {
  '0' : 'Anakin_Skywalker',
  '1' : 'Anakin_Grey',
  '2' : 'Anakin_Vader'
}

class Anakin_Side extends Component {

  //Phần 2: các State
  
  state = {
    anakinSide: 'Jedi',
    dangXemAnhGi: 0, 

  }
  
  //Phần 3: các Function

  thayDoiAnakin = () => {
    const { anakinSide } = this.state
    if (anakinSide === 'Jedi'){
      this.setState({anakinSide:'Sith'}) 
      this.setState({ dangXemAnhGi: 2 });
    }
    else {
      this.setState({anakinSide:'Jedi'});
      this.setState({ dangXemAnhGi: 0 });
    }
  }

  thanhDieuKhienAnh = (e) => {
    this.setState({ dangXemAnhGi: Number(e.target.value) });
    if(Number(e.target.value) === 0){
      this.setState({anakinSide:'Jedi'})

    }
    else if(Number(e.target.value) === 1){
      this.setState({anakinSide:'Grey-Jedi'})
    }
    else{this.setState({anakinSide:'Sith'})}
  }
  
  // thanhDieuKhienAnh = (e) => {
  //   this.setState({ dangXemAnhGi: Number(e.target.value) });
  // }

  render() {
    const { anakinSide, dangXemAnhGi } = this.state
    return (
      <div className="App">
        <br/><br/><br/>
        <header className="App-header"><p>
          Light Side<Checkbox toggle checked={dangXemAnhGi === 0 ? false : true} onChange={this.thayDoiAnakin} />Dark Side
          <br/>
          <input
            type='range'
            min='0'
            max='2'
            value={dangXemAnhGi}
            onChange={this.thanhDieuKhienAnh} />
          <br/>
          <Image src={anakinSide === 'Jedi'
            ? Anakin_Skywalker
            : anakinSide === 'Sith'
              ?Anakin_Vader
              : Anakin_Grey
          } size='max' />
        </p></header>

        {/* <input
          type='range'
          min='0'
          max='1'
          value={dangXemAnhGi}
          onChange={this.thanhDieuKhienAnh} />
          <Image src={ dangXemAnhGi === 0
            ? Anakin_Skywalker
            : Anakin_Vader}/> */}

        {/* <input
          type='range'
          min='0'
          max='2'
          value={dangXemAnhGi}
          onChange={this.thanhDieuKhienAnh} />
          <Image src={ dangXemAnhGi === 0
            ? Anakin_Skywalker
            : dangXemAnhGi === 1
              ?Anakin_Vader
              : Anakin_Grey}/> */}

      </div>
    )
  }
}
export default Anakin_Side;