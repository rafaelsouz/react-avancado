import { render, screen } from '@testing-library/react';

import Button from './index';

describe('<Button />', () => {
  it('Deve renderizar o header', () => {
    const { container } = render(<Button />);

    expect(
      screen.getByRole('heading', { name: /Button/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
