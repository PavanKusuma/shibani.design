import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './routes/home'
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
        </Switch>
      </Router>
    )
  }
}
