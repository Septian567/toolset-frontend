import { LitElement, html, css } from "lit";

class EditProfileModal extends LitElement {
  static styles = css`
    .modal-body {
      display: flex;
      flex-direction: column;
    }
    .form-label {
      margin-top: 10px;
    }
  `;

  static properties = {
    name: { type: String },
    hobby: { type: String },
    job: { type: String },
    field: { type: String },
  };

  constructor() {
    super();
    this.name = "";
    this.hobby = "";
    this.job = "";
    this.field = "";
  }

  firstUpdated() {
    const savedProfile = JSON.parse(localStorage.getItem("profileData")) || {};
    this.name = savedProfile.name || "";
    this.hobby = savedProfile.hobby || "";
    this.job = savedProfile.job || "";
    this.field = savedProfile.field || "";
  }

  updateValue(e) {
    this[e.target.id] = e.target.value;
  }

  render() {
    return html`
      <div class="modal-body">
        <label class="form-label">Nama</label>
        <input
          type="text"
          id="name"
          class="form-control"
          .value="${this.name}"
          @input="${this.updateValue}"
        />
        <label class="form-label">Hobi</label>
        <input
          type="text"
          id="hobby"
          class="form-control"
          .value="${this.hobby}"
          @input="${this.updateValue}"
        />
        <label class="form-label">Pekerjaan</label>
        <input
          type="text"
          id="job"
          class="form-control"
          .value="${this.job}"
          @input="${this.updateValue}"
        />
        <label class="form-label">Bidang Kerja</label>
        <input
          type="text"
          id="field"
          class="form-control"
          .value="${this.field}"
          @input="${this.updateValue}"
        />
      </div>
    `;
  }
}

customElements.define("edit-profile-modal", EditProfileModal);
