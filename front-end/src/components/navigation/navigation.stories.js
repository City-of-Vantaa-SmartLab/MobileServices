import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './NavigationPanel';
import {BrowserRouter} from 'react-router-dom';

storiesOf('Navigation', module)
  .addDecorator(story => (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  ))
  .add('with text', () => (
    <Navigation />
  ))