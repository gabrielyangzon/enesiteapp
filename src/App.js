import React , { useEffect }from 'react';
import './App.css';
import Layout from './layout/layout';
import SiteApplication from './containers/SiteApplication';
import axios from 'axios'
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import Manage from './containers/Manage/Manage'

function App() {

  // useEffect(()=>{

  //   axios.get('https://ene-project.firebaseio.com/').then(result => console.log(result.status))
      
  // },[])

  return (
    <div className="App">
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/" component={SiteApplication}/> 
          <Route  path="/manage" component={Manage}/> 
        </Switch>
        </Layout>
     </Router>
    
    </div>
  );
}

export default App;
