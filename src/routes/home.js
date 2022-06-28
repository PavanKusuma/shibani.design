import React, {Component} from 'react'
import '../index.css'
// import '../style.scss'
import '../App.css'
// import { X } from 'react-feather';
var shibani = require('../assets/profile_img.jpg');
var shibani_resume = require('../assets/shibani_resume.pdf');

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

  // navigateInsights(){
  //   this.props.history.push('/insights')
  // }

  render(){

    return(
  
    <div className="App">
       
      <header className="App-header">
      <img src={shibani} style={{width:'175px',height:'175px',objectFit:'cover',padding:'16px',borderRadius: '60% 40% 40% 20% / 70% 50% 30% 25%'}}/>
        <h1>Shibani Pandit</h1>
        {/* <div><p>A<mark> multidisiplinary designer </mark>. Cares about details in his work that includes from<mark> interaction</mark> +<mark> visual designs</mark>.</p></div> */}
        <div><p><b>UX, product and more!</b><br/> <i>Evaluating digital experiences for users to have less friction and become more productive.</i>.<br/> 
        {/* Believes - The purpose of design surfaces from <mark>human needs.</mark> */}
        {/* <br/> */}
        {/* Jack of <del>all</del> few trades. */}
        </p></div>
      </header>
      {/* <h4>Work</h4> */}
      <br/>
      
      {/* <br/> */}
      <h3>Work</h3>
      <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>

        <div className='project_card' >
          {/* <img src={ms_cover} style={{width:'100%',height:'200px',objectFit:'cover', borderRadius:'12px 12px 0px 0px'}}/> */}
          <div style={{padding:'16px',margin:'10px'}}>
            <h3>Project 1</h3>
            {/* <p>From concepts to wireframing and visuals, it was challenging to provide answers to business questions using clean dashboards.</p> */}
            <p>From brainstorming to visuals, I created end to end dashboards that answer complex business questions and has upto 60K MAUs.</p>
            <p style={{color:'#004dff'}}>Quick view →</p>
          </div>
        </div>
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
      
      
      <br/><br/><br/>
      <h3>
      <center><span><a href={shibani_resume} target="_blank">Download my resume</a></span></center>
      </h3>
      {/* <h2>Resume</h2> */}
      <br/><br/>
      
      <div style={{display:'flex', justifyContent:'center',textAlign:'left',padding:'16px'}}>
        
        <div style={{width:'600px'}}>
        <h3>Experience</h3>
          {/* <h4>Experience</h4> */}
          <p><b>VMware</b><br/>
          <span>Dec 2019 - present</span><br/>
          • Designed CIOs Observability Dashboard.<br/>
          • Helped Technical Associate Managers deliver Insight Reports.<br/>
          • Seamless vRealise Cloud Universal Onboarding.<br/>
          • One click activation of Integrations in vROps.<br/>
          
          </p>
          
          <p><b>Infosys Limited</b><br/>
          <span>Jun 2016 - Oct 2019</span><br/>
          • Designed a platform for global Insurance and Annuity industry
used by the back-office users.<br/>
          • Designed the customer portal for an Agricultural equipment
manufacturing company.<br/>
          
          </p>
          
        </div>
      </div>
     
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

     

     

      <div style={{display:'flex', justifyContent:'center',textAlign:'left',padding:'16px'}}>
        <div style={{width:'600px'}}>
          <h3>Details</h3>
        
          
          <p><b>Email</b><br/>
          newtonpavan33@gmail.com.<br/>
          </p>
          
          <p><b>Mobile</b><br/>
          7799813519<br/>
          </p>
        </div>
      </div>

      <hr className="hr-text" data-content="Thank you!" />
      <br/><br/><br/>
    </div>

    )
  }

  

}
export default Home
