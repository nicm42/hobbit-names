import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component tests', () => {
  beforeEach(() => {
    const loading = render(<Loading />);
  });

  test('should show loading text', () => {
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
