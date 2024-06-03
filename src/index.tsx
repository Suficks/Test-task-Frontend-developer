import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App.';
import { CorrectAnswersCounterProvider } from './app/providers/context/CorrectAnswersContext';

import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер не найден. Не удалось вмонтировать приложение');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CorrectAnswersCounterProvider>
      <App />
    </CorrectAnswersCounterProvider>
  </React.StrictMode>,
);
