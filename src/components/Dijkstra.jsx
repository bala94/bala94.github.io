import React, { Component } from 'react';
import BodyTitle from './BodyTitle';
import Code from './Code';
import {Link} from 'react-router';
import dijkstra1 from '../images/dijkstra1.jpg';


class Dijkstra extends Component {
    render() {
       
        return (
            <div>
                <BodyTitle url={"https://github.com/bala94/graph-theory/blob/master/src/Graph.ts"}
                           title={"Dijkstra's Shortest Path Algorithm"}/>

                

                

                <p>  
                    Dijkstra is single source Shortest path Algorithm.
               </p>

               
               <p className="gt-demo-notes">
                    Note: Dijkstra Algorithm will not run on <Link to="/negative-cycle"> Negative Cycle graph </Link>.
                  
                </p>
                  <p> Make sure that there is no negative cycle in your graph. Or use <span className="gt-demo-highlight-keyword"> isNegativeCyclic </span> function from <span className="gt-demo-highlight-keyword"> graph-js/negative-cyclic </span> library
                        to check if there any negative cycles in the graph </p>

                <p> Example Usage:</p> 
                <div style={{textAlign:"center"}}> 
                    <img src={dijkstra1}/>
                </div>

                <br/>
                
                <div>

                    <Code code={dijkstra}/>
                </div>




            </div>
        );
    }
}

export default Dijkstra;

const dijkstra = `
import Graph from 'graphs-js';
import dijkstra from 'graphs-js/dijkstra';

/** ....
 * Graph G initialziation code as per the given image */

let G1 = dijkstra(G,'a');  //It run dijkstra on Graph G, and starting from vertex 'a'
//G1 is the relaxed Graph (output of dijkstra)

G1.shortestDistance('f'); //Output: 13.5 (3+2+7+1.5) 
G1.getShortestPath('e'); //Output: ['a','b','d','e']
G1.getDijkstraSource(); //Output: a

let G2 = dijkstra(G,'d');
G2.shortestDistance('f'); //Output: 8.5 (7+1.5)
G2.shortestDistance('b'); //Output: null (No path exist)
G1.getDijkstraSource(); //Output: d





`

