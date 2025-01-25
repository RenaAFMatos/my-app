import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

export function renderWithRouter(ui, { route = '/', router = BrowserRouter } = {}) {
  window.history.pushState({}, 'Test page', route);
  
  return act(() => {
    render(ui, { wrapper: router });
  });
}

export * from '@testing-library/react';
