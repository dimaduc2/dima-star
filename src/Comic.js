//Phần 1: các Import
import React, { Component } from 'react'
import './Comic.css';
import { Menu, Icon, Button, Dropdown } from 'semantic-ui-react'

import ScrollableAnchor from 'react-scrollable-anchor'


const chonTruyenStarWars = [
  {
    key: 'AnakinJediPadmeSith',
    text: 'Anakin Jedi Padme Sith',
    value: 'AnakinJediPadmeSith'
  },
  {
    key: 'ChoiceOneGreyJedi',
    text: 'Choice One Grey Jedi',
    value: 'ChoiceOneGreyJedi'
  },
  {
    key: 'AnakinPast',
    text: 'Anakin was brought to the past, from 45 years old to 7 years old',
    value: 'AnakinPast'
  }
];


const danhBaTruyenStarWars = {
  
}

class Comic extends Component {

  //Phần 2: các State
  state = {
    truyen: 'ChoiceOneGreyJedi',
    dangMoMenuTruyen: true
  }

  //Phần 3: các Function
  chonTruyen  = (e, {value}) => {
    this.setState({truyen: value })
  }
  chonTruyenMenu = () => {
    if (this.state.dangMoMenuTruyen === false) {
      this.setState({dangMoMenuTruyen: true});
    }
    else {
      this.setState({dangMoMenuTruyen: false});
    }
  }
  
  render() {
    const { truyen, dangMoMenuTruyen } = this.state

    return (
      <div className="Comic" align="left" >
        <br/><br/><br/><br/><br/><br/>
        <Dropdown
          placeholder='Truyen Star Wars'
          fluid
          selection
          options={chonTruyenStarWars}
          onChange={this.chonTruyen}
        />

        {dangMoMenuTruyen === false
        ? <Menu vertical className="MenuDoc">
            <Menu.Item as='a' href='#OnceUponATime'>
              Once upon a time
            </Menu.Item>

            <Menu.Item as='a' href='#movie1'>
              Movie 1
            </Menu.Item>

            <Menu.Item as='a' href='#movie2'>
              Movie 2
            </Menu.Item>

            <Menu.Item as='a' href='#movieCloneWars2003Volume1'>
              Movie Clone Wars (2003) - Volume 1
            </Menu.Item>

            <Menu.Item as='a' href='#starWarsCloneWarsManga'>
              Star Wars: Clone Wars manga
            </Menu.Item>

            <Menu.Item as='a' href='#starWarsTheCloneWarsMovie2008Unknown'>
              Star Wars The Clone Wars Movie 2008 (Unknown)
            </Menu.Item>

            <Menu.Item as='a' href='#movieStarWarsTheCloneWarsTVSeries2008_2015Unknown'>
              Movie Star Wars: The Clone Wars (TV Series 2008–2015) (Unknown)
            </Menu.Item>

            <Menu.Item as='a' href='#movieCloneWars2003Volume2'>
              Movie Clone Wars (2003) - Volume 2
            </Menu.Item>

            <Menu.Item as='a' href='#movie3'>
              Movie 3
            </Menu.Item>

            <Menu.Item as='a' href='#movie4'>
              Movie 4
            </Menu.Item>

            <Menu.Item as='a' href='#movie5'>
              Movie 5
            </Menu.Item>

            <Menu.Item as='a' href='#movie6'>
              Movie 6
            </Menu.Item>

            <Menu.Item as='a' href='#movie7'>
              Movie 7
            </Menu.Item>

            <Menu.Item as='a' href='#movie8'>
              Movie 8
            </Menu.Item>
          </Menu>
        : null
        }

        {truyen === 'ChoiceOneGreyJedi'
        ? <ChoiceOneGreyJedi />
        : truyen === 'AnakinPast'
          ? <AnakinPast />
          : <AnakinJediPadmeSith />
        }

        <a onClick={this.chonTruyenMenu} href="#ko-dung" className='nut-chon-truyen'> 
        <Icon bordered inverted color='red' name='file alternate' /> 
        </a>

      </div>
    )
  }
}
export default Comic;


