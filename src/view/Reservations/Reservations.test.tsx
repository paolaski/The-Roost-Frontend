import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reservations from './Reservations';

describe('<Reservations />', () => {
  test('it should mount', () => {
    render(<Reservations />);
    
    const reservations = screen.getByTestId('Reservations');

    expect(reservations).toBeInTheDocument();
  });
});