(function () {
   var daysvalue = 0,
       hoursvalue = 0,
       minutesvalue = 0,
       secondsvalue = 0;

   var interval = setInterval(function() {
       var today = new Date();
       var national = new Date("October 1, 2018"),
            millisecond = national - today;
       if (millisecond < 0) {
            this.clearInterval(interval);
            return;
       }

       daysvalue = Math.floor(millisecond / 1000 / 60 / 60 / 24);
       hoursvalue = Math.floor(millisecond /1000 / 60 / 60 % 24);
       minutesvalue = Math.floor(millisecond / 1000 / 60 % 60);
       secondsvalue = Math.floor(millisecond / 1000 % 60);


       var days = getEl(".days"),
           hours = getEl(".hours"),
           minutes = getEl(".minutes"),
           seconds = getEl(".seconds");

       days.textContent = daysvalue;
       hours.textContent = hoursvalue;
       minutes.textContent = minutesvalue;
       seconds.textContent = secondsvalue;

       }, 1000)






})()