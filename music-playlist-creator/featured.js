/* Js for Feature Page */

// Function to display a random playlist on the featured page
const displayRandomPlaylist = () => {
  // Get a random playlist from the data
  const randomPlaylistIndex = Math.floor(Math.random() * data.playlists.length);
  const randomPlaylist = data.playlists[randomPlaylistIndex];

  const featuredPlaylistDiv = document.querySelector(".featured-playlist");
  featuredPlaylistDiv.innerHTML = `
    <div class="featured-left">
      <img src="${randomPlaylist.playlist_art}" alt="Playlist Cover Art" class="featured-img">
      <h2>${randomPlaylist.playlist_name}</h2>
      <h4>Created by ${randomPlaylist.playlist_creator}</h4>
    </div>
    <div class="featured-right">
      <ul class="song-list">
        ${randomPlaylist.songs.map(song => `
          <li class="song-item">
            <img src="${song.cover_art}" alt="Cover Art" class="song-img">
            <div class="song-details">
              <p class="song-title">${song.title}</p>
              <p class="song-artist">${song.artist} - ${song.album}</p>
            </div>
            <span class="song-duration">${song.duration}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
};

// Call the function to display a random playlist on page load
displayRandomPlaylist();

