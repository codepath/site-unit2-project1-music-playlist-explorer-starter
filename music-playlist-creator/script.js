const modal = document.getElementById("cardModal");
const closeM = document.getElementById("close");
const modalCont = document.getElementById('modal-content');
const cards = data.playlists;
const ftPage = document.getElementById('ftPlay');
const overlay = document.getElementById('overlay');

document.addEventListener('DOMContentLoaded', () => {
    const pathname = document.location.pathname;
    if (pathname === '/Users/tessaoro/Desktop/codepath/site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator/index.html') {
        loadPlaylists(); 
        closeModal(); 
    } else {
        featurePlaylist();
    }
});


function openModal(card) {
    modalCont.innerHTML = `
                    <img id="playlistImg" src=${card.playlist_art} style="border-radius: 5px;">
                    <div id="playlistInfo">
                        <h1 id="playlistTitle">${card.playlist_name}</h1>
                        <p id="creator">Created by ${card.playlist_creator}</p>
                    </div>
                    <div onclick="shuffle(this.parentNode)" style="
                    cursor: pointer;
                    color: white;
                    width: 180px;
                    text-align: center;
                    border-radius: 4px;
                    padding: 10px;
                    background-color: #ffa42de0;
                    ">~shuffle~</div>
                    <ul id="songs" style="list-style-type: none;"></ul>
                        `;
    const songs = card.songs;
    songs.forEach(song => {
        const songFormat = createSongElement(song);
        modalCont.querySelector("#songs").appendChild(songFormat);
    })
    modal.style.display = "block";
    overlay.style.display = 'block';
 }

 function shuffle(modalPage) {
    const songList = modalPage.querySelector("#songs");
    for (var i = songList.children.length; i>=0; i--) {
        songList.appendChild(songList.children[Math.random() * i | 0]);
    }
 }

 function createSongElement(song) {
    const songE = document.createElement('li');
    // songE.setAttribute('class', 'songElem');
    // songE.setAttribute('style', "list-style-type: none;");
    songE.innerHTML = `
                <div id="songElem" style="border: 5px rgb(0, 0, 0); margin-bottom: 20px;"> 
                    <img src=${song.cover_art} style="display: inline-block; width: 100px; height: auto; margin-right: 30px; border-radius: 3px;">
                    <span style="display: inline-block; vertical-align: top; margin-top: 10px;">
                        <p id="songTitle" style="margin-bottom: 10px; margin-top: 0px; font-weight: bold;">${song.title}</p>
                        <p id="artist" style="margin: 0px;">by ${song.artist}</p>
                        <p id="album" style="margin-top: 10px;">Album: ${song.album}</p>
                    </span>
                    <span id="duration" style="display: inline-block; float:right; padding-right: 5%; margin-top: 20px;">${song.duration}</span>
                </div>
                        `;
    return songE;
 }

 function closeModal() {
    modal.style.display = "none";
    overlay.style.display = 'none';
 }

 closeM.addEventListener('click', closeModal);

 window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
 }

 function loadPlaylists() {
        console.log(cards);
        const playlists = document.getElementById('playlist-cards');
        cards.forEach(card => {
            const cardElement = createCardElement(card);
            cardElement.addEventListener('click', (event) => {
                if (!(event.target.id == 'heart' || event.target.id == 'deleteButton')) {
                    openModal(card);
                }
            }); 
            playlists.appendChild(cardElement);
        });
    }

 function createCardElement(card) {
    const article = document.createElement('article');
    article.setAttribute('class', 'playlistSection');
    article.setAttribute('id', 'card');
    /* article.setAttribute('style', "box-shadow: 2px 2px 5px rgba(0,0,100,0.5)"); */
    article.innerHTML = `
                        <div>
                        <img src=${card.playlist_art} style="border-radius: 5px;">
                        <h1 id="playlistTitle" style="font-size: 1.3em;">${card.playlist_name}</h1>
                        <p id="creator">Created by ${card.playlist_creator}</p>
                        <img id="heart" src="assets/img/empty-heart.png" onclick="like(this.parentNode, card)" style=width:20px; height:20px; >
                        <p id="likeCount" style=margin:1px;>${card.likeCount}</p>
                        <p id="deleteButton" style="color: rgba(232, 70, 0); float: right;
                        padding-top: 0px; margin-top: 0px; font-size: 0.75rem"
                        onclick="deletePlaylist(this.parentNode)">delete</p>
                        </div>
                        <style>
                            #deleteButton {
                                transition: 0.3s;
                            }
                            #deleteButton:hover {
                                font-weight: bold;
                            }
                        </style>
                        `;
    return article;
 }

 function like(playSection, card) {
    const heart = playSection.querySelector('#heart');
    const likeCount = playSection.querySelector('#likeCount');
    console.log("Heart");
    if (heart.src.match("assets/img/empty-heart.png")) {
        heart.src = "assets/img/red-heart.png";
        likeCount.innerText = String(parseInt(likeCount.innerText) + 1);
        card.likeCount = card.likeCount + 1;
    } else {
        heart.src = "assets/img/empty-heart.png";
        likeCount.innerText = String(parseInt(likeCount.innerText) - 1);
        card.likeCount -= 1;
    }
 }

 function deletePlaylist(selectedPlaylist) {
    const toDel = selectedPlaylist.parentNode;
    toDel.remove();
 }


 function featurePlaylist() {
    console.log("genft");
    let numPlaylist = cards.length;
    let randIndex = Math.floor(Math.random()*numPlaylist);
    let card = cards[randIndex];
    ftPage.innerHTML = `
                    <div style="display: inline-block; vertical-align: top; padding-left: 30px">
                        <img src=${card.playlist_art} style="width: 500px; height: auto; object-fit: fill; border-radius: 7px;
                        margine-top: 40px;">
                        <h1 id="playlistTitle" style="color: white;">${card.playlist_name}</h1>
                    </div>
                    <span style="display: inline-block; vertical-align: bottom; padding-left: 40px; width: 45%;">
                        <ul id="songs" style="list-style-type: none; color: white;"></ul>
                    </span>
                        `;
    const songs = card.songs;
    songs.forEach(song => {
        const songFormat = createSongElement(song);
        ftPage.querySelector("#songs").appendChild(songFormat);
    })
 }

 function search_playlist() {
        let input = document.getElementById('searchbar').value;
        input = input.toLowerCase();
        let x = document.getElementsByClassName('playlistSection');
        console.log(x);
        for (let i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            } else {
                x[i].style.display = "block";
            }
        }
 }
