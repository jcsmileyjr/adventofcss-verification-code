import { render, screen, fireEvent } from '@testing-library/react';
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

describe("that the the verfication code can be asked for", () => {
  test("that the error code isn't shown before the button is pressed",() => {
    render(<App />); 
    expect(screen.queryByText(/Your code is/i)).toBeNull();
  })

  test("that when the button is pressed the user gets the code",async () => {
    render(<App />); 
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/Your code is: 1234/i)).toBeInTheDocument();
  })
})
