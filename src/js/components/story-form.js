import { LitElement, html } from "lit";

class StoryForm extends LitElement {
  // Menonaktifkan Shadow DOM
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="container mt-5">
        <h2 class="text-center mb-4">Tambah Story Baru</h2>
        <form id="storyForm" class="needs-validation" novalidate>
          <!-- Deskripsi -->
          <div class="mb-3">
            <label for="description" class="form-label">Deskripsi:</label>
            <textarea
              id="description"
              class="form-control"
              rows="4"
              required
            ></textarea>
            <div class="invalid-feedback">Harap isi deskripsi.</div>
          </div>

          <!-- Upload Foto -->
          <div class="mb-3">
            <label for="photo" class="form-label">Upload Foto:</label>
            <input
              type="file"
              id="photo"
              class="form-control"
              accept="image/*"
              required
            />
            <div class="invalid-feedback">Harap pilih foto.</div>
          </div>

          <!-- Tombol Submit -->
          <button type="submit" class="btn btn-primary w-100">
            <i class="fa-solid fa-upload"></i> Simpan Story
          </button>
        </form>
      </div>
    `;
  }

  firstUpdated() {
    const form = this.querySelector("#storyForm");
    form.addEventListener("submit", this._handleSubmit.bind(this));
  }

  _handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const profileData = JSON.parse(localStorage.getItem("profileData")) || {};
    const name = profileData.name || "Guest";
    const description = this.querySelector("#description").value;
    const photoInput = this.querySelector("#photo");

    const reader = new FileReader();
    reader.onload = (e) => {
      const photoUrl = e.target.result;
      const createdAt = new Date().toISOString();

      let stories = JSON.parse(localStorage.getItem("stories")) || [];
      stories.unshift({ name, description, photoUrl, createdAt });

      localStorage.setItem("stories", JSON.stringify(stories));

      window.location.href = "index.html";
    };

    reader.readAsDataURL(photoInput.files[0]);
  }
}

customElements.define("story-form", StoryForm);
