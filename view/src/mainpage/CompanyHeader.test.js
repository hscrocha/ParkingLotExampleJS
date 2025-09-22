import { render } from '@testing-library/react';
import CompanyHeader from "./CompanyHeader";

test('CompanyHeader renders correctly', () => {
      const { myComponent } = render(<CompanyHeader />);
      expect( myComponent ).toMatchSnapshot();
});

