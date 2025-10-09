const workTime = document.getElementById('workTime')
const seconds = document.getElementById('workTimeSeconds')
const minutes = document.getElementById('workTimeMinutes')
const breakTime = document.getElementById('breakTime')
const secondsBreak = document.getElementById('breakTimeSeconds')
const minutesBreak = document.getElementById('breakTimeMinutes')
const startToWorkbtn = document.getElementById('startToWorkbtn')

let workMinutesInterval = null
let workSecondsInterval = null

const loading = document.getElementById("loading");

const LENGTH = 100;
let interval = null;
let currentTime = 0;

const renderLoadingBar = () => {
    loading.innerText = "";
    for (let i = 0; i < LENGTH; i++) {
      if (currentTime > i) {
        loading.innerText += "█";
      } else {
        loading.innerText += "░";
      }
    }
  };

// const startBreak = () => {
//     document.getElementById('breakTime').style.display = 'block'
//     secondsBreak.innerText = 59
//     breakSecondsInterval = setInterval(() => {
//         if (secondsBreak.innerText > 0) {
//             secondsBreak.innerText--
//         }else {
//             secondsBreak.innerText = 59
//         }
//     }, 1000);
//     minutesBreak.innerText = 1
//     breakMinutesInterval = setInterval(() => {
//         if (minutesBreak.innerText > 0) {
//             minutesBreak.innerText--
//         } else {
//             alert('work time!')
//         }
//     }, 60 * 1000);
//     renderLoadingBar();
//         interval = setInterval(() => {
//           if (currentTime < LENGTH) {
//             currentTime++;
//             renderLoadingBar();
//           }
//         }, 6 * 1000);
// }

const countDown = () => {
    document.getElementById('startToWorkbtn').style.display = 'none'
    seconds.innerText = 59
    workSecondsInterval = setInterval(() => {
            if (seconds.innerText > 0) {
                seconds.innerText--
            }else {
                seconds.innerText = 59
            }
        }, 1000);
    minutes.innerText = 24
    workMinutesInterval = setInterval(() => {
            if (minutes.innerText > 0) {
                minutes.innerText--
            } else {
                alert('break time!')
                workTime.style.display = 'none'
                minutes.innerText = 1
                startToWorkbtn.style.display = 'none'
                // startBreak()
            }
        }, 60 * 1000);
        renderLoadingBar();
        interval = setInterval(() => {
          if (currentTime < LENGTH) {
            currentTime++;
            renderLoadingBar();
          }
        }, 15 * 1000);
}
