> [Wiki](Home) ▸ [[API Reference]] ▸ [[Time]] ▸ **Time Intervals**

**Time intervals** are irregular! For example, there are 60 seconds in a minute, but 24 hours in a day. Even more confusing, some days have 23 or 25 hours due to [daylight saving time](http://en.wikipedia.org/wiki/Daylight_saving_time), and the standard [Gregorian calendar](http://en.wikipedia.org/wiki/Gregorian_calendar) uses months of differing lengths. And then there are leap years and leap seconds!

To simplify manipulation of and iteration over time intervals, D3 provides a handful of time utilities in addition to the time [scale](Time-Scales) and [format](Time-Formatting). The utilities support both local time and UTC time. Local time is determined by the browser's JavaScript runtime; arbitrary time zone support would be nice, but requires access to the Olson zoneinfo files.

## Interval

<a name="interval" href="#interval">#</a> d3.time.<i>interval</i>

Returns the specified *interval*. The following intervals are supported:

* d3.time.[second](#second)
* d3.time.[minute](#minute)
* d3.time.[hour](#hour)
* d3.time.[day](#day)
* d3.time.[week](#week) (alias for d3.time.[sunday](#sunday))
* d3.time.[sunday](#sunday)
* d3.time.[monday](#monday)
* d3.time.[tuesday](#tuesday)
* d3.time.[wednesday](#wednesday)
* d3.time.[thursday](#thursday)
* d3.time.[friday](#friday)
* d3.time.[saturday](#saturday)
* d3.time.[month](#month)
* d3.time.[year](#year)

<a name="_interval" href="#_interval">#</a> <i>interval</i>(<i>date</i>)

Alias for *interval*.floor(*date*). For example, `d3.time.day(new Date())` returns midnight (12:00 AM) on the current day, in local time.

<a name="interval_floor" href="#interval_floor">#</a> <i>interval</i>.<b>floor</b>(<i>date</i>)

Rounds down the specified *date*, returning the latest time interval before or equal to *date*. For example, `d3.time.day.floor(new Date())` returns midnight (12:00 AM) on the current day, in local time.

<a name="interval_round" href="#interval_round">#</a> <i>interval</i>.<b>round</b>(<i>date</i>)

Rounds up or down the specified *date*, returning the closest time interval to *date*. For example, `d3.time.day.round(new Date())` returns midnight (12:00 AM) on the current day if it is on or before noon, and midnight of the following day if it is after noon.

<a name="interval_ceil" href="#interval_ceil">#</a> <i>interval</i>.<b>ceil</b>(<i>date</i>)

Rounds up the specified *date*, returning the earliest time interval after or equal to *date*. For example, `d3.time.day.ceil(new Date())` returns midnight (12:00 AM) on the following day, in local time (unless you happen to run this code at exactly midnight, in which case it returns the current time).

<a name="interval_range" href="#interval_range">#</a> <i>interval</i>.<b>range</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Returns every time interval after or equal to *start* and before *stop*.  If *step* is specified, then every *step*'th interval will be returned, based on the interval number (such as day of month for d3.time.day). For example, a *step* of 2 will return the 1st, 3rd, 5th *etc.* of the month with d3.time.day.

<a name="interval_offset" href="#interval_offset">#</a> <i>interval</i>.<b>offset</b>(<i>date</i>, <i>step</i>)

Returns a new date equal to *date* plus *step* intervals. If *step* is negative, then the returned date will be before the specified *date*; if *step* is zero, then a copy of the specified *date* is returned. This method does not round the specified *date* to the interval. For example, if it is currently 5:34 PM, then `d3.time.day.offset(new Date(), 1)` returns 5:34 PM tomorrow (even if Daylight Savings Time changes!).

<a name="interval_utc" href="#interval_utc">#</a> <i>interval</i>.<b>utc</b>

Returns a corresponding time interval in UTC rather than local time. For example, `d3.time.day.range(start, stop)` returns local time days between *start* and *stop*, while `d3.time.day.utc.range(start, stop)` returns UTC days between *start* and *stop*.

## Intervals

<a name="second" href="#second">#</a> d3.time.<b>second</b>

Seconds (e.g., 01:23:45.0000 AM). Always 1,000 milliseconds long.

<a name="minute" href="#minute">#</a> d3.time.<b>minute</b>

Minutes (e.g., 01:02:00 AM). Most browsers do not support leap seconds, so minutes are almost always 60 seconds (6e4 milliseconds) long.

<a name="hour" href="#hour">#</a> d3.time.<b>hour</b>

Hours (e.g., 01:00 AM). 60 minutes long (36e5 milliseconds). Note that advancing time by one hour can return the same hour number, or skip an hour number, due to Daylight Savings Time.

<a name="day" href="#day">#</a> d3.time.<b>day</b>

Days (e.g., February 7, 2012 at 12:00 AM). Most days are 24 hours long (864e5 milliseconds); however, with Daylight Savings Time, a day may be 23 or 25 hours long.

<a name="week" href="#week">#</a> d3.time.<b>week</b>

Alias for d3.time.[sunday](#sunday). A week is always 7 days, but ranges between 167 and 169 hours depending on Daylight Savings Time.

<a name="sunday" href="#sunday">#</a> d3.time.<b>sunday</b>

Sunday-based weeks (e.g., February 5, 2012 at 12:00 AM).

<a name="monday" href="#monday">#</a> d3.time.<b>monday</b>

Monday-based weeks (e.g., February 6, 2012 at 12:00 AM).

<a name="tuesday" href="#tuesday">#</a> d3.time.<b>tuesday</b>

Tuesday-based weeks (e.g., February 7, 2012 at 12:00 AM).

<a name="wednesday" href="#wednesday">#</a> d3.time.<b>wednesday</b>

Wednesday-based weeks (e.g., February 8, 2012 at 12:00 AM).

<a name="thursday" href="#thursday">#</a> d3.time.<b>thursday</b>

Thursday-based weeks (e.g., February 9, 2012 at 12:00 AM).

<a name="friday" href="#friday">#</a> d3.time.<b>friday</b>

Friday-based weeks (e.g., February 10, 2012 at 12:00 AM).

<a name="saturday" href="#saturday">#</a> d3.time.<b>saturday</b>

Saturday-based weeks (e.g., February 11, 2012 at 12:00 AM).

<a name="month" href="#month">#</a> d3.time.<b>month</b>

Months (e.g., February 1, 2012 at 12:00 AM). Ranges between 28 and 31 days.

<a name="year" href="#year">#</a> d3.time.<b>year</b>

Years (e.g., January 1, 2012 at 12:00 AM). Normal years are 365 days long; leap years are 366.

## Aliases

<a name="seconds" href="#seconds">#</a> d3.time.<b>seconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Alias for d3.time.[second](#second).[range](#interval_range). Returns the second boundaries (e.g., 01:23:45 AM) after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th second will be returned, based on the second of the minute. For example, a *step* of 15 will return 9:01:45 PM, 9:02:00 PM, 9:02:15 PM, *etc.*

<a name="minutes" href="#minutes">#</a> d3.time.<b>minutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Alias for d3.time.[minute](#minute).[range](#interval_range). Returns the minute boundaries (e.g., 01:23 AM) after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th minute will be returned, based on the minute of the hour. For example, a *step* of 15 will return 9:45 PM, 10:00 PM, 10:15 PM, *etc.*

<a name="hours" href="#hours">#</a> d3.time.<b>hours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Alias for d3.time.[hour](#hour).[range](#interval_range). Returns the hour boundaries (e.g., 01 AM) after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th hour will be returned, based on the hour of the day. For example, a *step* of 3 will return 9 PM, 12 AM, 3 AM, *etc.*

<a name="days" href="#days">#</a> d3.time.<b>days</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Alias for d3.time.[day](#day).[range](#interval_range). Returns the day boundaries (midnight) after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th date will be returned, based on the day of the month. For example, a *step* of 2 will return the 1st, 3rd, 5th *etc.* of the month.

<a name="weeks" href="#weeks">#</a> d3.time.<b>weeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a name="sundays" href="#sundays">#</a> d3.time.<b>sundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a name="mondays" href="#mondays">#</a> d3.time.<b>mondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a name="tuesdays" href="#tuesdays">#</a> d3.time.<b>tuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a name="wednesdays" href="#wednesdays">#</a> d3.time.<b>wednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a name="thursdays" href="#thursdays">#</a> d3.time.<b>thursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a name="fridays" href="#fridays">#</a> d3.time.<b>fridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a name="saturdays" href="#saturdays">#</a> d3.time.<b>saturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for d3.time.<i>interval</i>.[range](#interval_range) etc. Returns the week boundaries (midnight Sunday) after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th week will be returned, based on the week of the year. For example, a *step* of 4 will return January 2, January 30, February 27, *etc.*

<a name="months" href="#months">#</a> d3.time.<b>months</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Alias for d3.time.[month](#month).[range](#interval_range). Returns the month boundaries (e.g., January 01) after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th month will be returned, based on the month of the year. For example, a *step* of 3 will return January, April, July, *etc.*

<a name="years" href="#years">#</a> d3.time.<b>years</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Alias for d3.time.[year](#year).[range](#interval_range). Returns the year boundaries (midnight January 1st) after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th year will be returned. For example, a *step* of 5 will return 2010, 2015, 2020, *etc.*

## Counting

<a name="dayOfYear" href="#dayOfYear">#</a> d3.time.<b>dayOfYear</b>(<i>date</i>)

Returns the day number for the given date. The first day of the year (January 1) is always the 0th day. Unlike the [d3.time.format](Time-Formatting)'s %j directive, dayOfYear is 0-based rather than 1-based.

<a name="weekOfYear" href="#weekOfYear">#</a> d3.time.<b>weekOfYear</b>(<i>date</i>)
<br><a name="sundayOfYear" href="#sundayOfYear">#</a> d3.time.<b>sundayOfYear</b>(<i>date</i>)
<br><a name="mondayOfYear" href="#mondayOfYear">#</a> d3.time.<b>mondayOfYear</b>(<i>date</i>)
<br><a name="tuesdayOfYear" href="#tuesdayOfYear">#</a> d3.time.<b>tuesdayOfYear</b>(<i>date</i>)
<br><a name="wednesdayOfYear" href="#wednesdayOfYear">#</a> d3.time.<b>wednesdayOfYear</b>(<i>date</i>)
<br><a name="thursdayOfYear" href="#thursdayOfYear">#</a> d3.time.<b>thursdayOfYear</b>(<i>date</i>)
<br><a name="fridayOfYear" href="#fridayOfYear">#</a> d3.time.<b>fridayOfYear</b>(<i>date</i>)
<br><a name="saturdayOfYear" href="#saturdayOfYear">#</a> d3.time.<b>saturdayOfYear</b>(<i>date</i>)

Returns the week number for the given date, where weeks start with the given <i>day</i>. The first day of the year (January 1) is always the 0th week. weekOfYear is an alias for sundayOfYear, which is equivalent to [d3.time.format](Time-Formatting)'s %U directive. mondayOfYear is equivalent to [d3.time.format](Time-Formatting)'s %W directive.