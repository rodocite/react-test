import React from 'react';
import { render as renderDOM } from 'react-dom';

// Modules
// Components
import Container from './components/Container';

const entry = 'react-entry';
renderDOM(<Container />, document.getElementById(entry));
