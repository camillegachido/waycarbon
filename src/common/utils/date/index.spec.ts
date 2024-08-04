import { formatDateAndHour, formatDate } from '.';

describe('formatDate', () => {
  it('should format the date correctly', () => {
    const isoString = '2019-02-17T11:23:00Z';
    const formattedDate = formatDate(isoString);
    expect(formattedDate).toBe('17 fev, 2019');
  });
});

describe('formatDateAndHour', () => {
  it('should format the date correctly', () => {
    const isoString = '2019-02-17T11:23:00Z';
    const formattedDate = formatDateAndHour(isoString);
    expect(formattedDate).toBe('17 fev 2019, às 11h23');
  });
});
