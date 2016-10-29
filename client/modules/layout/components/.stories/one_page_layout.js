import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import OnePageLayout from '../one_page_layout.jsx';

storiesOf('layout.OnePageLayout', module)
  .add('default view', () => {
    return (
      <OnePageLayout />
    );
  })
