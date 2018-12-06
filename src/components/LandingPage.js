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
                <label htmlFor="search">Enter Search criteria</label>
                <input className="search-input" onChange={this.onChange} type="text" name="search"/>

          
            </div>
        )
    }
}
export default LandingPage;
