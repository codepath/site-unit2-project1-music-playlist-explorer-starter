// Dynamically create playlist cards function

const createPlaylistCards = () => {
    //  console.log(data.playlists);
  const container = document.querySelector(".playlist-cards");
  data.playlists.forEach((playlist) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${playlist.playlist_art}" class="card-img-top" alt="Card Image">
            <div class="card-overlay">
                <i class="fas fa-play"></i>
                <span class="play-text">Play</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">${playlist.playlist_name}</h5>
                <p class="card-text">${playlist.playlist_creator}</p>
                <div class="card-review"><i class="fa-regular fa-heart"></i>${playlist.likeCount}</div>
            </div>
        `;
    container.appendChild(card);

    const overlay = card.querySelector(".card-overlay");
    overlay.addEventListener("click", () => {
      openModal(playlist);
    });
  });
}



// Open modal function
const  openModal = (playlist)=> {
  const modal = document.getElementById("playlistModal");
  modal.style.display = "block";

  document.getElementById("playlistImage").src = playlist.playlist_art;
  document.getElementById("playlistName").textContent = playlist.playlist_name;
  document.getElementById(
    "playlistCreator"
  ).textContent = `created by ${playlist.playlist_creator}`;

  const modalBody = modal.querySelector(".modal-body");
  modalBody.innerHTML = ""; 

  playlist.songs.forEach((song) => {
    const songDiv = document.createElement("div");
    songDiv.className = "song";
    songDiv.innerHTML = `
            <img src="${song.cover_art}" alt="" class="coverArt">
            <div class="song-details">
                <p id="songTitle">${song.title}</p>
                <p id="artistName">${song.artist}</p>
                <p id="albumName">${song.album}</p>
            </div>
            <p class="song-duration">${song.duration}</p>
        `;
    modalBody.appendChild(songDiv);
  });
}

// Close modal button
const closeButton = document.querySelector(".close");
const modal = document.getElementById("playlistModal");

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Call the function to create playlist cards
createPlaylistCards(data.playlists); 






// const modal = document.getElementById("playlistModal");
// const closeButton = document.querySelector(".close");

// const overlays = document.querySelectorAll(".card-overlay");

// overlays.forEach((overlay) => {
//   overlay.addEventListener("click", () => {
//     modal.style.display = "block";
//   });
// });

// closeButton.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// modal.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });

