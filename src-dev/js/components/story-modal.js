import { LitElement, html, css } from "lit";

class StoryModal extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    description: { type: String },
    date: { type: String },
    isOpen: { type: Boolean },
  };

  static styles = css`
    .modal {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      justify-content: center;
      align-items: center;
    }

    .modal.show {
      display: flex;
    }

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      max-width: 500px;
      width: 90%;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      font-size: 1.5rem;
    }

    .modal-body img {
      width: 100%;
      border-radius: 8px;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 3rem;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.date = "";
    this.isOpen = false;
  }

  closeModal() {
    this.isOpen = false;
    this.dispatchEvent(new CustomEvent("close-modal", { bubbles: true }));
  }

  render() {
    return html`
      <div class="modal ${this.isOpen ? "show" : ""}">
        <div class="modal-content">
          <div class="modal-header">
            <h5>${this.title}</h5>
            <button class="close-btn" @click="${this.closeModal}">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <img src="${this.image}" alt="${this.title}" />
            <p>${this.description}</p>
            <small class="text-muted"
              >📅 ${new Date(this.date).toLocaleDateString()}</small
            >
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("story-modal", StoryModal);
