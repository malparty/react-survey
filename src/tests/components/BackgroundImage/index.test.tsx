import React from 'react';
import { render, screen } from '@testing-library/react';
import BackgroundImage from '../../../components/BackgroundImage';

test('contains an image with presentation role', () => {
  render(<BackgroundImage />);
  const imageElement = screen.getByRole('presentation');
  expect(imageElement).toBeInTheDocument();
});

test('contains a visible image', () => {
  render(<BackgroundImage />);
  const imageElement = screen.getByRole('presentation');
  expect(imageElement).toBeVisible();
});
