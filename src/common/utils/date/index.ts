import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toZonedTime } from 'date-fns-tz';

export const formatDate = (isoString: string) => {
  const date = parseISO(isoString);
  const formattedDate = format(date, 'd MMM, yyyy', { locale: ptBR });
  return formattedDate;
};

export const formatDateAndHour = (isoString: string) => {
  const date = parseISO(isoString);

  const zonedDate = toZonedTime(date, 'UTC');
  const formattedDate = format(zonedDate, "d MMM yyyy, 'às' HH'h'mm", {
    locale: ptBR,
  });

  return formattedDate;
};
