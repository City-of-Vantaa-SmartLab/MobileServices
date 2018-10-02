import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavigationIcon } from './NavigationIcon';
import { withMarkdownNotes } from '@storybook/addon-notes';
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text } from '@storybook/addon-knobs/react';


let mybackgroundlibs = [
  { name: "pink", value: "#EEDDEE" },
  { name: "dark", value: "#0D0D0D" },
  { name: "fb", value: "#3B5998" },
] 

let notes = `
  # NavigationIcon
  ## Purpose

  This is the icons in the bottom navigation component

  ## How to use

  This have 2 state: \`active\` or not. When it is active, it will have its style changed
  Active state is determined from react router's \`match\` props (injected)
  Neccessary data are \`iconText: string\`, text below the icon, and \`iconName\` which determine what icon to use

  ## Story support

  This story is support with dynamic props for \`iconText\`, backgrounds, and of course this demo.
`
// declare a story 'volume'
storiesOf('NavigationIcon', module)
  .addDecorator(withKnobs)
  // local decorator for volume. This one is the backgrounds
  .addDecorator(backgrounds(mybackgroundlibs))
    // individual stories within the 'volume
    .add('default', withMarkdownNotes(notes)(() => 
    <NavigationIcon match={{ exact: true }} iconName={'newsIcon'} iconText={text('ICON NAME', 'default')} />
    ))