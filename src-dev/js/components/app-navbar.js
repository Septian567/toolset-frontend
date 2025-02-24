import { LitElement, html, css } from "lit";

class AppNavbar extends LitElement {
  // Tidak perlu mendeklarasikan CSS karena kita akan menggunakan Light DOM

  // Menonaktifkan Shadow DOM
  createRenderRoot() {
    return this; // Merender langsung ke dalam Light DOM
  }

  render() {
    return html`
      <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
          <a href="index.html" class="btn btn-light">⬅ Kembali</a>
          <span class="navbar-brand mx-auto">Tambah Story</span>
        </div>
      </nav>
    `;
  }
}

customElements.define("app-navbar", AppNavbar);
