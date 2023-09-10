document.getElementById("prev").addEventListener("click", function () {
  changeMonth(-1);
});

document.getElementById("next").addEventListener("click", function () {
  changeMonth(1);
});

var currentDate = new Date();

function changeMonth(value) {
  currentDate.setMonth(currentDate.getMonth() + value);
  updateCalendar();
}

function updateCalendar() {
  var monthElement = document.querySelector(".month");
  var tableBody = document.querySelector("tbody");
  var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  var daysInMonth = lastDay.getDate();
  var startDayOfWeek = firstDay.getDay();

  // 月名と年を更新
  monthElement.textContent = currentDate.getFullYear() + "年" + (currentDate.getMonth() + 1) + "月";
  // カレンダーをクリア
  tableBody.innerHTML = "";

  // 日付を生成
  var date = 1;
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < startDayOfWeek) {
        // 先月の日付
        var cell = document.createElement("td");
        cell.classList.add("inactive");
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        // 来月の日付
        break;
      } else {
        // 今月の日付
        var cell = document.createElement("td");
        cell.textContent = date;
        row.appendChild(cell);
        if (date > 0 && (date + startDayOfWeek - 1) % 7 === 6) {
          cell.classList.add("holiday");
        }
        date++;
      }
    }
    tableBody.appendChild(row);
  }
}

// 初期カレンダーの表示
updateCalendar();

document.querySelector('header').classList.add('js-fade-animation');
const newsFadeSlider = new FadeSlider('.news');
const calendarFadeSlider = new FadeSlider('.calendar');
const paragrapFadeSlider = new FadeSlider('p');
const featureSlider = new FadeSlider('.feature__list');
const containerSlider = new FadeSlider('.container');
const iflameSlider = new FadeSlider('iframe');

window.onload = function () {
  const fade = document.getElementsByClassName('pattern6');
  fade[0].classList.add('show');

  // particle.js
  Particles.init({
    selector: '.background',
    sizeVariations: 40,
    color: [
      '#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'
    ]
  });
}
