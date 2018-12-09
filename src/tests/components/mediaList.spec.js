import React from 'react';
import { shallow } from 'enzyme';
import MediaList from '../../components/MediaList';
import media from '../fixtures/media';

describe('MediaList component', () => {
    it('should render correctly', () => {
        const item = { 
            links: [ { href: jest.fn() } ],
            data: [ { nasa_id: jest.fn() }]
        };
        const mediaList = shallow(<MediaList item={item} {...media[0]}/>)
        expect(mediaList).toMatchSnapshot();
    });
});