import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Test from '../test.jsx';

storiesOf('core.Test', module)
  .add('default view', () => {
    return (
      <Test />
    );
  })
