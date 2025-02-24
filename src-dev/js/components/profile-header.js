import { LitElement, html, css } from "lit";

class ProfileHeader extends LitElement {
  createRenderRoot() {
    return this; // Menggunakan light DOM
  }

  static styles = css`
    .profile-header {
      display: flex;
      align-items: flex-end;
      gap: 15px;
    }
    .profile-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 2px solid black;
    }
    .profile-img-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .edit-btn-container {
      display: flex;
      align-items: flex-end;
      gap: 10px;
    }
    .icon-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #007bff;
      cursor: pointer;
      transition: color 0.3s;
    }
    .icon-btn:hover {
      color: #0056b3;
    }
  `;

  constructor() {
    super();
    this.profileImage = localStorage.getItem("profileImage") || "person.jpeg";
  }

  handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target.result;
        localStorage.setItem("profileImage", this.profileImage);
        this.requestUpdate();
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    return html`
      <div class="profile-header">
        <div class="profile-img-container">
          <img
            id="profileImage"
            src="${this.profileImage}"
            alt="Foto Profil"
            class="profile-img"
          />
        </div>
        <div class="edit-btn-container">
          <button
            class="icon-btn"
            @click="() => this.shadowRoot.getElementById('uploadImage').click()"
            title="Ganti Foto"
          >
            <i class="fas fa-camera"></i>
          </button>
          <button
            class="icon-btn"
            data-bs-toggle="modal"
            data-bs-target="#editProfileModal"
            title="Edit Profile"
          >
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
      <input
        type="file"
        id="uploadImage"
        class="d-none"
        accept="image/*"
        @change="${this.handleImageUpload}"
      />
    `;
  }
}

customElements.define("profile-header", ProfileHeader);
