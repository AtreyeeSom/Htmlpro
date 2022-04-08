import React from 'react'
import {Route, Switch,BrowserRouter as Router} from "react-router-dom"
import About from '../about'
import Blog from '../blog'
import Contact from '../contact'
import Indexx from '../indexx'
import Service from '../service'


const Routes = () => {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/con" component={Contact}/>
                <Route  exact path="/" component={Indexx}/>
                <Route path="/serv" component={Service}/>
               
            </Switch>
        </Router>
    </div>
  )
}

export default Routes