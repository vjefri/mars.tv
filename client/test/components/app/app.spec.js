import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import App from '../../src/components/app';

function setup(props) {
  const component = mount(
    <App name={props.name}/>
  );

  return {
    component
  };
}

describe('<App />', () => {
  it('says "Hello"', () => {
    const { component } = setup({ name: 'React'} );
    expect(component.text()).to.equal('Hello, React!');
  });
});
