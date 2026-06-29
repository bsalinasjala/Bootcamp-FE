class DeveloperCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    this.render();
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  render() {
    const cardTitle = this.getAttribute("card-title");
    const image = this.getAttribute("image");
    const role = this.getAttribute("role");

    this.shadowRoot.innerHTML = `
      <style>
        .card {
        width: 350px;
        background-color: #242424;
        border: 0.25rem solid black;
        font-family: Arial, sans-serif;
        text-align: center;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        }

        .logo {
        background-color: white;
        padding: 1.25rem;
        font-size: 3rem;
        font-weight: bold;
        color: #333333;
        }

        .logo span {
        color: #ef233c;
        }

        .content {
        padding: 2.2rem 1.8rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.2rem;
        }

        img {
        max-width: 70%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 25%;
        }

        h2 {
        color: white;
        font-size: 2.1rem;
        margin: 0;
        }

        .role {
        background-color: #ef233c;
        color: white;
        font-size: 2.25rem;
        font-weight: bold;
        padding: 1.1rem;
        }
      </style>

      <div class="card">
        <div class="logo">
          Jala<span>Soft</span>
        </div>

        <div class="content">
          <img src="${image}" alt="${cardTitle}">
          <h2>${cardTitle}</h2>
        </div>

        <div class="role">
          ${role}
        </div>
      </div>
    `;
  }
}

customElements.define("developer-card", DeveloperCard);
