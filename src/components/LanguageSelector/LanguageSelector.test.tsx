import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguageSelector from './LanguageSelector';

describe('<LanguageSelector />', () => {
  test('it should mount', () => {
    render(<LanguageSelector />);

    const languageSelector = screen.getByTestId('LanguageSelector');

    expect(languageSelector).toBeInTheDocument();
  });
});
