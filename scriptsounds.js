// 1. OPEN/CLOSE THE PLAYLIST
function togglePlaylist(menuId, trigger) {
    const playlist = document.getElementById(menuId);
    if (playlist) {
        playlist.classList.toggle("show-playlist");
    }
}

// 2. PLAY THE SELECTED TRACK
function playTrack(playerId, titleId, file, title) {
    const player = document.getElementById(playerId);
    const titleDisplay = document.getElementById(titleId);
    
    if (player && titleDisplay) {
        // Update the UI
        titleDisplay.innerText = "NOW PLAYING: " + title;
        
        // Load and Play the file
        player.src = file;
        player.load();
        player.play();

        // --- AUTO-PLAY NEXT LOGIC ---
        // When this specific song ends, look for the next one
        player.onended = function() {
            playNextSong(playerId, file);
        };
    }
}

// 3. FIND THE NEXT SONG IN THE LIST
function playNextSong(playerId, currentFile) {
    // Find all the song items in the list
    const allSongs = document.querySelectorAll('.song-list li');
    
    for (let i = 0; i < allSongs.length; i++) {
        // Check which <li> matches the file that just finished
        if (allSongs[i].getAttribute('onclick').includes(currentFile)) {
            
            // Look for the very next <li>
            const nextSong = allSongs[i + 1];
            
            if (nextSong) {
                // "Click" it to trigger the playTrack function again
                nextSong.click();
            } else {
                console.log("End of playlist reached.");
            }
            break; 
        }
    }
}