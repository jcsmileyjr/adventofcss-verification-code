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

describe("that the the verfication code can be asked for and entered", () => {
  test("that the error code isn't shown before the button is pressed",() => {
    render(<App />); 
    expect(screen.queryByText(/Your code is/i)).toBeNull();
  })

  test("that the input fields are disable", () => {
    render(<App />);
    expect(screen.getByTestId('input3')).toBeDisabled();
  })

  test("that the verficiation button is enabled", () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeEnabled();
  })
  
  test("that when the button is pressed the user gets the code",async () => {
    render(<App />); 
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/Your code is: 1234/i)).toBeInTheDocument();
  })

  test("that the verfication code is can be entered", async () => {
    render(<App />);

    // Click the verfication  button
    const verficationButton = screen.getByTestId('verficationButton')
    fireEvent.click(verficationButton);

    expect(await screen.findByText(/Your code is: 1234/i)).toBeInTheDocument();
    await fireEvent.click(screen.queryByText('OK'));
    expect(screen.getByTestId('input3')).toBeEnabled();  

    // Enter code into the input fields to get the million dollars
    const input1 = screen.getByTestId('input1');
    const input2 = screen.getByTestId('input2');
    const input3 = screen.getByTestId('input3');
    const input4 = screen.getByTestId('input4');

    fireEvent.change(input1, {target:{value: 1}})
    fireEvent.change(input2, {target:{value: 2}})
    fireEvent.change(input3, {target:{value: 3}})
    fireEvent.change(input4, {target:{value: 4}})
    expect(await screen.findByText(/You have won One Million Dollars!!!/i)).toBeInTheDocument();

  })
})
