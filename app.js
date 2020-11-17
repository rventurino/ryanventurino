let bg = "url(img/VenturinoResume - Copy-page0001.jpg);";

document.getElementById("readMore").addEventListener("click", function () {
  document.getElementById("description").innerHTML = `<div class="resume">
  <img src="img/VenturinoResume - Copy-page0001.jpg" alt="resume" />
</div>`;
  document.getElementById("back").style.display = `inline`;
});

document.getElementById("back").addEventListener("click", function () {
  location.reload();
});
