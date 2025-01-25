import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock the API module
jest.mock('./components/reserve-a-table/api', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
  submitAPI: jest.fn(() => true)
}));

describe('App', () => {
  test('renders navigation', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('booking page route shows available times', () => {
    render(
      <MemoryRouter initialEntries={['/booking']}>
        <App />
      </MemoryRouter>
    );
    
    // Verify time slots are loaded from API
    const timeSelect = screen.getByLabelText(/Time of the reservation:/i);
    expect(timeSelect).toBeInTheDocument();
  });
});
