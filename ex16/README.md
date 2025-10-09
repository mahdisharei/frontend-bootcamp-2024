# Next Departure – Plain JS

A tiny page that shows how many **minutes** are left until the next departure based on a fixed daily timetable.

## ✨ What it does
- Reads the current time (`new Date()`).
- Filters a daily `timeTable` (array of `{hour, minutes}`) to find departures **later today**.
- If none remain today, it wraps to **tomorrow’s first departure**.
- Displays the wait time in **minutes**.
