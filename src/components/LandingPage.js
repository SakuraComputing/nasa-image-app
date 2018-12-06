import React, { Component } from 'react'

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            media: [],
            searchString: ''
        }
    }
    
    render() {
        return (
            <div>
                <h1>NASA Media Viewer</h1>                
            </div>
        )
    }
}
export default LandingPage;
