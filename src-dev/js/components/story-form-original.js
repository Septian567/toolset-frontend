import { LitElement, html, css } from "lit";

class StoryForm extends LitElement {
  static styles = css`
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      background: white;
    }
    .btn {
      width: 100%;
      background-color: #0d6efd;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.2rem;
    }
    .btn:hover {
      background-color: #0056b3;
    }
    .mb-3 {
      margin-bottom: 15px;
    }
    textarea,
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2 class="text-center">Tambah Story Baru</h2>
        <form @submit="${this._handleSubmit}">
          <div class="mb-3">
            <label for="name">Nama:</label>
            <input type="text" id="name" required />
          </div>

          <div class="mb-3">
            <label for="description">Deskripsi:</label>
            <textarea id="description" rows="4" required></textarea>
          </div>

          <div class="mb-3">
            <label for="photo">Upload Foto:</label>
            <input type="file" id="photo" accept="image/*" required />
          </div>

          <button type="submit" class="btn">
            <i class="fa-solid fa-upload"></i> Simpan Story
          </button>
        </form>
      </div>
    `;
  }

  _handleSubmit(event) {
    event.preventDefault();

    const name = this.shadowRoot.querySelector("#name").value;
    const description = this.shadowRoot.querySelector("#description").value;
    const photoInput = this.shadowRoot.querySelector("#photo");

    if (!photoInput.files.length) {
      alert("Harap pilih foto!");
      return;
    }

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
