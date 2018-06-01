$.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function (data) {
    var lon = data.iss_position.longitude;
    var lat = data.iss_position.latitude;

    $('.longitude').text('longitude: ' + lon);
    $('.latitude').text('latitude: ' + lat);
});
$.getJSON('http://api.open-notify.org/astros.json', function (astros) {
    var total_astros = astros.number;
    var present_astros = astros.people;
   
    present_astros.forEach(function(astr, i) {
        $('.astros_list').append('<li>' + astr.name + '</li')
    })
});

// setTimeout(moveISS, 5000); 
function showTime() {

    var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    var daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];

    var dateObj = new Date();

    var year = dateObj.getFullYear();
    var month = dateObj.getMonth();
    var numDay = dateObj.getDate();
    var day = dateObj.getDay();
    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();

    if (minute < 10) minute = "0" + minute;


    
    document.querySelector('.current_time').innerText = 'Current UTC time: ' + hour + ":" + minute;
    document.querySelector('.current_date').innerText =daysArr[day] + ", " + numDay + " " + monthsArr[month] + " " + year;

}
showTime();