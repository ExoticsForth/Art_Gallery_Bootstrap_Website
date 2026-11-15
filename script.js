var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        
        this.classList.toggle("active")
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}

var myIndex = 0;
var myIndex2 = 0;
carousel();
carousel2();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);
}

function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carousel, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    //https://fullcalendar.io/docs/eventBorderColor
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      themeSystem: 'lux',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: null
      },
      weekNumbers: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events:  [
        {
          title  : 'ABSTRACT ART ENTRIES',
          start  : '2024-05-01',
          end    : '2024-07-01',
          backgroundColor : "#3A2C1F",
          borderColor : "#3A2C1F"

        }
      ]
    });
  
    calendar.render();
  });