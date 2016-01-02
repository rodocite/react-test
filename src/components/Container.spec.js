import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

// Component to test
import Container from '../../app/components/Container';

describe('Container', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Container />);
  const output = renderer.getRenderOutput();

  it('should exist', () => {
    expect(output).toExist();
  });

  it('should return a div', () => {
    expect(output.type).toEqual('div');
  });

  it('should output Hello World', () => {
    expect(output.props.children).toEqual('Hello World');
  });
});
