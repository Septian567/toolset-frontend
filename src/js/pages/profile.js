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
    saveProfileBtn.addEventListener("click", function () {
      // Reset pesan error sebelumnya
      const editProfileForm = document.getElementById("editProfileForm");
      editProfileForm.classList.remove("was-validated");

      // Cek validitas field Nama
      const nameInput = document.getElementById("editName");
      if (!nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        return; // Hentikan proses jika Nama kosong
      }

      // Jika Nama valid, lanjutkan proses
      if (!editProfileForm.checkValidity()) {
        editProfileForm.classList.add("was-validated");
        return;
      }

      // Jika form valid, simpan data
      saveProfile();
    });
  }
});

function saveProfile() {
  const profile = {
    name: document.getElementById("editName")?.value || "-",
    hobby: document.getElementById("editHobby")?.value || "-",
    job: document.getElementById("editJob")?.value || "-",
    field: document.getElementById("editField")?.value || "-",
  };

  // Simpan data profil ke local storage
  localStorage.setItem("profileData", JSON.stringify(profile));

  // Perbarui tampilan profil
  displayProfile(profile);

  // Perbarui komponen ProfileDescription (jika ada)
  const profileDescription = document.querySelector("profile-description");
  if (profileDescription) {
    profileDescription.name = profile.name;
    profileDescription.hobby = profile.hobby;
    profileDescription.job = profile.job;
    profileDescription.field = profile.field;
  }

  // Tutup modal
  const modal = document.getElementById("editProfileModal");
  if (modal) {
    bootstrap.Modal.getInstance(modal)?.hide();
  }
}

function displayProfile(profile) {
  // Perbarui elemen HTML (jika ada)
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
  // Muat data profil dari local storage
  const savedProfile = localStorage.getItem("profileData");
  if (savedProfile) {
    const profile = JSON.parse(savedProfile);
    displayProfile(profile);

    // Perbarui komponen ProfileDescription (jika ada)
    const profileDescription = document.querySelector("profile-description");
    if (profileDescription) {
      profileDescription.name = profile.name;
      profileDescription.hobby = profile.hobby;
      profileDescription.job = profile.job;
      profileDescription.field = profile.field;
    }
  }

  // Muat gambar profil dari local storage
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
