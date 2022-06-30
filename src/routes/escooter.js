import React, {Component} from 'react'
import '../index.css'
// import '../style.scss'
import '../App.css'
// import { X } from 'react-feather';
var e_scooter = require('../assets/e_scooter.pdf');


class EScooter extends Component {

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
  
   
        <div style={{height:'100vh',width:'100vw'}}>
            <object data={e_scooter} style={{type:'application/pdf',width:'100%',height:'100%'}} >
                {/* alt : <a href={shibani_resume} >test.pdf</a> */}
            </object>
        </div>


    )
  }

  

}
export default EScooter