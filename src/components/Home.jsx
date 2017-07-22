import React, { Component } from 'react';
import BodyTitle from './BodyTitle';

class Home extends Component {
    render() {

        let code = `
         import Graph from 'graphs-js';

         let G = new Graph();
         G.addEdge(2,3);  // If these vertices are not there in G, It'll create. 
         //Otherwise it'll use the existing.

         G.addVertex(4);
         G.addEdge(5,6);

        `
        //let htmlCode = Prism.highlight(code, Prism.languages.javascript);

        return (
            <div>
                <BodyTitle url={"https://github.com/bala94/graph-theory/blob/master/src/Graph.ts"}
                           title={"Graph Initialization"}/>

                <p> </p>

                <p>Intialization of Graph is mandatory to run any algorithm in this library.
                  There are multiple ways to create a Graph.  </p>
                <div className="">
                    {/*<pre>
                    <code className="gt-demo-innercodeblock"
                        dangerouslySetInnerHTML={{ __html: htmlCode }}
                        />
                </pre>*/}
                    <pre>
                        <code className="language-js">
                            import Graph from "graphs-js"; <br />
                            <br />
                            let G = new Graph();<br/>
                            G.addEdge(2,3);  /** If these vertices are not there in G, It'll create.Otherwise it'll use the existing. */<br/>
                            
                            G.addVertex(4); <br/>
                            G.addEdge(5,6);
                        </code>

                    </pre>
                </div>


            </div>
        );
    }
}

export default Home;