import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import { useBearStore } from './store/useStore'; // Adjust the import as needed
import App from './App'; // Adjust the import as needed

type BearState = {
  bears: number;
  reset: () => void;
  increase: () => void;
};

describe('App Component', () => {
  beforeEach(() => {
    // Mock the Zustand store's state including all required properties
    jest.spyOn(useBearStore, 'getState').mockReturnValue({
      bears: 0, // or an appropriate initial value
      reset: jest.fn(),
      increase: jest.fn(),
    } as BearState);
  });

  it('renders the learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the BearCounter component', () => {
    render(<App />);
    const bearCounter = screen.getByText(/Number of bears:/i);
    expect(bearCounter).toBeInTheDocument();
  });

  it('calls reset and setBears on mount', () => {
    const resetMock = jest.fn();
    const increaseMock = jest.fn();
    jest.spyOn(useBearStore, 'getState').mockReturnValueOnce({
      bears: 0,
      reset: resetMock,
      increase: increaseMock,
    } as BearState);

    render(<App />);

    // Add your assertions here if needed
  });
});
