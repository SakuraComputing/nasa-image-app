import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMedia } from '../actions/media';
import MediaList from './MediaList';

export class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            media: [],
            searchString: '',
            imageChecked: false,
            audioChecked: false,
            videoChecked: false
        }
    }

    onChange = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }

    onSearch = (e) => {

        const { searchString, imageChecked, audioChecked, videoChecked } = this.state;
        
        if(searchString) {
            if((imageChecked && audioChecked && videoChecked) || (!imageChecked && !audioChecked && !videoChecked)) {
                console.log('All checked');
                this.props.getMedia(searchString, null);
            } else if(imageChecked) {
                this.props.getMedia(searchString, 'image');
            } else if(audioChecked) {
                this.props.getMedia(searchString, 'audio');
            } else if(videoChecked) {
                console.log('Video checked')
                this.props.getMedia(searchString, 'video');
            }
        }
    }

    toggleImage = () => {
        this.setState({
            imageChecked: !this.state.checked
        })
    } 

    toggleAudio = () => {
        this.setState({
            audioChecked: !this.state.audioChecked
        })
    }
    
    toggleVideo = () => {
        this.setState({
            videoChecked: !this.state.videoChecked
        })
    }
    
    render() {

        let mediaResults;

        if(this.props.media.media) {
            const { items } = this.props.media.media.collection;
            mediaResults = items.map((item, index) => 
            (   
                <MediaList key={index} title={item.data[0].title} item={item} />
            ))
            console.log(this.state);
            console.log(this.props);
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
                        <button 
                            onClick={this.onSearch}
                            className="search-button"
                            id="test"
                        >
                        
                        <ion-icon icon="search" size="large" color="black"/>
                        </button>
                    </div> 
                    <div className="select-group">
                        <input 
                            type="checkbox" 
                            id="images" 
                            value="images" 
                            className="select-checkbox" 
                            onChange={this.toggleImage}
                        />
                        <label htmlFor="images" className="">Images</label>
                        <input 
                            type="checkbox" 
                            id="audio" 
                            value="audio" 
                            className="select-checkbox" 
                            onChange={this.toggleAudio}
                        />
                        <label htmlFor="audio" className="">Audio</label>
                        <input 
                            type="checkbox" 
                            id="video" 
                            value="video" 
                            className="select-checkbox" 
                            onChange={this.toggleVideo}
                        />
                        <label htmlFor="video" className="">Video</label>
                    </div>
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
