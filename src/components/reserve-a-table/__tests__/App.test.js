import { initializeTimes, timesReducer } from '../../../App';

describe('Booking Functions', () => {
  test('initializeTimes returns correct initial time slots', () => {
    const expected = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
    expect(initializeTimes()).toEqual(expected);
  });

  test('updateTimes returns same state when called with any date', () => {
    const state = ["17:00", "18:00"];
    const action = { 
      type: 'UPDATE_TIMES',
      payload: '2024-02-01'
    };
    
    const result = timesReducer(state, action);
    expect(result).toBe(state);
  });

  test('updateTimes returns initial state for unknown action', () => {
    const state = ["17:00", "18:00"];
    const action = { 
      type: 'UNKNOWN_ACTION'
    };
    
    const result = timesReducer(state, action);
    expect(result).toBe(state);
  });
});
