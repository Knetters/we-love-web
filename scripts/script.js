var playBtn = document.getElementById('play'),
  resetBtn = document.getElementById('reset'),
  hearbeat = document.getElementById('heartbeat')
	audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

resetBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

resetBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);