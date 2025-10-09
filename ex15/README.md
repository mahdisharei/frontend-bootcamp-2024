# ⏱️ Pomodoro Timer – Work/Break + Progress Bar (HTML + JS)

A minimal **Pomodoro** timer: 25 minutes of focused work followed by a short break.  
Includes an ASCII-style progress bar rendered directly in the page.


## ✨ Features
- **25:00 work countdown** with minutes/seconds
- **Break phase scaffold** (2 minutes) ready to hook in
- **Text-based progress bar** that fills over time
- Simple, dependency-free HTML + vanilla JS


🧠 How It Works
	•	Clicking Start to work calls countDown().
	•	Two setInterval timers decrement seconds (every 1s) and minutes (every 60s).
	•	A third interval advances a loading bar (█ … ░) over a fixed LENGTH.