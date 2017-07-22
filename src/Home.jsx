import React, { Component } from 'react';


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
                <b> Graph Initialization </b>
                <br/>


                <div className="">
                {/*<pre>
                    <code className="gt-demo-innercodeblock"
                        dangerouslySetInnerHTML={{ __html: htmlCode }}
                        />
                </pre>*/}
                <pre>
                    <code className="language-javascript"> 
                        var a = 10;
                        var b = 20
                     </code>
                </pre>
                </div>


            </div>
        );
    }
}

export default Home;