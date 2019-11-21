import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../css/main.scss';

addDecorator(withKnobs({ timestamps: true }));

const req = require.context(
  '../src/components/stories',
  true,
  /\.stories\.tsx$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
