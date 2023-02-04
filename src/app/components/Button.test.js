import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const setGenderToShow = vi.fn();

  test('truthy', () => {
    expect(true).toBeTruthy();
  });

  /* test('it exists', () => {
    render(
      <Button
        value="boys"
        text="Show boys names"
        setGenderToShow={setGenderToShow}
      />
    );

    screen.debug();
  }); */
});
