import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';


// Test Case 1: Default Value Counter adalah 0
test('Counter Default Value must be 0', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  expect(counterValue).toHaveTextContent('0');
});

// Test Case 2: Increment bekerja saat tombol diklik
test('Increment works when button clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByTestId('increment-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent('1');
});

// Test Case 3: Decrement bekerja saat tombol diklik
test('Decrement works when button clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByTestId('decrement-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent('-1');
});

// Test Case 4: Display menunjukkan nilai yang benar
test('Display has correct value', () => {
  render(<Display value={10} />);
  const displayValue = screen.getByTestId('display-value');
  expect(displayValue).toHaveTextContent('Value: 10');
});

