const bTn = document.getElementById('sbtn');
const input = document.getElementById('Search');
const container = document.getElementById('gif-container');

bTn.addEventListener('click', function () {
  const query = input.value.trim();
  if (query === 'dogs' || query=== 'cats'){
    var url = `https://tenor.googleapis.com/v2/search?q=${query}&key=AIzaSyCnGfe6h0cxViWMV4h9cdEanXNiWXjwaJk&client_key=AIzaSyCnGfe6h0cxViWMV4h9cdEanXNiWXjwaJk&limit=18`;
  }else{
    alert('please dogs or cats')
  };
  const getGif = new XMLHttpRequest();
  getGif.open('GET', url);
  getGif.onload = function () {
    if (getGif.status === 200) {
      const response = JSON.parse(getGif.responseText);
      const gifs = response.results;
      container.innerHTML = '';
      console.log(gifs);
        gifs.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.media_formats.tinygif.url;
            container.appendChild(img);
        
      });
      
  };
}
  getGif.send()
});
