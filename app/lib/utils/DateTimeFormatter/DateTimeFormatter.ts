export default class DateTimeFormatter {
  gbDayMonthYearLongFormat(dateIsoString: string) {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long"
    }).format(new Date(dateIsoString));
  }
}
