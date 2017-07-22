import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {Link} from 'react-router';

 class App extends React.Component {
   constructor(){
     super();
     
   }
  render() {
   
    return (
      <div className="container-fluid"> 
        <div className="container"> 
          <Header/>
        </div>
        <div className="row">   
           <div className="col-3">
             <Sidebar/>
          </div>
          <div className="col-9">
            Graph Basic setup
          </div>
          
         </div>
        {this.props.children} 
      </div>
      
    )
  }
}

export default App;
