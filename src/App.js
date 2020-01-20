import React from 'react';

import './App.css';
import Layout from './layout/layout';
import SiteApplication from './containers/SiteApplication';

function App() {
  return (
    <div className="App">
     <Layout>
      
      <SiteApplication />

     </Layout>
    
    </div>
  );
}

export default App;
