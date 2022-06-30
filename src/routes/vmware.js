import React, {Component} from 'react'
import '../index.css'
// import '../style.scss'
import '../App.css'
// import { X } from 'react-feather';
var healthcheck = require('../assets/healthcheck.pdf');


class VMware extends Component {

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
  
   
        <div >
        <iframe src={healthcheck} style={{width: '100%', height: '100vh'}}/>
            {/* <object data={healthcheck} style={{type:'application/pdf',width:'100%',height:'100%'}} >
                
            </object> */}
            {/* alt : <a href={shibani_resume} >test.pdf</a> */}
        </div>

        


    )
  }

  

}
export default VMware