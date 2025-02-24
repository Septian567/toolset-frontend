document
  .getElementById("storyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai input
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const photoInput = document.getElementById("photo");

    if (!photoInput.files.length) {
      alert("Harap pilih foto!");
      return;
    }

    // Buat URL untuk foto yang diupload
    const reader = new FileReader();
    reader.onload = function (e) {
      const photoUrl = e.target.result;
      const createdAt = new Date().toISOString();

      // Ambil data story dari LocalStorage atau buat array baru
      let stories = JSON.parse(localStorage.getItem("stories")) || [];

      // Tambahkan story baru
      stories.unshift({ name, description, photoUrl, createdAt });

      // Simpan kembali ke LocalStorage
      localStorage.setItem("stories", JSON.stringify(stories));

      // Redirect ke dashboard
      window.location.href = "index.html";
    };

    reader.readAsDataURL(photoInput.files[0]);
  });
