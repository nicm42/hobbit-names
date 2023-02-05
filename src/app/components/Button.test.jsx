import { render, screen, fireEvent } from '@testing-library/react';
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
    expect(screen.getByText(/Show boys names/i)).toBeInTheDocument();
  });

  test('should call setGenderToShow on clicking', () => {
    const button = screen.getByText(/Show boys names/i);
    fireEvent.click(button);
    expect(setGenderToShow).toHaveBeenCalledWith('boys');
  });
});
