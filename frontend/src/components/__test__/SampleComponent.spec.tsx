import React from 'react';
import renderer from 'react-test-renderer';
import SampleComponent from '../SampleComponent';

test('AppTitle', () => {
  const component = renderer.create(<SampleComponent />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});