import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home Component ', () => {

    test ('Successful render', () => {
        const location = {state:'user'};
        const component = renderer.create(<Home location={location}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});