import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage, { initializeTimes, updateTimes } from '../BookingPage';
import { fetchAPI, submitAPI } from '../api';

// Mock the API module
jest.mock('../api');

describe('BookingPage', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    
    // Setup default mock implementations
    fetchAPI.mockImplementation(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    submitAPI.mockImplementation(() => true);
  });

  test('initializeTimes returns initial times from API', () => {
    // Arrange
    const expected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    // Act
    const result = initializeTimes();
    
    // Assert
    expect(result).toEqual(expected);
    expect(fetchAPI).toHaveBeenCalled();
  });

  test('updateTimes returns updated times from API when date changes', () => {
    // Arrange
    const state = ['17:00', '18:00'];
    const newDate = new Date('2024-02-20');
    const action = { type: 'UPDATE_TIMES', payload: newDate };
    
    // Act
    const result = updateTimes(state, action);
    
    // Assert
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    expect(fetchAPI).toHaveBeenCalledWith(newDate);
  });

  test('updateTimes returns same state for unknown action type', () => {
    // Arrange
    const state = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    
    // Act
    const result = updateTimes(state, action);
    
    // Assert
    expect(result).toEqual(state);
    expect(fetchAPI).not.toHaveBeenCalled();
  });

  test('BookingPage component renders with available times', () => {
    // Arrange & Act
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    
    // Assert
    const timeSelect = screen.getByLabelText(/Time of the reservation:/i);
    expect(timeSelect).toBeInTheDocument();
    
    const timeOptions = screen.getAllByRole('option');
    expect(timeOptions.length).toBeGreaterThan(1); // Including the default "Select a time" option
  });
});
