import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMedia } from '../actions/media';

export class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            media: [],
            searchString: ''
        }
    }

    onChange = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }

    onSearch = (e) => {
        const search = this.state.searchString
        if(search) {
            this.props.getMedia(search);
        }
    }
    
    render() {

        return (
            <div className="filter-bar">
                <div className="filter-header">
                    <h1>NASA Search</h1>     
                    <div className="search-bar">
                        <input 
                            onChange={this.onChange} 
                            type="text" 
                            name="search"
                            placeholder="Enter search text"
                            className="input-box"
                        />
                    </div> 
                    <div className="select-group">
                        <input 
                            type="checkbox" 
                            id="images" 
                            value="images" 
                            className="select-checkbox" 
                        />
                        <label htmlFor="images" className="">Images</label>
                        <input 
                            type="checkbox" 
                            id="audio" 
                            value="audio" 
                            className="select-checkbox" 
                        />
                        <label htmlFor="audio" className="">audio</label>
                    </div>
                    <button onClick={this.onSearch}>Search</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    media: state.media
})
export default connect(mapStateToProps, { getMedia })(LandingPage);
