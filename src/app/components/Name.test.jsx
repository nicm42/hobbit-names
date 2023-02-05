import { render, screen } from '@testing-library/react';
import Name from './Name';

describe('Name component tests', () => {
  test('should show first name only', () => {
    render(<Name name="Bilbo Baggins" />);
    expect(screen.getByText(/Bilbo/i)).toBeInTheDocument();
  });

  test('should not show if name is MINOR_CHARACTER', () => {
    render(<Name name="MINOR_CHARACTER" />);
    expect(screen.queryByText(/MINOR_CHARACTER/i)).not.toBeInTheDocument();
  });
});
