import React, { Component } from 'react';
import { Link } from 'react-router';
import "./Sidebar.css";
import Collapsible from 'react-collapsible';

class Sidebar extends Component {

    constructor(props){
        super(props);
        let links = [
          {link:"/home",title: "Graph Initialization" },
          {link:"/dijkstra",title: "Dijkstra (Shortest Path)" },
          {link:"/bellman-ford",title: "Bellman-Ford (Shortest Path)" },
          {link:"/floyd-warshall",title: "Floyd–Warshall (Shortest Path)" },
          {link:"/astar",title: "A* algorithm - (Shortest Path)" },
          {link:"/bipartite",title: "Bipartite graph (type)" },
          {link:"/cyclic",title: "Cycle Graph (type)" },
          {link:"/negative-cycle",title: "Negative Cycle Graph (type)" },
          {link:"/directed",title: "Directed Graph (type)" },
          {link:"/chromatic-number",title: "Chromatic Number (Graph Coloring)" },
          {link:"/fkt",title: "FKT Algorithm (Planar Graph)" },
          {link:"/kruskal",title: "Kruskal's Algorithm (MST)" },
          {link:"/prim",title: "Prims's Algorithm (MST)" },
          {link:"/topology-sort",title: "Topological sort" },
          {link:"/harmonious coloring",title: "Harmonious Coloring" },
          {link:"/ramsey-number",title: "Ramsey Number (Graph coloring)" },
          {link:"/edge-coloring",title: "Edge Coloring" },
          {link:"/complete-graph",title: "Complete Graph (type)" },
          {link:"/canadian-traveller-problem",title: "Canadian Traveller Problem (SP)" },
          {link:"/travelling-salesman",title: "Travelling salesman problem" },
          {link:"/graph-reduction",title: "Graph Reduction" },
          {link:"/critical-graph",title: "Critical Graph" },
          {link:"/graph-labeling",title: "Graph labeling" },
          {link:"/graph-pebbling",title: "Graph pebbling" },
          {link:"/vertex-cover",title: "Vertex Cover Problem" },
          {link:"/frequency-parition",title: "Frquency Partition" },
          {link:"/neighbor-joining",title: "Neighbor Joining" },
          {link:"/eternal-dominating-set",title: "Eternal Dominating set" },
          {link:"/flood-fill",title: "Flood Fill" },
          {link:"/bfs",title: "Breadth First Search" },
          {link:"/dfs",title: "Depth First Search" },
          {link:"/grith",title: "Grith" },
          {link:"/entitative-graph",title: "Entitative Graph" }
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


