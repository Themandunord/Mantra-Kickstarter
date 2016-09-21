import { configure } from '@kadira/storybook';

function loadStories() {
  require('../.stories');
  require('../client/modules/core/components/.stories');
  require('../client/modules/auth/components/.stories');
  require('../client/modules/layout/components/.stories');
}

configure(loadStories, module);
