export const timeUnits = ['hours', 'minutes', 'seconds'] as const;

export const DEFAULT_FORMATS_TIME = 'HH:mm:ss';
export const DEFAULT_FORMATS_DATE = 'YYYY-MM-DD';
export const DEFAULT_FORMATS_DATEPICKER = {
	date: DEFAULT_FORMATS_DATE,
	dates: DEFAULT_FORMATS_DATE,
	week: 'gggg[w]ww',
	year: 'YYYY',
	month: 'YYYY-MM',
	datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
	monthrange: 'YYYY-MM',
	daterange: DEFAULT_FORMATS_DATE,
	datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
};
export const RANGEMAP = {
	daterange: 'date',
	datetimerange: 'datetime-local',
	weekrange: 'week',
};
export type TimeUnit = (typeof timeUnits)[number];
