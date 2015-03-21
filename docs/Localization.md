> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Localization**

The formatting of numbers, dates and currencies varies by language and locale. While the default build of D3 is intended for U.S. English, you can change the behavior of D3’s formatters by loading new locales as needed.

<a name="locale" href="#locale">#</a> d3.<b>locale</b>(<i>definition</i>)

Returns a new locale given the specified *definition*. The locale definition must include the following properties for number formatting:

* decimal - the decimal place string (e.g., `"."`).
* thousands - the group separator string (e.g., `","`).
* grouping - the array of group sizes (e.g., `[3]`), cycled as needed.
* currency - the currency prefix and suffix strings (e.g., `["$", ""]`).

(Note that the *thousands* property is a slight misnomer, as the grouping definition allows groups other than thousands.)

The locale definition must also include the following properties for time formatting:

* dateTime - the date and time (%c) format string (e.g., `"%a %b %e %X %Y")`.
* date - the date (%x) format string (e.g., `"%m/%d/%Y"`).
* time - the time (%X) format string (e.g., `"%H:%M:%S"`).
* periods - the locale’s A.M. and P.M. equivalents (e.g., `["AM", "PM"]`).
* days - the full names of the weekdays, starting with Sunday.
* shortDays - the abbreviated names of the weekdays, starting with Sunday.
* months - the full names of the months (starting with January).
* shortMonths - the abbreviated names of the months (starting with January).

For example, the default U.S. English (en_US) locale is defined as:

```json
{
  "decimal": ".",
  "thousands": ",",
  "grouping": [3],
  "currency": ["$", ""],
  "dateTime": "%a %b %e %X %Y",
  "date": "%m/%d/%Y",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
}
```

A locale for Russian (ru_RU) might be defined as:

```json
{
  "decimal": ",",
  "thousands": "\xa0",
  "grouping": [3],
  "currency": ["", " руб."],
  "dateTime": "%A, %e %B %Y г. %X",
  "date": "%d.%m.%Y",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
  "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
}
```

<a name="locale_numberFormat" href="#locale_numberFormat">#</a> locale.<b>numberFormat</b>(<i>specifier</i>)

The locale’s equivalent of [d3.format](Formatting#d3_format).

<a name="locale_timeFormat" href="#locale_timeFormat">#</a> locale.<b>timeFormat</b>(<i>specifier</i>)

The locale’s equivalent of [d3.time.format](Time-Formatting#format).

<a name="locale_timeFormat_utc" href="#locale_timeFormat_utc">#</a> locale.timeFormat.<b>utc</b>(<i>specifier</i>)

The locale’s equivalent of [d3.time.format.utc](Time-Formatting#format_utc).
