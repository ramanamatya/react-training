import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Comment from '../src/components/Comment';

// Enzyme.configure({
//   adapter: new EnzymeAdapter()
// });

describe('Comment Componenet', () => {
  const wrapper = shallow(<Comment />);
  test('has correct HTML structure', () => {
    console.log(wrapper);
  });
});
