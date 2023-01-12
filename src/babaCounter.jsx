import React, { useState, useEffect } from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import './index.css';

const BabaCounter = () => {
  const [babaCounter, setBabaCounter] = useState(0);
  const { trackPageView, trackEvent } = useMatomo();

  useEffect(() => {
    trackPageView();
  }, []);

  useEffect(() => {
    trackEvent({ category: 'misccounts', action: 'click-event' });
  }, [babaCounter]);

  return (
    <>
      <button
        className="button"
        onClick={() => {
          setBabaCounter(babaCounter + 1);
        }}>
        Baba
      </button>
      <div>{babaCounter}</div>
    </>
  );
};

export default BabaCounter;
