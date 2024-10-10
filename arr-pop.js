let playlist =["Song A","Song B","Song c"]

function addsong(song){
    playlist.push(song);
    console.log("Added : ",song);
    console.log("Current Song :" ,playlist)
}

function removeSongs(){
    let removedSong = playlist.pop();
    console.log("Removed : ",removedSong);
    console.log("Current Song :" ,playlist)
}
addsong("Song e")
addsong("Song F")

removeSongs()