import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders navigation', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    // Test for navigation presence
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });
});
