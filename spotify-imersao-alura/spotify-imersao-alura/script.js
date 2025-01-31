const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artists');
const resultPlaylist = document.getElementById('result-playlist')
function requestApi(searchValue){
    const url = `http:/localhost:3000/artists?name_like=${searchValue}`
    fetch(url)
    .then(response => response.json())
    .then(result => displayResults(result))
}
function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistsName = document.getElementById('artist-name');
    const artistsImage = document.getElementById('artists-img');
    result.forEach(element => {
        artistsName.innerText = element.name;
        artistsImage.src = element.urlImg;
    });
    resultArtists.classList.remove('hidden');
}
document.addEventListener('input', function(){
    const searchValue = searchInput.value.toLowerCase();
    if (searchValue=== ''){
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }
    requestApi(searchValue);
})