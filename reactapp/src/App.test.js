import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
=======

>>>>>>> 3ad305b833185ec1951b924e070a6f978eb5f057
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
