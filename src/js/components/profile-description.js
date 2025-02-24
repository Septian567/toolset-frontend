import { LitElement, html } from "lit";

class ProfileDescription extends LitElement {
  static properties = {
    name: { type: String },
    hobby: { type: String },
    job: { type: String },
    field: { type: String },
  };

  constructor() {
    super();
    // Nilai default jika tidak ada data di local storage
    this.name = "John Doe";
    this.hobby = "📷 Fotografi, 📖 Membaca";
    this.job = "💻 Software Engineer";
    this.field = "🌐 Pengembangan Web";
  }

  // Menonaktifkan Shadow DOM
  createRenderRoot() {
    return this;
  }

  // Metode untuk memuat data dari local storage
  loadProfile() {
    const profileData = JSON.parse(localStorage.getItem("profileData")) || {};
    this.name = profileData.name || this.name;
    this.hobby = profileData.hobby || this.hobby;
    this.job = profileData.job || this.job;
    this.field = profileData.field || this.field;
  }

  // Memuat data saat komponen pertama kali di-render
  firstUpdated() {
    this.loadProfile();
  }

  render() {
    return html`
      <div class="card shadow-sm">
        <div class="card-body">
          <!-- Header Profil -->
          <div class="d-flex align-items-center mb-4">
            <i class="bi bi-person-circle fs-3 me-3 text-primary"></i>
            <h4 class="card-title mb-0">${this.name}</h4>
          </div>

          <!-- Tabel Informasi Profil -->
          <table class="table">
            <tbody>
              <tr>
                <td class="d-flex align-items-center">
                  <i class="bi bi-heart-fill me-2 text-primary"></i>
                  Hobi
                </td>
                <td>:</td>
                <td>${this.hobby}</td>
              </tr>
              <tr>
                <td class="d-flex align-items-center">
                  <i class="bi bi-briefcase-fill me-2 text-primary"></i>
                  Pekerjaan
                </td>
                <td>:</td>
                <td>${this.job}</td>
              </tr>
              <tr>
                <td class="d-flex align-items-center">
                  <i class="bi bi-code-slash me-2 text-primary"></i>
                  Bidang Kerja
                </td>
                <td>:</td>
                <td>${this.field}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

customElements.define("profile-description", ProfileDescription);
