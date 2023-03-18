import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';
import RACES from '../assets/races';

describe('Select component tests', () => {
  const onChange = vi.fn();

  beforeEach(() => {
    render(<Select value={RACES[1].value} onChange={onChange} />);
  });

  test('should show relevant label and options', () => {
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option', { value: /Elf/i })).toHaveLength(5);
  });

  test('should allow to select an option', () => {
    userEvent.selectOptions(
      // Find the select element
      screen.getByRole('combobox'),
      // Find and select the Elf option
      screen.getAllByRole('option', { name: 'Elf' })
    );
    expect(screen.getByRole('option', { name: 'Elf' }).selected).toBe(true);
  });
});
