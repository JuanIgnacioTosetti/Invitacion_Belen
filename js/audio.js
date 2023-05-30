const playBtn = document.getElementById("play-btn");
  const audio = document.getElementById("audio");
  let isPlaying = false;

  playBtn.addEventListener("click", function() {
    if (isPlaying) {
      // Si está reproduciendo, pausa la música y cambia el botón a "play"
      audio.pause();
      playBtn.innerHTML = '<i class="fa fa-play"></i>';
      isPlaying = false;
    } else {
      // Si está en pausa, reproduce la música y cambia el botón a "pausa"
      audio.play();
      playBtn.innerHTML = '<i class="fa fa-pause"></i>';
      isPlaying = true;
    }
  });


 