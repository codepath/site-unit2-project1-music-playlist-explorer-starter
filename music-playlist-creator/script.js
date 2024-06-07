document.addEventListener('DOMContentLoaded', (event) => {
    let playlistModal = document.getElementById("playlistModal");

    
    // function to populate playlists using data from json file and displaying on screen
    function addPlaylist(playlist) {
        let cardContainer = document.getElementsByClassName('playlist-cardS')[0];
        let newCard = document.createElement('div');
        newCard.classList.add("playlist-card");
        newCard.innerHTML = `
            <img id='card-img' src=${playlist.playlist_art} alt=${playlist.playlist_name}>
            <p id='expand-icon' class='expand-icon' data-playlist-id='${playlist.playlistID}'>ᐩ</p>
            <h3 id='playlist-title'>${playlist.playlist_name}</h3> 
            <p id='creator-name'>${playlist.playlist_creator}</p> 
            <span class='likes'> 
                <p class='heart' id='heart' data-playlist-id='${playlist.playlistID}'>♡</p>
                <span class='like-count' id='like-count' data-playlist-id='${playlist.playlistID}'>${playlist.likeCount}</span>
            </span>
        `;

        cardContainer.appendChild(newCard);
    };

    // for loop to call addPLaylists function
    let playlists = data.playlists;
    playlists.forEach(item => {
        addPlaylist(item)
    });

    // function to populate modal using data from json file and displaying on screen
    function populateModal(playlistId) {
        const playlist = data.playlists.find(p => p.playlistID === playlistId);
        
        // Update playlist information
        const modal = document.getElementById('playlistModal');
        modal.querySelector('#playlist-img').src = playlist.playlist_art;
        modal.querySelector('#playlist-img').alt = playlist.playlist_name;
        modal.querySelector('#playlist-name').textContent = playlist.playlist_name;
        modal.querySelector('#creators-name').textContent = playlist.playlist_creator;
    
        // Clear existing songs
        const songsContainer = modal.querySelector('.songs');
        songsContainer.innerHTML = '';
    
        // Add songs to the modal
        playlist.songs.forEach(song => {
            const songElement = document.createElement('div');
            songElement.classList.add('song');
    
            songElement.innerHTML = `
                <img class='song-img' src="${song.cover_art}" alt="${song.title}">
                <div class="song-title-text">
                    <h3 class="title-text" id='modal-song-title'>${song.title}</h3>
                    <h4 class="artist-name">${song.artist}</h4>
                    <h4 class="album-name">${song.album}</h4>
                </div>
                <p class="song-duration">${song.duration}</p>
            `;
    
            songsContainer.appendChild(songElement);
        });
    };
    
    // loop to open modal when the + icon is clicked 
    // get icon
    // add event listener to click
    // on click run populate Modal function 
    // playlists is already defined, can call it directly
    let expandIcons = document.getElementsByClassName('expand-icon');
    Array.from(expandIcons).forEach(icon => {
        let playlistId;
        icon.addEventListener('click', (event) => {
            playlistId = Number(event.target.getAttribute('data-playlist-id'));
            // console.log(playlistId);
            populateModal(playlistId);
            playlistModal.style.display = "grid";
        });
    });


    // event Listener to close modal when exit icon is clicked
    document.querySelector('.exit').addEventListener('click', () => {
        document.getElementById('playlistModal').style.display = 'none';
    });

    // function to exit modal on screen click
    window.onclick = function(event) {
        if (event.target == playlistModal) {
          playlistModal.style.display = "none";
        }
    }


    // like function to like a playlist
    function likePlaylist(playlistId){
        const playlist = data.playlists.find(p => p.playlistID === playlistId);

        // update to new heart
        // const likes = document.getElementsByClassName('likes')
        // let heart = playlist.querySelector('#heart');
        let heartElement = document.querySelector(`span.likes p#heart[data-playlist-id="${playlistId}"]`);
        heartElement.textContent = '❤️';
        let likeCount = document.querySelector(`span.likes span#like-count[data-playlist-id="${playlistId}"]`);
        // console.log(likeCount)
        let currentCount = Number(likeCount.textContent);
        newCount = currentCount + 1;
        likeCount.textContent = newCount;
        return likeCount.textContent;
    }

    
        // to like playlist 
        // get like icon
        // get like count 
        // add event listener to click
        // on click, if playlist has 0 likes, change like icon 
        // if playlist has >= 1 like, add style, maybe a kinda pop increase like count
        // update value in json file

        let heartIcons = document.getElementsByClassName('likes');
        Array.from(heartIcons).forEach(icon => {
            let playlistId;
            icon.addEventListener('click', (event) => {
                playlistId = Number(event.target.getAttribute('data-playlist-id'));
                newCount = likePlaylist(playlistId);
                // console.log(newCount);
                playlists.likeCount = newCount;

            
            const file_path = 'data/data.js'; 
            fetch(file_path)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => console.error('Error loading JSON:', error));
        })
    });



        // generate random number
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        };

        // console.log(getRandomInt(5));



        // generate a random number between 0 and length of the songs list - 1
        // do this for every song container,
        // once this is done, you update the songID to the new generated number
        // display songs in order according to their songId

    



    // DEBUG TIP: created to function to check if script runs twice
    // function ValidateHidePrivate() {
    //     alert();
    // }

});
