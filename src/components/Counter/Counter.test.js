import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe('Counter', () => {
    it('should render counter', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('[data-test="counterContainer"]').exists()).to.equal(true);
    });
    it('should display 0 as default value', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('0');
    })
});