import React from 'react';
import Home from '../src/components/Home/Home';

describe('Home', () => {
	it('should have an h1 tag', function () {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
