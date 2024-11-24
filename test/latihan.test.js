import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';


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

// Test Case 4: Reset counter menggunakan tombol reset
test('Reset the count using reset button', () => {
  render(<Counter />);
  const incrementButton = screen.getByTestId('increment-button');
  const resetButton = screen.getByTestId('reset-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton); // Tambah 2 kali
  expect(counterValue).toHaveTextContent('2');

  fireEvent.click(resetButton);
  expect(counterValue).toHaveTextContent('0');
});

// Test Case 5: Greeting menampilkan nama "Muhammad Abdul Jabbar"
test('Greeting component for Muhammad Abdul Jabbar', () => {
  render(<Greeting name="Muhammad Abdul Jabbar" />);
  const greeting = screen.getByTestId('greeting');
  expect(greeting).toHaveTextContent('Hello, Muhammad Abdul Jabbar');
});

// Test Case 6: Greeting menampilkan nama "Farid Surya"
test('Greeting component for Farid Surya', () => {
  render(<Greeting name="Farid Surya" />);
  const greeting = screen.getByTestId('greeting');
  expect(greeting).toHaveTextContent('Hello, Farid Surya');
});

// Test Case 7: Trigger alert dengan pesan yang benar
test('Triggers alert with correct message when clicked', () => {
  window.alert = jest.fn(); // Mock fungsi alert
  render(<AlertButton message="This is a test alert" />);
  const alertButton = screen.getByTestId('alert-button');

  fireEvent.click(alertButton);
  expect(window.alert).toHaveBeenCalledWith('This is a test alert');
});
