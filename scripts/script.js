var audio = $("#audio")[0];
$(".color-content").mouseenter(function() {
  audio.play();
});

//Json color-content inladen
const post_El = document.querySelector(".json-post-container");

fetch("https://knetters.github.io/we-love-web/scripts/posts.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      post_El.insertAdjacentHTML("beforeend", `
        <div class="flex-items color-content ${post.color}">
          <div class="color-text-content">
            <p><i class="fa fa-adjust color-icon"></i></p>
            <div class="bottom-content">
              <p class="post-number">${post.Id}</p>
              <h2>${post.title}</h2>
              <p id="effect" class="top-border hidden">${post.intro}</p>
            </div>
          </div>
        </div>
      `);
    });
  });