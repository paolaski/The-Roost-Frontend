import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cookies from './Cookies';

describe('<Cookies />', () => {
  test('it should mount', () => {
    render(<Cookies />);
    
    const cookies = screen.getByTestId('Cookies');

    expect(cookies).toBeInTheDocument();
  });
});