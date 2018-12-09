import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAsset } from '../actions/media';

export class AssetItem extends Component {
  render() {
    return (
      <div>
          <h1>Asset Item</h1>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    media: state.media
})
export default connect(mapStateToProps, { getAsset } )(AssetItem);
