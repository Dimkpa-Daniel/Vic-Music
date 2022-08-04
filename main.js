// $(document).ready(function () {});

// Change Tab Name In correspondence to currently playing track \\\\\\\
var pagetitle = "Now Playing: ";

function changePageName() {
  $(document).prop("title", "Vic-Music");
  setTimeout(() => {
    $(document).prop("title", pagetitle);
  }, 3000);
}



// Select all the elements in the HTML page
// and assign them to a variable
//var now_playing = document.querySelector(".now-playing");
//var track_art = document.querySelector(".track-art");
var track_name = document.querySelector(".track-name");
var track_artist = document.querySelector(".track-artist");

var playpause_btn = document.querySelector(".playpause-track");
var next_btn = document.querySelector(".next-track");
var prev_btn = document.querySelector(".prev-track");

var seek_slider = document.querySelector(".seek_slider");
var volume_slider = document.querySelector(".volume_slider");
var curr_time = document.querySelector(".current-time");
var total_duration = document.querySelector(".total-duration");




// Specify global values
var track_index = 0;
var isPlaying = false;
var updateTimer;
var seekto;



// Create the audio element for the player
var curr_track = document.createElement("audio");
curr_track.classList.add("audio");



// Audio Tracklist
var track_list = [
    {
      name: "Say So",
      artist: "Doja Cat",
      image: "./playlists-images/Say_So_-_Doja_Cat.png",
      path: "./playlists/[MP3DOWNLOAD.TO] Doja Cat - Say So (Audio)-320k.mp3",
    },
    {
      name: "All Of Me",
      artist: "John Legend",
      image: "./playlists-images/all of me.jpg",
      path: "./playlists/Allofme.mp3",
    },
    {
      
      name: "Big Energy",
      artist: "Latto",
      image: "./playlists-images/Latto_-_Big_Energy.png",
      path: "./playlists/Latto-BigEnergy(OfficialVideo)_1652472461110.mp3",
    },
    {
      name: "Listen",
      artist: "Beyonce",
      image: "./playlists-images/listen.jpg",
      path: "./playlists/Beyoncé-Listen[OfficialFirstVideo]_1651674446009.mp3",
    },
    {
      
      name: "7rings",
      artist: "Ariana Grande",
      image: "./playlists-images/7 rings.jpg",
      path: "./playlists/Ariana Grande - 7 rings (Official Video) (320  kbps).mp3",
    },
    {
      name: "I'm In Love With A Monster",
      artist: "Fifth Harmony",
      image: "./playlists-images/i'm in love with a monster.jpg",
      path: "./playlists/FifthHarmony-I'mInLoveWithaMonster(fromHotelTransylvania2-OfficialVideo)_1653670132994.mp3",
    },
    {
        name: "Mi Gente (feat. Beyonce)",
        artist: "J Balvin, Willy William",
        image: "./playlists-images/mi gente.jpg",
        path: "./playlists/JBalvin,WillyWilliam-MiGenteft.Beyoncé_1653670476297.mp3",
      },
      {
        name: "About Damn Time",
        artist: "Lizzo",
        image: "./playlists-images/about damn time.jpg",
        path: "./playlists/Lizzo-AboutDamnTime[OfficialVideo]_1653673195432.mp3",
      },
      {
        name: "Levitating",
        artist: "Dua Lipa",
        image: "./playlists-images/levitating.jpeg",
        path: "./playlists/Dua-Lipa-Ft-DaBaby-Levitating-Remix-(TrendyBeatz.com).mp3",
      },
      {
        name: "...Ready For It?",
        artist: "Taylor Swift",
        image: "./playlists-images/Ready for It.jpg",
        path: "./playlists/TaylorSwift-…ReadyForIt_1652462377438.mp3",
      },
      {
        name: "Only Girl (In The World)",
        artist: "Rihanna",
        image: "playlists-images/Only Girl In The World.png",
        path: "./playlists/Rihanna-OnlyGirl(InTheWorld)(OfficialMusicVideo)_1652460106977.mp3",
      },
      {
        name: "Before He Cheats",
        artist: "Carrie Underwood",
        image: "./playlists-images/before he cheats.jpg",
        path: "./playlists/Before He Cheats.mp3",
      },
      {
        name: "Girl On Fire",
        artist: "Alicia Keys",
        image: "./playlists-images/girl on fire.jpg",
        path: "./playlists/girl-on-fire-main-version.mp3",
      },
      {
        name: "pov",
        artist: "Ariana Grande",
        image: "./playlists-images/pov.jpg",
        path: "./playlists/ArianaGrande-pov(OfficialLivePerformance)Vevo_1655034099191.mp3",
      },
      {
        name: "2step (feat. Lil Baby)",
        artist: "Ed Sheeran",
        image: "./playlists-images/2step.jpg",
        path: "./playlists/EdSheeran-2step(feat.LilBaby)-[OfficialVideo]_1651074941908.mp3",
      },
      {
        name: "Call Me Maybe",
        artist: "Carly Rae Jepsen",
        image: "./playlists-images/call me maybe.jpg",
        path: "./playlists/CarlyRaeJepsen-CallMeMaybe_1650818865262.mp3",
      },
      {
        name: "My Universe (feat. BTS)",
        artist: "Coldplay",
        image: "./playlists-images/my universe.jpg",
        path: "./playlists/ColdplayXBTS-MyUniverse(OfficialVideo)_1647365935479.mp3",
      },
      {
        name: "Love On Top",
        artist: "Beyonce",
        image: "./playlists-images/love on top.jpg",
        path: "./playlists/Beyonce_-_Love_On_Top.mp3",
      },
      {
        name: "Can't Feel My Face",
        artist: "The Weeknd",
        image: "./playlists-images/can't feel my face.png",
        path: "./playlists/TheWeeknd-Can'tFeelMyFace(OfficialVideo)_1653661134813.mp3",
      },
      {
        name: "Don't Call Me (feat. Zinoleesky)",
        artist: "Lil Kesh",
        image: "./playlists-images/don't call me.jpg",
        path: "./playlists/LilKeshfeat.Zinoleesky-Don'tCallMe(OfficialMusicVideo)_1654482428912.mp3",
      },
      {
        name: "Let Me Love You (feat. Justin Bieber)",
        artist: "DJ Snake",
        image: "./playlists-images/let me love you.jpg",
        path: "./playlists/DJ_Snake_Let_Me_Love_You_(thinkNews.com.ng).mp3",
      },
      {
        name: "Light Switch",
        artist: "Charlie Puth",
        image: "./playlists-images/light switch.jpg",
        path: "./playlists/CharliePuth-LightSwitch[OfficialMusicVideo]_1652472287858.mp3",
      },
      {
        name: "Buga (Lo Lo Lo) (feat. Tekno)",
        artist: "Kizz Daniel",
        image: "./playlists-images/buga.jpg",
        path: "./playlists/Buga-KizzDaniel,Tekno(Lyrics)_1654482694286.mp3",
      },
      {
        name: "Wake Me Up",
        artist: "Avicii",
        image: "",
        path: "./playlists/Avicii-WakeMeUp(OfficialVideo)_1657123994299.mp3",
      },
      {
        name: "Nobody",
        artist: "Boy Spyce",
        image: "",
        path: "./playlists/Boy-Spyce-Nobody-(TrendyBeatz.com).mp3",
      },
      {
        name: "Last Last (Breakfast)",
        artist: "Burna Boy",
        image: "",
        path: "./playlists/Burna_Boy_-_Last_Last_Breakfast_.mp3",
      },
      {
        name: "Rockstar (feat. Roddy Ricch)",
        artist: "DaBaby",
        image: "",
        path: "./playlists/DaBaby-Rockstarfeat.RoddyRicch(OfficialMusicVideo)_1657124294826.mp3",
      },
      {
        name: "Taki Taki (feat. Selena Gomez, Ozuna, Cardi B)",
        artist: "DJ Snake",
        image: "",
        path: "./playlists/DJSnake-TakiTakift.SelenaGomez,Ozuna,CardiB(OfficialMusicVideo)_1650819066068.mp3",
      },
      {
        name: "Risky (feat. Popcaan)",
        artist: "Davido",
        image: "",
        path: "./playlists/Davido-Ft.-Popcaan-Risky.mp3",
      },
   
  ];

  


  // Functions
