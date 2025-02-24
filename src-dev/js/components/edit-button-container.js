import { LitElement, html, css } from "lit";

class EditButtonContainer extends LitElement {
  static styles = css`
    .edit-btn-container {
      display: flex;
      gap: 10px;
    }

    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
    }
  `;

  constructor() {
    super();
    this.addEventListener("click", this._handleClick);
  }

  createRenderRoot() {
    return this; // Menggunakan Light DOM, bukan Shadow DOM
  }

  render() {
    return html`
      <div class="edit-btn-container">
        <button
          class="icon-btn"
          @click="${this._triggerFileUpload}"
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
        <input
          type="file"
          id="uploadImage"
          class="d-none"
          accept="image/*"
          @change="${this._changeProfileImage}"
        />
      </div>
    `;
  }

  _triggerFileUpload() {
    this.querySelector("#uploadImage").click();
  }

  _changeProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const profileImage = document.getElementById("profileImage");
        if (profileImage) {
          profileImage.src = e.target.result;
          localStorage.setItem("profileImage", e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }
}

customElements.define("edit-button-container", EditButtonContainer);
