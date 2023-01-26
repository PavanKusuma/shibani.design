import React, {Component} from 'react'
import '../index.css'
// import '../style.scss'
import '../App.css'
// import { X } from 'react-feather';
var shibani = require('../assets/profile_img.jpg');
var shibani_resume = require('../assets/shibani_resume2.pdf');
var healthcheck = require('../assets/healthcheck.png');
var seat = require('../assets/seat.jpeg');
var escooter = require('../assets/escooter.png');
var savesoul = require('../assets/savesoul1.png');
var insurance = require('../assets/insurance.jpeg');
var reportinginsights = require('../assets/reportinginsights.png');
var award1 = require('../assets/award1.png');
var award2 = require('../assets/award2.png');

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      myMap : false,
    }
    
  }

  showMap() {
    this.setState({
      myMap: !this.state.myMap,
    }, ()=> {
      console.log('okok')
      console.log(this.state.myMap)
    });
    // console.log('okok')
    // console.log(this.state.myMap)
}

navigateVMware(){
    this.props.history.push('/vmware')
  }
navigateEScooter(){
    this.props.history.push('/escooter')
  }
navigateInsurance(){
    this.props.history.push('/insurance')
  }
navigateSaveTheSoul(){
    this.props.history.push('/savethesoul')
  }
  navigateSpaceAllocation(){
    this.props.history.push('/spaceallocation')
  }
  navigateReportingInsights(){
    this.props.history.push('/reportinginsights')
  }

  render(){

    return(
  
    <div className="App">
       
      <header className="App-header">
      <img src={shibani} style={{width:'205px',height:'205px',objectFit:'cover',padding:'16px',borderRadius: '60% 40% 40% 20% / 70% 50% 30% 25%'}} alt=""/>
      
        <h1>Shibani Pandit</h1>
        {/* <div><p>A<mark> multidisiplinary designer </mark>. Cares about details in his work that includes from<mark> interaction</mark> +<mark> visual designs</mark>.</p></div> */}
        <div><p style={{color:'#333'}}>Product designer 3<br/> VMware<br/> 
        {/* Believes - The purpose of design surfaces from <mark>human needs.</mark> */}
        {/* <br/> */}
        {/* Jack of <del>all</del> few trades. */}
        </p></div>
      </header>
      {/* <h4>Work</h4> */}
      <br/>
      
      {/* <br/> */}
      <h4 style={{display: 'flex',justifyContent:'center', fontWeight:'600', fontVariant:'all-small-caps'}}>Case studies</h4>
      <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>

        <div className='project_card' onClick={this.navigateReportingInsights.bind(this)}>
          <img src={reportinginsights} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3 style={{color:'#004dff !important'}}>Reporting Insights →</h3>
            {/* <p>From concepts to wireframing and visuals, it was challenging to provide answers to business questions using clean dashboards.</p> */}
            <p>Empowering VMware Support Managers to deliver insightful reports using Skyline product to ensure reliability and stability in customers environment.</p>
            {/* <p style={{color:'#004dff'}}>Quick view →</p> */}
          </div>
        </div>

        <div className='project_card' onClick={this.navigateVMware.bind(this)}>
          <img src={healthcheck} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Environment Health check report →</h3>
            {/* <p>From concepts to wireframing and visuals, it was challenging to provide answers to business questions using clean dashboards.</p> */}
            <p>Helping Account Managers deliver Health Check Reports on customer environments and architecture.</p>
            {/* <p style={{color:'#004dff'}}>Quick view →</p> */}
          </div>
        </div>
        <div className='project_card' onClick={this.navigateEScooter.bind(this)}>
          <img src={escooter} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>E-Scooter Digital Dashboard →</h3>
            {/* <p>From concepts to wireframing and visuals, it was challenging to provide answers to business questions using clean dashboards.</p> */}
            <p>A smart, Safe, and driver-friendly E-scooter Digital Dashboard.</p>
            {/* <p style={{color:'#004dff'}}>Quick view →</p> */}
          </div>
        </div>
        <div className='project_card' onClick={this.navigateInsurance.bind(this)}>
          <img src={insurance} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Insurance lifecycle management →</h3>
            {/* <p>From concepts to wireframing and visuals, it was challenging to provide answers to business questions using clean dashboards.</p> */}
            <p>A platform for complete end-to-end support and servicing of an Insurance policy.</p>
            {/* <p style={{color:'#004dff'}}>Quick view →</p> */}
          </div>
        </div>
        <div className='project_card' onClick={this.navigateSaveTheSoul.bind(this)}>
          <img src={savesoul} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Save the Soul</h3>
            {/* <p>From concepts to wireframing and visuals, it was challenging to provide answers to business questions using clean dashboards.</p> */}
            <p>A disaster management platform →</p>
            {/* <p style={{color:'#004dff'}}>Quick view →</p> */}
          </div>
        </div>
        {/* <div className='project_card' onClick={this.navigateSpaceAllocation.bind(this)}>
          <img src={seat} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Capacity, planning, and Infrastructure</h3>
            <p>Helping CPI admins manage space allocation.</p>
            <p style={{color:'#004dff'}}>Quick view →</p>
          </div>
        </div> */}

{/* 
        <div className='project_card' onClick={this.navigateSmartCampus.bind(this)}>
          <img src={campus} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Digital solution to smoothly communicate for campuses</h3>
            <p>From research to product launch, I worked through user feedback to create a platform with good experience.</p>
            <p style={{color:'#004dff'}}>Quick view →</p>
          </div>
        </div>

        <div className='project_card' onClick={this.navigateGoogleGlass.bind(this)}>
          <img src={glass} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Ok Glass, improve my bottomline</h3>
            <p>Proof of concept for leveraging wearable technologies to help businesses optimize operations, simplify processes, and enhance users' lives.</p>
            <p style={{color:'#004dff'}}>Quick view →</p>
          </div>
        </div>

        <div className='project_card' onClick={this.navigateUbrand.bind(this)}>
          <img src={ubrand} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Helping brands to better plan their future business</h3>
            <p>Driving the process from pitching an idea of adding gamification into feedback system and market evaluation of it.</p>
            <p style={{color:'#004dff'}}>Quick view →</p>
          </div>
        </div>

        <div className='project_card' onClick={this.navigateTime.bind(this)}>
          <img src={time} style={{width:'100%',height:'200px', objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Time Inc. <br/>aka Meredith</h3>
            <p>Bunch of interaction + visual work in media domain. I curated experiences for content creators.</p>
            <p style={{color:'#004dff'}}>Quick view →</p>
          </div>
        </div>
         */}

      </div>
      <hr className="hr-text" data-content="Thank you!" />
      
      <h4 style={{display: 'flex',justifyContent:'center', fontWeight:'600', marginTop:'100px', fontVariant:'all-small-caps'}}>Awards</h4>
      <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>

        <div className='award_card'>
          <img src={award1} style={{width:'100%',height:'100%',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
            <h4>Achieve our best</h4>
          </div>
        </div>

        <div className='award_card'>
          <img src={award2} style={{width:'100%',height:'100%',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/>
          <div style={{padding:'16px',margin:'10px'}}>
          <h4>Elevate our best</h4>
            
          </div>
        </div>
        
      </div>
      
      
      <br/><br/><br/>
      <h3>
      <center><span><a href={shibani_resume} target="_blank" rel="noreferrer">Download resume</a></span></center>
      </h3>
      {/* <h2>Resume</h2> */}
      <br/><br/>
      
      
     
      <br/><br/><br/>
{/*       
      <div style={{display:'flex', justifyContent:'center',textAlign:'left',padding:'16px'}}>
        <div style={{width:'600px'}}>
          
          <p><b>User experience tools & methods</b><br/>
            I believe that problems do have solutions but the quest for the good solution is where design tools can help us. I am good at interaction and visual design. I strongly believe that every interaction and visual design decisions should be taken after deep understanding of users.<br/>
          </p>
          
          <p><b>Developer & Tech knowledge</b><br/>
          I was passionate coder and have a good idea about the power of tech and its possibilities. That helps me in designing solutions that are holistic.
          </p>
          
          <p><b>Public speaking</b><br/>
          I addressed people at different podiums and I coach graduate students for their college projects.
          </p>
        </div>
      </div> */}

     

     

      
      <hr className="hr-text" data-content="Thank you!" />
      <br/><br/><br/>
    </div>

    )
  }

  

}
export default Home
