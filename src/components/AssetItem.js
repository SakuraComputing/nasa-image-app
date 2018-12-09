import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAsset } from '../actions/media';
import ReactPlayer from 'react-player';

export class AssetItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            media: [],
            asset: []
        }
    }
    
    componentDidMount() {
        this.props.getAsset(this.props.match.params.id);
     }

    render() {
        
        let asset = null;
        
        if(this.props.media.asset) {
            const mediaFile = this.props.media.asset.collection.items[0].href;
            let videoMatch = /\mp4|vtt/
            if(mediaFile.split('.').pop().match(videoMatch)) {
                asset = <div>
                    <ReactPlayer className="asset-image" width="100%" height="100%" url={mediaFile} controls />
                </div>
        } else {
            asset = <div>
                <img className="asset-image" src={this.props.media.asset.collection.items[0].href} alt="none"/>
            </div>
        }
    }
    
    return (
      <div className="asset-container">
          <h1>Selected Item</h1>
          {asset}
          <div className="asset-description">
              {this.props.location.state.description}
          </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    media: state.media,
})
export default connect(mapStateToProps, { getAsset } )(AssetItem);


