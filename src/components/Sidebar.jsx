import React, { Component } from 'react';
import { Link } from 'react-router';
import "./Sidebar.css";
import Collapsible from 'react-collapsible';

class Sidebar extends Component {

    constructor(props){
        super(props);
        let links = [
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Dijkstra (Shortest Path)" },
          {link:"/home",title: "Bellman-Ford (Shortest Path)" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Bellman-Ford (Shortest Path)" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Bellman-Ford (Shortest Path)" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Bellman-Ford (Shortest Path)" },
          {link:"/home",title: "Graph Initialization" },
          {link:"/home",title: "Graph Initialization" }
        ]
        this.state = {
            links: [...links],
            searchResult: [...links]
      }
      this.onSearch = this.onSearch.bind(this);
    
    }

    onSearch(e){
      let query = e.target.value.toUpperCase();
      let searchResult = this.state.links.filter(item => {
          return item.title.toUpperCase().indexOf(query) > -1
      })
      this.setState({
          searchResult
      })
    }

    getSidebarItems(){
        let SidebarItems = this.state.searchResult.map((item,index) => {
            
             return <SideBarItem key={index} title={item.title} link={item.link}/>
        })
        return SidebarItems

    }
    render() {
         
        return (
            <div className="container">
                <input onChange={this.onSearch} className="gt-demo-sidebar-search" type="text" placeholder={"Search"}/>
                <div className="gt-demo-sidebar">
                {this.getSidebarItems()}
                </div>
                
            </div>
        );
    }
}

export default Sidebar;


class SideBarItem extends Component{
    render(){
        return(
            <div  className="gt-demo-sidebar-link"> <Link to={this.props.link}> {this.props.title} </Link> </div>
        )

    }
}


