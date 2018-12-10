$('#go').click(function () {
  function checkIfComplete() {
    if(isComplete === false) {
      isComplete = true;
    } else {
      place = 'second';
    }
  }
  const carWidth = $('#car1').width();
  const raceTrackWidth = $(window).width()-carWidth;

  const raceTime1 = Math.floor((Math.random() * 5000) + 1);
  const raceTime2 = Math.floor((Math.random() * 5000) + 1);

  let isComplete = false;
  let place = 'first';

  $('#car1').animate({
    left: raceTrackWidth
  }, raceTime1, function () {
    checkIfComplete();
    $('#raceInfo1 span').text('Finished in ' + place + ' place. Clocking in at ' + raceTime1/1000 + ' Seconds!');
  });
  $('#car2').animate({
    left: raceTrackWidth
  }, raceTime2, function () {
    checkIfComplete();
    $('#raceInfo2 span').text('Finished in ' + place + ' place. Clocking in at ' + raceTime2/1000 + ' Seconds!');
  });
});

$('#reset').click(function () {
  $('.car').css('left', 0);
  $('.raceInfo span').text('');
});
