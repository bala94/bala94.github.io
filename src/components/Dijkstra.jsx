import React, { Component } from 'react';
import BodyTitle from './BodyTitle';
import BasicGraph from '../images/basicgraph.jpg';
import Code from './Code';


class Dijkstra extends Component {
    render() {
       
        return (
            <div>
                <BodyTitle url={"https://github.com/bala94/graph-theory/blob/master/src/Graph.ts"}
                           title={"Dijkstra's Shortest Path Algorithm"}/>

                

                

                <p> There are multiple ways to initialize this Graph.Choose the way which best suits for your raw input data. 
                    Below examples explains all different ways.
               </p>
                
                <div className="row gt-demo-home-img"> 
                   <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"><img src={BasicGraph}/></div>
                   <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div style={{color:"green",fontStyle:"italic"}}> 
                          <p> Notes: </p>
                          <p>  By default, weight = 1 for all edges </p>
                          <p> By default, type ="directed" for the graph</p>
                      </div>
                   </div>
                </div>

                <br/>
                <p> Method 1:</p>
                <div>

                    <Code code={code1}/>
                </div>




            </div>
        );
    }
}

export default Dijkstra;

const code1 = `
import Graph from 'graphs-js';

let G = new Graph();
G.addEdge('a','b');  //If these vertices are not there in G, It'll create.Otherwise it'll use the existing. 
G.addEdge('a','e'); 
G.addEdge('d','c'); 
G.addEdge('d','e'); 
G.addEdge('b','d');
G.addEdge('c','e')
`

const code2 = `
import Graph from 'graphs-js';

let G = new Graph({
   input:{
        a: ['b','e'],
        c: ['e'],
        d: ['c','e'],
        b: ['d']
   } 
})
`

const code3 = `
import Graph from 'graphs-js';

let G = new Graph({
   input:
})
`