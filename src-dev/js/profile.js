document.addEventListener("DOMContentLoaded", function () {
  loadProfile();

  const changeImageBtn = document.getElementById("changeImageBtn");
  const uploadImageInput = document.getElementById("uploadImage");
  const saveProfileBtn = document.getElementById("saveProfileBtn");

  if (changeImageBtn) {
    changeImageBtn.addEventListener("click", () => {
      uploadImageInput?.click();
    });
  }

  if (uploadImageInput) {
    uploadImageInput.addEventListener("change", changeProfileImage);
  }

  if (saveProfileBtn) {
    saveProfileBtn.addEventListener("click", saveProfile);
  }
});

function saveProfile() {
  const profile = {
    name: document.getElementById("editName")?.value || "-",
    hobby: document.getElementById("editHobby")?.value || "-",
    job: document.getElementById("editJob")?.value || "-",
    field: document.getElementById("editField")?.value || "-",
  };

  localStorage.setItem("profileData", JSON.stringify(profile));
  displayProfile(profile);

  const modal = document.getElementById("editProfileModal");
  if (modal) {
    bootstrap.Modal.getInstance(modal)?.hide();
  }
}

function displayProfile(profile) {
  document.getElementById("name") &&
    (document.getElementById("name").innerText = profile.name || "-");
  document.getElementById("hobby") &&
    (document.getElementById("hobby").innerText = profile.hobby || "-");
  document.getElementById("job") &&
    (document.getElementById("job").innerText = profile.job || "-");
  document.getElementById("field") &&
    (document.getElementById("field").innerText = profile.field || "-");
}

function loadProfile() {
  const savedProfile = localStorage.getItem("profileData");
  if (savedProfile) {
    displayProfile(JSON.parse(savedProfile));
  }

  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    const profileImage = document.getElementById("profileImage");
    if (profileImage) {
      profileImage.src = savedImage;
    }
  }
}

function changeProfileImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const profileImage = document.getElementById("profileImage");
    if (profileImage) {
      profileImage.src = e.target.result;
      localStorage.setItem("profileImage", e.target.result);
    }
  };
  reader.readAsDataURL(file);
}
