import { shallow } from 'enzyme';
import React from 'react';

import Card from './card.component';


it('expect to render Card component', () => {
    expect(shallow(<Card key={123} monster={ {name: "123", email: "test@ukr.net", id: "123"} }/>, { context: {} }).length).toMatchSnapshot();
})