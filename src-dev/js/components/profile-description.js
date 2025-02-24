import { LitElement, html, css } from "lit";

class ProfileDescription extends LitElement {
  static styles = css`
    .profile-description {
      margin-top: 20px;
      margin-left: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    td {
      padding: 8px;
      border: 1px solid #ddd;
    }
    td:first-child {
      font-weight: bold;
      text-align: left;
    }
    td:nth-child(2) {
      text-align: center;
      width: 10px;
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
    this.name = "John Doe";
    this.hobby = "Fotografi, Membaca";
    this.job = "Software Engineer";
    this.field = "Pengembangan Web";
  }

  createRenderRoot() {
    return this; // Menghindari Shadow DOM
  }

  render() {
    return html`
      <div class="profile-description">
        <h3 id="name">${this.name}</h3>
        <table>
          <tr>
            <td>Hobi</td>
            <td>:</td>
            <td id="hobby">${this.hobby}</td>
          </tr>
          <tr>
            <td>Pekerjaan</td>
            <td>:</td>
            <td id="job">${this.job}</td>
          </tr>
          <tr>
            <td>Bidang Kerja</td>
            <td>:</td>
            <td id="field">${this.field}</td>
          </tr>
        </table>
      </div>
    `;
  }
}

customElements.define("profile-description", ProfileDescription);
