import React from 'react';
import { shallow } from 'enzyme';
import MediaList from '../components/mediaList';
import media from '../fixtures/media';

describe('MediaList component', () => {
    it('should render correctly', () => {
        const mediaList = shallow(<MediaList {...media[0]}/>)
        expect(mediaList).toMatchSnapshot();
    });
});