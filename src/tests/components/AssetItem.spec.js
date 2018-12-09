import React from 'react';
import { shallow } from 'enzyme';
import AssetItem from '../../components/AssetItem';

describe('Asset Item', () => {

    let assetItem;

    beforeEach(() => {
        assetItem = shallow(<AssetItem />);
    })
    it('should render correctly', () => {
        expect(assetItem).toMatchSnapshot();        
    });
});