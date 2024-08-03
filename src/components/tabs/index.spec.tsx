import { fireEvent, render } from '@testing-library/react';
import { Tabs } from '.';
import { componentsTestId } from '../../common/constants/testid';
import { mockThemeProvider } from '../../common/utils/test';

describe('Tabs Component', () => {
  const tabs = ['Tab1', 'Tab2', 'Tab3'];
  const mockOnChange = jest.fn();

  it('should render tabs correctly', () => {
    const { getByText } = render(
      mockThemeProvider(
        <Tabs value="Tab1" tabs={tabs} onChange={mockOnChange} />
      )
    );

    tabs.forEach((tab) => {
      expect(getByText(tab)).toBeInTheDocument();
    });
  });

  it('should highlight the active tab', () => {
    const { getByTestId } = render(
      mockThemeProvider(
        <Tabs value="Tab2" tabs={tabs} onChange={mockOnChange} />
      )
    );

    const activeTab = getByTestId(componentsTestId.tabs.active);
    expect(activeTab).toHaveTextContent('Tab2');
  });

  it('should call onChange with the correct value when a tab is clicked', () => {
    const { getByText } = render(
      mockThemeProvider(
        <Tabs value="Tab1" tabs={tabs} onChange={mockOnChange} />
      )
    );

    const tab = getByText('Tab3');
    fireEvent.click(tab);

    expect(mockOnChange).toHaveBeenCalledWith('Tab3');
  });
});
