import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Toggle from './Toggle';

const toggleText = 'EXAMPLE_TEXT';

test('renders learn react link', () => {
  render(<Toggle onToggle={() => {}}>{toggleText}</Toggle>);
  const label = screen.getByText(toggleText);
  expect(label).toBeDefined();
});