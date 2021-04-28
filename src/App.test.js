import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders section headers', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getAllByText(/Search/i)).not.toBeUndefined();
  expect(getAllByText(/Results/i)).not.toBeUndefined();
});
