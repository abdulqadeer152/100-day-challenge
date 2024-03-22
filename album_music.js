"use strict";
function make_album(artist, title, track) {
    const album = {
        artist: artist,
        title: title
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
const album1 = make_album('artist 1', 'Album title 1');
console.log(album1);
const album2 = make_album('artist 2', 'Album title 2');
console.log(album2);
const album3 = make_album('artist 3', 'Album title 3');
console.log(album3);
