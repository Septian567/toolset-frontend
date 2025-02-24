document.addEventListener("DOMContentLoaded", function () {
  let userStories = JSON.parse(localStorage.getItem("stories")) || [];

  fetch("DATA.json")
    .then((response) => response.json())
    .then((data) => {
      renderStories([...userStories, ...data.listStory]);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function renderStories(stories) {
  const container = document.getElementById("story-container");
  container.innerHTML = "";

  stories.forEach((story, index) => {
    const card = document.createElement("div");
    card.className = "col-lg-3 col-md-4 col-sm-6 mb-4 story-card";
    card.dataset.index = index;

    card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${story.photoUrl}" class="card-img-top" alt="${
      story.name
    }">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-primary" style="cursor: pointer;" 
                        onclick="showStoryDetail('${story.name}', '${
      story.photoUrl
    }', '${story.description}', '${story.createdAt}')">
                        ${story.name}
                    </h5>
                    <p class="card-text flex-grow-1">${story.description.substring(
                      0,
                      100
                    )}...</p>
                    <small class="text-muted">📅 ${new Date(
                      story.createdAt
                    ).toLocaleDateString()}</small>
                    <button class="delete-btn mt-2" data-index="${index}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    container.appendChild(card);
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", function () {
      deleteStory(this.dataset.index);
    });
  });
}

function deleteStory(index) {
  let userStories = JSON.parse(localStorage.getItem("stories")) || [];

  if (index < userStories.length) {
    if (confirm("Apakah Anda yakin ingin menghapus story ini?")) {
      userStories.splice(index, 1);
      localStorage.setItem("stories", JSON.stringify(userStories));
      document.querySelector(`.story-card[data-index='${index}']`).remove();
      document.querySelectorAll(".story-card").forEach((card, newIndex) => {
        card.dataset.index = newIndex;
        card.querySelector(".delete-btn").dataset.index = newIndex;
      });
    }
  } else {
    alert("Story dari data awal tidak bisa dihapus!");
  }
}
