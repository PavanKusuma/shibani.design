import React, {Component} from 'react'
import '../index.css'
// import '../style.scss'
import '../App.css'
// import { X } from 'react-feather';
var spaceallocation = require('../assets/space_allocation.pdf');


class SpaceAllocation extends Component {

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
            <iframe src={spaceallocation} style={{width: '100%', height: '100vh'}}/>
            {/* <object data={spaceallocation} style={{type:'application/pdf',width:'100%',height:'100%'}} >
                alt : <a href={shibani_resume} >test.pdf</a>
            </object> */}
        </div>


    )
  }

  

}
export default SpaceAllocation