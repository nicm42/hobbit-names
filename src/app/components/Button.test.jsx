import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component tests', () => {
  const setGenderToShow = vi.fn();

  beforeEach(() => {
    render(
      <Button
        value="boys"
        text="Show boys names"
        setGenderToShow={setGenderToShow}
      />
    );
  });

  test('should show with relevant text and value', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Show boys names/i)).toBeInTheDocument();
  });

  test('should call setGenderToShow on clicking', async () => {
    await userEvent.click(await screen.findByRole('button', { value: 'boys' }));
    expect(setGenderToShow).toHaveBeenCalledWith('boys');
  });
});
