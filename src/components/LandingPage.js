import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMedia } from '../actions/media';
import MediaList from './MediaList';

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

        let mediaResults;

        if(this.props.media.media) {
            const { items } = this.props.media.media.collection;
            mediaResults = items.map((item, index) => 
            (
                <MediaList key={index} title={item.data[0].title} image={item.links[0].href} />
            ))
        }

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
                    <div className="image-container">
                        {mediaResults}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    media: state.media
})
export default connect(mapStateToProps, { getMedia })(LandingPage);
