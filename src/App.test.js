import { render, screen } from '@testing-library/react';
import App from './App';

describe("Main screen UI elements are there", () => {
  render(<App />);
  test("that input1 is there", () => {
    expect(screen.getByTestId('input1')).toBeInTheDocument();
  });

  test("that input2 is there", () => {
    render(<App />);
    expect(screen.getByTestId('input2')).toBeInTheDocument();
  });

  test("that input3 is there", () => {
    render(<App />);
    expect(screen.getByTestId('input3')).toBeInTheDocument();
  });

  test("that input4 is there", () => {
    render(<App />);
    expect(screen.getByTestId('input4')).toBeInTheDocument();
  });

  test("that the verfication button is there", () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  test("that the disable error text is there", () => {
    render(<App />); 
    expect(screen.getByText(/Inputs are disabled/i)).toBeInTheDocument();
  })
  
});
