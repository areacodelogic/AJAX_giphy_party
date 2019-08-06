async function getGif(e) {
  e.preventDefault();
  let getSearchTerm = $(".enter").val();

  let gifList = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", q: getSearchTerm }
  });
  selectGif(gifList);
}

function selectGif(gifs) {
  let index = Math.floor(Math.random() * gifs.data.data.length);
  let selectedGif = gifs.data.data[index].images.fixed_height.url;
  $(".gallery").append(`<img src="${selectedGif}">`);
}

function removeGif() {
  $("img").remove();
}

$(".search").on("click", getGif);
$(".remove").on("click", removeGif);
