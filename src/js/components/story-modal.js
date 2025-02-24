import { LitElement, html } from "lit";

class StoryModal extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    description: { type: String },
    date: { type: String },
    isOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.date = "";
    this.isOpen = false;
  }

  // Menonaktifkan Shadow DOM
  createRenderRoot() {
    return this;
  }

  // Fungsi untuk memformat tanggal
  formatDate(dateString) {
    if (!dateString) {
      return "Tanggal tidak tersedia"; // Pesan default jika tanggal tidak valid
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Tanggal tidak valid"; // Pesan default jika tanggal tidak valid
    }

    const options = {
      weekday: "long", // Nama hari (contoh: Senin)
      day: "numeric", // Tanggal (contoh: 1)
      month: "long", // Nama bulan (contoh: Agustus)
      year: "numeric", // Tahun (contoh: 2022)
    };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  }

  closeModal() {
    this.isOpen = false;
    this.dispatchEvent(new CustomEvent("close-modal", { bubbles: true }));
  }

  render() {
    return html`
      <!-- Modal Bootstrap -->
      <div
        class="modal ${this.isOpen ? "show" : ""}"
        tabindex="-1"
        style="display: ${this.isOpen
          ? "block"
          : "none"}; background: rgba(0, 0, 0, 0.5);"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${this.title}</h5>
              <button
                type="button"
                class="btn-close"
                @click="${this.closeModal}"
              ></button>
            </div>
            <div class="modal-body">
              <!-- Gambar Responsif -->
              <img
                src="${this.image}"
                alt="${this.title}"
                class="img-fluid rounded"
              />
              <p class="mt-3">${this.description}</p>
              <small class="text-muted">📅 ${this.formatDate(this.date)}</small>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("story-modal", StoryModal);
