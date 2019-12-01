import React from 'react';
import { Title } from './';
import renderer from 'react-test-renderer';

test('title matches snapshot', () => {
    const tree = renderer
      .create(<Title>Test </Title>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});