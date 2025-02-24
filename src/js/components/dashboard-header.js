import { LitElement, html, css } from "lit";

class DashboardHeader extends LitElement {
  static styles = css`
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .btn-primary {
      display: flex;
      align-items: center;
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      border-radius: 5px;
      background-color: #007bff;
      border: none;
      cursor: pointer;
    }

    .btn-primary i {
      margin-right: 0.5rem;
    }

    .btn-primary:hover {
      background-color: #0056b3;
    }
  `;

  render() {
    return html`
      <div class="header-container">
        <h1 class="m-0">Dashboard</h1>
        <a href="AddStory.html" class="btn btn-primary">
          <i class="fa-solid fa-plus"></i> Tambah Story
        </a>
      </div>
    `;
  }
}

customElements.define("dashboard-header", DashboardHeader);
