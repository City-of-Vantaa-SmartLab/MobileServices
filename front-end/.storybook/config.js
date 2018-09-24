import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.(stories|storybook|story)\.jsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);