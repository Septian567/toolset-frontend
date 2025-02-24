import { LitElement, html, css } from "lit";

class ProfileComponent extends LitElement {
  static styles = css`
    .profile-card {
      max-width: 600px;
      margin: auto;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
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

  static properties = {
    name: { type: String },
    hobby: { type: String },
    job: { type: String },
    field: { type: String },
    profileImage: { type: String },
  };

  constructor() {
    super();
    this.name = "John Doe";
    this.hobby = "Fotografi, Membaca";
    this.job = "Software Engineer";
    this.field = "Pengembangan Web";
    this.profileImage = localStorage.getItem("profileImage") || "person.jpeg";
  }

  changeProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target.result;
        localStorage.setItem("profileImage", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    return html`
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-img-container">
            <img
              src="${this.profileImage}"
              alt="Foto Profil"
              class="profile-img"
            />
          </div>
          <div class="edit-btn-container">
            <button
              class="icon-btn"
              @click="${() =>
                this.shadowRoot.getElementById("uploadImage").click()}"
              title="Ganti Foto"
            >
              <i class="fas fa-camera"></i>
            </button>
          </div>
        </div>
        <input
          type="file"
          id="uploadImage"
          class="d-none"
          accept="image/*"
          @change="${this.changeProfileImage}"
        />
        <div class="profile-description">
          <h3>${this.name}</h3>
          <p><strong>Hobi:</strong> ${this.hobby}</p>
          <p><strong>Pekerjaan:</strong> ${this.job}</p>
          <p><strong>Bidang Kerja:</strong> ${this.field}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("profile-component", ProfileComponent);