// Functiom to reset all values to their default
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
  }



  function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
  
    // Update details of the track
    document.getElementById("trackimg").src = track_list[track_index].image;
    track_name.textContent = track_list[track_index].name;
    pagetitle = `Now Playing: ${track_list[track_index].name} by ${track_list[track_index].artist}`;
    track_artist.textContent = track_list[track_index].artist;
  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  }

  


  function render() {
    for (var track_index = 0; track_index < track_list.length; track_index++) {
      var node = document.createElement("LI");
      node.classList.add("list-group-item");
      node.setAttribute("id", `${track_list[track_index].name}`);
      // node.setAttribute("id", `${track_list[track_index]}`);
      var textnode = document.createTextNode(
        track_list[track_index].name + " by " + track_list[track_index].artist
      ); // Create a text node
      node.appendChild(textnode);
      document.getElementById("playlist_items").appendChild(node);
    }
  }

  


  function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) {
      playTrack();
    } else {
      pauseTrack();
    }
  }
  function playTrack() {
    // Play the loaded track
    $(".list-group-item").removeClass("active");
    document
      .getElementById(`${track_list[track_index].name}`)
      .classList.add("active");
    curr_track.play();
    isPlaying = true;
    $("#control").removeClass("fa-play-circle").addClass("fa-pause-circle");
    $(document).prop("title", pagetitle);
  }
  
  function pauseTrack() {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;
    $("#control").removeClass("fa-pause-circle").addClass("fa-play-circle");
    $(document).prop("title", "Vic-Music");
  }

  



  function nextTrack() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1) track_index += 1;
    else track_index = 0;
  
    // Load and play the new track
    loadTrack(track_index);
    playTrack();
  }

  


  function prevTrack() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0) {
      track_index -= 1;
    } else {
      track_index = 0; //track_list.length;
    }
  
    // Load and play the new track
    loadTrack(track_index);
    playTrack();
  }
  



  function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekto = curr_track.duration * (seek_slider.value / 100);
  
    // Set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
  }
  
  function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
  }



  
  function seekUpdate() {

    var seekPosition = 0;
    
      // Check if the current track duration is a legible number
      if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
    
    // Calculate the time left and the total duration
        var currentMinutes = Math.floor(curr_track.currentTime / 60);
        var currentSeconds = Math.floor(
          curr_track.currentTime - currentMinutes * 60
        );
        var durationMinutes = Math.floor(curr_track.duration / 60);
        var durationSeconds = Math.floor(
          curr_track.duration - durationMinutes * 60
        );
    
    
    // Add a zero to the single digit time values
        if (currentSeconds < 10) {
          currentSeconds = "0" + currentSeconds;
        }
        if (durationSeconds < 10) {
          durationSeconds = "0" + durationSeconds;
        }
    if (currentMinutes < 10) {
          currentMinutes = "0" + currentMinutes;
        }
        if (durationMinutes < 10) {
          durationMinutes = "0" + durationMinutes;
        }
    
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }

    }
    


    // Load the first track in the tracklist
loadTrack(track_index);
render();

$(playpause_btn).click(playpauseTrack);
$(next_btn).click(nextTrack);
$(prev_btn).click(prevTrack);
$(volume_slider).change(setVolume);
$(seek_slider).change(seekTo);
$(".list-group-item").click(function (event) {
  $(".list-group-item").removeClass("active");
  $(this).addClass("active");
  console.log(this.innerHTML.split(" ")[0]);
});

$(document).on("keypress", function (e) {
  if (e.which === 32) {
    playpauseTrack();
  }
});
$(document).on("keydown", function (e) {
  if (e.which === 39) {
    nextTrack();
  }
  if (e.which === 37) {
    prevTrack();
  }
});
