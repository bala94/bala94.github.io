import React, { Component } from 'react';
import BodyTitle from './BodyTitle';
import BasicGraph from '../images/basicgraph.jpg';
import JustVertex from '../images/justvertex.jpg';
import VertexWithEdge from '../images/vertexwithedge.jpg';
import "./Home.css";
import Code from './Code';

class Home extends Component {
    render() {
       console.log(Prism);
       
        return (
            <div>
                <BodyTitle url={"https://github.com/bala94/graph-theory/blob/master/src/Graph.ts"}
                           title={"Graph Initialization"}/>

                

                <p>Initialization of Graph is the first and mandatory step to run any algorithm in graphs-js library.
                   This Graph uses Hash structure to store vertices,edges. So retreiving any vertex,edge or weight of any edge is executed in constant time. <i> O(1) </i> <br/> 
                </p>

                

                <p> There are multiple ways to initialize this Graph.Choose the way which best suits for your raw input data. 
                    Below examples explains all different ways.
               </p>
                
                <div className="row gt-demo-home-img"> 
                   <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"><img src={BasicGraph}/></div>
                   <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="gt-demo-notes"> 
                          <p> Notes: </p>
                          <p>  By default, weight = 1 for all edges </p>
                          <p> By default, type ="directed" for the graph</p>
                      </div>
                   </div>
                </div>

                <br/>
                <p style={{marginBottom:"0px"}}> Method 1: (Edge List)</p>
                <Code code={code1}/>

                <br/>
                <p style={{marginBottom:"0px"}}> Method 2: (Adjaceny List)</p>
                <div>
                   <Code code={code2}/>
                </div>
                <br/>
                <p> Both of the above methods can be used together. </p>

                <div>
                   <Code code={code3}/>
                </div>
                <br/>

                <p className="gt-demo-body-subheader"> Methods in Graph class </p>
                <p className="gt-demo-body-method-title"> addVertex(vertexId) </p>
                <span className="gt-demo-highlight-keyword"> vertexId: string|number </span>
                <Code code={addVertexExample}/>
                <div> <img src={JustVertex}/> </div>
                <br/>
                
                <p className="gt-demo-body-method-title"> addEdge(vertexId,vertexId2,weigth) </p>
                <div style={{marginLeft:"10px"}}>
                <p className="gt-demo-highlight-keyword"> vertexId1: string|number (required) </p>
                <p className="gt-demo-highlight-keyword"> vertexId2: string|number (required) </p>
                <p className="gt-demo-highlight-keyword"> weight: string|number (optional) </p>
                </div>
                <Code code={addEdgeExample}/>
                <div> <img src={VertexWithEdge}/> </div>
                
                
                


            </div>
        );
    }
}

export default Home;

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
   input:{
        a: ['b','e'],
        c: ['e'],
        d: ['c','e'],
       
   } 
})

G.addEdge('b','d');
`

const addVertexExample = `
G = new Graph();
G.addVertex('a');
G.addVertex(3);
`

const addEdgeExample = `
G.addEdge('a',3,5)
`