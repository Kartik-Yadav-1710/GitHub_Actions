import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Gym Management System', () => {
  render(<App />);
  const headingElement = screen.getByText(/Gym Management System/i);
  expect(headingElement).toBeInTheDocument();
});
