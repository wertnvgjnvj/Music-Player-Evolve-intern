
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const playlist = document.getElementById('playlist');
const addMusicBtn = document.getElementById('addMusicBtn');
const songUrlInput = document.getElementById('songUrl');

let currentSongIndex = 0;

function playSong(index) {
    const songSrc = playlist.children[index].getAttribute('data-src');
    audio.src = songSrc;
    audio.play();
}

playBtn.addEventListener('click', () => {
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
});

playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentSongIndex = Array.from(playlist.children).indexOf(e.target);
        playSong(currentSongIndex);
    }
});

addMusicBtn.addEventListener('click', () => {
    const songUrl = songUrlInput.value.trim();
    if (songUrl !== '') {
        const songName = prompt('Enter song name:');
        if (songName) {
            const li = document.createElement('li');
            li.setAttribute('data-src', songUrl);
            li.textContent = songName;
            playlist.appendChild(li);
            songUrlInput.value = '';
        }
    }
});
