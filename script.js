const allMusic = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; 



allMusic.forEach(music => {
    const btn = document.createElement('button');
    btn.classList.add('btn')
    btn.innerText = music;

    btn.addEventListener('click', () => {

        stopSong();

        document.getElementById(music).play()
    })

    document.getElementById('button').appendChild(btn);
})

const stopSong = () => {
    allMusic.forEach(music => {
    
        let btn = document.getElementById(music);

        btn.pause();
        
        btn.currentTime = 0 ;
    })
}