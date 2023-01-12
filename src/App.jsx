import { useState } from 'react';

import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';

import BabaCounter from './babaCounter';
const instance = createInstance({
  urlBase: 'https://example69420.matomo.cloud/',
  siteId: 1,
  userId: 'UID76903202', // optional, default value: `undefined`.
});

function App() {
  return (
    <MatomoProvider value={instance}>
      <BabaCounter />
    </MatomoProvider>
  );
}

export default App;