const AnakinJediPadmeSith = () => {
  return (
    <div className="Comic-margin">
      <h1>Anakin (Jedi) x Padme (Sith)</h1>
      <Button style={{margin: '5px'}}><a href='#movie1'>Movie 1</a></Button>
      <Button style={{margin: '5px'}}><a href='#movie2'>Movie 2</a></Button>
      <Button style={{margin: '5px'}}><a href='#movieCloneWars2003Volume1'>Movie Clone Wars 2003 Volume1</a></Button>
      <Button style={{margin: '5px'}}><a href='#starWarsCloneWarsManga'>Star Wars Clone Wars Manga</a></Button>
      <Button style={{margin: '5px'}}><a href='#starWarsTheCloneWarsMovie2008Unknown'>Star Wars The Clone Wars Movie 2008 Unknown</a></Button>
      <Button style={{margin: '5px'}}><a href='#movieStarWarsTheCloneWarsTVSeries2008_2015Unknown'>Movie StarWars The CloneWars TV Series 2008-2015 Unknown</a></Button>
      <Button style={{margin: '5px'}}><a href='#movieCloneWars2003Volume2'>Movie CloneWars 2003 Volume 2</a></Button>
      <Button style={{margin: '5px'}}><a href='#movie3'>Movie 3</a></Button>

      <ScrollableAnchor id={'OnceUponATime'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><div><AnakinJediPadmeSith_OnceUponATime /></div><br/><br/><br/>

      <ScrollableAnchor id={'movie1'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_Movie1 /><br/><br/><br/>

      <ScrollableAnchor id={'movie2'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_Movie2 /><br/><br/><br/>

      <ScrollableAnchor id={'movieCloneWars2003Volume1'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_MovieCloneWars2003Volume1/><br/><br/><br/>

      <ScrollableAnchor id={'starWarsCloneWarsManga'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_StarWarsCloneWarsManga/><br/><br/><br/>

      <ScrollableAnchor id={'starWarsTheCloneWarsMovie2008Unknown'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_StarWarsTheCloneWarsMovie2008Unknown/><br/><br/><br/>

      <ScrollableAnchor id={'movieStarWarsTheCloneWarsTVSeries2008_2015Unknown'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_MovieStarWarsTheCloneWarsTVSeries2008_2015Unknown/><br/><br/><br/>

      <ScrollableAnchor id={'movieCloneWars2003Volume2'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_MovieCloneWars2003Volume2/><br/><br/><br/>

      <ScrollableAnchor id={'movie3'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><AnakinJediPadmeSith_Movie3/>
  
    </div>
  )
}




const AnakinPast = () => {
  return (
    <div className="Comic-margin">
      <h1>Anakin was brought to the past, from 45 years old to 7 years old</h1>
      <br/><br/><br/>
      <div><AnakinPast_OnceUponATime /></div>
      <br/><br/><br/>
    </div>
    )
  }




const ChoiceOneGreyJedi = () => {
  return (
    <div className="Comic-margin">
      <h1>Choice One Grey Jedi (Jedi x Sith) for Force</h1>
      <Button style ={{margin: '5px'}}><a href='#movie1'>Movie 1</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movie2'>Movie 2</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movieCloneWars2003Volume1'>Movie Clone Wars 2003 Volume1</a></Button>
      <Button style ={{margin: '5px'}}><a href='#starWarsCloneWarsManga'>Star Wars Clone Wars Manga</a></Button>
      <Button style ={{margin: '5px'}}><a href='#starWarsTheCloneWarsMovie2008Unknown'>Star Wars The Clone Wars Movie 2008 Unknown</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movieStarWarsTheCloneWarsTVSeries2008_2015Unknown'>Movie StarWars The CloneWars TV Series 2008-2015 Unknown</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movieCloneWars2003Volume2'>Movie CloneWars 2003 Volume 2</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movie3'>Movie 3</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movie4'>Movie 4</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movie5'>Movie 5</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movie6'>Movie 6</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movie7'>Movie 7</a></Button>
      <Button style ={{margin: '5px'}}><a href='#movie8'>Movie 8</a></Button>
      
      <ScrollableAnchor id={'OnceUponATime'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><div><ChoiceOneGreyJedi_OnceUponATime /></div><br/><br/><br/>

      <ScrollableAnchor id={'movie1'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie1 /><br/><br/><br/>

      <ScrollableAnchor id={'movie2'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie2 /><br/><br/><br/>

      <ScrollableAnchor id={'movieCloneWars2003Volume1'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><MovieCloneWars2003Volume1/><br/><br/><br/>

      <ScrollableAnchor id={'starWarsCloneWarsManga'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><StarWarsCloneWarsManga/><br/><br/><br/>

      <ScrollableAnchor id={'starWarsTheCloneWarsMovie2008Unknown'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><StarWarsTheCloneWarsMovie2008Unknown/><br/><br/><br/>

      <ScrollableAnchor id={'movieStarWarsTheCloneWarsTVSeries2008_2015Unknown'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><MovieStarWarsTheCloneWarsTVSeries2008_2015Unknown/><br/><br/><br/>

      <ScrollableAnchor id={'movieCloneWars2003Volume2'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><MovieCloneWars2003Volume2/><br/><br/><br/>

      <ScrollableAnchor id={'movie3'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie3/><br/><br/><br/>
      
      <ScrollableAnchor id={'movie4'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie4/><br/><br/><br/>
      
      <ScrollableAnchor id={'movie5'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie5/><br/><br/><br/>
      
      <ScrollableAnchor id={'movie6'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie6/><br/><br/><br/>
      
      <ScrollableAnchor id={'movie7'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie7/><br/><br/><br/>
      
      <ScrollableAnchor id={'movie8'}>
        <div></div> 
      </ScrollableAnchor>
      <br/><br/><br/><br/><Movie8/><br/><br/><br/>
      

    </div>
  )
}

const ChoiceOneGreyJedi_OnceUponATime = () => {
  return (
    <div>
<h1>Once upon a time</h1>
<p> </p>
<p>Từ ngày xưa ở trên trời có thần Force đang nhiều thế giới khác nhau bởi lương lai khác nhau và suy nghĩ, cuối cùng Force đã suy nghĩ chọn người được chọn có thể đi du hành thời gian gồm: Anakin và Padme và Obi-Wan. Sau đó Force cho bóng tối vào 3 người biến Anakin thành Sith tên là Lord Darth Vader và biến Padme thành Sith tên là Lady Darth Mirayya (trong truyện fanfiction tên là Darth Padme and the Clones of Kamino) và biến Obi-Wan thành Dark Jedi tên là Lord Darth Rego (trong truyện fanfiction tên là Lord and Master) thì 3 người mà Force đã chọn trở thành Gray Jedi và kết hợp 2 tên ban đầu và tên của bóng tối là: Lord Anakin Vader Skywalker và Lady Padme Mirayya Amidala và Lord Obi-Wan Rego Kenobi.</p>
<p>1 hôm ở hành tinh Nar Shaddaa cậu Anakin 7 tuổi là nô lệ của zabrak cho đến khi cậu Anakin tìm thấy kiếm Jedi của Djon Son trong 300 năm (trong truyện fanfiction tên là Star Wars Episode 1: A Retelling) rồi giết chủ của mình và ăn trộm tiền của hắn rồi chạy trốn.</p>
<p>Sau 1 năm ở hành tinh Tatooine có bão cát và có cậu bé Anakin 8 tuổi (cậu ấy có 2 kiếm gồm kiếm xanh da rời của Djon Son và kiếm đỏ nhỏ của mình đã tạo ra) chạy (trong truyện fanfiction tên là The Holocron) vào hang khỏi bão cát để chờ bão cát ta, sau đó cậu bé Anakin thấy có cái thùng trong hang rồi mở ra xem thì thấy có quần áo và bộ giáp và hình lập phương màu tím (violet), khi cậu ấy chạp vào hình lập phương màu tím thì xuất hiện hình ảnh không gian ba chiều là 1 đàn ông lớn tuổi, người đàn ông lớn tuổi nói:</p>
<ul>
	<li>Ta là Revan Gatemaster to the Solari Holocron. Cảnh báo trước rằng ta sẽ không lấy sự hợp lý của bất kỳ sự ngu ngốc nào của mi nếu master của ngươi hỏi nơi mi đã học những gì ta dạy.</li>
</ul>
<p>Cậu bé Anakin nói:</p>
<ul>
	<li>Master? Master cả cháu là 1 người chạy bộ tên là Watto, anh ta không quan tâm cháu học được những gì.</li>
</ul>
<p>Chú Revan nói</p>
<ul>
	<li>Thật sao? Ta không nghĩ rằng các tiêu tuẩn của Jedi sẽ giảm qua thấp.</li>
</ul>
<p>Cậu bé Anakin hỏi:</p>
<ul>
	<li>Ý chú là sao?</li>
</ul>
<p>Chú Revan nói:</p>
<ul>
	<li>Ý ta là master của mi là Jedi, mi nghĩ ta có ý gì khi ta đề cập đến master của mi?</li>
</ul>
<p>Cậu bé Anakin nói:</p>
<ul>
	<li>Cháu là nô lệ.</li>
</ul>
<p>Chú Revan im lặng rồi nói:</p>
<ul>
	<li>À, ta chắc chắn là cái quái gì không ngờ rằng đó là thường hợp.</li>
</ul>
<p>Chú Revan nhìn quanh phòng rồi hỏi:</p>
<ul>
	<li>Vậy, ta đoán rằng ta sẽ phải dạy cháu từ 1 hình vuông họ sẽ không?</li>
</ul>
<p>Cậu bé Anakin thấy lạ rồi hỏi:</p>
<ul>
	<li>Ơ? Chú chỉ là 1 hình ba chiều.</li>
</ul>
<p>Chú Revan nói:</p>
<ul>
	<li>Ta là Jedi và là Sith. Jedi gọi ta là Revanchist, Mandilorian gọi ta là Butcher, ta đã chiến đấu trong bóng tối ở vùng đất tối nhất thiên hà. Trước khi chú chết chú đã lưu bộ nhớ trong Holocron bằng Kyber Crystal của chú được cất bên trong Jedi Holocron của chú, nhưng khi nào cháu có tàu vũ trụ thì hãy đến ngôi đền Sith tìm Sith Holocron của chú, cái đó cũng lưu bộ nhớ trong Holocron của Darth Revan. Vì vậy chú sẽ dậy cháu học ngay bây giờ.</li>
</ul>
<p>Cậu bé Anakin thấy vui rồi nói:</p>
<ul>
	<li>Tuyệt vời, chú biết không cháu đã có lực lượng hồi nửa tháng mà mẹ cháu nói (trong truyện fanfiction tên là An older Menace).</li>
</ul>
<p>Chú Revan thấy rồi nói:</p>
<ul>
	<li>Ồ, ra cháu đang tự học nó hả? Tốt, ta sẽ dậy cháu. Và có người bạn của ta đến gặp cháu đấy.</li>
</ul>
<p>Cậu bé Anakin thấy rồi nhìn phía sau thấy cô gái cầm kiếm vàng 2 đầu. Cô gái hỏi tội cậu bé Anakin:</p>
<ul>
	<li>Mi là ai mà sao mi lại trong hang của ta?</li>
</ul>
<p>Cậu bé Anakin sợ quá rồi trả lời:</p>
<ul>
	<li>Cháu là Anakin và cháu đã trốn hang này để tránh bão cát và cháu mở được Holocron của Revan và được chú ấy đồng ý dậy cháu học Jedi.</li>
</ul>
<p>Cô gái thấy rồi im lặng và tắt kiếm của mình đi rồi nói:</p>
<ul>
	<li>Tên cô là Bastila Shan (trong truyện fanfiction tên là The Chosen One Chronicles) vợ của Revan. Vậy cháu là người mà chồng cô nói. Hiểu rồi, xin lỗi cháu vì đã làm cháu sợ. Vậy cô có thể dậy cháu cùng bài học của Revan.</li>
</ul>
<p>Cậu bé Anakin nghe vậy làm cậu ấy vui quá rồi ôm lấy cô Bastila, làm cô ấy ngạc nhiên vì được cậu bé ôm, đúng lúc cô Bastila cảm nhận thấy lực lượng quen thuộc rồi nhận ra cậu bé đó là người bạn thân yêu của cô ấy tên là Anakin Starkiller đầu thai làm nước của cô Bastila chảy ra rồi ôm lấy cậu bé Anakin khóc và từ nay cô Bastila sẽ ở bảo vệ cậu bé Anakin mãi mãi.</p>
<p>Sau 3 năm, cậu Anakin đang học Jedi và tạo ra 7 kiếm từ Pearl của Dragon Krayt (cậu Anakin 11 tuổi giết được Dragon Krayt nhờ kiếm của cô Bastila cho mượn, sau đó cậu Anakin có Pearl như cô Bastila nói) có 7 màu (gồm: đen, xanh da trời, xanh lá cây, hồng, đỏ, trắng, vàng), nhưng không may cậu Anakin thì bị bọn buôn bán nô lệ tấn công, đúng lúc cô Bastila xuất hiện giết hết bọn buôn bán nô lệ, sau đó cô Bastila và thấy bọn buôn bán nô lệ của Jabba làm cô Bastila điên lên và không chịu được khi nhìn thấy có người vô tội chết và quyết định giải cứu người vô tội. Vài giờ sau, cô Bastila đã đi giết Jabba và cứu được người nô lệ, còn cậu Anakin đã giết hết bọn buôn bán nô lệ và cứu được nô lệ là 12 cô gái Twi'lek từ 3 tuổi đến 13 tuổi (gồm 3 twi'lek kid pink, twi'lek duna, twi'lek duna, twi'lek runa) rồi thấy 1 cô gái Twi'lek trong 12 Twi'lek có lực lượng tên là Naraw'aven or Narawa thì cô Bastila sẽ nhận cô Narawa làm học sinh của mình rồi mua tàu vũ trụ HWK-290 (trong truyện fanfiction tên là The Force's Negotiator) để cho 12 cô gái Twi'lek ở.</p>
<p>Vài ngày sau cô Bastila và cậu Anakin giết hết những người bộ tộc Hutt và cậu Anakin giải phóng những người nô lệ vô tội, sau đó cô Bastila thây cô bé 6 tuổi tên là Skye Bladelighter (bố của cô ấy tên là David Bladelighter làm nghề thiết kế và sửa chữa tàu vũ trụ và mẹ của cô ấy tên là Maria Bladelighter làm nghề phi công lái tàu vũ trụ) (trong truyện fanfiction tên là Darth Vader Rebirth) có lực lượng rồi nhận cô bé Skye làm học sinh của mình.</p>
<p>Vài ngày sau trong hành tinh Corellian, cậu Anakin 12 tuổi cứu được cô bé Ahsoka 2 tuổi.</p>
<p>30000 năm trước trong chiến tranh giữa Jedi và Sith có cô Nathrrya Therin-Palatine (sith'ari) (Darth Avarice (Empire's Wrath)) (Sith) (trong truyện fanfiction tên là The Time Displaced Sith) cầm kiếm tím (violet) bị mất Ro'wan Palatine (bố của Nathrrya) (Sith) và Marrick Therin (mẹ của Nathrrya) (Sith) và Captain Malavai Qinn (chồng của Nathrrya) (Jedi) và Darth Baras (thầy của Nathrrya) (Sith). Trong khi đó cô Nathrrya bị thương và được Casavir Therin (em trai họ của Nathrrya) (Kira's husband) (Sith) và Kira Carsen (vợ của Casavir) (Jedi) và Jaesa Willsaam (học sinh nữ của Nathrrya) (Jedi) đưa cô Nathrrya vào máy ngủ đông lạnh để bảo vệ cô ấy.</p>
<p>30000 năm sau, cô Nathrrya tỉnh dậy phá cửa máy ngủ đông lạnh và thấy mình đã ngủ 30000 năm sau làm cô ấy đau buồn vì đã mất gia đình, sau đó cô Nathrrya đi ra nhập ngôi đền Jedi để sống và bí mật không cho Jedi biết cô Nathrrya là bộ tộc Sith vì cô ấy có kiếm tím.</p>
<p>Vài ngày sau, cậu Anakin 14 tuổi học kiếm được 2 form là form V và form VI từ 2 Holocron của Revan (Jedi Holocron và Sith Holocron (từ trong ngôn đền Sith (trong truyện fanfiction tên là I Will Betray You))) và có kiếm đỏ chẫm 2 đầu từ trong Telos Holocron từ ngôi đền Sith có Sith Acolyte chết từ lâu (trong truyện fanfiction tên là Star Wars: Lord Vader of Naboo), hiện giờ cậu Anakin đang đến hành tinh Naboo mà cô Bastila yêu cầu. Vài giờ sau trong hành tinh Naboo, cậu Anakin vào trong thác nước có hang và ngôi đền trong thác nước và gặp được linh hồn thầy Konath Ordon 6000 năm trước (trong truyện fanfiction tên là Path of the Chosen One) để thầy ấy dậy kiểm soát bóng tối và form mới là form của Tulak tên là Dayoro. Vài giờ sau, sau khi cậu Anakin tập luyện là cậu ấy được nghỉ giải lao và được linh hồn thầy Konath cho bộ giáp của Sith tên là Darth Vader và nghe nói nó làm được từ con trai của Sith là Jedi vì muốn cứu bố mình nên tạo bộ giáp Vader cho bố mình thoát khỏi bóng tối và có thể giả Sith vì khí bóng tối thoát ra từ bộ giáp làm cậu Anakin vui.</p>
    </div>
  )
}

const Movie1 = () => {
  return (
    <div>
<h1>Movie 1</h1>
<p> </p>
<p>Vài ngày sau, trong nhà thầy Qui-gon có vợ tên là Tahl và 3 ba đứa con của mình gồm con trai tên là Ben tuổi 9 và con gái tên là Faith tuổi 9 và con gái lớn bằng tuổi Obi-Wan tên là Selena (trong truyện fanfiction tên là Life In The Jedi Temple). Trong khi đó thầy Qui-Gon và cậu Obi-Wan (học kiếm được form III) có việc đến hành tinh Naboo và mang theo cậu bé Ben để giúp bố mình và tự nhiên cô Nathrrya muốn đi theo. Trong hành tinh Naboo, cậu Anakin đang ngồi nhắm mắt tập trung lực lượng là đưa linh hồn cậu Anakin đến thế giới khác là thế giới tồi tệ. Trong thế giới tồi tệ, cậu Anakin nhìn thành phố đầy bóng tối rồi đến hành tinh Mustafar. Cậu Anakin đi qua cầu qua nung nham nóng chảy thì gặp được bóng tối của mình là Darth Vader 22 tuổi đang 1 cầm kiếm đ, sau đó cậu Anakin rút kiếm đỏ rồi trách đấu với Darth Vader. Vài phút sau, cậu Anakin nói:</p>
<ul>
	<li>Mi đã giết mẹ mình phải không?</li>
</ul>
<p>Darth Vader nghe vậy rồi điên lên và nói:</p>
<ul>
	<li>Ta không giết mẹ ta! Mẹ ta là người duy nhất mà ta yêu! Tên Jedi khốn nạn đã để mẹ ta chết. Và ngươi là người yếu đuối vì không cứu mẹ mình.</li>
</ul>
<p>Cậu Anakin im lặng rồi nói:</p>
<ul>
	<li>Nếu vậy tại sao cậu không cùng tôi để bảo vệ mẹ mình.</li>
</ul>
<p>Darth Vader im lặng ngạc nhiên, nhưng khi anh ta ngạc nhiên nên mất cảnh giác là bị cậu Anakin đã vào chân làm Darth Vader ngã ngửa phía sau rơi xuống nung nham nóng chảy, nhưng cậu Anakin tóm lấy áo Darth Vader làm anh ta dừng ngã ngửa như đứng ngửa, cậu Anakin nói:</p>
<ul>
	<li>Hãy chết để chúng ta nên hợp thể bằng cách này nhé? Bóng tối của tôi. Nghĩa là chúng ta sẽ không phải là Jedi và Sith thì sẽ là Gray Jedi, như vậy chúng ta có thể cứu mẹ mình thân yêu của mình.</li>
</ul>
<p>Darth Vader tóm tay cậu Anakin và hỏi:</p>
<ul>
	<li>Làm sao ngươi biết ngươi chắc chắn chuyện đó?</li>
</ul>
<p>Cậu Anakin nói:</p>
<ul>
	<li>Cậu không biết được, anh trai.</li>
</ul>
<p>Darth Vader im lặng vì ngạc nhiên rồi cười và nói:</p>
<ul>
	<li>Hề, phải rồi. Ta là sức mạnh Sith của ngươi tên là Force Jumper (trong truyện fanfiction tên là Force Jumper).</li>
</ul>
<p>Cậu Anakin mỉm cười và Darth Vader cũng mỉm cười rồi bỏ tay khỏi tay cậu Anakin và nói:</p>
<ul>
	<li>Rồi, ta sẵn sàng đây.</li>
</ul>
<p>Cậu Anakin thả Darth Vader làm anh ta rơi ra khỏi cầu xuống nung nham nóng chảy và anh ta nhanh chóng ném kiếm của mình cho cậu Anakin. Trong khi đó cậu Anakin nhìn Darth Vader rơi xuống nung nham nóng chảy và vẫn mỉm cười, còn Darth Vader nhìn cậu Anakin càng xa và nói:</p>
<ul>
	<li>Được lắm, em trai yêu quý của anh.</li>
</ul>
<p>Cậu Anakin gật đầu nhìn Darth Vader, còn Darth Vader đã rơi xuống nung nham nóng chảy thì bóng tối bay đến vào cậu Anakin làm cậu ấy đã trở thành Gray Jedi hoàn thành, đúng lúc cậu Anakin tỉnh dậy thoát tập trung lực lượng và đã học hoàn thành bài của linh hồn thầy Konath thì cậu Anakin mở Sith Holocron của có Synthetic lightsaber Crystal Red rồi biến nó thành Synthetic lightsaber Crystal White, sau đó cậu Anakin mặc bộ giáp Vader. Đúng lúc Vader nhìn ra thác nước nhận được tầm nhìn robot của Sith tên là B1 battle droid và Droideka sẽ xâm chiếm hành tinh Naboo thì Vader chuẩn bị kiếm đỏ 2 đầu. Trong khi đó, trong tàu vũ trụ có thầy Qui-Gon và cậu Obi-Wan và cậu bé Ben và cô Nathrrya đang nói chuyện với nhau vui vẻ vì nghe nói cô ấy đã tiết lộ cho 3 jedi rằng cô ấy là Sith, nhưng cô ấy là Sith tốt và muốn giết tên điên Sith xấu tên là Sidious cho đến khi 3 Jedi hiểu cô ấy là Sith tốt và là Stray Sith vì đó ý muốn của Force cho cô ấy 1 cơ hội thứ hai và mong muốn của cô ấy là Jedi và Sith hòa bình với nhau, hiện giờ thầy Qui-gon và Obi-Wan xem cô Nathrrya đang chơi với cậu bé Ben. Vài phút sau cô Nathrrya và 3 Jedi ở trong tàu vũ trụ robot thì nghe thấy con tàu của mình bị phá thì chứng tỏ là robot là kẻ thù thì cô ấy và 2 jedi trừ cậu bé Ben giết robot bằng kiếm, còn cậu bé Ben giết robot bằng súng lấy cắp từ robot, sau đó cô Nathrrya và 3 Jedi chạy trốn vào tàu trở hàng để đáp xuống hành tinh Naboo. Vài phút sau cô Nathrrya và 3 Jedi được người ngoài hành tinh Gungan tên là Jar Jar giúp là nhờ vua của mình cho mượn cầu bơi qua biển đến sông trong thành phố. Trong khi đó, robot bắt người làm con tin (nữ hoàng Padme giả nữ hầu, nữ hoàng giả bởi nữ hầu, công an) đưa đi thì bắt gặp người lạ giống Revan và anh ta bật kiếm đỏ 2 đầu rồi chia đôi ra thành 2 kiếm đỏ làm robot nghĩ người lạ là Jedi rồi bắn chết thì người lạ chặn đạn trả bắn trúng những robot nào đã bắn (trong truyện fanfiction tên là Darth Vader- Hero of Naboo), sau đó người lạ tắt 2 kiếm của mình rồi gặp chào nữ hoàng giả và chào:</p>
<ul>
	<li>Chào nữ hoàng, thần là Vader, xin mọi người hãy đi phía kia thì mọi sẽ gặp được Jedi, thần phải giết những robot đã chặn đường.</li>
</ul>
<p>Vài phút sau, cô Nathrrya và 3 Jedi gặp được nữ hoàng giả và các nữ hầu và công an rồi thấy xe tăng nổ tung và robot bị giết hết bởi Sith khác, nhưng cô Nathrrya không cảm thấy Sith khác là Sith xấu, sau đó Vader đưa nữ hoàng giả, các nữ hầu, công an, cô Nathrrya và 3 Jedi đến sân bay. Vài phút sau, Vader đã giết hết robot trong sân bay bằng cách chặn đạn trả bắn trúng những robot nào đã bắn để cứu phi công lái tàu vũ trụ để đưa Vader, các phi công lái tàu chiến tranh, nữ hoàng giả, các nữ hầu, công an, cô Nathrrya và 3 Jedi thoát khỏi hành tinh Naboo an toàn. Vài phút sau, Vader cởi mặt nạ ra thành cậu Anakin giới triệu hoàng giả, các nữ hầu, cô Nathrrya và 3 Jedi:</p>
<ul>
	<li>Tên thật của tôi là Anakin Grey Jedi người được chọn và là con trai của thần Force, đầu tiên tôi học được Jedi từ Jedi Holocron của Jedi Revan được form V và form VI, sau đó học kiểm soát bóng tối từ Sith Holocron của Darth Revan đặt tên Vader, cuối cùng kết hợp 2 cả hai mặt sáng và tối bằng cách ăn bóng tối từ thầy Konath Ordon 6000 năm trước từ ngôi đền trong thác nước Naboo được form VII và form mới là form của Tulak tên là Dayoro. Tôi mặc bộ Jedi Revan vì để giúp nữ hoàng Naboo và mang bộ Darth Vader để mặc.</li>
</ul>
<p>Qui-Gon ngạc nhiên thấy cậu Anakin là người được chọn thật sự trước mặt mình, cô Nathrrya biết như Force đã nói khi mình ngủ đông và cho mình tầm nhìn liên quan đến cậu Anakin, Obi-Wan ngạc nhiên cậu Anakin có thể sử dụng 2 cả hai mặt sáng và tối nên trở thành Grey Jedi tuyệt vời, còn cô Padme im lặng nhìn chằm chằm cậu Anakin đẹp trai và là người Jedi tuyệt vời và mong mình được học Jedi từ cậu Anakin (nghe nói cô Padme không giỏi Jedi nên trở về Naboo với gia đình (trong truyện fanfiction tên là Breakaway SkywalkerSaga)). Vài giờ sau, cậu Anakin đã lấy dữ liệu của robot chỉ huy để làm bằng chứng và tàu vũ trụ Naboo đã đến hành tinh Tatooine thì cậu Anakin mời cô Padme, thầy Qui-Gon và cô Nathrrya đến nhà cậu Anakin thì thầy Qui-Gon và cô Nathrrya gặp được Jedi huyền thoại là cô Bastila còn sống trong 4000 năm làm thầy Qui-Gon gần như bị đau tim vì nghĩ rằng gặp Jedi đáng sợ, nhưng cậu Anakin thấy cô Bastila có cháu gái của mình cùng tên chồng của mình và chồng của cô Revan tên là Kaiser Drakon (Gray Jedi) là thợ săn nổi tiếng tên là Shadow Hunters (trong truyện fanfiction tên là Shadow Hunters) và có 2 đưa con là Thexan (Jedi) và Arcann (Jedi), Kaiser có 2 con chó Vornskr tên là Ghost (Vornskr big) và Wraith (Vornskr small), Shadow Hunters có 3 robot HK-47, HK-50 và R2-H7 (Echo), đội của Kaiser gồm Bao-Dur (Zabrak), Dar (Trandoshan), Diablo MNC, Tyr MNC, Krix (Trandoshan), Scath Sku Meat (Jedi) và Diana (Twi'lek) (người yêu của Scath).</p>
<p>Vài ngày sau, tàu vũ trụ Naboo đã có động cơ mới, đúng lúc cô Meetra Surik cầm kiếm Ankarres Sapphire xuất hiện trong lỗ thời gian (trong truyện fanfiction tên là A Wound in Time) như tầm nhìn của cậu Anakin nói đến, cô Bastila rất vui gặp được cô Meetra, cô Meetra nhìn thấy vợ của thầy mình rồi hỏi:</p>
<ul>
	<li>Vợ thầy… Đã có chuyện gì xảy ra với Darth Nihilus thế?</li>
</ul>
<p>Cô Bastila trả lời:</p>
<ul>
	<li>Hắn chết rồi.</li>
</ul>
<p>Cô Meetra hỏi về người lạ ở phía sau cô Bastila:</p>
<ul>
	<li>Còn những người kia là thì sao? Mà sao có người (cậu Anakin) mặc bộ của thầy em? Em không biết chuyện gì đang diễn ra nữa.</li>
</ul>
<p>Cô Bastila giải thích mọi chuyện những gì mà cô ấy biết rồi nói:</p>
<ul>
	<li>Và cô được sống lại nhờ Force và em đưa đến tương lai 4000 năm sau để cùng Anakin con trai Force.</li>
</ul>
<p>Cô Meetra im lặng ngạc nhiên rồi hỏi:</p>
<ul>
	<li>Vậy là… Em và thầy em đã chết… Với Darth Nihilus… Trong vụ nổ ở đây ư?</li>
</ul>
<p>Cô Bastila trả lời:</p>
<ul>
	<li>Đúng thế.</li>
</ul>
<p>Cô Meetra hiểu ra và nói:</p>
<ul>
	<li>Em hiểu rồi, vậy em sẽ làm gì với Anakin đây.</li>
</ul>
<p>Cô Bastila trả lời:</p>
<ul>
	<li>Sẽ là 1 người chị của anh ta.</li>
</ul>
<p>Cô Meetra ngạc nhiên và hỏi:</p>
<ul>
	<li>Em sẽ là chị của anh ta á?</li>
</ul>
<p>Cô Bastila trả lời:</p>
<ul>
	<li>Phải.</li>
</ul>
<p>Cô Meetra im lặng rồi đến gần cậu Anakin và nói:</p>
<ul>
	<li>Hân hạnh gặp em, chị sẽ là 1 người chị tốt cho em.</li>
</ul>
<p>Đúng lúc cậu Anakin cảm nhận bóng tối đang đến và cô Bastila yêu cầu cậu Anakin hãy đối đầu với người đó thì cậu Anakin đeo mặt nạ thành Vader rồi gặp bất ngờ là Darth Maul mà cậu Anakin có tầm nhìn là Darth Maul đã giết thầy Qui-Gon rồi Vader và Darth Maul đánh nhau (trong truyện fanfiction tên là A Sith’s Second Chance) cho đến khi Vader làm Darth Maul ngã và lấy kiếm đỏ 2 đầu của hắn rồi để 2 kiếm hình X trên cổ hắn làm hắn không thoát được, đúng lúc cô Bastila lấy kiếm Darth Maul từ tay Vader rồi tóm cổ Darth Maul và nói với Vader:</p>
<ul>
	<li>Đi đi, cô ở lại giải thuyết với hắn, cô sẽ gặp cháu ở Naboo trước khi chuẩn bị chiến tranh, vì cô sẽ gặp bạn cũ của cô ở Naboo.</li>
</ul>
<p>Vader hiểu rồi chạy vào tàu vũ trụ Naboo để bay khỏi hành tinh Tatooine cùng Shadow Hunters và đến hành tinh Coruscant, còn Darth Maul nhìn cô Bastila đang nhìn chằm chằm rồi hiện mắt của Sith làm Darth Maul giật mình cảm thấy mình bị cô Bastila đang nuốt chửng linh hồn. Đúng lúc Palpatine cảm nhận học sinh Darth Maul bị tra tấn đến chết. Vài giờ sau, Boss Shadow Hunters đến ngôi đền làm Mace và Yoda nghi ngờ sao thợ săn lại đến ngôi đền rồi thầy Mace hỏi tội thợ săn:</p>
<ul>
	<li>Thằng kia, mi làm gì ở đây? Mi đang âm mưu gì?</li>
</ul>
<p>Thợ săn cười ngạo làm thầy Mace bực tức, nhưng thầy Yoda nghe tiếng cười của thợ săn rất quen thuộc, thợ săn cởi mũ bảo hiểm ra làm thầy Yoda giật mình sợ hãi và hét lên:</p>
<ul>
	<li>Thầy… Kaiser Drakon… Là thầy sao?</li>
</ul>
<p>Thầy Mace thấy lạ sao thầy Yoda lại gọi thợ săn là thầy và lại còn sợ hãi rồi hỏi:</p>
<ul>
	<li>Thầy làm sao vậy? Hắn ta là ai?</li>
</ul>
<p>Thầy Yoda mắng thầy Mace:</p>
<ul>
	<li>Không được vô lễ anh ta. Anh ta là Grey Jedi và là thầy cũ của thầy khi thầy còn trẻ đó.</li>
</ul>
<p>Thầy Mace nghe vậy làm anh ta giật mình và thấy mình đang đứng trước mặt thầy cấp cao làm thầy Mace sợ hãi và mắc sai lầm vô lễ thầy tối cao. Thầy Kaiser cười rồi nói với thầy Yoda:</p>
<ul>
	<li>Hahaha… Thà, đã lâu rồi nhỉ, học sinh cũ của ta, đã hơn 800 năm rưỡi rồi hả học sinh già?</li>
</ul>
<p>Thầy Yoda im lặng lo lắng rồi hỏi:</p>
<ul>
	<li>Ừm… Thưa thầy… Thầy đến gặp em làm gì ạ?</li>
</ul>
<p>Thầy Kaiser trả lời:</p>
<ul>
	<li>Thầy đến đây để kiểm tra học sinh của em có tốt không đó.</li>
</ul>
<p>Vài phút sau, sau khi thầy Kaiser kiểm tra học sinh của thầy Yoda rồi mắng:</p>
<ul>
	<li>Luật là cái quái gì vậy? Sao trẻ em không có gia đình? Em ngu ngốc! Tình yêu là mang lại ánh sáng trái tim cho Jedi mạnh mẽ lên và nếu không có tình yêu thì trái tim của Jedi sẽ dễ dàng đen tối và làm Jedi dễ rơi vào bóng tối! Sau khi thầy có việc cứu hành tinh Naboo bởi robot thì em phải phá luật vớ vẩn đó đi, nghe chưa?</li>
</ul>
<p>Thầy Yoda sợ hãi rồi nói:</p>
<ul>
	<li>Vâng… Vâng… Em sẽ làm ạ…</li>
</ul>
<p>Thầy Mace im lặng sợ hãi và buồn vì đã học sai về luật nên bị thầy tối cao Kaiser mắng và cảnh báo sẽ đuổi khỏi Jedi. Vài phút sau, Vader đưa cô Padme 1 dữ liệu của robot chỉ huy để làm bằng chứng và cô Nathrrya nói với cô Padme rằng không được tin tưởng ông Palpatine và ông ấy không được ở thành chủ tướng vì cô Nathrrya có thể cảm nhận bóng tối của Lord Sith từ xa như điều khiển ông Palpatine làm cô Padme sợ và hểu. Vài phút sau, trong hội đồng có nhiều Master Jedi cùng thầy Kaiser, đúng lúc Qui-Gon,Obi-Wan, cô Nathrrya và Vader đến, nhưng tự nhiên Vader tấn công thầy Mace và gọi thầy ấy là Kamir Brandt (trong truyện fanfiction tên là Angels) làm thầy nhận ra Vader tính là cậu Anakin mà thầy Mace đã đua xe với cậu Anakin mấy năm trước, trong khi đó cô Nathrrya cản Vader và hỏi anh ta có chuyện gì thì anh kể mọi chuyện làm cô Nathrry hiểu và thầy Kaiser nhìn thầy Mace chằm chằm với đôi mắt lạnh lùng vì tội đua xe ăn gian làm thầy Mace sợ rằng sẽ bị thầy Kaiser phạt. Đúng lúc Vader để bộ Jedi Revan Jedi và Holocron và Sith Holocron của Revan xuống đất giữa hội đồng thì Jedi Holocron và Sith Holocron lóe sáng lớn rồi tắt là Jedi Holocron và Sith Holocron không có Kyber Crystal bên trong Jedi Holocron và Sith Holocron, sau đó chú Revan Grey Jedi cầm 2 kiếm trắng và tím (violet) xuất hiện trong lỗ thời gian (trong truyện fanfiction tên là Revan's Apprentice (Up For Adoption Anakin)), chú Revan nhìn xung quanh rồi hỏi:</p>
<ul>
	<li>Cái quái… gì…?</li>
</ul>
<p>Chú Revan nhận ra cậu Anakin rồi hỏi:</p>
<ul>
	<li>Anakin… Đây là…</li>
</ul>
<p>Cậu Anakin trả lời:</p>
<ul>
	<li>Ừ.</li>
</ul>
<p>Chú Revan nhận được bộ nhớ từ 2 kiếm của mình mà Jedi Holocron và Sith Holocron đã giữ rồi kêu lên:</p>
<ul>
	<li>A…</li>
</ul>
<p>Cậu Anakin im lặng chờ, chú Revan lẩm bẩm:</p>
<ul>
	<li>Chó chết… Đây là thật sao…</li>
</ul>
<p>Sau đó chú Revan hỏi cậu Anakin:</p>
<ul>
	<li>Có phải… Chú đã chết… Phải không?</li>
</ul>
<p>Cậu Anakin trả lời:</p>
<ul>
	<li>Vâng, đã sống lại sau 4000 năm.</li>
</ul>
<p>Chú Revan kêu lên:</p>
<ul>
	<li>Oa! Không hay chút nào cả! Aaauuu! Chó chết! Khỉ thật! Không hay chút nào cả!</li>
</ul>
<p>Sau đó chú Revan nói với cậu Anakin:</p>
<ul>
	<li>Này, Anakin. Hình như bộ nhớ của chú được lưu trong Kyber Crystal bên trong Jedi Holocron và Sith Holocron của ta và cháu lúc nào đi đâu mà vẫn giữ 2 Holocron của chú để cho lấy lại bộ nhớ hả?</li>
</ul>
<p>Cậu Anakin giải thích mọi chuyện là do cô Bastila được nói với chú qua Jedi Holocron vui vẻ và không muốn mất anh ta nên cho thêm bộ nhớ từ 2 Holocron. Làm chú Revan hiểu ra và nói:</p>
<ul>
	<li>Hiểu rồi… Ôi… Vợ ta… Cháu gái ta… Sao cháu ta lại có tên của ta cơ chứ? Anakin, chú sẽ gặp vợ chú sau khi chúng ta đến hành tinh Naboo.</li>
</ul>
<p>Trong vài phút cô Nathrrya tiết lộ cho hội đồng Jedi rằng cô ấy là Sith và là vợ Jedi nổi tiếng tên là Captain Malavai Qinn và mong muốn giết Sidious vì hắn ta là Sith điên hèn mạn. Đúng lúc cô bé Faith có tầm nhìn là ông Palpatine là Lord Sith Sidious rồi báo cho mẹ mình biết làm cô Tahl vội vàng báo động cho Jedi làm cô Nathrrya điên lên và muốn giết Lord Sith Sidious. Vài phút sau, chú Revan, cô Nathrrya các Jedi Master tấn công Palpatine cho đến khi hắn ta mất 2 kiếm là 1 kiếm bị cậu Anakin cướp và kiếm kia khi Sidious bị chặt tay, nhưng không may Sidious đã nhảy ra khỏi cửa sổ và chạy trốn rồi. Vài giây sau, Sidious ở trong tàu của mình chạy trốn và nghĩ “Không thể tin nổi. Sao có Lady Sith Nathrrya còn sống và lại đi cùng Jedi cơ chứ.”, còn cậu Anakain đã lấy 1 Synthetic lightsaber Crystal của Sidious mà cậu Anakin đã cướp rồi biến Synthetic lightsaber Crystal Red thành Synthetic lightsaber Crystal White, sau đó Synthetic lightsaber Crystal White đó sẽ là của cậu Anakin. Vài phút sau, vào buổi tối ở hành tinh Naboo trong rừng có cô Bastila đang cầm kiếm vàng 2 đầu đã giết Cala Mabyn phản bội Jedi vì cô ấy là người yêu của Sith tên là Nardo Tabansi (trong truyện fanfiction tên là Life In The Jedi Temple) và đã giết hắn ta và bố hắn (Dagan Tabansi) và mẹ hắn (Maida Tabansi) trừ em gái hắn (Nonie Tabansi) vì cô ấy đã từ bỏ Sith và trở thành học sinh của cô Bastila, sau đó cô Bastila nhìn lên bầu trời và nghĩ “Chồng sẽ đến sớm thôi.”, sau đó cô Bastila đi luôn và phía sau cô ấy có 2 người cấp dưới mới của cô ấy là Maul (không có tên Darth vì không có bóng tối vì hắn ta bị cô Bastila nuốt chửng bóng tối ở hành tinh Tatooine nên cô ấy biến Maul thành Jedi) cầm kiếm 2 đầu xanh da trời. Vài giờ sau, đội Shadow Hunters, cô Nathrrya, cậu Obi-Wan, gia đình Qui-Gon, Vader, và người cùng Padme (cô ấy đã có kiếm xanh lá cây của mình để đề phòng khi chiến tranh) đến hành tinh Naboo. Vài phút sau, chú Revan gặp được cô Bastila thì 2 vợ chồng rất vui vì đã gặp nhau, còn thầy Qui-Gon thấy cô Bastila đã biến Maul thành Jedi bằng cách cô Bastila nuốt chửng bóng tối của Maul và cô Bastila có học sinh Sith là cô Nonie vì cô ấy đã từ bỏ Sith và từ bỏ tên họ Tabansi vì nhận ra gia đình Tabansi điên. Vài phút sau, Vader lái tàu chiến tranh N-1 starfighter 1 mình để bay vào tàu vũ trụ robot Lucrehulk-class Droid Control Ship để phá hủy làm robot ở Naboo không cử động nữa vì mất điều khiển và chúng sẽ là của Vader mà anh ta muốn, còn cô Nathrrya đã giết Nute Gunray vì tội giết người vô tội, còn Rune Haako bị công an Naboo bắt đi. Trong khi đó có thợ săn Jango Fett đang sợ hãi vì bắt gặp Jedi không bình thường là Shadow Hunters Kaiser thợ săn nổi tiếng, vì vậy thợ săn Jango thà trở thành cấp dưới của Shadow Hunters Kaiser còn hơn là chết đáng sợ. Vài giờ sau, cô Padme xin học việc của cô Nathrrya thì cô ấy hiểu, còn đội Shadow Hunters sẽ sống ở hành tinh Kamino với thợ săn Jango. Vào buổi tối, cậu Obi-Wan và cô Padme ngủ rồi nghe thấy tiếng bước chân thì 2 người đó ra xem ai đi qua thì thấy là cậu Anakin đi lang thang đến phòng ngai vàng của cô Padme làm cô ấy và cậu Obi-Wan không biết cậu Anakin làm gì rồi thấy cậu ấy ngã xuống đất làm cậu Obi-Wan và cô Padme lo quá chạy đến xem cậu Anakin có sao không, nhưng khi cậu Obi-Wan và cô Padme chạm cậu Anakin làm linh hồn của cậu Obi-Wan và cô Padme bị lôi kéo theo cậu Anakin bằng lực lượng của cậu ấy đến thế giới khác là thế giới tồi tệ. Trong thế giới tồi tệ, cậu Obi-Wan và cô Padme ngã vào thế giới tồi tệ và thấy thành phố đầy bóng tối làm họ sợ, nhưng họ được cậu Anakin đưa an toàn. Cậu Anakin hỏi:</p>
<ul>
	<li>Sao các cậu lại ở đây?</li>
</ul>
<p>Cô Padme trả lời:</p>
<ul>
	<li>Vì chúng tôi thấy cậu lang thang vào buổi đêm và đến ngai vàng của tôi rồi ngã xỉu.</li>
</ul>
<p>Cậu Obi-Wan hỏi:</p>
<ul>
	<li>Chúng ta đang ở đâu vậy?</li>
</ul>
<p>Cậu Anakin trả lời:</p>
<ul>
	<li>Đây là thế giới đen tối không có Jedi và không có Lord Sith mà chúng ta tìm, vì trong số Master Jedi nào trở thành Sith, tôi định đến lần nữa vì tôi có sức mạnh Vader của thế giới này, tôi cần tìm hiểu ở đây đã rồi rút lui về thế giới của mình. Có điều này là Obi-Wan ở đây là người đã giết thầy Qui-Gon và Padme ở đây là người cùng bố mình xấu xa tham lam.</li>
</ul>
<p>Cậu Obi-Wan hóa điên và muốn giết bản thân mình ở thế giới tồi tệ, còn Padme ghét sự tham lam và cũng muốn giết bản thân mình ở thế giới tồi tệ. Vài giờ sau, cậu Obi-Wan đi lang thang rồi gặp được bản thân mình Sith cầm kiếm xanh da trời (Movie 3) đã giết thầy Qui-Gon thì cậu Obi-Wan trách đấu Dark Obi-Wan. Vài phút sau, cậu Obi-Wan thua Dark Obi-Wan vì bị thương rồi cậu Obi-Wan nhanh chóng dùng lực lượng điều khiển kiếm mình của bay đến chặt chân Dark Obi-Wan rồi nhanh chóng chặt tay hắn và bắt kiếm của hắn rồi dùng 2 kiếm chặt cổ và chặt bụng hắn lăn ra chết rồi thấy hắn ta biến mất thành bóng tối bay vào cậu Obi-Wan làm cậu ấy lo lắng mình sẽ trở thành Sith, nhưng cậu Obi-Wan thấy mình không còn là Jedi và Sith nữa mà là Dark Jedi rồi cậu Obi-Wan đặt tên cho mình khi mình Sith là Darth Rego (trong truyện fanfiction tên là Lord and Master) và nhặt thêm kiếm của mình ở thế giớ tồi tệ thì cậu ấy có 2 kiếm xanh da trời (kiếm từ Movie 1 &amp; Movie 3) như Jar’Kai. Vài phút sau, cô Padme ở trong nhà mình gặp được Dark Padme trong nhà làm việc rồi nhanh chóng rút kiếm xanh lá cây trước khi Dark Padme bắn thì cô ta bắn cô Padme và cô ta chặn đạn và bắn trở lại chúng Dark Padme làm cô ấy sắp chết rồi nhìn cô Padme và hỏi:</p>
<ul>
	<li>Cô là ai? Sao cô có kiếm và chặn đạn như Jedi?</li>
</ul>
<p>Cô Padme trả lời</p>
<ul>
	<li>Tôi là Jedi Padme ở thế giới khác, và mi đừng hòng có Anakin của ta.</li>
</ul>
<p>Dark Padme im lặng rồi chết và biến mất thành bóng tối bay vào cô Padme làm cô ấy trở thành không còn là Jedi và Sith nữa mà là Grey Jedi như cậu Anakin Vader rồi cô Padme đặt tên cho mình khi mình Sith là Darth Mirayya (trong truyện fanfiction tên là Darth Padmé and the Clones of Kamino), đúng lúc kiếm của cô Padme là màu xanh lá cây thành đỏ vì nó bị chảy máu rồi lóe sáng thành kiếm trắng. Trong khi đó cậu Anakin tìm thấy 6 Corusca Gems (chúng là đá quý và chúng có 4 xanh da trời, xanh lá cây và tím (violet)) rồi làm ra kiếm từ 6 Corusca Gems ra 4 kiếm xanh da trời, 1 kiếm xanh lá cây và 1 kiếm tím. Vài phút sau, cậu Anakin và cô Padme và cậu Obi-Wan trở về tập hợp rồi chuẩn bị về thế giới của mình và kịp nhìn thấy Dark Mace không kịp bắt.</p>
<p>Vào buổi sáng hôm sau, thầy Qui-Gon và các nữ hầu của cô Padme đi tìm cậu Obi-Wan, cậu Anakin và cô Padme vì không thấy họ trong phòng ngủ rồi thấy họ ngủ nằm trên đất trong phòng ngai vàng rồi thầy Qui-Gon thấy cậu Anakin thêm 6 kiếm ở đâu đó và sao cậu Obi-Wan có 2 kiếm. Vài phút sau, cậu Obi-Wan, cậu Anakin và cô Padme ngủ dậy và giải thích những gì mà họ đã đến thế giới tồi tệ làm gì làm gia đình thầy Qui-Gon, đội Shadow Hunters, cô Nathrrya, chú Revan, cô Bastila và cô Meetra ngạc nhiên rằng Force đã chọn cậu Obi-Wan, cậu Anakin và cô Padme và từ nay họ có tên mới như tên Jedi và tên Sith kết hợp là cậu Anakin Vader Skywalker và cô Padme Mirayya Amidala và cậu Obi-Wan Rego Kenobi. Vài giờ sau, cô Tahl cho cậu Anakin và cô Padme 2 Crystal Sapphire mà cô Tahl có 3 Crystal Sapphire mà khó dùng (trong truyện fanfiction tên là What if Darth Maul killed ObiWan Kenobi). Sau đó cậu Anakin giúp cô Padme nhắm Crystal Sapphire và Crystal White và tập trung lực lượng làm Crystal Sapphire và Crystal White lóe sáng rồi tắt thành Crystal Ankarres Sapphire làm thầy Qui-Gon và cô Tahl ngạc nhiên cậu Anakin và cô Padme cơ thể tạo được Crystal Ankarres Sapphire từ Crystal Sapphire và Crystal White kết hợp, còn thầy Qui-Gon có Crystal mới và nó là màu trắng vì thầy ấy là Grey Jedi rồi kết hợp Crystal Sapphire thành Crystal Ankarres Sapphire.</p>
<p>Vài ngày sau đó ở hành tinh Ilum, cậu Anakin có đã có 2 Crystal Blue Green, sau đó cậu Anakin kết hợp kết hợp 2 Adegan Crystal Bue Green với Crystal Red của mình:</p>
<p> </p>
<p>Crystal Green kết hợp với Crystal Red thành Crystal White rồi kết hợp đá quý Crystal Sapphire mà cô Tahl đã cho thành Crystal Ankarres Sapphire,</p>
<p> </p>
<p>Crystal Blue kết hợp với Crystal Red của mình thành Crystal Purple core Black (trong truyện fanfiction tên là The Senator and the Supreme Commander) (gồm Crystal Black (trong truyện fanfiction tên là Darth Vader Rebirth) và 3 Crystal loại tím gồm Crystal Magenta và Crystal Amethyst (Crystal Purple) và Crystal Royal Purple (Crystal Violet) (trong truyện fanfiction tên là The Inevitability of Oversight)) rồi kết hợp Ebon Crystal (cậu ấy có nó trước khi đi đến hành tinh Naboo và khi cậu ấy có nó vì được 2 linh hồn vợ chồng Je’Daii (trong chuyện Star Wars Dawn Of The Jedi gồm cậu Tau (Xesh (tên đó khi cậu ấy là thợ săn)) và cô Shae Koda) cho biết ở đâu) thành Ebon Crystal Violet của Je’Daii.</p>
<p> </p>
<p>Sau đó, cậu Anakin cho Crystal Ankarres Sapphire vào trong kiếm Vader làm kiếm Vader có màu xanh da trời, đúng lúc cậu Anakin thấy cô gái Sith cầm 2 kiếm tên là Komari Vosa và là học sinh cũ của Dooku (trong truyện fanfiction tên là Protégé 2- Padawans) thì cậu Anakin bật kiếm xanh ra trời ra tấn công cô Komari. Vài phút sau cậu Anakin và cô Komari đanh nhau, nhưng cậu Anakin lúc nào bị cô Komari đẩy bằng lục lượng làm cậu Anakin ngã làm cậu ấy điên lên rồi đánh nhau tiếp với cô Komari cho đến khi đá mặt cô ấy làm cậu Anakin cơ hội đẩy lực lượng làm cô Komari bị bay cả người đập vào núi băng, sau đó cậu Anakin chạy vào núi băng để đi tìm cô Komari rồi đánh nhau tiếp, cậu Anakin tiếp tục đẩy lực lượng làm cô Komari bị bay cả người khỏi núi băng, sau đó cậu Anakin và cô Komari tiếp tục đánh nhau lên đỉnh núi băng, nhưng cậu Anakin đã tóm tay cô Komari rồi điện cô ấy bằng điện vàng tên là Electric Judgement làm cô ấy bị điện rồi xỉu, sau đó cậu Anakin mang cô Komari về. Vài giờ sau, ông Dooku đang nghỉ ngơi rồi thấy học sinh của mình (cô Komari) đã về và không còn là Sith nữa vì cô Bastila đã ăn bóng tối của cô Komari làm ông Dooku rất vui vì cô Komari còn sống và đã trở về rồi ông Dooku và cô Komari ôm nhau vì 2 thầy em nhớ nhau.</p>
<p>Vài ngày sau, thầy Qui-Gon và cô Siri đào tạo cậu Anakin và cô Nathrrya đào tạo cô Padme, còn cậu Obi-Wan quyết định về nhà với gia đình. Vài giờ sau trong hành tinh Stewjon (trong truyện fanfiction tên là Star Wars : Knight of The Force), cậu Obi-Wan đã đến lâu đài để gặp vua tên là Khal và hoàng hậu tên là Nicki. Vài phút sau, cậu Obi-Wan đã đến lâu đài để gặp vua Khal và hoàng hậu Nicki. Sau khi cậu Obi-Wan giới thiệu tên họ và anh ta từ bỏ Jeid vì anh ta là Grey Jeid tự do và được thầy cũ của mình đã cho vị trí gia đình nên anh ta quyết định sẽ sống với gia đình làm vua Khal và hoàng hậu Nicki im lặng ngạc nhiên cậu Obi-Wan chính là con trai lớn của vua Khal và hoàng hậu Nicki làm họ rất vui và phát khóc vì con trai lớn của mình đã về, sau đó cậu Obi-Wan thấy mình có em trai tên là Owen làm cậu Obi-Wan rất vui vì đã có bố mẹ và em trai.</p>
<p>Vài ngày sau, cậu Anakin có nhiều robot mà mình muốn gồm</p>
<p>C-3PO (See-Threepio),</p>
<p>PROXY (Skywalker A Fanon Story),</p>
<p>Robot Vader (giống bộ giáp của Iron Man trong truyện fanfiction tên là Skywalker A Fanon Story),</p>
<p>G7-68 là tên droid y tế và cậu Anakin tạo nó giống C-3PO và nó có mắt đỏ và bộ kim loại đen (The Sith Apprentice),</p>
<p>R4-P44 (Petey) (trong truyện fanfiction tên là Misunderstood V2),</p>
<p>Cam droid (Orbie) (lấy từ Coruscant) (trong truyện fanfiction tên là Misunderstood V2),</p>
<p>10 con ASP-7 (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
<p>J9 (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
<p>R1-series astromech droid (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
<p>M88-AD (Model-88) (trong truyện fanfiction tên là The Dark Lord of Naboo) cầm kiếm đỏ (có Crystal Red của Darth Maul) cũ của cậu Anakin mà cậu ấy đã bỏ vì cậu ấy có 2 kiếm mới (giống Lightsaber của Starkiller mà Darth Vader tạo ra trong phim force unleashed 2 như kiếm Vader với kiếm Starkiller Clone (Aberrant)) mà cậu ấy đã tạo với Ebon Crystal Royal Purple (Violet) và Crystal Ankarres Sapphire làm cậu ấy có 2 kiếm và chúng có thể lắp với nhau thành kiếm 2 đầu  có 2 màu xanh da trời (Ankarres Sapphire) và tím (Royal Purple (Violet)).</p>
<p>DRK-1 Dark Eye probe droid (được lấy từ Darth Maul)</p>
<p>Vài ngày sau, ông Dooku đã ra khỏi Jedi và trở thành Sith tốt khi theo cô Nathrrya vì cô ấy đã cứu thầy Sifo-Dyas bạn của ông Dooku. Cô Nathrrya có tầm nhìn là Asajj Ventress sẽ trở thành Sith nếu thầy Ky Narec chết nên cô Nathrrya đã kịp cứu thầy Ky và giúp cô Asajj đưa dân tộc của cô ấy an toàn. Trong khi đó Sidious rất điên vì cô Nathrrya đã cướp ông Dooku và cô Asajj khỏi kế hoạch tương lai của Sidious.</p>
    </div>
  )
}

const Movie2 = () => {
  return (
    <div>
<h1>Movie 2</h1>
<p> </p>
<p>Trong 10 năm, cậu Anakin Vader, cô Padme Mirayya  và cậu Obi-Wan Rego tập luyện ở trong hang Kinrath của hành tinh Dantooine cho đến khi họ trở thành Grey Jedi (trong truyện fanfiction tên là Star Wars: Rise of The Paladin), còn cô Asajj đã trở thành Light Sith có 2 kiếm đỏ vì có sức mạnh của da tộc của mình là gia tộc Nightsisters và được cô Nathrrya đào tạo (nghe nói cô Nathrrya rất đáng sợ hơn nữ hoàng của Nightsisters nên cô ấy không thể làm gì xấu còn hơn bị cô Nathrrya đáng sợ giết chết như quái vật). Vào buổi sáng, có con tàu Naboo của Nữ hoàng với 3 lính lái tàu tàu chiến N-1 starfighter, 1 tàu chiến trong 3 con tàu N-1 starfighter có cô Padme 24 tuổi hiện giờ là Mirayya vì nữ hầu của cô ta đang giả tượng nghị sĩ, còn trong trong con tàu Naboo của Nữ hoàng có nữ hầu giả tượng nghị sĩ được bảo vệ bởi cậu Anakin 24 tuổi hiện giờ là Vader (anh ta mặc quần áo Jedi đen và áo khoác với mũ trùm đầu nâu và đồ của Vader là găng tay, giầy và ngực giáp). Sau khi con tàu Naboo của Nữ hoàng hạ cánh thì Vader cảm nhận qua bom rồi chạy ra thấy quả bom ở đâu, sau đó Vader mang quả bom khỏi tàu và ném quả bom lên không trung trước khi nó nổ, Vader nhận được tầm nhìn thủ phạm đánh bom là cô gái Aurra Sing. Vào buổi tối Vader ngồi bên cạnh giường mà cô Padme nằm để bảo vệ cô ấy, trong khi đó ở ngoài phòng ngủ của cô Padme có cô Nathrrya, thầy Obi-Wan hiện giờ là Rego 35 tuổi với 2 vợ (cô Siri và cô Selena), cô Meetra và cô Darra Thel-Tanis 19 tuổi (nghe nói cô ấy được Vader cứu khỏi thợ săn và cô Darra quyết định theo Vader vài năm sau là cô Darra đã trở thành người yêu của cậu Anakin) có màu kiếm mà cô ấy thích là màu xanh lá cây (trong truyện fanfiction tên là Darra becomes a Jedi) đang theo dõi căn phòng của cô Padme có ổn không. Đúng lúc Vader tỉnh dậy vì cảm nhận nguy hiểm rồi thấy 2 con sâu độc bò lên giường của cô Padme, sau đó Vader giết 2 con sâu độc, đúng lúc cô Nathrrya, Rego với 2 vợ, cô Meetra và cô Darra chạy vào phòng ngủ của Padme để xem có chuyện gì, nhưng Rego nhìn ra cửa sổ thấy có robot bay làm Rego chạy đến của sổ, sau đó Rego nhảy qua cửa sổ bắt robot bay và bị đưa đi. Đúng lúc Vader, cô Siri và cô Meetra chạy ra lấy xe để đuổi theo Rego điên (thầy ấy điên vì liều mạng nhảy ra cửa sổ), còn cô Nathrrya, cô Darra và cô Selena ở lại với cô Padme. Vài phút sau, Rego, Vader, cô Nathrrya, và cô Meetra đã bắt được nữ thợ săn tên là Zam và Vader nhận được tầm nhìn là Zam chết rồi chặn phi tiêu và thấy là cô Aurra đã chạy trốn vì thất bại.</p>
<p>Vào buổi sáng hôm sau, ông Qui-Gon (ông ấy không còn là thầy nữa vì già nên nghỉ hưu) đến gặp Vader, Mirayya, cô Meetra, cô Darra, Rego với 2 vợ và cô Nathrrya, sau đó họ đến gặp ông Dooku để biết phi tiêu mà Aurra có thì ông Dooku trả lời ở hành tinh Geonosis. Vài giờ sau, ông Qui-Gon, Vader, Mirayya, cô Meetra, cô Darra, Rego với 2 vợ và cô Nathrrya đến hành Kamino để gặp đội Shadow Hunters, chú Revan và cô Bastila thì gặp được bạn cũ của cô Bastila (gồm cô Visas, chú Tarin (người yêu của Visas), ông Jolee, Zaalbar (Wookiee), chú Zayne và cô Jarael) và người yêu khác của chú Revan (gồm cô Mission Vao, cô Yuthura Ban Sith và cô Juhani Grey Jedi) (họ được đưa đến tương lai (trong truyện fanfiction tên là Past and Future Collide)). Sau đó cậu Anakin xem lính Clone Trooper và gồm có</p>
<p>đội Clone Trooper 18th của Mirayya có chủ lĩnh tên là Herc</p>
<p>đội Clone Trooper 21th của thầy Ki-Adi-Mundi có chủ lĩnh tên là Bacara,</p>
<p>đội Clone Trooper 27th của Tiplee có chủ lĩnh tên là Doom,</p>
<p>đội Clone Trooper 41st của cô Luminara và thầy Yoda có chủ lĩnh tên là Gree,</p>
<p>đội Clone Trooper 91st của cô Stass có chủ lĩnh tên là Neyo,</p>
<p>đội Clone Trooper 104th của thầy Plo có chủ lĩnh tên là Wolffe,</p>
<p>đội Clone Trooper 187th của Mace,</p>
<p>đội Clone Trooper 327th của cô Aayla có chủ lĩnh tên là Bly,</p>
<p>đội Clone Trooper 212th (đội đó có đội clone trooer 7th) của thầy Obi-Wan có chủ lĩnh tên là Cody,</p>
<p>đội Clone Trooper 501st của Vader có 3 chủ lĩnh tên là Appo, Vill và Bow với đội thưởng tên là Rex cùng chủ lĩnh Alpha-17 và chủ lĩnh Keller,</p>
<p>đội Clone Shock Trooper của chú Revan có 4 chủ lĩnh tên là Fox (anh ta là nghề công an), Stone, Thorn và Thire với 2 lính của mình gồm Jek và Rys,</p>
<p>đội ARC có thủ lính tên là Fordo,</p>
<p>đội Clone Assassin (lính nhân bản đó là sát thủ),</p>
<p>đội Delta Squad chỉ có 5 người gồm Gregor, Fixer, Scorch, Sev và chủ lính Boss.</p>
<p>Vài giờ sau, ông Qui-Gon, Rego, Mirayya, Vader và cô Darra đã đến hành tinh Geonosis và phát hiện ở đó có robot của Sith. 1 lúc sau, Rego bị súng chĩa vào lưng và nghĩ rằng là robot, nhưng hóa ra không phải là robot mà là cô gái tên là Lea Naberrie (trong truyện fanfiction tên là Never Gone) chị họ của cô Padme, sau đó Rego đưa cô Lea gặp Mirayya làm cô ấy vui vì chị họ còn sống. Vài giờ sau, ông Qui-Gon, Rego và cô Darra giết lính Geonosis, còn cô Lea và Mirayya giết người tạo robot là Ponudo (ông vua Geonosis) và Poggle của hành tinh Lesser trừ Wattambor, Shumai, Tikkes và Sanhill đã chạy thoát với quân đội robot từ Lucrehulk-class Droid Control Ship vì chúng bị tàu của Clone Trooper phá hủy (trong truyện fanfiction tên là A new start). Đúng lúc đó Vader ngồi chờ trong tàu và nhớ lại mấy tháng trước.</p>
<p>Mấy tháng trước Vader cầm 1 kiếm đỏ và gặp được bà giáo An’ya Kuno, bà giáo An’ya nói:</p>
<ul>
	<li>Thà, ra cháu là Vader mà thầy Yoda nói đến. Cháu có đầy đủ sức mạnh của lực lượng cơ đấy, nhưng sao cháu lại cầm kiếm đỏ?</li>
</ul>
<p>Vader trả lời:</p>
<ul>
	<li>Đây là kiếm cũ của cháu lấy từ M88-AD và để chứng minh cháu vượt qua Dark Side và đỏ này là của lính Sith từ 4000 năm trước, nhờ nó mà cháu bắn được điện hồng (trong truyện fanfiction tên là Star Wars Crosscurrent Betrayal) và màu đỏ ấy của Darth Maul.</li>
</ul>
<p>Vader tấn công và bà giáo An’ya ra đòn. Vài phút sau, bà giáo An’ya thấy Vader rút thêm kiếm đỏ thứ 2 rồi tấn công, bà giáo An’ya nói:</p>
<ul>
	<li>Cháu lấy thêm kiếm đỏ nữa sao? Vậy ra cháu có kiếm đỏ 2 đầu có thể chia đôi.</li>
</ul>
<p>Vài phút sau, bà giáo An’ya bị Vader để kiếm hình X trên cổ, nhưng bà giáo An’ya chui qua tường bằng bóng tối thoát khỏi kiếm của Vader rồi đá anh ta ngã xuống. Đúng lúc thầy Yoda gọi đủ làm bà giáo An’ya và Vader dừng lại, bà giáo An’ya hỏi Vader:</p>
<ul>
	<li>Phải rồi, sao cháu vẫn dùng tên Vader của Sith thế? Sao không để Jedi chúng ta gọi cháu là Anakin?</li>
</ul>
<p>Vader Trả lời:</p>
<ul>
	<li>Đó là tên mà mẹ cháu kể khi cháu trước khi ngủ còn nhỏ, anh ta là một chiến binh, sau đó bi kịch xảy ra và anh ta trở thành một con quái vật. Anh ta trở thành một lãnh chúa dưới quyền vua cao và bị tàn phá Vùng đất. Nhiều năm trước và một ngày nọ, anh ta bắt được một phiến quân trẻ tuổi, vị vua tối cao đã ra lệnh cho phiến quân được đưa đến trước ông và được xác định là con trai thất lạc của lãnh chúa. Vợ của lãnh chúa đã biến mất khi thời kỳ đen tối đến và lãnh chúa nghĩ rằng vợ anh ta đã bị giết bởi cuộc nổi loạn đã xuất hiện sau cuộc chinh phạt. Chàng trai cười và nói rằng vị vua tối cao đã sát hại cô và đổ lỗi cho phiến quân để lôi kéo lãnh chúa về phía mình dưới chiêu bài tìm kiếm sự báo thù. đã bị lãnh chúa chặn lại. Hai người đấu tay đôi và cuối cùng, vị vua tối cao đã bị đánh gục, nhưng lãnh chúa đã bị trọng thương. Anh ta nói với con trai về nỗi buồn của mình về những gì anh ta đã làm và cầu xin sự tha thứ. Anh ta chết, sau đó trong vòng tay của con trai anh ta cùng với vợ mình ở thế giới bên kia.</li>
</ul>
<p>Thầy Yoda và bà giáo An’ya rồi hiểu, bà giáo An’ya nói:</p>
<ul>
	<li>Thì ra đó là tên thích hợp trong truyện mà mẹ cháu kể nên cháu có thể giấu tên thật để không bị Sidious giở trò hả? Hiểu rồi. À, Phải rồi. Xin cháu đừng giết Aurra, vì cô ta là học sinh mất tích khi cô ta bị bắt cóc và cô ta nghĩ bà đã phản bội. Vì vậy, xin cháu giúp học sinh của bà hiểu cho.</li>
</ul>
<p>Mấy tháng sau, Vader im lặng rồi thấy cô Aurra xuất hiện đột ngột và tấn công bằng 1 kiếm thì Vader lấy 1 kiếm 2 đầu rồi chia đôi thành 2 kiếm tím và xanh da trời rồi chặn kiếm của cô Aurra, cô Aurra nói:</p>
<ul>
	<li>Oau, mi có kiếm tuyệt vời nhỉ? Kiếm đó sẽ là của ta.</li>
</ul>
<p>Vader đẩy nhanh và mạnh làm cô Aurra bị bay đi và bị kiếm của Vader gặt đầu làm cô Aurra điên lên, sau đó cô Aurra dùng lực đẩy làm Vader ngã lùi đập vào tường để cô Aurra cơ hội giết Vader, nhưng Vader kịp chặn kiếm của cô Aurra rồi đá cô ta làm cô ấy bị bay đập vào tường, cô Aurra rút kiếm thứ 2 rồi tấn công Vader, Vader giữ 2 kiếm của cô Aurra, nhưng cô Aurra dùng đầu đánh vào đầu Vader làm anh ta ngã, cô Aurra tóm cổ Vader và nói:</p>
<ul>
	<li>Mi nghĩ mi là Sith giỏi á? Mi đã phản bội Sith làm sao mi có thể thắng được ta khi ta là Sith mạnh hơn Jedi yếu buối của ngươi.</li>
</ul>
<p>Vader nói:</p>
<ul>
	<li>Đồ ngu, ta không phải là Jedi và cũng không phải là Sith, mà là Grey Jedi vì ta có 2 mặt sáng và tối.</li>
</ul>
<p>Vader nắm tiếc gậy rồi đánh vào đầu bên cạnh phải mặt cô Aurra từ bên phải và nói:</p>
<ul>
	<li>Xin lỗi nhé. Học sinh của bà giáo An’ya ạ. Nhưng ta bắt buộc bắt ngươi về để chủ của ta (cô Bastila) sẽ tra tấn ngươi.</li>
</ul>
<p>Vader nhìn cô Aurra đã ngất xỉu và chảy máu đầu bên cạnh phải mặt cô ấy vì đã bị đánh quá mạnh, đúng lúc Vader nhìn ra cửa sổ tàu vũ trụ thấy quân đội Clone Trooper đã tiêu diệt người Geonosis.</p>
<p>Vài giờ sau, bà giáo An’ya đang nghỉ ngơi rồi thấy học sinh của mình (cô Aurra) đã về và không còn là Sith nữa vì cô Bastila đã ăn bóng tối của cô Aurra làm bà giáo An’ya rất vui vì cô Aurra đã trở về rồi bà giáo An’ya và cô Aurra ôm nhau và khóc vì nhớ nhau. Ở hành tinh Naboo, cậu Anakin đã về và được con gái nuôi của mình Eliae Irunel Skywalker (trong truyện fanfiction tên là Darth Vader, Jedi Knight) chạy đến ôm lấy bố mình, sau đó cậu Anakin nhìn thấy 2 vợ của mình gồm cô Padme đang bế 2 em bé (em bé trai Luke và em bé gái Leia) (trong truyện fanfiction tên là Assassin) và cô Darrra em bé trai Jamie (trong truyện fanfiction tên là Rising Phoenix) đến gặp chồng của mình, sau đó 3 vwoj chồng cùng các con của mình đi đi vào nhà. Có điều này nghe nói mẹ của cậu Anakin có chồng tên là Darec Layson và có con gái của anh ta tên là Kia (trong truyện fanfiction tên là A Mother's Love).</p>
<p>Vào buổi tối, cậu Anakin nghĩ mình không chỉ có 1 Jedi là cô Darra vì có 8 Jedi khác có tình yêu gồm:</p>
<p>cặp thứ 1 là cậu Baxter Ling và y tá Minga Durron (trong truyện fanfiction tên là Back to the future),</p>
<p>cặp thứ 2 là cậu Kento Marek và cô Mallie Marek,</p>
<p>cặp thứ 3 là cậu Mak Lotor và cô Kass Tod,</p>
<p>cặp thứ 4 là cậu Lucas (trong truyện fanfiction tên là Anakin and Padme (Jedi and Sith)) và cô Skye.</p>
<p>Nhưng có những tuyệt vời là có Light Sith mới cũng có Force Jumper gồm:</p>
<p>4 đình Sith tên là Force Jumper giống cậu Anakin gồm </p>
<p>1 đình Zear Landers của cô bé Arianna Zear (tên viết tắt là Ari) có sức mạnh nước với bố tên là Jake Zear và mẹ tên là Katrina Zear,</p>
<p>2 đình Landers gồm cậu bé Riley Landers có sức mạnh tâm linh và cậu bé Skylar Landers có sức mạnh gió với bố tên là Johnny Landers và mẹ tên Sydney Landers,</p>
<p>3 đình Morgan của cậu bé Dustin Morgan có sức mạnh đất và đá với bố tên là Xander Morgan và mẹ tên Anna Morgan,</p>
<p>4 đình Hanson của cô bé bé Mina Hanson có sức mạnh băng với bố tên là David Hanson và mẹ Summer Hanson,</p>
<p>Và 1 cặp Jedi là cậu Whie Malreaux và cô Scout Malreaux.</p>
    </div>
  )
}

const MovieCloneWars2003Volume1 = () => {
  return (
    <div>
<h1>Movie Clone Wars (2003) - Volume 1</h1>
<p> </p>
<p>Vài tháng sau, chiến tranh clone bắt đầu, tất cả Jedi cùng với Clone Trooer đi tiêu diệt robot gắp thiên hà để cứu người vô tội, trong hội đồng Jedi và Light Sith, thầy Kaiser (Boss Shadow Hunters) suy nghĩ rồi nói với Yoda:</p>
<ul>
	<li>Thầy nghĩ chúng ta phải giết những người mà Padme đã nói gồm những bộ tộc tên là Neimoidian, Wattambor, Shumai, Tikkes và Sanhill.</li>
</ul>
<p>Thầy Yoda lo lắng rồi nói:</p>
<ul>
	<li>Nhưng thưa thầy, tại sao thầy phải giết những tên đó? Theo lệnh thủ tướng là bắt sống chúng để tòa án.</li>
</ul>
<p>Thầy Kaiser hỏi:</p>
<ul>
	<li>Bộ em nghĩ thầy là tên đần đó hả?</li>
</ul>
<p>Thầy Yoda giật mình và nói nhanh:</p>
<ul>
	<li>Không ạ! Nhưng…</li>
</ul>
<p>Thầy Kaiser nói:</p>
<ul>
	<li>Không nhưng gì hết. Theo thầy để chúng sống là chúng sẽ chạy thoát bởi Sith. Vì thế cách tốt nhất là giết chúng. Những tượng nghị sĩ ngoài Bail và Padme và Mon Mothma là những kẻ ngu không biết tốt hay xấu và chúng rất hền nát. Vì vậy, chúng ta sẽ đi chiến tranh tiêu diệt bọn xấu và cứu lấy người vô tội, nhưng theo thầy Anakin Vader sẽ là chỉ huy tối cao của lính Clone Trooer (trong truyện fanfiction tên là The Senator and the Supreme Commander), vì Anakin là người luôn biết cứu lấy người vô tội. Anakin, em hãy đến hành tinh Muunilinst cùng Obi-Wan giết Sanhill ở đó. Thầy luôn tin em.</li>
</ul>
<p>Cậu Anakin nói:</p>
<ul>
	<li>Vâng, thưa thầy. Em sẽ cố.</li>
</ul>
<p>Vào buổi sáng hôm sau, lính 501st và 212th lên tàu vũ trụ, Vader đến tàu chiến tranh Azure Angel (từ Delta-7 của R4-P22 mà cậu Anakin tạo ra) và Mirayya đến tàu chiến tranh Delta-7 của R2-D2 (Artoo), Vader nhìn Mirayya và cô ấy cũng nhìn Vader vì biết họ không cùng chiến tranh bởi Mirayya có việc với tượng nghị sĩ bạn mình là Bail và Mon Mothma.</p>
<p>Vài giờ sau hành tinh Muunilinst, Vader lái tàu chiến tranh Azure Angel với lính Clone Trooper lái tàu chiến tranh tấn công những kẻ địch lái tàu chiến tranh, còn dưới hành tinh Muunilinst có Rego mặc bộ Jedi đen cùng lính Clone Trooper tấn công và ra lệnh bắn vào nhà trung tâm thành phố bằng tên lửa từ xe tăng giết chết Sanhill và bộ tộc của hắn, nhưng Rego thấy có người còn sống là Durge rồi tấn công hắn cho đến khi Rego chặt bụng Durge đến chết rồi thấy thịt của hắn ở bụng nối với nhau làm Rego nhận ra Durge là Gen'Dai. Đúng lúc Clone Trooper bắn vào Durge liên trục làm hắn mất bộ giáp rồi tấn công Rego. Vài phút sau, thịt Durge bao phủ Rego, nhưng Rego sé thịt nổ tung Durge bằng lực đẩy xung quanh. Sau khi Rego và lính của mình đi và không biết là Durge còn sống vì các thịt của Durge bắt đầu liên kết với nhau. Vài giờ sau, Vader đã tiêu diện tàu vũ trụ của robot và đến gặp Rego và nói:</p>
<ul>
	<li>Cậu làm tuyệt lắm, và cậu đã giết Sanhill chưa?</li>
</ul>
<p>Rego trả lời:</p>
<ul>
	<li>Rồi, bằng tên lửa của xe tăng của tôi.</li>
</ul>
<p>Đúng lúc Vader thấy tương lai rằng 7 Jedi gặp nguy hiểm ở hành tinh Hypori làm anh ta và Rego lo lắng, sau đó Rego giao Vader đội ARC-77 của chủ lĩnh Fordo để đi cứu Jedi. Vài giờ sau, trong hành tinh Hypori, có tàu trở đội ARC-77 đang bao vào quân robot đang bao vây tàu đổ rồi bay qua quân robot và vào tào đổ, Vader yêu cầu ARC-77 đi cứu Jedi rồi bắt gặp thầy Ki-Adi-Mundi cầm kiếm xanh da trời của Aayla cố đấu với Grievous (Kaleesh) đang cầm kiếm xanh da trời của Daakman Barrek và kiếm xanh lá cây Sha'a Gi, sau đó ARC-77 đưa thầy Ki-Adi-Mundi đi an toàn và cứu được cô Shaak và cô Aayla rồi rút lui bằng tàu của mình như Vader đã dặn, còn Vader nhìn chằm chằm rồi điều kiển 4 cái kiếm (kiếm xanh da trời của Shaak, kiếm xanh da trời của Ki-Adi-Mundi, kiếm xanh lá cây thầy Berrek và kiếm xanh lá cây Tarr Seirr) hút chúng khỏi Grievous vào thắt lưng Vader trừ 2 kiếm của Daakman và Sha'a vì chúng bị Grievous giữ rồi rút lui bằng dịch chuyển, còn Grievous có 2 kiếm của Daakman và Sha'a, sau đó Grievous lẩm bẩm:</p>
<p>Vậy hắn ta là Vader ư? Thú vị đấy. Ta sẽ có xác hắn thôi.</p>
    </div>
  )
}

const StarWarsCloneWarsManga = () => {
  return (
    <div>
<h1>Star Wars: Clone Wars manga</h1>
<p> </p>
<p>Vài ngày sau ở hành tinh Kamino, Vader lái tàu chiến tranh Delta-7 của R4-P44 (Petey) 1 mình để bay vào tàu vũ trụ robot để phá hủy.</p>
<p>Vài ngày sau ở hành tinh Ohma-D'un, Vader và Rego đang giết robot và cứu người vô tội, Rego thấy Durge còn sống, sau đó Vader và Rego đánh với Durge cho đến khi lính Clone Trooper cứu hết người vô tội và giết hết robot thì Durge rút lui. Vài ngày sau ở hành tinh Legends, Vader đến gặp Durge rồi đánh nhau với hắn cho đến khi Vader ném bom vào bộ giáp của Durge làm hắn mất bộ giáp, sau đó Vader dùng lực đẩy đẩy Durge xuống sâu dung nham nóng chảy làm hắn ta chết. Vài ngày sau, Rego bị bắt cóc bởi 2 Sith của Sidious tên là</p>
<p>Darth Demonia (trong truyện fanfiction tên là The Chosen One Chronicles) và</p>
<p>Darth Uxmal (trong truyện fanfiction tên là Caught).</p>
<p>Vài ngày sau, Rego được cứu bởi thợ săn phản bội Sith tên là Taren Jykes, nhưng đáng ngạc nhiên vợ của Taren là em gái của mẹ của cậu Anakin tên là Kyra Skywalker và họ có con gồm con trai tên là Mernen và con gái tên là Ria (trong truyện fanfiction tên là A Mother's Love). Vài giờ sau, Obi-Wan mang gia đình Kyra về làm cậu Anakin ngạc nhiên mình có dì của mình và mẹ cậu ấy rất vui vì em gái an toàn trở về với gia đình mình.</p>
    </div>
  )
}

const StarWarsTheCloneWarsMovie2008Unknown = () => {
  return (
    <div>
<h1>Star Wars The Clone Wars Movie 2008 (Unknown)</h1>
<p> </p>
<p>Vài tháng sau, cậu Anakin có học sinh tên là Ahsoka và Obi-Wan có 4 học sinh gồm cậu Adenan Kornen (trong truyện fanfiction tên là Resurrection of the Father), cô Jenica Narak (trong truyện fanfiction tên là Here I Go Again), cậu N'erak và cô Bant (trong truyện fanfiction tên là One Day More), nhưng cậu Anakin dạy cô Ahsoka học kiếm và giúp cô ấy có 2 kiếm trắng.</p>
    </div>
  )
}

const MovieStarWarsTheCloneWarsTVSeries2008_2015Unknown = () => {
  return (
    <div>
<h1>Movie Star Wars: The Clone Wars (TV Series 2008–2015) (Unknown)</h1>
<p> </p>
<p>Nghe nói Pablo-Jill và Eeth Koth bị bắt gặp Grievous, sau đó Grievous giết Pablo-Jill và bắt Eeth làm con tin, nhưng Eeth được Vader cứu bằng dịch chuyển, còn Grievous có đủ 4 kiếm: kiếm xanh da trời của Daakman, kiếm xanh lá cây Sha'a, kiếm xanh da trời của Pablo-Jill, kiếm xanh lá cây của Eeth.</p>
<p>Vài ngày sau ở hành tinh Rishi moon, đáng lẽ ra là 5 lính ở Clone Trooper gồm</p>
<p>Clone Trooper Hevy,</p>
<p>Clone Trooper Droidbait,</p>
<p>Clone Trooper Echo,</p>
<p>Clone Trooper Cutup,</p>
<p>Clone Trooper Fives, nhưng được yêu cầu thêm 5 lính Clone Trooper gồm</p>
<p>Clone Trooper Jesse,</p>
<p>Clone Trooper Hardcase,</p>
<p>Clone Trooper Kix (doctor),</p>
<p>Clone Trooper Tup,</p>
<p>Clone Trooper Dogma, sau đó Vader đến thăm 10 Clone Trooper để bảo vệ vì thấy 3 người trong 10 Clone Trooper chết nên Vader cứu được đủ 10 Clone Trooper và họ đã làm được rất tốt và được tham gia Clone Trooper 501st.</p>
<p>Vài tháng sau, có sự xâm nhập Kamino của robot và lính Clone Trooper được Vader cùng Rego và Mirayya giúp Clone Trooper tiêu diệt robot, sau khi tiêu diệt robot xong và ban 9 lính Clone Trooper 501st gồm:</p>
<p>Clone Trooper Hevy,</p>
<p>Clone Trooper Droidbait,</p>
<p>Clone Trooper Echo,</p>
<p>Clone Trooper Cutup,</p>
<p>Clone Trooper Fives,</p>
<p>Clone Trooper Jesse,</p>
<p>Clone Trooper Hardcase,</p>
<p>Clone Trooper Tup,</p>
<p>và 2 lính Clone Trooper 212th gồm:</p>
<p>Clone Trooper Boil,</p>
<p>Clone Trooper Waxer</p>
<p>trở thành ARC.</p>
<p>Vài ngày sau, Mirayya cùng người ngoài hành tinh Gungan đối đầu Grievous, đầu tiên Mirayya chặt tay Grievous làm hắn không còn kiếm nào nữa, sau đó Grievous bị bắt bởi người ngoài hành tinh Gungan (trong truyện fanfiction tên là One Decision is All it Takes). Còn Vader đến hành tinh Vassek, sau đó Vader đã đến hang của Grievous chứa đầy chân tay người đều là máy móc và có EV-A4-D thì Vader sẽ có đội quân robot Grievous với 4 kiếm đỏ.</p>
<p>Vài tháng sau, nghe nói có 2 Jedi đã từ bỏ Jedi vì đã có vợ gồm thầy Quinlan Vos có vợ tên là Khaleen Hentz và thầy Nejaa Halcyon có vợ tên là Rakia Halcyon (Beloved Nemesis).</p>
<p>Trong khi đó nghe nói Sidious phát điên vì kế hoạch lúc nào thất bại vì cô Nathrrya đã lấy nhiều Sith gồm cậu Raze, cô Mirima, cô Malina, 2 jedi (cậu Suun Crane và cô Jarec) (5 người trong truyện fanfiction tên là Never Gone) và cô gái Sith acolyte Dahlia.</p>
<p>Vài tháng sau, ở hành tinh Neimoidia. Vader đã giết đồng bọn con lại của Nute Gunray, đúng lúc ở thế giới tồi tệ có cậu Luke Sith tên là Lord Talos (Vader &amp; Luke, Father &amp; Son) được đào tạo thừ Palpatien trẻ nhân bản, nhưng Talos mặc bộ quần áo đen và kiếm tự mình làm (trong truyện Star Wars: Dark Empire Trilogy information), Talos đã phản bội Palpatien và chạy trốn. Vài giờ sau trong hành tinh Ilum, Talos tìm thấy Kyber Crystal đỏ trong kiếm cách 4000 năm (trong truyện fanfiction tên là Path to Redemption) và cảm nhận tầm nhìn là Kyber Crystal đỏ của cậu Anakin mà cậu ấy có tự do, sau đó cậu Anakkin biến Kyber Crystal đỏ thành Kyber Crystal trắng khi cậu Anakin là Grey Jedi, sau khi Talos nhìn tầm nhìn về bố mình xong rồi nhận Kyber Crystal đỏ vào kiếm của mình thì anh ta có kiếm đỏ. Đúng lúc Talos bị lỗ không gian mở hút vào rồi Talos ngã xuống đến và thấy mình đang ở hành tinh Neimoidia và gặp Vader (trong truyện fanfiction tên là Test Of Time Book 1: A Father's Son) và bị Clone trooper 501st bao vây bắt. Vài giờ sao, Talos trả lời lời khai cho Vader và Rego và Mirayya làm họ nhận ra Talos ở thế giới tồi tệ mà Rego và Mirayya Vader đã đến rồi cho Talos sống với cậu Anakin và cô Padme mới ở thế giới tối đẹp của họ. Vài ngày sau, cậu Anakin được đưa đến Mortis gặp Father người đứng đầu của force wielder có 2 đứa con gồm ác quỷ tên là Son và nữ thần tenn là Daughter. Vài giờ sau, Father hy sinh bản thân mình (bằng cách để con trai mình giết trước khi Son giết Daughter (trong truyện fanfiction tên là Here I Go Again)) làm hòa 2 đứa con làm Son đã sai và được Daughter an ủi như em gái yêu quý anh trai mình. Vài phút sau, Daughter ban cho Anakin sức mạnh hồi sinh (trong truyện fanfiction tên là Resurrection of the Father) và ban sức mạnh cho cậu ấy có thể biến đổi thành Griffin giống Daughter biến đổi (trong truyện fanfiction tên là Transformed), sau đó Son quyết định nhận cậu Anakin làm vua cho Son (trong truyện fanfiction tên là Necessary Evil) và giúp cậu Anakin sức mạnh để Vader giết Lord Sith Sidious bằng điện hồng (bằng cách electric judgement kết hợp với bóng tối ra điện hồng (Skywalker A Fanon Story)), Vài giờ sau đó, cậu Anakin đã hồi sinh</p>
<p>chú Ro'wan (bố của cô Nathrrya),</p>
<p>cô Marrick (mẹ của cô Nathrrya),</p>
<p>cô Jaesa(học sinh của cô Nathrrya), </p>
<p>cậu Casavir(em trai họ của cô Nathrrya) và</p>
<p>cô Kira(vợ của cậu Casavir) làm cô Nathrrya rất vui vì gia đình mình sống lại.</p>
<p>Vài ngày sau, nghe nói người trong Clone Trooper có người yêu gồm:</p>
<p>cô Luminara yêu chủ lĩnh 41st Gree,</p>
<p>cô Bariss cũng yêu chủ lĩnh 212th Cody (trong truyện fanfiction tên là The Healer needs healing),</p>
<p>cô Aayla yêu chủ lĩnh 327th Bly (trong truyện fanfiction tên là Star Wars Order 65 (327th)),</p>
<p>cô Nonie yêu chủ lĩnh 21th Bacara,</p>
<p>cô Narawa yêu chủ lĩnh 104th Wolffex,</p>
<p>cô Stass yêu chủ lĩnh Neyo (vì anh ta luôn bảo vệ cô Stass),</p>
<p>cô Tiplee yêu chủ lĩnh Doom (vì anh ta luôn bảo vệ cô Tiplee),</p>
<p>ARC Trooper Echo tìm được người yêu của mình tên là Thea (cô ấy là người),</p>
<p>ARC Trooper Fives cũng tìm được người yêu của mình tên là Bella (Twi'lek) (trong truyện fanfiction tên là Awake &amp; Alive),</p>
<p>cô Naaviva (Twilek) (trong truyện fanfiction tên là Healing) yêu chủ lĩnh Herc,</p>
<p>cô Jaesa yêu chủ lĩnh Stone,</p>
<p>cô Meetra yêu chủ lĩnh Thire,</p>
<p>11 Twi'lek (11 cô gái đó là người cùng cô Narawa) đều đã chọn người yêu là ARC Trooper 501st (Hevy, Droidbait, Cutup, Jesse, Hardcase, Tup và Dogma trừ Echo và Fives) và ARC Trooper 212th (Boil và Waxer) và 2 người trong Clone Shock Trooper là Bow và Jek,</p>
<p>vì thế có 8 đội Clone Trooper tham gia đội 501st gồm:</p>
<p>đội Clone Trooper 18th của Mirayya,</p>
<p>đội Clone Trooper 21th của thầy Ki-Adi-Mundi,</p>
<p>đội Clone Trooper 41st của cô Luminara và thầy Yoda,</p>
<p>đội Clone Trooper 91st của cô Stass,</p>
<p>đội Clone Trooper 104th của thầy Plo,</p>
<p>đội Clone Trooper 327th của cô Aayla,</p>
<p>đội Clone Trooper 212th của thầy Obi-Wan,</p>
<p>đội Clone Shock Trooper của Revan</p>
<p>như đội 501st gấp 9 lần ban đầu, nhưng</p>
<p>cô Ahsoka cũng yêu đội thưởng Rex, cô Faith yêu chủ lĩnh Appo,</p>
<p>cô Aubrie yêu chủ lĩnh Alpha,</p>
<p>cô Jabitha (human girl) (trong truyện fanfiction tên là If Blood Be The Price) yêu chủ lĩnh Vill,</p>
<p>cô Tella (twi'lek girl) (trong truyện fanfiction tên là If Blood Be The Price) ) yêu chủ lĩnh Bow,</p>
<p>Layana (Twi'lek) (trong truyện fanfiction tên là Finding Coda) yêu bác sĩ Kix 501st doctor</p>
<p>thì đội 501st chỉ có chủ lĩnh thay thế là chủ lĩnh Ponds và chủ lĩnh ARC Fordo.</p>
<p>Vài ngày sau, cậu Anakin phát hiện thiếu tá Tarkin là người mang sự ngu ngốc nên hắn ta bị chủ lĩnh ARC Fordo bắt đi, còn cậu Anakin cứu được cô bé giỏi máy tính tên là Chelli Lona Aphra ăn cắp 2 robot nguy hiểm của thiếu tá Tarkin gồm robot chiến tranh tàn bạo tên là BT-01 và robot tra tấn tên là 0-0-0 hay được gọi là Triple-Zero.</p>
    </div>
  )
}

const MovieCloneWars2003Volume2 = () => {
  return (
    <div>
<h1>Movie Clone Wars (2003) - Volume 2</h1>
<p> </p>
<p>Vài tuần sau, Vader và Rego chạy vào ngôi đền Sith cũ và bắt gặp 2 Sith mà thầy Obi-Wan đã nói là Darth Demonia và Darth Uxmal thì Vader tấn công Darth Demonia và Rego tấn công Darth Uxmal, vài phút sau, Vader và Rego đã giết Darth Demonia và Darth Uxmal rồi gặp được linh hồn Sith tên là Rivan (trong truyện fanfiction tên là You Shall Become (Me)), sau đó linh hồn Rovan báo cho Vader Rego biết chắc chắn Darth Sidious sẽ đến vài tháng nữa. Và giờ sau, Vader và Rego đã về hành tinh Coruscant rồi thấy toàn bộ robot tấn công hành tinh Coruscant, sau đó Vader và Rego cùng đội quân Clone Trooper tấn công bọn robot trong thời gian kết thúc là toàn bộ robot không còn nữa và những đội quân Clone Trooper trừ 501st đã chết hết.</p>
    </div>
  )
}

const Movie3 = () => {
  return (
    <div>
<h1>Movie 3</h1>
<p> </p>
<p>Sau khi các vợ của thầy Obi-Wan (cô Siri, cô Selena, cô Sabe, cô Satine, cô Lea, Ticarti Mai (A Lighter Ending) và Bo-Katan Kryze (Mandalorian) (trong truyện fanfiction tên là Everyone You Love Is A Sith)) đều sinh ra con.</p>
<p>Vài ngày sau, Talos, Vader, Rego và Mirayya chạy vào ngôi đền Sith cũ và bắt gặp Darth Sidious như linh hồn Rivan đã nói. Linh hồn Rivan nói.</p>
<ul>
	<li>Sidious, ngươi là Sith yếu đuối. Vader, Rego và Mirayya là tên mà ta lấy cắp tên mà ngươi đã đặt tên khi Anakin, Obi-Wan và Padme trở thành Sith ở 3 tương lai riêng của họ khác nhau mà ta thấy. Ngươi chỉ là Sith yếu đuối, lý do ta đã nói với bố Anakin, thần Force. Thần Force đã nhận được thỏa thuật với ta.</li>
</ul>
<p>Darth Sidious hét:</p>
<ul>
	<li>Sao ngươi dám, ta là Sith mạnh nhất vũ trụ, không ai thắng được ta.</li>
</ul>
<p>Linh hồn Rivan nói:</p>
<ul>
	<li>Bị ngu hay sao? Ngươi lạm dụng học sinh của mình và muốn có học sinh mạnh nhất và loại bỏ học sinh cũ bằng cách phản bội. Nói cho mà biết Rego mới là người hoàng đế tốt nhất hơn ngươi. Giờ thì nói thế đủ rồi, chết.</li>
</ul>
<p>Sidious khởi động Sith Holocron thì nó vỡ ra và hiện lỗ thời gian mở ra và có cô Andrjin ine (Emperor's Wrath) (Red-Skinned woman) (trong truyện fanfiction tên là The Greatest Servant) xuất hiện, Vader nhận ra cô Andrjin được thần Force gửi đến, còn Sidious nhận sai lầm về Sith mà anh ta hồi sinh là Sith phản bội hoàng đế tên là cô Andrjin. Sau đó Talos, Vader, Mirayya và Rego cùng cô Andrjin tấn công Sidious như 5 chọn 1. Vader bắn điện hồng vào Sidious làm hắn bị cảnh giác ở phía sau có Mirayya cầm súng mà linh hồn Rivan đã cho bắn chết Mirayya. Sau đó linh hồn Rivan bắt linh hồn Sidious và mang hắn ta xuống địa ngục và tra tấn. Vài phút sau, cô Andrjin đưa linh hồn Rivan trong Sith Holocron để mang theo, còn Talos giao kiếm của mình cho Vader để cho cậu bé Luke rồi cầm bom hạt nhân để chết trong ngôi đền Sith cũ và phá hủy ngôi đèn đó vì biết anh ta không thuộc thế giới như quá khứ và dù cậu Talos vui về được ở với bố mẹ mình trong 1 năm (trong truyện fanfiction tên là The 'F' Word).</p>
<p>Vài giờ sau, cậu Anakin, thầy Obi-Wan và cô Padme đã trở về, 2 Synthetic Crystals Red (Crystals đó có thể biến đổi theo lực lượng: xanh lá cây của lực lượng Jedi &amp; đỏ của lực lượng Sith &amp; trắng của lực lượng Grey Jedi) của Sidious biến thành Synthetic Crystals White khi cậu Anakin đã làm.</p>
<p>Vài ngày sau, thầy Obi-Wan không còn là giáo viên nữa và nghỉ hưu rồi trở thành chủ tướng của hành tinh Coruscant, còn cậu Anakin đến gặp 20 đứa trẻ Jedi đang bị xỉu hết và các giáo viên Jedi đã cố cứu bọn trẻ Jedi, cậu Anakin nhận ra bọn trẻ được đưa đến thế giới tồi tệ thì cậu Anakin và cô Padme và cô Andrjin với đội quân 501st tham gia với bọn trẻ đến thế giới tồi tệ. Trong thế giới tồi tệ ở các hành tinh khác có đội 18th, đội 21th, đội 41st, 91st, đội 104th, đội 327th, 212th, đội Clone Shock Trooper trong đội 501st giết chết đội phản bội có lệnh 66 và chủ lĩnh của chúng (trong truyện fanfiction tên là Anakin saved the Jedi Order), còn đội 501st giết đội thưởng và chủ lĩnh của mình phản bội. Trong khi đó ngoài hành tinh Coruscant có tàu vũ trụ của Clone Shock Trooper, trong tàu của Clone Shock Trooper có Vader trốn trên mái phòng chờ chủ lĩnh Clone Shock Trooper (Fox), khi chủ lĩnh Fox đã vào phòng thì bị Vader vồ lấy từ trên xuống dưới. Vài phút sau, chủ lĩnh Fox (cậu Anakin hóa trang) đi qua phòng rồi vào phòng liên lạc gọi đội 501st, sau khi chủ lĩnh Fox gọi đội 501st và nhận được đội đó và nghe họ nói rằng sắp đến rồi, đúng chủ lĩnh Fox thấy lính Shock phát hiện chủ lĩnh của mình giả mạo thì chủ lĩnh vừa chạy vừa bắn súng giết Shock cho đến khi đã vào phòng ra rồi khóa cửa lại để không cho lính Shock đến bắt. Khi lính Shock nhìn ra của sổ từ cửa ra, chủ lĩnh Fox bấm nút để của tàu vũ trụ Shock smở, trước khi chủ lĩnh Fox ra là giơ tay chào như 1 người lính. Khi của tày vũ trụ Shock mở thì chủ lĩnh Fox bị hút ra khỏi tàu vũ trụ Shock và lao đến tàu vũ trụ của 501st vừa xuất hiện và mở của thì chủ lĩnh Fox bay vào cửa tàu vũ trụ của 501st, đúng lúc tàu vũ trụ 501st bắn chết tàu vũ trụ Shock. Vài giờ sau, Vader đến ngôi đèn Jedi để cứu 20 đứa trẻ Jedi (trong truyện fanfiction tên là The life of Zett Jukassa) rồi cùng chạy ra khỏi nguy hiểm và gặp được chủ lĩnh ARC Fordo, chủ lĩnh ARC Fordo nói:</p>
<ul>
	<li>Lính của chúng tôi đang tàu ở đó, chúng ta rời khỏi đây. Phải rồi, chúng ta đã giết đội đội 27th rồi, còn đội đội 187th nữa là hết lính Clone Trooper phản bội.</li>
</ul>
<p>Vài phút sau, Mirayya và chủ lĩnh ARC Fordo đã đưa 20 đứa trẻ Jedi vào tàu vũ trụ ARC khi 9 lính ARC bắn chết đội 187th khi chúng đã đến, còn cô Andrjin rút 1 kiếm đỏ và Vader rút 2 kiếm tím xanh da trời giết hết đội 187th rồi chạy vào tàu vũ trụ ARC. Vài phút sau, tàu vũ trụ ARC bay vào tàu vũ trụ 501st rồi tàu đó trốn khỏi hành tinh Coruscant.</p>
<p>Vài tháng sau, Vader và đội 501st Order 66-S giết hết đội Clone Trooper Order 66 và có R2-Q5 và R5-J2 (trong phim movie 4), sau đó Vader, Mirayya và cô Andrjin giết hết đồng bọn của Dark Mace (gồm Adi, Barriss, Cin, Depa, Ki-Adi-Mundi, Korun, Luminara, Saesee và Yoda), cuối cùng Vader nghe nói tên thật của Dark Mace là Darth Salus (trong truyện fanfiction tên là Fall of the Sith), trong khi đó  Vader yêu cầu đội 501st bắt hết các tượng nghị sĩ xấu xa tham lam (trong truyện fanfiction tên là Through The Darkest Nights) trừ Bail đã chết trong tay Mirayya và Mon Mothma đã thoát để tạo quân nổi dậy. Vài phút sau, Vader chuẩn bị giết Darth Salus thì thấy hắn ta bị giết phía sau bởi kiếm đỏ của cô gái tên là Darth Petra đã phản bội Sith và trở lại tên cũ là Tarra Havanis, cô Tarra lảo đảo vì không tin được thầy của mình (Montu Kijek) đã phản bội bởi lạm dụng giết tre em vô tội, đúng cậu Anakin đỡ cô Tarra vì cô ấy khóc. Vài phút sau, tên mái ngôi đền Jdi có 1 lính ARC lái ôtô bay bay đến và thả dây để đón cậu Anakin, trong khi đó cô Tarra đã lấy kiếm xanh ra trời của mình và dùng tên Petra khi trở thành Dark Jedi, sau đó Vader và Petra bám lấy dây để 1 lính ARC lái ôtô bay bay kéo dây để trở Vader và Petra ra khỏi ngôi đền Jedi trước khi nhà đó bị nổ.</p>
    </div>
  )
}

const Movie4 = () => {
  return (
    <div>
<h1>Movie 4</h1>
<p> </p>
<p>Vài năm sau, Vader, Mirayya và cô Andrjin đã giết hết 12 Sith Inquisitorius có kiếm 2 đầu có thể quay như quạt quay, sau đó Vader có 3 con ID9 của Seventh Sister rồi nâng cấp chúng thành ID10, còn cô Tarra có con và được gửi đến thế giới tốt đẹp của cậu Anakin và cô Padme để an toàn.</p>
<p>Vài năm sau, cô Pooja (con gái của chị gái Padma) có 3 đứa con của cậu Anakin (gồm</p>
<p> </p>
<p>Jay Skywaler (con trai 9 tuổi) (trong truyện fanfiction tên là Son of Destiny)</p>
<p> </p>
<p>Shmi Skywaler (con gái  9 tuổi) (trong truyện fanfiction tên là Always In the Hands Destiny)</p>
<p> </p>
<p>Padme Skywaler (con gái 9 tuổi) (trong truyện fanfiction tên là Always In the Hands Destiny và tên là Son of Destiny)</p>
<p>) và được gửi đến thế giới tốt đẹp của cậu Anakin và cô Padme để an toàn. Còn cô Padme có 16 đứa con của cậu Anakin (gồm:</p>
<p>Luke Talos Skywaler (con trai 23 tuổi) (cậu ấu có tên Talos có ngĩa là khi cậu ấy 22 tuổi có bộ nhớ của Lord Sith trở lại như sống lại có kiếm trắng)</p>
<p> </p>
<p>Leia Anna Skywaler (con gái 23 tuổi) (trong truyện fanfiction tên là Darth Vader Agent of the Rebellion) (cô ấy rất giỏi và vượt qua bóng tối nên cô ấy có kiếm tím)</p>
<p> </p>
<p>Shmi Skywaler (con gái 18 tuổi) (trong truyện fanfiction tên là SURVIVAL OF THE JED)</p>
<p> </p>
<p>Lola (con gái 19 tuổi) (trong truyện fanfiction tên là Anakin is Staying in the Light Book (Jedi Master Lulu))</p>
<p> </p>
<p>Kyla Skywaler (con gái 19 tuổi) (trong truyện fanfiction tên là Through The Darkest Nights)</p>
<p> </p>
<p>Grace Skywaler (con gái 19 tuổi) (trong truyện fanfiction tên là Darth Vader Agent of the Rebellion)</p>
<p> </p>
<p>Kenobi Skywaler (con trai 18 tuổi) (trong truyện fanfiction tên là SURVIVAL OF THE JEDI)</p>
<p> </p>
<p>Ben Skywaler (con trai 18 tuổi) (trong truyện fanfiction tên là Darth Vader Agent of the Rebellion)</p>
<p> </p>
<p>14 Cade Skywaler (con trai 17 tuổi) (trong truyện fanfiction tên là Broken Trust and Broken Spirits)</p>
<p> </p>
<p>Owen Jinn Skywaler (con trai 16 tuổi) (trong truyện fanfiction tên là Darth Vader Agent of the Rebellion)</p>
<p> </p>
<p>Benlla Shmi Skywaler (con gái 16 tuổi) (trong truyện fanfiction tên là Darth Vader Agent of the Rebellion)</p>
<p> </p>
<p>Vima Skywalker (con gái 15 tuổi) (trong truyện fanfiction tên là Shadows of Light and Darkness)</p>
<p> </p>
<p>Louis Skywalker (con trai 14 tuổi) (trong truyện fanfiction tên là Anakin is Staying in the Light Book (Jedi Master Lulu))</p>
<p> </p>
<p>London Skywalker (con gái 14 tuổi) (trong truyện fanfiction tên là Anakin is Staying in the Light Book (Jedi Master Lulu))</p>
<p> </p>
<p>Lance Skywalker (con trai 14 tuổi) (trong truyện fanfiction tên là Anakin is Staying in the Light Book (Jedi Master Lulu))</p>
<p> </p>
<p>Amidala Skywaler (con gái 8 tuổi) (trong truyện fanfiction tên là Heart of a Sith)</p>
<p>). Hiện nay đội phi công Clone Trooper cùng cậu Anakin lái cầu vũ trụ chiến tranh đã tiêu diệt 2 tàu khổng lồ Death Start.</p>
    </div>
  )
}

const Movie5 = () => {
  return (
    <div>
<h1>Movie 5</h1>
<p> </p>
<p>Sau 3 năm cậu Anakin và cô Padme có con thứ 17 là Anakin Skywaler (con trai 2 tuổi) (trong truyện fanfiction tên là Remade). Cậu Anakin và cô Andrjin đánh nhau với Palpatine trẻ, cuối cùng thì cậu Anakin và cô Andrjin đã giết Palpatine trẻ.</p>
    </div>
  )
}

const Movie6 = () => {
  return (
    <div>
<h1>Movie 6</h1>
<p> </p>
<p>Vài tháng sau, cậu Anakin, cô Padme, cậu Luke và cô Andrjin đã giết hết quân nổi dậy của Mon Mothma, còn cô Leia Skywalker gặp được cô Leia Organa (cô ấy cầm kiếm xanh da trời có hình dạng là kiếm của Luke từ Obi-Wan và Crystal của cô ấy từ Bail) thì cô Leia Skywalker và cô Leia Organa đánh nhau cho đến khi Form VII thì cô Leia Organa bị bóng tối nuốt chửng gần như trở thành Dark Jedi và bị cô Leia Skywalker giết.</p>
<p>Vài ngày sau, cậu Anakin theo dõi thành phố của hành tinh Coruscant  giờ thế giới tồi tệ không còn tồi tệ và những người xấu không còn tồi tại nữa, đúng lúc cậu Anakin nghe thấy thần Force gọi:</p>
<ul>
	<li>Con trai. Giờ thế giới tồi tệ này không còn tồi tệ nữa, bố sẽ kết hợp 2 thế giới này và thế giới của con sẽ kết hợp với nhau. Và nhớ khi trở về nhà và gặp mẹ con và nói với mẹ con rằng bố chào mẹ con và yêu mẹ con.</li>
</ul>
<p>Cậu Anakin im lặng rồi mỉm cười và nước mắt chảy ra rồi nói:</p>
<ul>
	<li>Vâng, bố. Con rất vui vì đã gặp bố và cảm ơn.</li>
</ul>
<p>Đúng lúc thế giới tồi tệ lóe sáng và kết hợp với thế giới của cậu Anakin trở thành thế giới tốt đẹp. Vào buổi tối, cậu Anakin với 4 vợ (gồm cô Padme, cô Darra, cô Tarra và cô Pooja) và các con họ đi chơi, có điều này là cô Leia có người yêu là Han và cậu Luke có 5 người yêu là cô Mara Electra Jade (Electra là tên khi cô Mara là Sith) (trong truyện fanfiction tên là Star Wars- Truth Behind Lies), cô Winter, 2 Kira Organa (con gái của chú Bail và cô Breha) (trong truyện fanfiction tên là Never Gone) và 2 con gái của Piett (cô Irelda và cô Ylla).</p>
    </div>
  )
}

const Movie7 = () => {
  return (
    <div>
<h1>Movie 7</h1>
<p> </p>
<p>Cậu Anakin có vợ thứ 5 là cô Jedi tên là Tracy (trong truyện fanfiction tên là STAR WARS THE RE BALANCE) có 7 đưa con gồm:</p>
<p>Con trai tên là Bartlet,</p>
<p>Con gái tên là Karone,</p>
<p>Con gái tên là Egil,</p>
<p>Con trai tên là Waston,</p>
<p>Con trai tên là Zeb,</p>
<p>Con trai tên là Obi-Wan,</p>
<p>Con gái tên là Bridget.</p>
<p>Hiện giờ 7 đưa con Anakin cùng cô Andrjin giết hết bọn lính Stormtrooper của con thứ 4 của Leia là con trai út phản bội tên là Ben Solo có tên của Sith là Kylo Ren để cứu người vô tội.</p>
<p>Vài ngày sau, cô Andrjin đến ngôi đền cũ thì thấy ánh sáng lạ xuất hiện rồi tắt lộ ra là cậu Anakin, nhưng tên họ của cậu ấy không còn là Skywalker của mình là nữa mà là tên họ cũ là Starkiller vì thần Force trả lại cho Anakin Skywalker bộ nhớ của Anakain Starkiller từ 40000 năm trước làm cô Andrjin ngạc nhiên mình gặp được Anakain Starkiller ở thời đại của mình.</p>
    </div>
  )
}

const Movie8 = () => {
  return (
    <div>
<h1>Movie 8</h1>
<p> </p>
<p>Vài phút sau, cậu Anakin xem kiếm của mình có bao nhiêu kiếm [gồm:</p>
<p>7 kiếm từ Dragon Krayt (đen, xanh da trời, xanh lá cây, hồng, đỏ, trắng, vàng)</p>
<p>6 kiếm từ Corusca Gems (4 xanh da trời, xanh lá cây và tím (violet))</p>
<p>2 kiếm Starkiller (xanh da trời (Crystal Ankarres Sapphire) và tím (Ebon Crystal Violet))]</p>
<p>Vài ngày sau, cậu Anakin và cô Andrjin đến tàu vũ trụ của vua Snoke thì gặp được hắn và cậu Kylo. Vài phút sau, cô Andrjin đã giết chết vua Snoke vì hắn không có kiếm, còn cậu Kylo nhìn cậu Anakin rồi nói:</p>
<ul>
	<li>Là ông sao? Sao ông trẻ thế?</li>
</ul>
<p>Cậu Anakin trả lời:</p>
<ul>
	<li>Là ông đã chết vì già và sống lại thành trẻ.</li>
</ul>
<p>Cậu Kylo hỏi:</p>
<ul>
	<li>Ông định cản cháu ư?</li>
</ul>
<p>Cậu Anakin im lặng rồi trả lời:</p>
<ul>
	<li>Không. Là ông đến giết cháu phản bội gia đình.</li>
</ul>
<p>Cậu Kylo bật kiếm có hình dáng như lửa và cậu Anakin bật kiếm xanh da trời từ Adegan Crystals, sau đó cậu Kylo chạy đến chém đầu cậu Anakin và cậu ấy cúi đầu rồi đánh vào lưng làm cậu Kylo nghã rồi tấn công tiếp. Khi cậu Kylo chém đi chém lại và cậu Anakin tránh đi tránh lại cho đến khi chặt tay cậu Kylo làm cậu ấy yếu đi. Sau đó cậu Anakin tóm cổ cậu Kylo rồi chặt cổ. cuối cùng thì cậu Anakin ra ngồi ghế ngai vàng trở thành vua làm lính Stormtrooper sợ quá rồi quỳ xuống chào mừng vua mới là cậu Anakin Starkiler.</p>
    </div>
  )
}



const AnakinPast_OnceUponATime = () => {
  return (
    <div>
      <p>Trong Death Star có Darth Vader và cậu Luke đánh nhau và thua cậu ấy, nhưng cậu Luke bị Palpatine bắn điện, còn Darth Vader xem con trai mình bị chủ của mình bắn điện rồi tóm chủ của mình mang ra và chịu đựng bị điện, Palpatian hét lên và bắn điện vào Darth Vader:</p>
      <ul>
        <li>Ngươi dám phản bội ta?</li>
      </ul>
      <p>Darth Vader nói:</p>
      <ul>
        <li>Ta không cho ngươi giết hại con trai ta.</li>
      </ul>
      <p>Darth Vader ném Palpatine rơi xuống vào lò phản ứng. Vài phút sau, cậu Luke cố đưa Darth Vader đi, nhưng Darth Vader sắp chết vì máy nhịp tim bị hỏng bởi điện từ Palpatine, cậu Luke khóc và nói:</p>
      <ul>
        <li>Không… Con không muốn mất bố… Con muốn bên bố…</li>
      </ul>
      <p>Darth Vader nói:</p>
      <ul>
        <li>Con đã có… Hộp… Con đã đúng… Hộp… Nhưng bố không thể sống… Hộp… Do bố đã giết hết người vô tội… Hộp… Bố phải chết… Hộp… Để tội lỗi… Hộp… Hãy hứa với bố… Hộp… Con hãy sống sót… Hộp… Để tạo ra Jedi mới… Hộp… Bố yêu con… Hộp… Con trai yêu quý của bố… Hộp… Vĩnh biệt con…</li>
      </ul>
      <p>Darth Vader nói xong rồi chết. Đúng lúc Darth Vader mở mắt ra thấy mình lơ lửng trong cõi âm như trong không gian, Darth Vader thấy thầy Qui-Gon đến gặp cậu Anakin làm Darth Vader trở thành cậu Anakin, thầy Qui-Gon nói:</p>
      <ul>
        <li>Xin lỗi cháu vì đã chết sớm và để cháu đau khổ, lẽ ra thầy phải sống để bên cháu thì cháu có thể hạnh phút.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Không sao, thầy không biết đâu, cháu đã phát hiện ra đó là âm mưu của tên khốn Palpatine. Giá như cháu quay về quá khứ để thay đổi tương lai. Nhưng có phải cháu trở thành Sith do tình yêu không?</li>
      </ul>
      <p>Thầy Qui-Gon nói:</p>
      <ul>
        <li>Không, Palpatine đã nhìn tầm nhìn của mình và sử dụng giấc mơ của cháu làm cháu và cản tầm nhìn tự nhiên.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Chắc cháu không trở thành Jedi.</li>
      </ul>
      <p>Đúng lúc Yoda đến và nói:</p>
      <ul>
        <li>Xin lỗi em, thầy đã để em rơi vào khủng khiếp, thầy đang bị thần Force phạt và định đưa em đi về quá khứ.</li>
      </ul>
      <p>Cậu Anakin hỏi:</p>
      <ul>
        <li>Ngươi đang ở đây thì tên khốn Obi-Wan cũng ở đây à?</li>
      </ul>
      <p>Thầy Yoda trả lời:</p>
      <ul>
        <li>Không, Obi-Wan bị thần Force phạt rơi xuống địa ngục cả Mace cùng thầy cũng thế vì tội hại con trai mình.</li>
      </ul>
      <p>Cậu Anakin nhạc nhiên rồi hỏi:</p>
      <ul>
        <li>Con trai thần Force? Không lẽ…</li>
      </ul>
      <p>Thầy Qui-Gon trả lời:</p>
      <ul>
        <li>Phải, là cháu đấy.Nhưng có vẫn đề là khi cháu được quay về quá khứ thì thần Force phải biến bộ nhớ của cháu thành tầm nhìn tất cả.</li>
      </ul>
      <p>Thầy Yoda nói:</p>
      <ul>
        <li>Và em đi tìm lightsaber crystal (pha lê ánh sáng) đỏ thẫm trong hành tinh Ilum và cháu có thể biến nó thành Grey Jedi, vì nó ban đầu là màu xanh lá cây, nhưng nó thành đỏ thẫm bị thương có máu thì gọi là pha lê máu nên thành đỏ thẫm như máu, nó ngay ở trận chiến trong hang sâu nhất (trong truyện fanfiction tên là Path to Redemption), nếu em muốn rời Jedi sớm thì cứ làm đi và hãy yên tâm, thần Force đã quyết định giúp em và không giúp Jedi chúng ta.</li>
      </ul>
      <p>Cậu Anakin im lặng nhìn thầy Qui-Gon và thầy Yoda rồi nhìn chỗ khác và nghĩ, sau đó nhìn thầy Qui-Gon và thầy Yoda và nói:</p>
      <ul>
        <li>Em hiểu rồi, vì vậy tương lai mọi người ở đây sẽ không tồi tại vì em thay đổi tương lai. Được rồi, em sẵn sàn đây.</li>
      </ul>
      <p>Thần Force xuất hiện trước mặt cậu Anakin:</p>
      <ul>
        <li>Con trai của ta, ta xin lỗi vì ta không giúp con, vì vậy ta sẽ chịu trách nhiệm giúp con.</li>
      </ul>
      <p>Thần Force giơ tay trước mặt cậu Anakin rồi lóe sáng.</p>
      <p>Trước 38 năm ở hành tinh Tatooine có cậu bé Anakin 7 tuổi (Skywalker: A Fanon Story) đang làm việc và vào buổi tối nào cậu Anakin tập luyện với thần Force nói trong đầu.</p>
      <p>Sau 2 năm cậu Anakin gặp được thầy Qui-Gon và cô Padme. Vào buổi tối, cô Padme đứng ngoài ban công thì thấy cậu Anakin đến hỏi:</p>
      <ul>
        <li>Chị không ngủ à?</li>
      </ul>
      <p>Cô Padme nói:</p>
      <ul>
        <li>À, chị lo cho gia đình chị vì hành tinh của chị bị…</li>
      </ul>
      <p>Cô Padme không kịp nói hết vì cậu Anakin đã nói:</p>
      <ul>
        <li>Hành tinh Naboo của chị bị bọn robot tấn công, đúng không hả nữ hoàng Naboo?</li>
      </ul>
      <p>Cô Padme nghe vậy làm cô ấy lo rồi hỏi:</p>
      <ul>
        <li>Sao em biết?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Vì thế này.</li>
      </ul>
      <p>Cô Padme thấy mình và cậu Anakin bay lên như bị điều khiển làm cô Padme sợ nên cô ấy ôm lấy cậu Anakin, nhưng cậu Anakin yêu cầu cô Padme nhìn lên trời có ngôi sao rất đẹp, cậu Anakin nói:</p>
      <ul>
        <li>Em đã học được điều khiển bản thần mình để đưa lên trời để ngắm sau mỗi đêm.</li>
      </ul>
      <p>Cậu Anakin đưa mình và cô Padme hạ xuống ban công và cô ấy thở hổn hển rồi hỏi:</p>
      <ul>
        <li>Em lừa chị để đưa chị lên trời làm chị sợ hả?</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Xin lỗi, em muốn cho chị biết vì sao em biết chị là nữ hoàng Naboo do em có tầm nhìn. Vì vậy em nên quý trọng chị.</li>
      </ul>
      <p>Cô Padme cầu xin:</p>
      <ul>
        <li>Xin em đừng lịch sự như thế và đừng nói cho ai biết…</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Yên tâm, em luôn muốn giúp chị vì chị dễ thương.</li>
      </ul>
      <p>Cô Padme hỏi:</p>
      <ul>
        <li>Vậy em nhìn thấy chị như thế nào trong tầm nhìn?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Mặc váy đỏ và bị robot kiếm lấy hành tinh của mình và được 2 Jedi thầy em cứu.</li>
      </ul>
      <p>Cô Padme nói:</p>
      <ul>
        <li>Tuyệt vời, em là jedi phải không?</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Chưa, em vẫn là người dân và chưa có Jedi nào đưa đi, nhưng dù sao chị nên đi ngủ đi.</li>
      </ul>
      <p>Cô Padme bắt đầu buồn ngủ và nói:</p>
      <ul>
        <li>Em nói phải.</li>
      </ul>
      <p>Cô Padme đi về phòng ngủ để đi ngủ, còn cậu Anakin im lặng rồi nói:</p>
      <ul>
        <li>Qui-Gon, chú nghe trộm là bất lịch dự đấy. Ra mặt đi.</li>
      </ul>
      <p>Thầy Qui-Gon xuất hiện và nói:</p>
      <ul>
        <li>Chú có thể cảm thấy lực lượng từ cháu nên đến gặp cháu thì thấy cháu điều khiển bản thần và Padme khiến các cháu bay lên, cháu đã được ai dậy thế.</li>
      </ul>
      <p>Cậu Anakin kể:</p>
      <ul>
        <li>Sức mạnh đã thức tỉnh cách đây 2 năm, khi cháu muốn giết tên khốn thì chúng bị rơi vào lò vì tội của hắn đê dọa là sẽ giết mẹ cháu.</li>
      </ul>
      <p>Thầy Qui-Gon im lặng và ngạc nhiên sức mạnh lực lượng của cậu bé Anakin thức tỉnh khi cậu bé đó bị bọn khốn nào đê dọa rồi nói:</p>
      <ul>
        <li>Xin lỗi. nhưng nếu cháu có năng khiếu trong lực lượng, cháu cần được đào tạo.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Xin lỗi, cháu từ chối.</li>
      </ul>
      <p>Thầy Qui-Gon hỏi:</p>
      <ul>
        <li>Tại sao vậy?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Jeid tin rằng cảm xúc là 1 điểm yếu. Đó là lý do cháu không thể được đào tạo 1 Jedi và cũng không thể là Sith, họ quá ích kỷ cho thị hiếu của cháu</li>
      </ul>
      <p>Thầy Qui-Gon nói:</p>
      <ul>
        <li>Nhưng cháu phải được đào tạo theo 1 cách nào đó.</li>
      </ul>
      <p>Cậu Anakin hỏi:</p>
      <ul>
        <li>Tại sao?</li>
      </ul>
      <p>Thầy Qui-Gon trả lời:</p>
      <ul>
        <li>Bời vì có 1 lời tiên tri, 1 câu chuyện về 1 đứa trẻ của Force mang lại sự cân bằng cho nó. Và thông qua hành động của mình, hòa bình sẽ ngự trị và cuối cùng Jedi sẽ đánh bại Sith.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Sai rồi, Force không chọn phe Jedi chính, chính là vậy. Vì vậy, để mang sự cân bằng cho Force, nó có thể không phải là con số không đáng kể của Sith phải đi, mà là Jedi thảnh thơi và thắn đã biến thành từ những tu sĩ tâm thành những con chó tấn công của cộng hòa. Đó không phải là sự cân bằng thực sự sao? Cái đó dành cho Grey Jedi.</li>
      </ul>
      <p>Cậu Anakin nói xong rồi đi ngủ để lại thầy Qui-Gon 1 mình ngạc nhiên hóa ra sự cân bằng cho Force chỉ dành cho Grey Jedi.</p>
      <p>Vào buổi sáng hôm sau, thầy Qui-Gon gặp cậu Anakin và nói:</p>
      <ul>
        <li>Cháu nói đúng hóa ra sự cân bằng cho Force chỉ dành cho Grey Jedi và sự cân bằng không có nghĩa là sự hủy diệt của Sith, mà là sự cân bằng thực sự. Jedi không phải là thứ họ từng là… Và bản thân chú đã có nhiều nghi ngờ về độ tin cậy của họ. Và nếu cháu là người được chọn thì có lẽ định mệnh củ cháu thật sự mang lại sựu cân bằng cho Force. Chú đã nghe mẹ cháu nói rằng cháu được sinh ra mà không có bố thì chứng tỏ cháu là người được chọn. Nhưng cháu không muốn học Jedi thì chú sẽ thầy của cháu dậy cháu Grey Jedi vì Obi-Wan sắp trở thành Knight rồi.</li>
      </ul>
      <p>Cậu Anakin im lặng rồi thấp nhận:</p>
      <ul>
        <li>Vâng, cảm ơn.</li>
      </ul>
      <p>Vài giờ sau, sau khi thầy Qui-Gon rời khỏi Darth Maul khi tàu cất cánh, đúng lúc cậu Anakin nhìn ra cửa sổ nhìn Darth Maul với đôi mắt lạnh lùng, còn Darth Maul cảm thấy ai đó (ai đó mà hắn ta không biết đó là cậu Anain) đang nhìn mình. Vài giờ sau, ở hành tinh Coruscant, các Jedi thấy cậu Anakin có vẻ không tin tưởng Jedi vì không tin thầy Qui-Gon đã bắt gặp Sith còn tồn tại và cậu Anakin có điện và tên là Electric Judgement, còn cậu Anakin nói rằng cậu ấy được dậy từ Jedi kiếm trắng (cậu ấy nói dối vì không muốn nói về bố mình( thần Force)). Vào buổi tối, cậu Anakin vào phòng tập luyện chứa nhiều kiếm để tìm kiếm, nhưng thầy Yoda đã đến và hỏi:</p>
      <ul>
        <li>Sao cháu lại trong này?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Cháu cần kiếm để đề phòng vì sợ Sith sẽ bắt cháu nếu hắn giết được chú Qui-Gon và anh Obi-Wan, vì cháu đã thấy hắn đã gặp chú Qui-Gon khi rời khỏi hành tinh Tatooine rất trùng hợp trong mơ nên cháu nghĩ cháu có tầm nhìn vì thấy đúng là chú Qui-Gon đến hành tinh Tatooine. Nhưng 1 lần nữa là cháu thấy tầm nhìn là Qui-Gon chết trong tay Sith.</li>
      </ul>
      <p>Thầy Yoda im lặng rồi hỏi:</p>
      <ul>
        <li>Hừm, vậy cháu nghĩ Jedi chúng ta là 1 thằng ngốc vì không tin cháu về đó nên cháu không nói? Và muốn bảo vệ nữ hoàng Naboo? Và cần cái kiếm để đề phòng khỏi Sith nguy hiểm đó hả?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Vâng.</li>
      </ul>
      <p>Thầy Yoda im lặng rồi nói:</p>
      <ul>
        <li>Nói với thầy Qui-Gon đi, muốn nói thì cứ nói, không được hền, nếu không cháu sẽ thất bại bản thân.</li>
      </ul>
      <p>Cậu Anakin im lặng, còn thầy Yoda cũng im lặng rồi lấy kiếm của mình và nói:</p>
      <ul>
        <li>Lấy của ta đi.</li>
      </ul>
      <p>Cậu Anakin thấy rồi hỏi:</p>
      <ul>
        <li>Tại sao lại lấy của ngài? Cháu lấy kiếm nhỏ khác cũng được mà?</li>
      </ul>
      <p>Thầy Yoda trả lời:</p>
      <ul>
        <li>Các kiếm nhỏ khác chưa dùng gì hết. Và nếu đúng Qui-Gon chết trong tay Sith còn tồn tại thì ta sẽ chịu trách nhiện.</li>
      </ul>
      <p>Cậu Anakin im lặng rồi nhận kiếm của thầy Yoda rồi đi luôn bỏ lại thầy ấy lẩm bẩm:</p>
      <ul>
        <li>Tại sao mình cảm thấy thần Force không giúp chúng ta.</li>
      </ul>
      <p>Vài giờ sau trong tàu vũ trụ Naboo đến hành tinh Naboo, cậu Anakin đến gặp thầy Qui-Gon và cảnh báo:</p>
      <ul>
        <li>Chưa chú, người Sith mà chú đã gặp rất trùng hợp với giấc mơ của cháu nên cháu có tầm nhìn, nhưng có vẫn đề là chú sẽ chết trong tay Sith đó khi đối đầu với hắn ta 1 mình, cháu sẽ thất vong nếu chú chết thì cháu bỏ trốn khỏi Jedi.</li>
      </ul>
      <p>Cậu Qui-Gon in lặng nhìn cậu Anakin đi rồi thấy cậu Obi-Wan đến hỏi:</p>
      <ul>
        <li>Có chuyện gì vậy? Anakin nói gì với thầy?</li>
      </ul>
      <p>Thầy Qui-Gon im lặng rồi trả lời:</p>
      <ul>
        <li>Anakin vừa cảnh báo cho thầy biết là tầm nhìn của cậu ấy là thầy sẽ chết trong tay Sith mà thầy đã gặp hắn ở Tatooine nếu thầy sẽ đấu đầu với hắn 1 mình.</li>
      </ul>
      <p>Cậu Obi-Wan nghe vậy làm cậu ấy sợ hãi và không biết cậu Anakin nói thật không Vài giờ sau ở hành tinh Naboo, 2 Jedi và người Naboo bắt đầu chiến đấu với robot thì cậu Anakin gọi 2 Jedi:</p>
      <ul>
        <li>Qui-Gon, Obi-Wan! Hắn mà cháu nói đến ngay phía sau cửa! Và nhớ chặt đầu hắn! Vì chặt bụng hắn thì hắn vẫn còn sống!</li>
      </ul>
      <p>Thầy Qui-Gon và cậu Obi-Wan thấy vậy rồi rút kiếm chạy đến trước cửa trong khi đó Darth Maul vừa mới đến thì bất ngờ Jedi tấn công. Vài vẫn phá hủy tàu điều khiển robot mà mình đã làm trước đây trong tầm nhìn, còn thầy Qui-Gon và cậu Obi-Wan đang đánh nhau với Darth Maul, không may là cậu Obi-Wan thấy thầy của mình bị giết bởi Sith đúng như cậu Anakin đã nói làm cậu Obi-Wan hóa điên rồi tấn Daarth Maul và giết được hắn là chặt đầu hắn, sau đó cậu Obi-Wan đau buồn vì tội không nghe cậu Anakin cảnh báo, đúng lúc thầy Yoda cảm nhận cái chết của thầy Qui-Gon rồi lẩm bẩm:</p>
      <ul>
        <li>Vậy Anakin nói sự thật.</li>
      </ul>
      <p>Vào buổi sáng hôm sau, cậu Obi-Wan xin lỗi cậu Anakin vì đã không nghe cảnh báo và bị cậu ấy không quan tâm Jedi nữa, cậu Anakin trả lại cái kiếm cho thầy Yoda và thầy ấy cũng xin lỗi. Vào buổi tối, thầy Yoda nhận được linh hồn của thầy Qui-Gon báo cho thầy Yoda:</p>
      <ul>
        <li>Tôi được thần Force nhờ tôi báo cho thầy là “Anakin là con trai ta, nếu ngươi không làm tốt cho con trai ta là ta sẽ bỏ mặc ngươi và tất cả Jedi thấm nứt và Sith sẽ thắng, có điều này con trai ta rất thông minh và nếu con ta muốn rời khỏi để cứu người khác thì hãy để nó đi cứu người khác và đừng ta phải thất vọng.”.</li>
      </ul>
      <p>Thầy Yoda nghe vậy làm thầy ấy sợ quá và không thể tin được Anakin là con trai của thần Force. Đúng lúc khi cô Padme ngủ rồi thấy mình như vô hình và trong rừng rồi gặp được cậu Anakin (trong truyện fanfiction tên là Star Wars: A Different Choice), sau đó cậu Anakin và cô Padme nhìn 2 người khác giống mình như già và tên họ là Luke và Leia. Vài giờ sau, cậu Anakin và cô Leia nghe cậu Luke và cô Leia nói chuyện và nghe cậu Luke nói:</p>
      <ul>
        <li>Vader là bố tôi, tôi có em gái, chính là cô, Leia. Cô là người không tin tưởng và tôi phải đi gặp Vader để giúp hắn tiêu diệt hoàng đế.</li>
      </ul>
      <p>Cậu Luke nói xong rồi chia tay em gái mình làm cô Padme thấy tương lai thật là kinh khủng và nhận ra cậu Luke và cô Leia chính là con của cô Padme và cậu Anakin. Cậu Anakin bắt đầu đi và nói:</p>
      <ul>
        <li>Padme, em nghĩ là chúng ta hãy chia tay.</li>
      </ul>
      <p>Cậu Anakin bị cô Padme tóm và nói:</p>
      <ul>
        <li>Em định phá hủy tương lai của 2 đứa con của mình khi cậu định thay đổi tương lai là chúng ta sẽ không lấy nhau à?</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Em chắc cô ghét tôi khi em là quái vật…</li>
      </ul>
      <p>Cậu Anakin nói dở khi cô Padme ôm chặt lấy cậu Anakin không cho cậu thoát và nói:</p>
      <ul>
        <li>Không, tất nhiên không. Chị không bao giờ có thể ghét em. Chỉ là, chị có quyền biết chuyện gì đang xảy ra. Cách này chúng ta có thể giúp đỡ và an ủi lẫn nhau thay vì em giải quyết chuyện này lộn xộn một mình.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Càng và đó là lý do tại sao em không xứng đáng với chị, Padme. Thậm chí không phải là sự thù hận của chị.</li>
      </ul>
      <p>Cô Padme nói:</p>
      <ul>
        <li>Chị nên chán nản và quẫn trí như Leia, không quẫn trí gấp mười lần so với Leia bây giờ! Nhưng phần mà em đề cập đến việc chúng tôi kết hôn trong bí mật. Nó làm chị nhớ đến một vài bình luận mà các hầu gái của chị đưa ra trước khi đi ngủ. Họ gọi chị là trêu chọc và Eirtae nói rằng có lẽ chị sẽ sinh đôi một ngày nào đó. Rốt cuộc họ đã đúng! Vì vậy vài năm nữa chúng ta sẽ lấy nhau.</li>
      </ul>
      <p>Cậu Anakin và cô Padme im lặng thì bắt đầu buồn ngủ rồi ngã xuống đất.</p>
      <p>Vào buổi sáng hôm sau, thầy Yoda đến gặp cậu Anakin và nói:</p>
      <ul>
        <li>Ta sẽ đưa cháu đi học việc cho đến khi cháu có kiếm của mình và ta sẽ giữ bí mật. Còn nếu 1 ngày nào đó cháu rời khỏi Jedi khi người cấp cao nào làm không tốt thì cháu hãy đi.</li>
      </ul>
      <p>Cậu Anakin nghĩ rồi đồng ý.</p>
      <p>Vài tháng sau trong trường học Jedi, các học sinh và các giáo viên đều ngạc nhiên thấy cậu Anakin rất thông minh và rất giỏi và có 2 robot PROXY (Skywalker A Fanon Story) và Cam droid (Orbie) (lấy từ Coruscant) (trong truyện fanfiction tên là Misunderstood V2).</p>
      <p>Vài tháng sau, cậu Anakin có thể cảm nhận có người gặp nguy hiểm thì cậu ấy trốn khỏi nhà Jedi để đi cứu người vô tội. Vài giờ sau, cậu Anakin đã giết người Besalisk tên là Donno và cứu được 5 người gồm người Lizard tên là Hehe, cô bé Togruta tên là Que, cậu bé Zabrak tên là Jory và 2 anh em gái con người gồm anh trai Tor và tên là Try.</p>
      <p>Vài tháng sau, cậu Anakin có 6 bạn gồm cô Darra, cậu Tru, cậu Ferus, cô Aayla, cậu Kan và cậu Kento, cậu Anakin dậy lục lượng cho 6 bạn mình làm họ mạnh mẽ lên và họ hiểu tại sao cậu Anakin giỏi và mạnh mẽ do quan tâm với người khác và tin thưởng, trong khi đó thầy Yoda theo dõi cậu Anakin với 6 người bạn và bọn được học từ cậu ấy nên 6 bạn mình mới mạnh mẽ lên làm thầy Yoda ngạc nhiên vì thấy cậu Anakin đã giúp bạn cùng lớp mạnh mẽ.</p>
      <p>Vài tháng sau, cậu Anakin có kiếm, nhưng không bình thường bởi không giống kiếm của học sinh khác là cậu ấy có kiếm tím làm cả lớp ngạc nhiên, còn thầy Yoda nhìn cậu Anakin đã vượt qua bóng tối và nhớ lại cậu Anakin đã nói “Nếu không muốn bị trở thành Sith bởi sợ hãi, tham lam, tức giận. Nhưng chuyện đó không đơn giản đâu, đó là trái tim, nếu Sith là người tốt thì người ấy có trái tim ánh sáng thì được gọi là Light Sith và nếu Jedi là người xấu thì người ấy có trái tim đen tối thì được gọi là Dark Jedi.” làm thầy Yoda hiểu ý của cậu Anakin là gì nên cậu ấy có kiếm tím như kiếm đỏ của Light Sith và kiếm xanh da trời của Jedi kết hợp.</p>
      <p>Vài tháng sau, cậu Anakin lại cảm nhận có người gặp nguy hiểm thì cậu ấy lại trốn khỏi nhà Jedi để đi cứu người vô tội. Vài giờ sau, cậu Aanakin đã giết hết bọn buôn bán nô lệ bằng kiếm tím, còn Hehe, cô Que, cậu Jory, cậu Tor và cô Try đã cứu 35 người nô lệ vô tội, nhưng vấn đề là cậu Anakin đang bế em bé tên là Dan Koxo và biết được bố nó tên là Gezo và mẹ nó tên là Cho, sau đó cậu Anakin được thần Force yêu cầu cậu Anakin đưa 35 người nô lệ vô tội gặp cô Padme để cô ấy giúp. Hehe, cô Que, cậu Jory, cậu Tor, cô Try và cậu Anakin đưa nô lệ vô tội gặp cô Padme để cô ấy đưa 35 người nô lệ để giúp họ sống hạnh phúc. Sau đó cậu Anakin về nhà, nhưng các thầy Jedi đang thất vọng vì cậu Anakin không nghe lời và cậu ấy cũng thất vọng vì các thầy Jedi ngu, đúng lúc cậu Anakin dùng lực đẩy các thầy Jedi trừ thầy Yoda ngã đập vào tường rồi lấy pha lê tím khỏi kiếm (vì đã nghe thầy Yoda nói rằng “Khi rời khỏi dòng Jedi thì hãy mang theo pha lê pha lê của cháu, vì pha lê pha lê của cháu là cuộc sống của cháu.”) rồi vứt kiếm đi và chạy khỏi nhà Jedi mang theo kiếm thầy Qui-Gon và Holocron (cậu ấy có chúng từ thầy Yoda đã chuẩn bị trước là đã để trong túi của cậu Anakin (trong truyện fanfiction tên là Avatar of the Force)), còn các thầy Jedi bực tức vì cậu Anakin đã lấy cắp pha lê thì các thầy Jedi phải bắt cậu Anakin, nhưng các thầy Jedi bị thầy Yoda không cho phép. Vài phút sau, cậu Anakin ở với cô Padme trong nhà cô ấy để ở. Khi cô Padem đang ngủ và cậu Anakin lấy pha lê của thầy Qui-Gon khỏi kiếm của thầy ấy rồi bỏ pha lê của cậu Anakin thì kiếm của thầy Qui-Gon là kiếm tím của cậu Anakin, sau đó cậu Anakin bỏ pha lê của thầy Qui-Gon vào Holocron thì Holocron đó có linh hồn thầy Qui-Gon và xuất hiện hình ảnh không gian ba chiều. Cậu Anakin nhìn thầy Qui-Gon rồi nói:</p>
      <ul>
        <li>Cháu đã rời khỏi nhà Jedi và cháu đang dùng kiếm của chú, màu kiếm của cháu là tím.</li>
      </ul>
      <p>Thầy Qui-Gon nói:</p>
      <ul>
        <li>Chú thấy rồi.</li>
      </ul>
      <p>Cậu Anakin nghe vậy làm cậu ấy ngạc nhiên, thầy Qui-Gon nói:</p>
      <ul>
        <li>Chú là người tương lai, thật tuyệt chú ở quá khứ chết và chui vào pha lê của chú thì chú có thể nói chuyện với cháu và giúp cháu, và chúc mừng cháu có kiếm của mình và rời khỏi Jedi.</li>
      </ul>
      <p>Cậu Anakin im lặng rồi hỏi:</p>
      <ul>
        <li>Chú là người tương lai ư? Sao chú có thể ở hiện nay mà không biến mất khi thay đổi tương lai?</li>
      </ul>
      <p>Thầy Qui-Gon trả lời:</p>
      <ul>
        <li>Vì nhờ bố cháu, thần Force. Vì thế chú sẽ dậy cháu mạnh mẽ.</li>
      </ul>
      <p>Cậu Anakin cảm thấy vui vì được linh hồn thầy Qui-Gon giúp.</p>
      <p>Trong vài tháng cậu Anakin đã gọi sát thủ Jango Fett, mặc dù Jango cầm súng trước mặt cậu Anakin thì bị PROXY ở hình dạng giống Jango cầm súng bắt tỉa chĩa vào chú Jango từ nơi xa làm hắn không còn cách nào rồi thảo luận với cậu Anakin.</p>
      <p>Chú Jango hỏi:</p>
      <ul>
        <li>Vậy Jedi, mi muốn ta làm gì?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Cháu muốn chú tham gia với cháu và dậy cháu học nghề sát thủ.</li>
      </ul>
      <p>Chú Jango ngạc nhiên tại sao Jedi lại muốn làm sát thủ rồi hỏi:</p>
      <ul>
        <li>Mi là Jedi mà sao mi muốn làm sát thủ?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Cháu không còn tin thưởng Jedi nữa rồi, chúng là những kẻ ngốc, vì không bảo vệ người khác ở ngoài hành tinh, chỉ biết nghe lệnh thủ tướng nhảm nhí đó, vì vậy cháu phải trở thành sát thủ để bảo vệ mọi người.</li>
      </ul>
      <p>Chú Jango im lặng và ngạc nhiên rồi hỏi:</p>
      <ul>
        <li>Vì vậy mi thấy ta là sát thủ giỏi nên cháu muốn trở thành học việc của ta ư?</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Ừ, có điều này, cháu có tầm nhìn chú bị lạm dụng bởi Sith.</li>
      </ul>
      <p>Chú Jango thấy lạ rồi hỏi :</p>
      <ul>
        <li>Ta đã nghe đồn là Sith không còn mà?</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Cháu thấy Sith ở hành tinh Naboo khi hành tinh đó bị robot xâm chiếm. Lũ Jedi ngu đã giấu mọi thứ nên mọi người không biết, 1 lũ Jedi hền mạn.</li>
      </ul>
      <p>Chú Jango im lặng hiểu ra rồi nói:</p>
      <ul>
        <li>Ta hiểu rồi, tình hình thật nguy hiểm cho ngân hà, cảm ơn cháu vì đã cho chú biết tương lai chú gặp nguy hiểm. Được thôi, chú sẽ dậy cháu học sát thủ và cùng cháu lập kế hoạch thiết lộ cho ngân hà là là Sith.</li>
      </ul>
      <p>Trong vài năm cậu Anakin ở với cô Padme để giúp đỡ hay bảo vệ (trong truyện fanfiction tên là The Naboo Chronicles). Trong khi đó ở hành tinh Tatooine, cậu Anakin giết rồng Dragon Krayt và lấy 7 kiếm từ Pearl của nó để tạo ra kiếm thì bắt gặp cô Aurra, cô Aurra nói:</p>
      <ul>
        <li>Muốn sống thì theo ta.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Chờ đã, ta có gì đó cho ngươi.</li>
      </ul>
      <p>Cô Aurra hỏi:</p>
      <ul>
        <li>Là gì?</li>
      </ul>
      <p>Cậu Anakin trả lời:</p>
      <ul>
        <li>Cái này.</li>
      </ul>
      <p>Khi cậu Anakin trả lời là cô Aurra bị giết bởi trái tim của cô ấy bị cậu Anakin bóp nát nhờ lực lượng.</p>
      <p>Vài năm sau trong trong hang sâu ở hành tinh Ilum (trong truyện fanfiction tên là Path to Redemption), cậu Anakin nhìn xung quanh toàn bộ xương từ Jedi và Sith từ hàng nghìn năm trước, sau đó cậu Anakin tìm thấy pha lê đỏ thẫm vì nó là pha lê máu, sau đó cậu Anakin sửa nó thì pha lê máu thành pha lê trắng thuộc Grey Jedi. Sau đó cậu Anakin tìm thấy đá quý Sapphire rồi hợp với pha lê trắng thành Ankarres Sapphire. Sau đó cậu Anakin được chú Jango đến đón cậu Anakin rồi đưa cậu ấy đến hành tinh Kamino.</p>
      <p>Vài năm sau, cậu Anakin đã tạo ra kiếm giống Star Killer rồi cho 2 pha lê tím và đá Ankarres Sapphire vào trong kiếm Star Killer thì cậu ấy có 2 kiếm tím và xanh da trời rồi lắp với nhau thành kiếm 2 đầu tím và xanh da trời. Vài ngày sau, cậu Anakin có thêm robot là</p>
      <p>10 con ASP-7 (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
      <p>J9 (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
      <p>R1-series astromech droid (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
      <p>M88-AD (Model-88) (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
      <p>Robot Vader (giống bộ giáp của Iron Man trong truyện fanfiction tên là Skywalker A Fanon Story),</p>
      <p>R4-P44 (Petey) (trong truyện fanfiction tên là Misunderstood V2) với tàu của nó là Delta-7, nhưng cậu Anakin đã biến Delta-7 thành Azure Angel. Có điều này là cậu Anakin thấy mình có sức mạnh dịc chuyển (trong truyện fanfiction tên là Force Jumper).</p>
      <p>Vài năm sau trong hành tinh kadavo có Obi-Wan có niệm vụ ở Kadavo thì thấy lính Zygerrian chết rồi chạy vào lâu đài Zygerrian thì thấy 10 thợ săn gồm cậu Anakin 18 tuổi, cậu Own, cô Beru, Hehe, cô Que, cậu Jory, cậu Tor, cô Try, cô Tella (twi'lek) (trong truyện fanfiction tên là If Blood Be The Price) và cô Layana (twi'lek) (trong truyện fanfiction tên là Zinding Coda). Sau đó thầy Obi-Wan thấy cậu Anakin cầm 2 kiếm tím và xanh da trời đã giết nữ noàng Zygerrian tên là Miraj Scintel. Khi thầy Obi-Wan định nói gì với cậu Anakin thì bị cái dây roi có điện (electro-whip) quấn vào cổ thầy Obi-Wan làm anh ta bị điện rồi xỉu. Vài phút sau thầy Obi-Wan tỉnh dậy thấy 10 thợ săn đã đi rồi và đã mang theo các nô lệ vô tội đi bỏ lại làng Zygerrian bị cháy trong biển lửa.</p>
      <p>1 năm sau trong thành phố của hành tinh Coruscant, trong quán rượu có khách hàng vui chơi, nhảy múa, cùng ăn uống và chơi âm nhạc, đúng lúc có thợ săn Mandalorian black không có mũ bảo hiểm và chỉ mặc áo khoác (cloak) trùm kín đầu đã vào quán rượu để uống nước, khi Mandalorian black cởi mũ trùm đầu ra thì người ấy là cậu Anakin 19 tuổi. Vài phút sau, cậu Anakin ăn tối xong rồi được chú Jango Gọi điện:</p>
      <ul>
        <li>Hiện giờ chú đang nhiệm vụ nên không ai biết chú định nói gì với cháu, cháu đã đúng về chầm nhìn, Dooku là Sith và đã lạm dụng chú để tạo đội quân nhân bản chú, may mắn chú đã bí mật thay đổi mã lệnh là họ không nghe lệnh thủ tướng và sẽ nghe lệnh cháu (trong truyện fanfiction tên là A new start). Chú tìm thấy hắn ở hành tinh Geonosis và ở đó có nhiều robot.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Cảm ơn, bây giờ hãy làm đúng kế hoạch.</li>
      </ul>
      <p>Vài giờ sau trong nhà của cô Padme, cô Padme thấy mình có khách là Mandalorian black không có mũ bảo hiểm và chỉ mặc áo khoác (cloak) trùm kín đầu, sau đó Mandalorian black cởi mũ trùm đầu ra làm cô Padme nhận ra người ấy là cậu Anakin làm cô Padme rất vui vì đã gặp cậu Anakin. Vào buổi tối thầy Obi-Wan và học sinh Ahsoka đến thăm cô Padme thì thấy cậu Anakin mặc bộ Mandalorian black không có mũ bảo hiểm và chỉ mặc áo khoác (cloak) trùm kín đầu và cậu ấy đang ở với cô Padme để bảo vệ. Vào buổi đêm, chú Jango phá sâu độc bằng lửa và giả vờ thất bại là Sith yêu cầu giết cô Padme.</p>
      <p>Vào buổi sáng hôm sau, thầy Mace yêu cầu thầy Obi-Wan và học sinh Ahsoka đi cùng cô Padme để đưa cô ấy về, nhưng không may thầy Obi-Wan và học sinh Ahsoka thấy cô Padme không ở nhà làm thầy Obi-Wan và học sinh Ahsoka lo lắng không biết cô Padme đã đi đâu hay bị ai đó bắt cóc. Vài giờ sau, cậu Anakin đưa cô Padme đến hành tinh Kamino để cô ấy thấy có nhiều lính nhân bản đội gồm có:</p>
      <p>Clone Trooper bình thường có chủ lĩnh tên là Pond,</p>
      <p>Clone Trooper 4th có chủ lĩnh tên là Bacara,</p>
      <p>đội Clone Trooper 27th có chủ lĩnh tên là Doom,</p>
      <p>đội Clone Trooper 41st có chủ lĩnh tên là Gree,</p>
      <p>đội Clone Trooper 91st có chủ lĩnh tên là Neyo,</p>
      <p>đội Clone Trooper 104th có chủ lĩnh tên là Wolffe,</p>
      <p>đội Clone Trooper 187th,</p>
      <p>đội Clone Trooper 327th có chủ lĩnh tên là Bly,</p>
      <p>đội Clone Trooper 212th (đội đó có đội clone trooer 7th) có chủ lĩnh tên là Cody,</p>
      <p>đội Clone Trooper 501st có 3 chủ lĩnh tên là Appo, Vill và Bow với đội thưởng tên là Rex cùng chủ lĩnh Alpha-17 và chủ lĩnh Keller,</p>
      <p>đội Clone Shock Trooper có 4 chủ lĩnh tên là Fox, Stone, Thorn và Thire với 2 lính của mình gồm Jek và Rys,</p>
      <p>đội ARC có thủ lính tên là Fordo,</p>
      <p>đội Clone Assassin (lính nhân bản đó là sát thủ),</p>
      <p>đội Delta Squad chỉ có 5 người gồm Gregor, Fixer, Scorch, Sev và chủ lính Boss.</p>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Dooku mà cô đã nói đến, cô đã đúng, hắn ta là người xấu, hắn đã phản bội Jedi và là Sith. Hiện giờ hắn ta đang ở hành tinh Geonosis có rất nhiều robot. Vì thế tớ định mang quân đội để tiêu diệt.</li>
      </ul>
      <p>Cô Padme nói:</p>
      <ul>
        <li>Cảm ơn vì đã mang tớ đi cùng, tớ muốn giết người xấu mà chúng đã suýt giết tớ.</li>
      </ul>
      <p>Đúng lúc 1 lính Clone Trooper chạy đến báo động với cậu Anakin:</p>
      <ul>
        <li>Thợ săn người ban đầu của chúng ta (Jango) đã phản bội! Các cửa đều khóa bởi mã mật khẩu rồi! Hắn ta đang sắp rời khỏi đây!</li>
      </ul>
      <p>Cậu Anakin hét:</p>
      <ul>
        <li>CÁI Gì!? Hãy để cho ta!</li>
      </ul>
      <p>Cậu Anakin chạy đi bỏ lại cô Padme ở với lính Clone Trooper để bàn bạc. Vài phút sau, Mandalorian Jango đang xếp đồ vào trong tàu vũ trụ của mình thì thấy cậu Anakin đã chạy đến và hét:</p>
      <ul>
        <li>Ngươi! Phản bội ta!</li>
      </ul>
      <p>Mandalorian Jango bắn súng vào cậu Anakin thì cậu ấy chặn bằng kiếm, nhưng cậu bé Boba lái tàu của bố mình bắn cậu Anakin làm cậu ấy ngã và làm rơi kiếm rồi bị Mandalorian Jango bắn dây chói tay cậu Anakin rồi bay làm cậu ấy bị kéo rồi giữ lại làm Mandalorian Jango ngã khi bị dây của mình giữ, sau đó cậu Anakin tấn công Mandalorian Jango, nhưng Mandalorian Jango đẩy cậu Anakin ngã khỏi ban công, may mắn cậu Anakin bắn dây mắc vào bệ ban công khác. Trong khi đó Mandalorian Jango chuẩn bị vào tàu thì thấy cô Padme đã giúp lính Clone Trooper mở mã mật khẩu làm cửa mở ra thì lính Clone Trooper chạy đến bắn Mandalorian Jango, nhưng Mandalorian Jango đã chạy kịp vào tàu khi tàu đang bay lơ lửng (cậu bé Boba đang lái) rồi cất cánh làm lính Clone Trooper thất vọng vì không bắt được người thật của mình phản bội, đúng lúc cậu Anakin xuất hiện bằng dịch chuyển rồi nhặt 2 kiếm của mình và nói với Clone Trooper:</p>
      <ul>
        <li>Chúng ta chuẩn bị đội quân để đi tiêu diện Geonosis.</li>
      </ul>
      <p>Vài giờ sau trong hành tinh Geonosis, trong nhà cuộc họp có Dooku, Nute Gunray, Rune Haako, Ponudo, vua Poggle, Passel Argente, Wattambor, Shumai, Tikkes và Sanhill đang nói chuyện với nhau và lập kế hoạch rồi thấy cái gì đó bắn vào nhà rồi thấy các con tàu của Clone Trooper đầu đã xuất hiện và các binh lính, xe tăng, tàu vũ trụ chiến tranh tấn công những robot ở bên ngoài và những xe tăng của bọn robot bị phá rất nhanh vì có đội Clone Trooper lái speeder bike và cầm power lance để đâm phá xe trăng, còn Mandalorian black có mũ bảo hiển mượn từ Clone Trooper cũng lái speeder bike và cầm power lance đang chạy vào trong trung tâm của tàu vũ trụ robot Lucrehulk-class Droid Control Ship đang ở đậu dưới đất nên cậu Anakin có thể phá Lucrehulk-class Droid Control Ship dễ dàng. Trong khi đó Nute, Rune, Ponudo, Passel Argente, Wattambor, Shumai, Tikkes và Sanhill chạy vào tàu nhỏ của mình để chạy trốn, nhưng có người liên lặng là cô Padme và nói:</p>
      <ul>
        <li>Thật sai lầm vẫn muốn để cho ta chết và muốn chiếm lấy hành tinh vô tội của người khác để lạm dụng giết chóc. Vì vậy, có người phản bội các ngươi đang chuẩn bị giết các ngươi.</li>
      </ul>
      <p>Nute, Rune, Ponudo, Passel Argente, Wattambor, Shumai, Tikkes và Sanhill nghe vậy rồi nhìn thấy Mandalorian Jango đã giơ 2 súng từ trước rồi bắn chết Nute, Rune, Ponudo, Passel Argente, Wattambor, Shumai, Tikkes và Sanhill. Sau khi Mandalorian Jango bắn chết xong và nghĩ “Đây là kế hoạch của cậu Anakin đó sao? Hay đấy, thật tuyệt khi mình đã giết những kẻ đó. Nhưng vẫn còn 1 người đã thoát, là Dooku.”. Trong khi đó ở sân bay, Dooku chuẩn bị vào tàu vũ trụ của mình thì thấy tàu vũ trụ của mình bị nổ tung do Mandalorian Black, Mandalorian Black cởi mũ bảo hiểm Clone Trooper ra là cậu Anakin rồi kiếm 2 đầu tím và xanh da trời rồi đánh nhau với Dooku với kiếm đỏ. Vài phút sau cậu Anakin và Dooku đánh nhau, khi 2 người đẩy kiếm nhau thì cậu Anakin kịp tóm 2 tay Dooku rồi chặt 2 tay như tầm nhìn làm Dooku không còn làm gì nữa và bị đội ARC xuất hiện bắt Dooku đưa tù. Vài giờ sau, Clone Trooper đã giết hết sạch Poggle để không ai tạo robot nữa. Trong khi đó các con tàu của Clone Trooper đang bay, cậu Anakin trong phòng ngắm sao rồi thấy cô Padme không ngủ được và đến phòng cậu Anakin để nói chuyện, cậu Anakin nói:</p>
      <ul>
        <li>Vẫn còn bộ tộc của Wattambor, Shumai, Tikkes và Sanhill ở đó. Chiến tranh đang bắt đầu.</li>
      </ul>
      <p>Cô Padme hỏi:</p>
      <ul>
        <li>Ừm, chúng ta sẽ lấy nhau bây giờ không?</li>
      </ul>
      <p>Cậu Anakin ngạc nhiên rồi hỏi:</p>
      <ul>
        <li>Sao tự nhiên lại…</li>
      </ul>
      <p>Cô Padme nói:</p>
      <ul>
        <li>Tớ quyết định rồi, tớ muốn có con ở tương lai. Chúng ta có thể bên nhau. Nhưng không chỉ mỗi tớ làm vợ cậu, là cô giáo Aayla và cô Darra.</li>
      </ul>
      <p>Cậu Anakin nhạc nhiên rồi hỏi:</p>
      <ul>
        <li>Aayla? Darra? Tại sao 2 cô ấy?</li>
      </ul>
      <p>Cô Padme trả lời:</p>
      <ul>
        <li>Tớ và 2 cô ấy đã gặp nhau khi cậu đi vắng và nghe 2 cô ấy nói rằng cô ấy đều thích cậu rồi, tớ đã suy nghĩ là tớ sẽ chia sẻ tình yêu cho 2 cô ấy. Vì vậy, sau khi kết thúc trận chiến, chúng ta sẽ bên nhau mãi mãi và không giống tương lai mà chúng ta đã nhìn thấy 10 năm trước.</li>
      </ul>
      <p>Cậu Anakin im lặng rồi hiểu và nói:</p>
      <ul>
        <li>Hiểu rồi, cảm ơn vì đã mang hạnh phúc cho tớ.</li>
      </ul>
      <p>Cô Padme và cậu Anakin nhìn nhau và im lặng rồi hôn nhau. Vài giờ sau ở hành tinh Coruscant, các Jedi im lặng nhìn Clone Trooper đang chuẩn bị trận chiến và không ngờ thủ lĩnh tối cao của Clone Trooper là cậu Anakin và là người yêu của cô Padme. Trong khi đó trong cậu Anakin, Mandalorian Jango, Ponds, Rex vào phòng Palpatine, Palpatine chào cậu Anakin:</p>
      <ul>
        <li>Xin chào Anakin.</li>
      </ul>
      <p>Anakin nói:</p>
      <ul>
        <li>Thủ tướng của chúng ta là gì, cả hai chúng ta đều có những công việc chúng ta cần phải làm và đứng đây nói chuyện sẽ không giúp được gì.</li>
      </ul>
      <p>Palpatine nói (cố gắng giành quyền kiểm soát quân đội cho anh ta):</p>
      <ul>
        <li>Anakin tôi muốn bạn chuyển giao công việc của bạn với tư cách là Tư lệnh tối cao của quân đội cho tôi vì tôi không cảm thấy bạn sẽ làm những gì cần thiết để giữ Cộng hòa vì bạn là một Jedi và chiến tranh chống lại mã của bạn phải không?</li>
      </ul>
      <p>Anakin nói:</p>
      <ul>
        <li>Thủ tướng tôi sẽ làm những gì tôi cần làm để giữ cho Cộng hòa tiếp tục.</li>
      </ul>
      <p>Cậu Anakin, Mandalorian Jango, Ponds Rex ra khỏi phòng Palpatine, Rex nói:</p>
      <ul>
        <li>Tôi không thích thủ tướng đó.</li>
      </ul>
      <p>Ponds nói:</p>
      <ul>
        <li>Tôi biết ý của bạn là gì. Tôi nghĩ anh ấy sẽ cố gắng làm gì đó để có được quân đội về phía mình.</li>
      </ul>
      <p>Mandalorian Jango thì thầm với Anakin:</p>
      <ul>
        <li>Anakin, ta đã đặt một số lỗi trong văn phòng của thủ tướng ấy mà ta biết anh ấy sẽ không tìm thấy nên nếu anh ấy làm bất cứ điều gì chúng tôi sẽ biết về nó.</li>
      </ul>
      <p>Vào buổi tối, cậu Anakin và cô Padme đã về thì thấy cô Aayla và cô Darra đang chờ. Vài buổi đêm cậu Anakin, cô Padme (cô ấy nằm bên phải cậu Anakin), cô Aayla (cô ấy nằm trên người cậu Anakin) và cô Darra (cô ấy nằm bên trái cậu Anakin) ngủ với nhau hạnh phúc như 1 chồng 3 vợ.</p>
      <p>Trong Vài tháng, cậu Anakin cùng Clone Trooper đi chiến đấu rất nhanh nhện và đã ném Durge vào nung nham nóng chảy làm Palpatine phát điên vì không đúng kế hoạch rồi ra lệnh Asajj và Grievous và Durge đi giết cậu Anakin. Đúng lúc con lỗi camega đã quay làm Mandalorian Jango đã biết kế hoạch và đã có bằng chứng rồi báo với cậu Anakin, chú Jango:</p>
      <ul>
        <li>Thủ tướng là Lord Sith. Và chú đã có bằng chứng (trong camera từ con lỗi của Mandalorian Jango và camera từ nhà Dooku (Changing the Future)) rồi.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Tuyệt, nhưng cháu cần giết Asajj và Grievous và Durge đã.</li>
      </ul>
      <p>Trong vài ngày sau, cậu Anakin gặp được Asajj và Grievous, nhưng cậu Anakin bóp nát cơ thể Grievous thành trăm mảnh bằng lực lượng, sau đó rút 1 kiếm 2 đầu tím và xanh da trời, cô Asajj hỏi:</p>
      <ul>
        <li>Mi nghĩ mi dùng kiếm đó có thể trách đầu với ta đó hả?</li>
      </ul>
      <p>Cậu Anakin phớt lờ cô Asajj nói rồi chia kiếm 2 đầu thành 2 kiếm làm cô Asajj thấy cậu ấy và mình đánh nhau bằng 2 kiếm ngang bằng rồi 2 người đánh nhau. Vài phút sau cậu Anakin và cô Asajj đánh nhau, nhưng cậu Anakin lúc nào bị cô Asajj đẩy bằng lục lượng làm cậu Anakin ngã làm cậu ấy điên lên rồi đánh nhau tiếp với cô Asajj cho đến khi đá mặt cô ấy làm cậu Anakin cơ hội đẩy lực lượng làm cô Asajj bị bay cả người đập vào nhà, sau đó cậu Anakin chạy vào nhà để đi tìm cô Asajj rồi đánh nhau tiếp, cậu Anakin tiếp tục đẩy lực lượng làm cô Asajj bị bay cả người khỏi nhà, sau đó cậu Anakin và cô Asajj tiếp tục vừa đánh nhau vừa lên cầu thang rồi nhảy lên mái nhà, nhưng cậu Anakin đã tóm tay cô Asajj rồi điện cô ấy bằng điện vàng tên là Electric Judgement làm cô ấy bị điện rồi xỉu, sau đó cậu Anakain để Clone Trooper bắt Asajj để giúp cô ấy khỏi bóng tối vì cậu Anakin đã thấy cô Asajj bị Sith lạm dụng trong tầm nhìn. Hiện giờ đến gặp Palpatine rồi nói</p>
      <ul>
        <li>Thủ tướng, tôi đến đây để nói chuyện rất quan trọng.</li>
      </ul>
      <p>Đúng lúc thầy Yoda đã đến gặp cậu Anakin và Palpatine rồi hỏi cậu Anakin:</p>
      <ul>
        <li>Cháu gọi ta đến gặp Palpatine để làm gì vậy?</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Vâng, là thế này.</li>
      </ul>
      <p>Cậu Anakin dùng lực lượng hút kiếm từ ống tay áo Palpatine rồi kiết lộ ra là kiếm đỏ làm thầy Yoda thấy Palpatine là Lord Sith Sidious (trong truyện fanfiction tên là His Second Chance), còn Sidious ta bị lộ rồi rút kiếm đỏ thứ 2 ra giết cậu Anakin thì cậu ấy tấn công Sidious bằng 3 kiếm (1 kiếm đỏ với kiếm 2 đầu tím và xanh da trời), còn thầy Yoda đứng nhìn cậu Anakin đánh nhau với Sidious và báo động với Jeid khác. Vài phút sau, cậu Anakain chặt kiếm của Sidious rồi hắn ta bắn điện vào cậu Anakin và cậu ấy cũng bắn điện, nhưng nó hồng thì điện hồng đẩy điện của Sidious làm hắn ta bị điện và Cậu Anakin có cơ hội ném kiếm đỏ đâm vào người Sidious rồi chia kiếm 2 đầu thành 2 kiếm ra chặt cổ và chặt người làm Sidious chết. Đúng lúc Mace và Jeid khác chạy đến để tấn công Sidious, nhưng muộn là cậu Anakin đã giết Sidious rồi.</p>
      <p>Vài ngày sau, Clone Trooper bắt hết sạch những người của Sidious khi hắn ta là thủ tướng. Cô Padme đã mang bằng chứng cho các tượng viện biết thủ tướng Palpatine là Lord Sith.</p>
      <p>Vài tháng sau, cậu Anakin và Clone Trooper đã cứu ngân hà và giết hết bộ tộc của Wattambor, Shumai, Tikkes và Sanhill.</p>
      <p>Vài tháng sau, chú Jango được cô Padme giúp kiếm việc làm nuôi con mình (cậu bé Boba). Cậu Anakin là Grandmaster thay thế thầy Yoda và loại bỏ luật pháp vớ vẩn (luật pháp của Jeid đó cấm tình yêu và gia đình) thì Jedi có gia đình hạnh phúc, thầy Yoda nhìn linh hồn thầy Qui-Gon nói “thần Force cảm ơn vì đã làm con ta hạnh phúc” làm thầy Yoda thỏa mãn vì đã không bị thần Force phạt nữa, thầy Mace ở 1 mình lang thang trong thành phố vì anh ta vẫn còn làm theo luật pháp, Dooku đã trở thành Grey Jedi và ở nhà nghỉ ngơi và có 2 cánh tay máy, những học sinh đều học lực lượng mà cậu Anakin đã dậy và học chặn đạn khi Clone trooper bắn đạn tê liệt khiến học sinh Jedi giỏi lên và có 3 con đường Jedi bình thường (có kiếm xanh da trời và xanh lá cây) và Grey Jedi (có kiếm trắng) và Jedi vượt qua bóng tối (có kiếm tím), còn cô Asajj đã được cậu Anakin giải thoát khỏi bóng tối và giờ cô Asajj là cấp dưới của cậu Anakin và có kiếm vàng.</p>
      <p>Vài tháng sau, cô Tella và Layana làm việc trong quán ăn với chủ của 2 cô ấy là Dex bạn Obi-Wan, cậu Own và cô Beru là vợ chồng, cậu Tor và cô Que là vợ chồng, cậu Jory và cô Try là vợ chồng, cậu Anakin có 3 vợ gồm cô Padme, cô Aayla và cô Darra.</p>
      <p>Vài năm sau, cậu Anakin có 3 vợ gồm cô Padme, cô Aayla và cô Darra đều có con. Còn cô Asajj giúp cậu Anakin thăm sóc các con của cậu ấy và 3 vợ. Có điều này là cậu bé Luke và cô Leia không phải Jeid bình thường như tương lai mà cậu Anakin và Padme đã thấy vì cậu bé Luke có kiếm trắng khi cậu ấy học cả sáng và tối khi có kiếm xanh lá cây và cô Leia có kiếm tím khi cô ấy vượt qua bóng tối khi có kiếm xanh da trời. Vào buổi tối, 3 vợ và các con cậu Anakain đều ngủ, còn cậu Anakain đứng nhìn ban công rồi ra cửa sau bắt gặp em trai của Maul là Savage Opress, Savage nói:</p>
      <ul>
        <li>Ta sẽ trả thù anh trai ta, vì ngươi mà anh trai ta chết.</li>
      </ul>
      <p>Cậu Anakin nhìn không quan tâm và nói:</p>
      <ul>
        <li>Liên quan gì tới ta?</li>
      </ul>
      <p>Savage bật kiếm đỏ 2 đầu và Cậu Anakin và bật 2 kiếm tím và xanh đa trời, sau đó cậu Anaakin chờ Savage tấn công, khi Savage chặt cổ cậu Anakin thì cậu ấy cúi người xuống và rút súng bắn vào người Savage làm hắn ta bị thương không cử động được, Savage nhìn lên nhìn cậu Anakin để 2 kiếm hình X trên cổ Savage rồi chặt cổ hắn lăn ra chết, còn cậu Anakin thở dài và cất 2 kiếm đi và nhìn các ngôi sao rồi mỉm cười vì mình đã thay đổi tương lai, sau đó cậu Anakin đi về đi ngủ với 3 vợ và các con.</p>
    </div>
  )
}
  
  
const AnakinJediPadmeSith_OnceUponATime = () => {
  return (
    <div>
      <h1>Once upon a time</h1>
      <p>Ở hành tinh Tatooine có bão cát và có cậu bé Anakin 8 tuổi chạy vào hang khỏi bão cát để chờ bão cát tan, sau đó cậu bé Anakin thấy cô gái cầm kiếm vàng 2 đầu. Cô gái hỏi tội cậu bé Anakin:</p>
      <ul>
        <li>Mi là ai mà sao mi lại trong hang của ta?</li>
      </ul>
      <p>Cậu bé Anakin sợ quá rồi trả lời:</p>
      <ul>
        <li>Cháu là Anakin và cháu đã trốn hang này để tránh bão cát.</li>
      </ul>
      <p>Cô gái thấy rồi im lặng và tắt kiếm của mình đi rồi nói:</p>
      <ul>
        <li>Hiểu rồi, Tên cô là Bastila Shan (trong truyện fanfiction tên là The Chosen One Chronicles) và là Jedi.</li>
      </ul>
      <p>Cậu bé Anakin thấy vui rồi nói:</p>
      <ul>
        <li>Tuyệt vời, chú biết không cháu đã có lực lượng hồi nửa tháng mà mẹ cháu nói (trong truyện fanfiction tên là An older Menace).</li>
      </ul>
      <p>Cô Bastila thấy rồi nói:</p>
      <ul>
        <li>Ồ, cháu đã có lực lượng thức tỉnh sớm và đang tự học nó hả? Ta sẽ dậy cháu học và biến cháu trở thành Jedi.</li>
      </ul>
      <p>Cậu bé Anakin nghe vậy làm cậu ấy vui quá rồi ôm lấy cô Bastila, làm cô ấy ngạc nhiên vì được cậu bé ôm, đúng lúc cô Bastila cảm nhận thấy lực lượng quen thuộc rồi nhận ra cậu bé đó là người bạn thân yêu của cô ấy tên là Anakin Starkiller đầu thai làm nước của cô Bastila chảy ra rồi ôm lấy cậu bé Anakin khóc và từ nay cô Bastila sẽ ở bảo vệ cậu bé Anakin mãi mãi.</p>
      <p>Sau 3 năm, cậu Anakin đang học Jedi và tạo ra 7 kiếm từ Pearl của Dragon Krayt (cậu Anakin 11 tuổi giết được Dragon Krayt nhờ kiếm của cô Bastila cho mượn, sau đó cậu Anakin có Pearl như cô Bastila nói) có 7 màu (gồm: đen, xanh da trời, xanh lá cây, hồng, đỏ, trắng, vàng), nhưng không may cậu Anakin thì bị bọn buôn bán nô lệ tấn công, đúng lúc cô Bastila xuất hiện giết hết bọn buôn bán nô lệ, sau đó cô Bastila và thấy bọn buôn bán nô lệ của Jabba làm cô Bastila điên lên và không chịu được khi nhìn thấy có người vô tội chết và quyết định giải cứu người vô tội. Vài giờ sau, cô Bastila đã đi giết Jabba và cứu được người nô lệ, còn cậu Anakin đã giết hết bọn buôn bán nô lệ.</p>
      <p>Vài ngày sau cô Bastila và cậu Anakin giết hết những người bộ tộc Hutt và cậu Anakin giải phóng những người nô lệ vô tội.</p>
      <p>Vài ngày sau, cậu Anakin 14 tuổi đang là thợ săn Vader mặc bộ giáp Sith Acolyte (không mặc áo khoác Sith) và có 2 súng Westar-35 và có kiếm đỏ chẫm 2 đầu từ trong Telos Holocron từ ngôi đền Sith có Sith Acolyte chết từ lâu (trong truyện fanfiction tên là Darth Vader- Hero of Naboo) và có sức mạnh Sith tên là Force Jumper (trong truyện fanfiction tên là Force Jumper), hiện giờ Vader đang đến hành tinh Naboo mà cô Bastila yêu cầu cậu Anakin đến theo tầm nhìn của mình (trong truyện fanfiction tên là Skywalker: A Fanon Story).</p>
    </div>
  )
}

const AnakinJediPadmeSith_Movie1 = () => {
  return (
    <div>
      <h1>Movie 1</h1>
      <p> </p>
      <p>Vài ngày sau, thầy Qui-Gon và cậu Obi-Wan (học kiếm được form III) có việc đến hành tinh Naboo. Vài giờ sau 2 Jedi ở trong tàu vũ trụ robot thì nghe thấy con tàu của mình bị phá thì chứng tỏ là robot là kẻ thù thì 2 jedi giết robot bằng kiếm, sau đó 2 Jedi chạy trốn vào tàu trở hàng để đáp xuống hành tinh Naboo. Vài phút sau 2 Jedi được người ngoài hành tinh Gungan tên là Jar Jar giúp là nhờ vua của mình cho mượn cầu bơi qua biển đến sông trong thành phố. Trong khi đó, robot bắt người làm con tin (nữ hoàng Padme giả nữ hầu, nữ hoàng giả bởi nữ hầu, công an) đưa đi thì bắt gặp người lạ (thợ săn Vader) và anh ta bật kiếm đỏ 2 đầu rồi chia đôi ra thành 2 kiếm đỏ làm robot nghĩ người lạ là Jedi rồi bắn chết thì người lạ chặn đạn trả bắn trúng những robot nào đã bắn. Sau đó người lạ tắt 2 kiếm của mình rồi gặp chào nữ hoàng giả và chào:</p>
      <ul>
        <li>Chào nữ hoàng, thần là Vader, xin mọi người hãy đi phía kia thì mọi sẽ gặp được Jedi, thần phải giết những robot đã chặn đường.</li>
      </ul>
      <p>Vài phút sau, 2 Jedi gặp được nữ hoàng giả và các nữ hầu và công an rồi thấy xe tăng nổ tung và robot bị giết hết bởi Sith, đúng lúc 2 Jedi tấn công Sith vì phát hiện Sith Acolyte còn tồn tại (trong truyện fanfiction tên là A Sith's Second Chance). Vài phút sau, Vader làm thầy Qui-Gon ngã rồi Vader lắp 2 kiếm đỏ thành kiếm đỏ 2 đầu rồi dùng lực lượng bắt kiếm xanh lá cây rồi để 2 kiếm (kiếm của Qui-Gon và kiếm của Vader) hình X trên cổ thầy Qui-Gon làm con tin làm cậu Obi-Wan không làm gì được, Vader khỏi thầy Qui-Gon:</p>
      <ul>
        <li>2 người đến đây làm gì?</li>
      </ul>
      <p>Thầy Qui-Gon trả lời:</p>
      <ul>
        <li>Chúng ta bảo vệ nữ hoàng Naboo.</li>
      </ul>
      <p>Vader im lặng rồi tắt 2 kiếm làm 2 Jedi ngạc nhiên vì thấy Sith không giết Jedi, Vader trả kiếm cho thầy Qui-Gon và nói:</p>
      <ul>
        <li>Ta cũng vậy.</li>
      </ul>
      <p>Cậu Obi-Wan hét:</p>
      <ul>
        <li>Nói dối! Tất cả robot được tạo ra từ Sith, tính ngươi mang chúng đến!</li>
      </ul>
      <p>Vader nói:</p>
      <ul>
        <li>Im ngay, Jedi ngốc kia. Ta không phải là Sith, ta là Light Sith.</li>
      </ul>
      <p>Nữ hoàng Naboo nói với 2 Jedi:</p>
      <ul>
        <li>Vader là người đã cứu chúng tôi khỏi con tin từ robot. Nếu anh ta là kẻ thù thì chúng ta không ở đây rồi.</li>
      </ul>
      <p>Vader nói:</p>
      <ul>
        <li>Bây giờ chúng ta phải rời khỏi đây, vì bọn chúng có thể giết nữ hoàng Naboo đấy, tên khốn đứng đầu Robot đó có thể lừa mọi người đấy.</li>
      </ul>
      <p>Sau đó Vader đưa nữ hoàng giả, các nữ hầu, công an và 2 Jedi đến sân bay. Vài phút sau, Vader đã giết hết robot trong sân bay bằng cách chặn đạn trả bắn trúng những robot nào đã bắn để cứu phi công lái tàu vũ trụ để đưa Vader, các phi công lái tàu chiến tranh, nữ hoàng giả, các nữ hầu, công an và 2 Jedi thoát khỏi hành tinh Naboo an toàn. Vài phút sau, Vader cởi mặt nạ ra thành cậu Anakin giới triệu hoàng giả, các nữ hầu và 2 Jedi:</p>
      <ul>
        <li>Tên thật của tôi là Anakin Grey Jedi người được chọn và là con trai của thần Force, tôi đã học kiểm soát bóng tối từ Telos Holocron từ ngôi đền Sith, cuối cùng kết hợp 2 cả hai mặt sáng và tối bằng cách ăn bóng tối. Tôi có bộ của Sith Acolyte từ người chết trong ngôi đền Sith và đặt tên Vader.</li>
      </ul>
      <p>Qui-Gon ngạc nhiên thấy cậu Anakin là người được chọn thật sự trước mặt mình, Obi-Wan ngạc nhiên cậu Anakin có thể sử dụng 2 cả hai mặt sáng và tối nên trở thành Grey Jedi tuyệt vời, còn cô Padme im lặng nhìn chằm chằm cậu Anakin đẹp trai. Vài giờ sau, cậu Anakin đã lấy dữ liệu của robot chỉ huy để làm bằng chứng và tàu vũ trụ Naboo đã đến hành tinh Tatooine thì cậu Anakin mời cô Padme và thầy Qui-Gon đến nhà cậu Anakin thì thầy Qui-Gon gặp được Jedi huyền thoại là cô Bastila còn sống trong 4000 năm làm thầy Qui-Gon gần như bị đau tim vì nghĩ rằng gặp Jedi đáng sợ, nhưng cậu Anakin thấy cô Bastila có robot HK-47.</p>
      <p>Vài ngày sau, tàu vũ trụ Naboo đã có động cơ mới, đúng lúc cậu Anakin cảm nhận bóng tối đang đến và cô Bastila yêu cầu cậu Anakin hãy đối đầu với người đó thì cậu Anakin đeo mặt nạ thành Vader rồi gặp bất ngờ là Darth Maul mà cậu Anakin có tầm nhìn là Darth Maul đã giết thầy Qui-Gon rồi Vader và Darth Maul đánh nhau (trong truyện fanfiction tên là A Sith’s Second Chance) cho đến khi Vader làm Darth Maul ngã và lấy kiếm đỏ 2 đầu của hắn rồi để 2 kiếm hình X trên cổ hắn rồi chặt cổ làm hắn lăn ra chết. Sau đó cô Bastila và Vader chạy vào tàu vũ trụ Naboo để bay khỏi hành tinh Tatooine và đến hành tinh Coruscant. Đúng lúc Palpatine cảm nhận học sinh Darth Maul chết. Vài giờ sau, Vader đưa cô Padme 1 dữ liệu của robot chỉ huy để làm bằng chứng và nói với cô Padme rằng thần Force báo với Vader nói với Padme rằng không được tin tưởng ông Palpatine và ông ấy không được ở thành chủ tướng làm cô Padme không hiểu tại sao nhưng làm theo lời Vader đã nói. Vài phút sau, trong hội đồng có nhiều Master Jedi nghe thầy Qui-Gon và cậu Obi-Wan nói rằng họ gặp được Sith nhưng không và được gọi là Light Sith và được đào tạo từ cô Bastila còn sống làm các Master Jedi ngạc nhiên cô Bastila được sống 4000 năm. Vào buổi tối, thầy Qui-Gon và cậu Obi-Wan mời cô Bastila và Vader đến, nhưng tự nhiên Vader tấn công thầy Mace và gọi thầy ấy là Kamir Brandt (trong truyện fanfiction tên là Angels) làm thầy nhận ra Vader tính là cậu Anakin mà thầy Mace đã đua xe với cậu Anakin mấy năm trước, trong khi đó cô Bastila cản Vader và hỏi anh ta có chuyện gì thì anh kể mọi chuyện làm cô Bastila hiểu. Đúng lúc Darth Revan cầm 2 kiếm đỏ và tím xuất hiện (trong truyện fanfiction tên là Revan's Apprentice (Up For Adoption Anakin)) làm thầy Yoda nhận ra do thần Force đưa Darth Revan đến, còn chú Revan nhìn xung quanh rồi hỏi:</p>
      <ul>
        <li>Cái quái… gì…?</li>
      </ul>
      <p>Đúng lúc cô Bastila rất vui gặp được chú Revan rồi ôm chồng mình, chú Revan nhìn thấy vợ mình rồi hỏi:</p>
      <ul>
        <li>Vợ… Đã có chuyện gì xảy ra với Darth Nihilus thế?</li>
      </ul>
      <p>Cô Bastila trả lời:</p>
      <ul>
        <li>Hắn chết rồi.</li>
      </ul>
      <p>Chú Revan hỏi về người lạ ở phía sau cô Bastila:</p>
      <ul>
        <li>Còn những người kia là thì sao? Tớ không biết chuyện gì đang diễn ra nữa.</li>
      </ul>
      <p>Cô Bastila giải thích mọi chuyện những gì mà cô ấy biết rồi nói:</p>
      <ul>
        <li>Và cậu được Force gửi cậu đến tương lai 4000 năm sau để cùng Anakin con trai Force.</li>
      </ul>
      <p>Chú Revan im lặng ngạc nhiên rồi hỏi:</p>
      <ul>
        <li>Vậy là… tớ được Force gửi tớ đến sau khi giết Darth Nihilus ư?</li>
      </ul>
      <p>Cô Bastila trả lời:</p>
      <ul>
        <li>Đúng thế.</li>
      </ul>
      <p>Chú Revan hiểu ra và nói:</p>
      <ul>
        <li>Tớ hiểu rồi, vậy tớ sẽ làm gì với Anakin đây.</li>
      </ul>
      <p>Cô Bastila trả lời:</p>
      <ul>
        <li>Sẽ là 1 người anh của anh ta.</li>
      </ul>
      <p>Chú Revan ngạc nhiên và hỏi:</p>
      <ul>
        <li>Tớ sẽ là anh của anh ta á?</li>
      </ul>
      <p>Cô Bastila trả lời:</p>
      <ul>
        <li>Phải.</li>
      </ul>
      <p>Chú Revan im lặng rồi đến gần cậu Anakin và nói:</p>
      <ul>
        <li>Hân hạnh gặp em, anh sẽ là 1 người anh tốt cho em.</li>
      </ul>
      <p>Vài giờ sau, cậu Obi-Wan, thầy Qui-Gon, Vader, Darth Revan, cô Bastila, HK-47 và người cùng Padme đến hành tinh Naboo. Vài phút sau, Vader lái tàu chiến tranh N-1 starfighter 1 mình để bay vào tàu vũ trụ robot Lucrehulk-class Droid Control Ship để phá hủy làm robot ở Naboo không cử động nữa vì mất điều khiển và chúng sẽ là của Vader mà anh ta muốn, trong khi đó Nute Gunray đã chết do khi cậu Obi-Wan chặn đạn mà robot đã bắn nên đạn đó đã chúng Nute còn Rune Haako bị công an Naboo bắt đi. Vào buổi tối cô Padme ngủ rồi thấy mình như vô hình và trong rừng rồi gặp được cậu Anakin (trong truyện fanfiction tên là Star Wars: A Different Choice), sau đó cậu Anakin và cô Padme nhìn 2 người khác giống mình như già và tên họ là Luke và Leia. Vài giờ sau, cậu Anakin và cô Leia nghe cậu Luke và cô Leia nói chuyện và nghe cậu Luke nói:</p>
      <ul>
        <li>Vader là bố tôi, tôi có em gái, chính là cô, Leia. Cô là người không tin tưởng và tôi phải đi gặp Vader để giúp hắn tiêu diệt hoàng đế.</li>
      </ul>
      <p>Cậu Luke nói xong rồi chia tay em gái mình làm cô Padme thấy tương lai thật là kinh khủng và nhận ra cậu Luke và cô Leia chính là con của cô Padme và cậu Anakin. Cậu Anakin bắt đầu đi và nói:</p>
      <ul>
        <li>Padme, tôi nghĩ là chúng ta hãy chia tay.</li>
      </ul>
      <p>Cậu Anakin bị cô Padme tóm và nói:</p>
      <ul>
        <li>Cậu định phá hủy tương lai của 2 đứa con của mình khi cậu định thay đổi tương lai là chúng ta sẽ không lấy nhau à?</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Tôi chắc cô ghét tôi khi tôi là quái vật…</li>
      </ul>
      <p>Cậu Anakin nói dở khi cô Padme ôm chặt lấy cậu Anakin không cho cậu thoát và nói:</p>
      <ul>
        <li>Không, tất nhiên không. Tôi không bao giờ có thể ghét cậu. Chỉ là, tôi có quyền biết chuyện gì đang xảy ra. Cách này chúng ta có thể giúp đỡ và an ủi lẫn nhau thay vì bạn giải quyết chuyện này lộn xộn một mình.</li>
      </ul>
      <p>Cậu Anakin nói:</p>
      <ul>
        <li>Càng và đó là lý do tại sao tôi không xứng đáng với cô, Padme. Thậm chí không phải là sự thù hận của cô.</li>
      </ul>
      <p>Cô Padme nói:</p>
      <ul>
        <li>Tôi nên chán nản và quẫn trí như Leia, không quẫn trí gấp mười lần so với Leia bây giờ! Nhưng phần mà cậu đề cập đến việc chúng tôi kết hôn trong bí mật. Nó làm tôi nhớ đến một vài bình luận mà các hầu gái của tôi đưa ra trước khi đi ngủ. Họ gọi tôi là trêu chọc và Eirtae nói rằng có lẽ tôi sẽ sinh đôi một ngày nào đó. Rốt cuộc họ đã đúng!</li>
      </ul>
      <p>Cậu Anakin và cô Padme im lặng rồi cô Padme hỏi:</p>
      <ul>
        <li>Cậu là con trai vị thần Force phải không? Sao cậu không cho tôi máu cậu? Biết đâu máu cậu làm tôi có sức mạnh Force?</li>
      </ul>
      <p>Cậu Anakin và cô Padme im lặng rồi cậu Anakin nói:</p>
      <ul>
        <li>Bố tôi vừa gọi tôi (bố cậu Anakin là thần Force và gọi cậu Anakin để giúp cậu ấy (trong truyện fanfiction tên là Skywalker: A Fanon Story)) cô có thể lấy máu của tôi và cô có thể có (trong truyện fanfiction tên là The Second Padawan).</li>
      </ul>
      <p>Đúng lúc cậu Anakin và cô Padme im bắt đầu buồn ngủ rồi ngã xuống đất.</p>
      <p>Vào buổi sáng, thầy Qui-Gon và các nữ hầu của cô Padme đi tìm cậu Anakin và cô Padme vì không thấy họ trong phòng ngủ rồi thấy họ ngủ nằm trên đất trong phòng ngai vàng. Vài phút sau, cậu Anakin và cô Padme ngủ dậy và giải thích những gì mà họ đã thấy tầm nhìn tương lai có thật rất tồi tệ làm thầy Qui-Gon, Darth Revan và cô Bastila ngạc nhiên rằng Force đã chọn cậu Anakin và cô Padme biết về tương lai khủng khiếp như thế nào.</p>
      <p>Vài ngày sau, sau đó thầy Qui-Gon và cô Siri đào tạo cậu Anakin, Darth Revan đào tạo cô Padme.</p>
      <p>cậu Anakin có nhiều robot mà mình muốn gồm</p>
      <p>C-3PO (See-Threepio),</p>
      <p>PROXY (Skywalker A Fanon Story),</p>
      <p>R4-P44 (Petey) (trong truyện fanfiction tên là Misunderstood V2),</p>
      <p>Cam droid (Orbie) (lấy từ Coruscant) (trong truyện fanfiction tên là Misunderstood V2),</p>
      <p>10 con ASP-7 (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
      <p>J9 (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
      <p>R1-series astromech droid (trong truyện fanfiction tên là The Dark Lord of Naboo),</p>
      <p>M88-AD (Model-88) (trong truyện fanfiction tên là The Dark Lord of Naboo) cầm kiếm đỏ của Darth Maul.</p>
      <p>Vài tháng sau, cậu Anakin giúp cô bé Aayla dũng cảm khi làm ra kiếm. Vài phút sau, cô Aayla có kiếm xanh da trời còn cậu Anakin cũng có kiếm xanh da trời (kiếm xanh da trời từ Crystal Ankarres Sapphire do cậu ấy có được kiếm trắng (thầy Qui-Gon đã dậy cậu Anakin về Grey Jedi) kết hợp với Crystal Sapphire), nhưng cô bé Aayla đã bắt đầu thích cậu Anakin.</p>
    </div>
  )
}

const AnakinJediPadmeSith_Movie2 = () => {
  return (
    <div>
      <h1>Movie 2</h1>
      <p> </p>
      <p>Trong 10 năm, cậu Anakin là thợ săn Vader cầm kiếm xanh da trời (Ankarres Sapphire) và cô Padme là Sith tên là Mirayya cầm kiếm đỏ (trong truyện fanfiction tên là Darth Padme and the Clones of Kamino). Vào buổi sáng, có con tàu Naboo của Nữ hoàng với 3 lính lái tàu tàu chiến N-1 starfighter, 1 tàu chiến trong 3 con tàu N-1 starfighter có cô Padme 24 tuổi hiện giờ là Mirayya vì nữ hầu của cô ta đang giả tượng nghị sĩ, còn trong trong con tàu Naboo của Nữ hoàng có nữ hầu giả tượng nghị sĩ được bảo vệ bởi cậu Anakin 24 tuổi hiện giờ là Vader. Sau khi con tàu Naboo của Nữ hoàng hạ cánh thì Vader cảm nhận qua bom rồi chạy ra thấy quả bom ở đâu, sau đó Vader mang quả bom khỏi tàu và ném quả bom lên không trung trước khi nó nổ, Vader nhận được tầm nhìn thủ phạm đánh bom là cô gái Aurra Sing. Vào buổi tối Vader ngồi bên cạnh giường mà cô Padme nằm để bảo vệ cô ấy, trong khi đó ở ngoài phòng ngủ của cô Padme có thầy Obi-Wan hiện 35 tuổi với vợ là cô Siri đang theo dõi căn phòng của cô Padme có ổn không. Đúng lúc Vader tỉnh dậy vì cảm nhận nguy hiểm rồi thấy 2 con sâu độc bò lên giường của cô Padme, sau đó Vader giết 2 con sâu độc, đúng lúc thầy Obi-Wan và cô Siri chạy vào phòng ngủ của Padme để xem có chuyện gì, nhưng thầy Obi-Wan nhìn ra cửa sổ thấy có robot bay làm thầy Obi-Wan chạy đến của sổ, sau đó thầy Obi-Wan nhảy qua cửa sổ bắt robot bay và bị đưa đi. Đúng lúc Vader và cô Siri chạy ra lấy xe để đuổi theo thầy Obi-Wan điên (thầy ấy điên vì liều mạng nhảy ra cửa sổ). Vài phút sau, thầy Obi-Wan, Vader và cô Siri đã bắt được nữ thợ săn tên là Zam và Vader nhận được tầm nhìn là Zam chết rồi chặn phi tiêu và thấy là cô Aurra đã chạy trốn vì thất bại.</p>
      <p>Ngày hôm sau, Vader, Mirayya, thầy Obi-Wan và cô Siri đến hành Kamino. Sau đó cậu Anakin xem lính Clone Trooper và có</p>
      <p>đội Clone Trooper 4th của thầy Ki-Adi-Mundi có chủ lĩnh tên là Bacara,</p>
      <p>đội Clone Trooper 27th của Tiplee có chủ lĩnh tên là Doom,</p>
      <p>đội Clone Trooper 41st của cô Luminara và thầy Yoda có chủ lĩnh tên là Gree,</p>
      <p>đội Clone Trooper 91st của cô Stass có chủ lĩnh tên là Neyo,</p>
      <p>đội Clone Trooper 104th của thầy Plo có chủ lĩnh tên là Wolffe,</p>
      <p>đội Clone Trooper 187th của Mace,</p>
      <p>đội Clone Trooper 327th của cô Aayla có chủ lĩnh tên là Bly,</p>
      <p>đội Clone Trooper 212th (đội đó có đội clone trooer 7th) của thầy Obi-Wan có chủ lĩnh tên là Cody,</p>
      <p>đội Clone Trooper 501st của Vader có 3 chủ lĩnh tên là Appo, Vill và Bow với đội thưởng tên là Rex cùng chủ lĩnh Alpha-17,</p>
      <p>đội Clone Shock Trooper của Darth Revan và cô Bastila có 4 chủ lĩnh tên là Fox, Stone, Thorn và Thire với 2 lính của mình gồm Jek và Rys. Sau đó cậu Anakin nhờ lính nhân bản kiểm tra phi tiêu mà Aurra có thì lính nhân bản trả lời ở hành tinh Geonosis. Vài giờ sau, thầy Obi-Wan, Mirayya, Vader và cô Siri đã đến hành tinh Geonosis và phát hiện ở đó có robot của Sith và Dooku phản bội Jedi. Vài giờ sau, thầy Obi-Wan và cô Siri giết lính Geonosis, còn Mirayya giết người tạo robot là Ponudo (ông vua Geonosis) và Poggle của hành tinh Lesser trừ Wattambor, Shumai, Tikkes và Sanhill đã chạy thoát với quân đội robot. Trong khi đó Vader giết cô Aurra bằng cách bóp nát trái tim bằng lực lượng và đã bắt được Dooku (ông ấy bị chặt tay) (trong truyện fanfiction tên là Understand My Sickness), đúng lúc Vader nhìn ra cửa sổ tàu vũ trụ thấy quân đội Clone Trooper đã đến tiêu diệt người Geonosis.</p>
    </div>
  )
}

const AnakinJediPadmeSith_MovieCloneWars2003Volume1 = () => {
  return (
    <div>
      <h1>Movie Clone Wars (2003) - Volume 1</h1>
      <p> </p>
      <p>Vài tháng sau, chiến tranh clone bắt đầu, tất cả Jedi cùng với clone trooer đi tiêu diệt robot gắp thiên hà để cứu người vô tội, trong khi đó cậu Anakin là người cấp cao của Clone Trooper (trong truyện fanfiction tên là New Start).</p>
      <p>Vào buổi sáng vài ngày sau, lính 501st và 212th lên tàu vũ trụ, Vader đến tàu chiến tranh Delta-7 của R4-P44 (Petey) và Mirayya đến tàu chiến tranh Delta-7 của R2-D2 (Artoo) (cô Padme tham gia vì cô ấy không còn là tượng nghị sĩ nữa và người thay cô ấy làm tượng nghị sĩ là chị gái cô ấy (trong truyện fanfiction tên là Second Padawan)).</p>
      <p>Vài giờ sau hành tinh Muunilinst, Vader lái tàu chiến tranh Delta-7 của R4-P44 (Petey) với lính Clone Trooper lái tàu chiến tranh tấn công những kẻ địch lái tàu chiến tranh, còn dưới hành tinh Muunilinst có Mirayya cùng lính Clone Trooper tấn công và ra lệnh bắn vào nhà trung tâm thành phố bằng tên lửa từ xe tăng giết chết Sanhill và bộ tộc của hắn, đúng lúc thầy Obi-Wan thấy có người còn sống là Durge rồi tấn công hắn cho đến khi thầy Obi-Wan chặt bụng Durge đến chết rồi thấy thịt của hắn ở bụng nối với nhau làm thầy Obi-Wan nhận ra Durge là Gen'Dai. Đúng lúc Clone Trooper bắn vào Durge liên trục làm hắn mất bộ giáp rồi tấn công Rego. Vài phút sau, thịt Durge bao phủ Rego, nhưng thầy Obi-Wan sé thịt nổ tung Durge bằng lực đẩy xung quanh. Sau khi thầy Obi-Wan và lính của mình đi và không biết là Durge còn sống vì các thịt của Durge bắt đầu liên kết với nhau. Vài giờ sau, Vader đã tiêu diện tàu vũ trụ của robot và đến gặp thầy Obi-Wan và Mirayya và nói:</p>
      <ul>
        <li>Cậu làm tuyệt lắm, và cậu đã giết Sanhill chưa?</li>
      </ul>
      <p>Mirayya trả lời:</p>
      <ul>
        <li>Rồi, bằng tên lửa của xe tăng của tôi.</li>
      </ul>
<p>Đúng lúc Vader thấy tương lai rằng 7 Jedi gặp nguy hiểm ở hành tinh Hypori làm anh ta và Mirayya và thầy Obi-Wan lo lắng, sau đó thầy Obi-Wan giao Vader đội ARC-77 của chủ lĩnh Fordo để đi cứu Jedi. Vài giờ sau, trong hành tinh Hypori, có tàu trở đội ARC-77 đang bao vào quân robot đang bao vây tàu đổ rồi bay qua quân robot và vào tào đổ, Vader yêu cầu ARC-77 đi cứu Jedi rồi bắt gặp thầy Ki-Adi-Mundi cầm kiếm xanh da trời của Aayla cố đấu với Grievous (Kaleesh) đang cầm kiếm xanh da trời của Daakman Barrek và kiếm xanh lá cây Sha'a Gi, sau đó ARC-77 đưa thầy Ki-Adi-Mundi đi an toàn và cứu được cô Shaak và cô Aayla rồi rút lui bằng tàu của mình như Vader đã dặn, còn Vader nhìn chằm chằm rồi điều kiển 4 cái kiếm (kiếm xanh da trời của Shaak, kiếm xanh da trời của Ki-Adi-Mundi, kiếm xanh lá cây thầy Berrek và kiếm xanh lá cây Tarr Seirr) hút chúng khỏi Grievous vào thắt lưng Vader trừ 2 kiếm của Daakman và Sha'a vì chúng bị Grievous giữ rồi rút lui bằng dịch chuyển, còn Grievous có 2 kiếm của Daakman và Sha'a, sau đó Grievous lẩm bẩm:</p>
    </div>
  )
}

const AnakinJediPadmeSith_StarWarsCloneWarsManga = () => {
  return (
    <div>
      <h1>Star Wars: Clone Wars manga</h1>
      <p> </p>
      <p>Vài ngày sau ở hành tinh Kamino, Vader lái tàu chiến tranh Delta-7 của R4-P44 (Petey) 1 mình để bay vào tàu vũ trụ robot để để phá hủy như ở hành tinh 10 năm trước.</p>
      <p>Vài ngày sau ở hành tinh Ohma-D'un, Vader và thầy Obi-Wan đang giết robot và cứu người vô tội, thầy Obi-Wan thấy Durge còn sống, sau đó Vader và thầy Obi-Wan đánh với Durge cho đến khi lính Clone Trooper cứu hết người vô tội và giết hết robot thì Durge rút lui. Vài ngày sau ở hành tinh Legends, Vader đến gặp Durge rồi đánh nhau với hắn cho đến khi Vader ném bom vào bộ giáp của Durge làm hắn mất bộ giáp, sau đó Vader dùng lực đẩy đẩy Durge xuống sâu dung nham nóng chảy làm hắn ta chết. Vài ngày sau, thầy Obi-Wan bị bắt cóc bởi 2 Sith của Sidious tên là Asajj Ventress.</p>
      <p>Vài ngày sau, thầy Obi-Wan đã thoát ra làm cô Padme và cậu Anakin rất vui.</p>
    </div>
  )
}

const AnakinJediPadmeSith_StarWarsTheCloneWarsMovie2008Unknown = () => {
  return (
    <div>
      <h1>Star Wars The Clone Wars Movie 2008 (Unknown)</h1>
      <p> </p>
      <p>Vài tháng sau, cậu Anakin có học sinh tên là Ahsoka, nhưng cậu Anakin dậy cô Ahsoka học kiếm và giúp cô ấy có kiếm thứ hai là kiếm trắng.</p>
    </div>
  )
}

const AnakinJediPadmeSith_MovieStarWarsTheCloneWarsTVSeries2008_2015Unknown = () => {
  return (
    <div>
      <h1>Movie Star Wars: The Clone Wars (TV Series 2008–2015) (Unknown)</h1>
      <p> </p>
      <p>Nghe nói Pablo-Jill và Eeth Koth bị bắt gặp Grievous, sau đó Grievous giết Pablo-Jill và bắt Eeth làm con tin, nhưng Eeth được Vader cứu bằng dịch chuyển, còn Grievous có đủ 4 kiếm: kiếm xanh da trời của Daakman, kiếm xanh lá cây Sha'a, kiếm xanh da trời của Pablo-Jill, kiếm xanh lá cây của Eeth.</p>
      <p>Vài ngày sau, Mirayya cùng người ngoài hành tinh Gungan đối đầu Grievous, đầu tiên Mirayya chặt tay Grievous làm hắn không còn kiếm nào nữa, sau đó Grievous bị bắt bởi người ngoài hành tinh Gungan (trong truyện fanfiction tên là One Decision is All it Takes), còn Vader đến hành tinh Vassek, sau đó Vader đã đến hang của Grievous chứa đầy chân tay người đều là máy móc và có EV-A4-D thì Vader sẽ có đội quân robot Grievous với 4 kiếm đỏ.</p>
      <p>Vài ngày sau, cậu Anakin phát hiện thiếu tá Tarkin là người mang sự ngu ngốc nên hắn ta bị ính 501st bắt đi, còn cậu Anakin cứu được cô bé giỏi máy tính tên là Chelli Lona Aphra ăn cắp 2 robot nguy hiểm của thiếu tá Tarkin gồm robot chiến tranh tàn bạo tên là BT-01 và robot tra tấn tên là 0-0-0 hay được gọi là Triple-Zero.</p>
    </div>
  )
}

const AnakinJediPadmeSith_MovieCloneWars2003Volume2 = () => {
  return (
    <div>
      <h1>Movie Clone Wars (2003) - Volume 2</h1>
      <p> </p>
      <p>Vài tuần sau, Vader và thầy Obi-Wan chạy vào ngôi đền Sith khi họ đuổi theo Dooku, nhưng bị tắt làm hai thì Vader đánh nhau với Dooku, vài phút sau, Vader đã giết Dooku rồi gặp được linh hồn Sith tên là Rivan (trong truyện fanfiction tên là You Shall Become (Me)), sau đó linh hồn Rovan báo cho Vader Rego biết chắc chắn Darth Sidious sẽ đến vài tháng nữa. Và giờ sau, Vader và Rego đã về hành tinh Coruscant rồi thấy toàn bộ robot tấn công hành tinh Coruscant, sau đó Vader và thầy Obi-Wan cùng đội quân Clone Trooper tấn công bọn robot trong thời gian kết thúc là toàn bộ robot không còn nữa và Vader đã giết Asajj.</p>
    </div>
  )
}

const AnakinJediPadmeSith_Movie3 = () => {
  return (
    <div>
      <h1>Movie 3</h1>
      <p> </p>
      <p>Vài ngày sau, Vader, thầy Obi-Wan và Mirayya chạy vào ngôi đền Sith và bắt gặp Darth Sidious như linh hồn Rivan đã nói. Linh hồn Rivan nói.</p>
      <ul>
        <li>Sidious, ngươi là Sith yếu đuối. Vader và Mirayya là tên mà ta lấy cắp tên mà ngươi đã đặt tên khi Anakin và Padme trở thành Sith ở 3 tương lai riêng của họ khác nhau mà ta thấy. Ngươi chỉ là Sith yếu đuối, lý do ta đã nói với bố Anakin, thần Force. Thần Force đã nhận được thỏa thuật với ta.</li>
      </ul>
      <p>Darth Sidious hét:</p>
      <ul>
        <li>Sao ngươi dám, ta là Sith mạnh nhất vũ trụ, không ai thắng được ta.</li>
      </ul>
      <p>Linh hồn Rivan nói:</p>
      <ul>
        <li>Bị ngu hay sao? Ngươi lạm dụng học sinh của mình và muốn có học sinh mạnh nhất và loại bỏ học sinh cũ bằng cách phản bội. Nói cho mà biết Rego mới là người hoàng đế tốt nhất hơn ngươi. Giờ thì nói thế đủ rồi, chết.</li>
      </ul>
      <p>Sau đó Vader, Mirayya và thầy Obi-Wan tấn công Sidious như 3 chọn 1. Vader bắn điện hồng vào Sidious (trong truyện fanfiction tên là Star Wars Crosscurrent Betrayal) làm hắn bị cảnh giác ở phía sau có Mirayya cầm súng mà linh hồn Rivan đã cho bắn chết Mirayya. Sau đó linh hồn Rivan bắt linh hồn Sidious và mang hắn ta xuống địa ngục và tra tấn. Vài giờ sau, cậu Anakin, thầy Obi-Wan và cô Padme đã trở về.</p>
      <p>Vài ngày sau, cô Padme trở thành chủ tướng của hành tinh Coruscant, cậu Anakin có 2 vợ là cô Padme và cô Aayla, còn thầy Obi-Wan có 4 vợ là cô Siri, cô Sabe và cô Satine và Bo-Katan Kryze (Mandalorian) (trong truyện fanfiction tên là Everyone You Love Is A Sith).</p>
    </div>
  )
}

