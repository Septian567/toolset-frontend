import { LitElement, html, css } from "lit";

class StoryModal extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1050; /* Lebih tinggi dari header Bootstrap */
    }

    :host(.show) {
      display: flex;
    }

    .modal-dialog {
      background: white;
      width: 90%;
      max-width: 600px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      background: #007bff;
      color: white;
      padding: 15px;
    }

    .modal-body {
      padding: 15px;
      text-align: center;
    }

    .modal-footer {
      padding: 15px;
      text-align: right;
    }

    .btn-close {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }

    img {
      width: 100%;
      border-radius: 8px;
      max-height: 300px;
      object-fit: cover;
    }

    p {
      margin-top: 10px;
    }
  `;

  static properties = {
    title: { type: String },
    image: { type: String },
    description: { type: String },
    date: { type: String },
  };

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.date = "";
  }

  showModal(title, image, description, date) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.date = new Date(date).toLocaleDateString();
    this.classList.add("show"); // Tambahkan class show agar modal muncul
  }

  closeModal() {
    this.classList.remove("show"); // Hilangkan class show untuk menutup modal
  }

  render() {
    return html`
      <div class="modal-dialog" @click="${(e) => e.stopPropagation()}">
        <div class="modal-header">
          <h5>${this.title}</h5>
          <button class="btn-close" @click="${this.closeModal}">&times;</button>
        </div>
        <div class="modal-body">
          <img src="${this.image}" alt="${this.title}" />
          <p>${this.description}</p>
          <small class="text-muted">📅 ${this.date}</small>
        </div>
      </div>
    `;
  }
}

customElements.define("story-modal", StoryModal);
