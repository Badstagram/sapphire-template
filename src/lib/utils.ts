import type { Nullish } from '@sapphire/utilities';
import dayjs, { Dayjs } from 'dayjs';

export const formatDate = (date: string | number | Dayjs | Date | Nullish, withSeconds = false) =>
	dayjs(date).format(withSeconds ? 'DD/MM/YYYY HH:mm:ss' : 'DD/MM/YYYY HH:mm');
