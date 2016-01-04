import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import test from 'tape';

// Component to test
import Container from '../../app/components/Container';

test('Container', assert => {
  assert.plan(2);

  const renderer = TestUtils.createRenderer();
  renderer.render(<Container />);
  const output = renderer.getRenderOutput();

  assert.equal(output.type, 'div', 'Container renders a div element');
  assert.ok(output.props.children.includes('Hello World'),
    'The div contains text - "Hello World"');

  assert.end();
});
