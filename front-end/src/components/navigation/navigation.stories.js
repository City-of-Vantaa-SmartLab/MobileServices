import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './NavigationPanel';
import { BrowserRouter } from 'react-router-dom';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';

let notes = `
  # Navigation components!
  ## Purpose
  This is the bottom navigation component
  ## How to use
  This switches pages based on \`react-router-dom\`
`

storiesOf('Navigation', module)
  .addDecorator(story => (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  ))
  .add('with some notes', withMarkdownNotes(notes)(() => <Navigation />))