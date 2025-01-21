import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from '../BookingForm';

// Mock the API
jest.mock('../api', () => ({
  fetchAPI: jest.fn().mockReturnValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
  submitAPI: jest.fn().mockReturnValue(true)
}));

describe('BookingForm', () => {
  const mockProps = {
    availableTimes: ["17:00"],
    updateTimes: jest.fn()
  };

  beforeEach(() => {
    mockProps.updateTimes.mockClear();
  });

  test('Renders the static text elements', () => {
    render(
      <BrowserRouter>
        <BookingForm {...mockProps} />
      </BrowserRouter>
    );
    
    const expectedTexts = [
      "First Name:",
      "Last Name:",
      "Email:",
      "Time of the reservation:",
      "Date of the reservation:",
      "Reserve the table!"
    ];

    expectedTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('updates available times when date changes', () => {
    const dispatch = jest.fn();
    render(
      <BrowserRouter>
        <BookingForm availableTimes={['17:00', '18:00']} dispatch={dispatch} />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Date of the reservation:/i);
    fireEvent.change(dateInput, { target: { value: '2024-02-20' } });

    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: expect.any(Date)
    });
  });

  test('calls submitForm when form is submitted', async () => {
    const submitForm = jest.fn().mockResolvedValue(true);
    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={['17:00']} 
          dispatch={jest.fn()} 
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    // Fill out form
    fireEvent.change(screen.getByLabelText(/First Name:/i), { target: { value: 'John' } });
    // ...fill other required fields...

    // Submit form
    fireEvent.submit(screen.getByRole('button', { name: /Reserve the table!/i }));

    expect(submitForm).toHaveBeenCalled();
  });

  test('calls submitForm when form is submitted with complete data', async () => {
    const submitForm = jest.fn().mockResolvedValue(true);
    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={['17:00']} 
          dispatch={jest.fn()} 
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    // Fill out all required fields
    fireEvent.change(screen.getByLabelText(/First Name:/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name:/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Date of the reservation:/i), { target: { value: '2024-02-20' } });
    fireEvent.change(screen.getByLabelText(/Time of the reservation:/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests:/i), { target: { value: '2' } });

    // Submit form
    fireEvent.submit(screen.getByRole('button', { name: /Reserve the table!/i }));

    expect(submitForm).toHaveBeenCalledWith(expect.objectContaining({
      fname: 'John',
      lname: 'Doe',
      email: 'john@example.com',
      time: '17:00',
      guests: '2'
    }));
  });
});
