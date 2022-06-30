import React, {Component} from 'react'
import '../index.css'
// import '../style.scss'
import '../App.css'
// import { X } from 'react-feather';
var save_the_soul = require('../assets/save_the_soul.pdf');


class SaveTheSoul extends Component {

  constructor(props){
    super(props)
    this.state = {
       
    }
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render(){

    return(
  
   
        <div>
            <iframe src={save_the_soul} style={{width: '100%', height: '100vh'}}/>
            {/* <object data={save_the_soul} style={{type:'application/pdf',width:'100%',height:'100%'}} >
                alt : <a href={shibani_resume} >test.pdf</a>
            </object> */}
        </div>


    )
  }

  

}
export default SaveTheSoul