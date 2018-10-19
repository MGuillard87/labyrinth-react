import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

it('should render a tile', () => {
    const wrapper = shallow(<Tile x={0} y={0} type={'┃'} degrees={0} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.tile')).toHaveLength(1);
});

it('should contain 1 image', () => {
    const wrapper = shallow(<Tile x={0} y={0} type={'┃'} degrees={0} />);
    expect(wrapper.find('.tile-image')).toHaveLength(1);
});
