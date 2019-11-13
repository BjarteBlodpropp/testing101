import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe('Counter', () => {
    it('should render counter', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('[data-test="counterContainer"]').exists()).to.equal(true);
    });
    it('should use 0 as initial value if initialValue is not provided', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('0');
    });
    describe('Counter - Invalid initialValues', () => {
        it('should use 0 as initial value if initialValue is a string', () => {
            const wrapper = shallow(<Counter initialValue={'5'}/>);
            expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('0');
        });
        it('should use 0 as initial value if initialValue is undefined', () => {
            const wrapper = shallow(<Counter initialValue={undefined}/>);
            expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('0');
        });
        it('should use 0 as initial value if initialValue is null', () => {
            const wrapper = shallow(<Counter initialValue={null}/>);
            expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('0');
        });
    });
    it('should use initialValue as initial value if provided and valid', () => {
        const wrapper = shallow(<Counter initialValue={5}/>);
        expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('5');
    });
    it('should use initialValue as initial value if initialValue is negative', () => {
        const wrapper = shallow(<Counter initialValue={-5}/>);
        expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('-5');
    });
    it('should use initialValue as defaultValue if provided and valid', () => {
        const wrapper = shallow(<Counter initialValue={5}/>);
        expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('5');
    });
    describe('Counter - Button clicks', () => {
        it('should increment by one when increment button is clicked', () => {
            const wrapper = shallow(<Counter/>);
            wrapper.find('[data-test="incrementButton"]').simulate('click');
            expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('1');
        });
        it('should decrement by one when increment button is clicked', () => {
            const wrapper = shallow(<Counter/>);
            wrapper.find('[data-test="decrementButton"]').simulate('click');
            expect(wrapper.find('[data-test="countAmount"]').text()).to.equal('-1');
        });
    });
});
