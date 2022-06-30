import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './routes/home'
import VMware from './routes/vmware'
import EScooter from './routes/escooter'
import Insurance from './routes/insurance'
import SaveTheSoul from './routes/savethesoul'
import SpaceAllocation from './routes/spaceallocation'
// import GoogleGlass from './routes/googleglass'
// import SmartCampus from './routes/smartcampus'
// import Ubrand from './routes/ubrand'
// import Insights from './routes/insights'
// import Time from './routes/meredith_work'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }


  render(){
    return (
      <Router>
        <Switch>
          
          {/* <Route exact path="/insights" component={Insights} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/vmware" component={VMware} />
          <Route exact path="/escooter" component={EScooter} />
          <Route exact path="/insurance" component={Insurance} />
          <Route exact path="/savethesoul" component={SaveTheSoul} />
          <Route exact path="/spaceallocation" component={SpaceAllocation} />
        </Switch>
      </Router>
    )
  }
}
