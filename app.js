async function getGif(e) {
  e.preventDefault();
  const $searchTerm = $("#searchInput").val();
  $("#searchInput").val("");
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: $searchTerm, api_key: "ZagNQocC4T55swNUeDaAge8wqZ09AbKy" },
  });
  addNewGif(response.data.data);
}

function addNewGif(gifData) {
  const idx = Math.floor(Math.random() * gifData.length);
  const gifUrl = gifData[idx].images.original.url;
  const newGif = makeHtml(gifUrl);
  $("#gifRow").append(newGif);
}

function removeGifs() {
  $("#gifRow").empty();
}

function makeHtml(gifUrl) {
  return `<div class="col-4 mt-1 align-self-center justify-content-center">
  <img src=${gifUrl} alt="" class="img-fluid w-100">
  </div>`;
}

$("form").on("submit", getGif);
$("#removeButton").on("click", removeGifs);
