import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import DefaultLayout from '../default_layout.jsx';

storiesOf('layout.DefaultLayout', module)
  .add('default view', () => {
    return (
      <DefaultLayout />
    );
  })
