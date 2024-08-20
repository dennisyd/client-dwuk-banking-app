import DateTimeFormatter from "../DateTimeFormatter";
import Chance from "chance";

interface Months {
  [key: string]: string;
}
const months: Months = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December"
};

const some = new Chance();

const someDates = Array.from({ length: 10 }, () => {
  const isoDate = some.date();
  const day = isoDate.getDate();
  const month = isoDate.getMonth();
  const year = isoDate.getFullYear();

  const dateTimeFormatter = new DateTimeFormatter();

  const formattedDate = dateTimeFormatter.gbDayMonthYearLongFormat(
    isoDate.toISOString()
  );
  return [day, month, year, formattedDate];
});

test.each(someDates)(
  "that the date passed in is converted correctly",
  (day, month, year, formattedDate) => {
    expect(formattedDate).toContain(day.toString());
    expect(formattedDate).toContain(months[month]);
    expect(formattedDate).toContain(year.toString());
  }
);
