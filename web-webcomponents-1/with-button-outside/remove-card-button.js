class RemoveCardButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Remove button added to page.");
    this.render();
  }

  disconnectedCallback() {
    console.log("Remove button removed from page.");
  }

  render() {
    const targetId = this.getAttribute("target-id");
    const label = this.getAttribute("label");

    this.shadowRoot.innerHTML = `
      <style>
        button {
          margin-top: 10px;
          padding: 10px 16px;
          background-color: #ef233c;
          color: white;
          border: none;
          border-radius: 6px;
          font-family: Arial, sans-serif;
          font-weight: bold;
        }

        button:hover {
          background-color: #c9182d;
        }
      </style>

      <button>${label}</button>
    `;

    const button = this.shadowRoot.querySelector("button");

    button.addEventListener("click", () => {
      const card = document.getElementById(targetId);

      if (card) {
        card.remove();
        this.remove();
      }
    });
  }
}

customElements.define("remove-card-button", RemoveCardButton);
