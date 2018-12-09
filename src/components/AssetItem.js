import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAsset } from '../actions/media';

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
    
    console.log(this.props.location.state);

    if(this.props.media.asset) {
        asset = 
        <img className="asset-image" src={this.props.media.asset.collection.items[0].href} alt="none"/>
    }
    

    return (
      <div className="asset-container">
          <h1>Asset Item</h1>
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


