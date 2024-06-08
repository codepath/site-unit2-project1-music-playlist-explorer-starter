document.addEventListener('DOMContentLoaded', (event) => {    
    // function call to display playlist on feature page
    function addFeaturedPlaylist(playlist) {
        let featuredDisplay = document.getElementsByClassName('featured-display')[0];
        let albumDisplay = document.getElementsByClassName('album-display')[0];
        albumDisplay.querySelector('.album-img').src = playlist.playlist_art;
        albumDisplay.querySelector('.album-img').alt = playlist.playlist_name;
        albumDisplay.querySelector('.album-title').textContent =  playlist.playlist_name;
        albumDisplay.querySelector('.playlist-creator').textContent = playlist.playlist_creator;

        let playlistDisplay = document.getElementsByClassName('playlist-display')[0];
        playlistDisplay.innerHTML = '';

        playlist.songs.forEach(song => {
            const songElement = document.createElement('div');
            songElement.classList.add('song');
            songElement.id = "featured-song-display";
            console.log(songElement);

            songElement.innerHTML = `
                <img id="song-img" src="${song.cover_art}" alt="${song.title}">
                <div class="song-title-text">
                    <h3 class="title-text" id="song-title'>${song.title}</h3>
                    <h4 id='artist-name'>${song.artist}</h4>
                    <h4 id='album-name'>${song.album}</h4>
                </div>
            <p class="song-duration">${song.duration}</p>
            `;
            playlistDisplay.appendChild(songElement);
        });
        featuredDisplay.appendChild(playlistDisplay);

    };


    // featured page
    addFeaturedPlaylist(data.playlists[0])
});
