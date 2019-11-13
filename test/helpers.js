import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;

var colors = require('mocha/lib/reporters/base').colors;
colors['diff added'] = '30;42';

colors['diff removed'] = '30;41';
colors['pass'] = '32';