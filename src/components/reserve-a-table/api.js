export const fetchAPI = window.fetchAPI || ((date) => {
  // Fallback implementation for testing
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
});

export const submitAPI = window.submitAPI || ((formData) => {
  // Fallback implementation for testing
  return true;
});
