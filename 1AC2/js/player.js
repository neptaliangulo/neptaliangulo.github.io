function playAudio(id) {
  const audio = document.getElementById(id);
  audio.play();
}

function pauseAudio(id) {
  const audio = document.getElementById(id);
  audio.pause();
}

function changeTime(id, seconds) {
  const audio = document.getElementById(id);
  audio.currentTime += seconds;
}

function changeVolume(id, value) {
  const audio = document.getElementById(id);
  audio.volume = Math.min(1, Math.max(0, audio.volume + value));
}

function toggleMute(id, btn) {
  const audio = document.getElementById(id);
  audio.muted = !audio.muted;
  btn.textContent = audio.muted ? '🔇' : '🔊';
}

document.querySelectorAll('audio').forEach(audio => {
  const progress = document.getElementById('progress' + audio.id.replace('audio', ''));
 
  audio.addEventListener('timeupdate', () => {
    progress.max = audio.duration || 0;
    progress.value = audio.currentTime;
  });

  progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
  });
});
