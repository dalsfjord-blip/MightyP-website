// 1. Open/Close a specific playlist
// 'menuId' tells the script which <div> to open
function togglePlaylist(menuId, trigger) {
    const playlist = document.getElementById(menuId);
    playlist.classList.toggle("show-playlist");
}

// 2. Play music in a specific player
// 'playerId' and 'titleId' ensure the music plays in the correct box
function playTrack(playerId, titleId, file, title) {
    const player = document.getElementById(playerId);
    const titleDisplay = document.getElementById(titleId);
    
    titleDisplay.innerText = "NOW PLAYING: " + title;
    player.src = file;
    player.load();
    player.play();
}