type DatepickerDayProps = {
  filter?: (date: Date) => boolean;
  startWeekdays: Array<string>;
  startDay: number;
  inlineDayClick: (date: Date) => void;
};

export { DatepickerDayProps };
