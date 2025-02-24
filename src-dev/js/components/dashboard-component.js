import { LitElement, html, css } from "lit";

class DashboardComponent extends LitElement {
  static styles = css`
    .container {
      margin-top: 1rem;
    }
    .btn-primary {
      display: flex;
      align-items: center;
    }
    .fa-plus {
      margin-right: 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="container mt-4 content">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="m-0">Dashboard</h1>
          <a href="AddStory.html" class="btn btn-primary btn-lg text-white">
            <i class="fa-solid fa-plus me-2 text-white"></i> Tambah Story
          </a>
        </div>
        <div class="row" id="story-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("dashboard-component", DashboardComponent);
