import React, { Component } from 'react';

class Code extends Component {
    render() {
        return (
            <div style={{maxHeight:"300px",overflow:"auto"}}>
                    <pre>
                        <code className="language-js">
                            {
                              this.props.code
                            }
                            
                        </code>

                    </pre>
            </div>
        );
    }
   
    componentDidMount(){
        console.log('Component Did mount');
        Prism.highlightAll();
    }
}

export default Code;