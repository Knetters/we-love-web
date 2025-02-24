var audio = $("#audio")[0];
$(".color-content").mouseenter(function() {
  audio.play();
});

//Json color-content inladen
const post_El = document.querySelector(".json-post-container");
const post_Cont = document.querySelector(".post-container");

fetch("https://knetters.github.io/we-love-web/scripts/posts.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      post_El.insertAdjacentHTML("beforeend", `
        <div onclick="showPost(${post.id})" class="flex-items color-content ${post.color}">
          <div class="color-text-content">
            <p><i class="fa fa-adjust color-icon"></i></p>
            <div class="bottom-content">
              <p class="post-number">0${post.id}</p>
              <h2>${post.title}</h2>
              <p id="effect" class="top-border hidden">${post.intro}</p>
            </div>
          </div>
        </div>
      `);
    });
  });

function showPost(Id) {
  let insertedContent = document.querySelector(".insertedContent");
    if(insertedContent) {
      insertedContent.parentNode.removeChild(insertedContent);
    }

  fetch("https://knetters.github.io/we-love-web/scripts/posts.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      if (post.id == Id) {
      post_Cont.insertAdjacentHTML("beforeend", `
        <div class="insertedContent">
          <h2 class="${post.color}">${post.title}</h2>
          <p>Door ${post.speaker}, ${post.date}</p>
          <p>Door ${post.content}</p>
        </div>
      `);
      }
    });
  });
  location.href = '/#posts';
}