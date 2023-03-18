import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Select component tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should show header, label and select', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(
      screen.getByText(/Select race to show names from/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('should show buttons after selecting a race', () => {
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Elf' },
    });
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText(/Show boys names/i)).toBeInTheDocument();
    expect(screen.getByText(/Show girls names/i)).toBeInTheDocument();
  });

  test('clicking on a button should make the other button disappear', async () => {
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Elf' },
    });

    await userEvent.click(
      await screen.getAllByRole('button', { value: 'boys' })['0']
    );
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.queryByText(/Show boys names/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Show girls names/i)).toBeInTheDocument();
  });

  test('clicking on a button should show some names', async () => {
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Elf' },
    });

    await userEvent.click(
      await screen.getAllByRole('button', { value: 'boys' })['0']
    );
    expect(screen.getByText(/Bilbo/i)).toBeInTheDocument();
  });
});
