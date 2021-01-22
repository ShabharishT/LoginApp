import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

const usernameInput = {
    target: {
        name: 'username',
        value: 'shabt@vmware.com'
    }
};

const passwordInput = {
    target: {
        name: 'password',
        value: '!@ASDA!@qw1'
    }
};

describe('Login Component ', () => {

    test ('Successful render', () => {
        const component = renderer.create(<Login />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test ('Handle username', () => {
        const wrapper = shallow(<Login />);
        const layout = wrapper.instance();
        expect(layout.handleUserInput(usernameInput)).toMatchSnapshot();
    });

    test ('Handle password', () => {
        const wrapper = shallow(<Login />);
        const layout = wrapper.instance();
        expect(layout.handleUserInput(passwordInput)).toMatchSnapshot();
    });
});