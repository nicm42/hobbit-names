import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Button', () => {
  test('it renders without crashing', () => {
    //render(<Loading />);
    const loading = render(<Loading />);
    expect(loading).toBeTruthy();
    //const loadingDiv = screen.getByTestId('loading');
    //expect(loadingDiv).toBeInTheDocument();
    //screen.debug();
  });
});
