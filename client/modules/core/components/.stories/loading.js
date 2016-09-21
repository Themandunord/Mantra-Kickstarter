import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Loading from '../loading.jsx';

storiesOf('core.Loading', module)
  .add('default view', () => {
    return (
      <Loading />
    );
  })
