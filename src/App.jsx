import React from 'react';
import Sidebar from './components/Sidebar';
import { Link } from 'react-router';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

  }
  render() {

    return (
      <div className="gt-demo-root container-fluid">
        <div className="container gt-demo-main-title"> 
             GRAPHS-JS
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
            <div className="container">
              <div className=" gt-demo-header">
                
                <div className="gt-demo-subheader"> Algorithms </div>
            </div>
              
            </div>
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 col-xl-9">
           <div className="gt-demo-main-body container">
              {this.props.children}
           </div>
          </div>

        </div>

      </div>

    )
  }
}

export default App;
