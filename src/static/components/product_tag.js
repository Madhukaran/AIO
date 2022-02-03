class Header extends HTMLElement {
    get open() {
        return this.hasAttribute('open');
    }
    constructor() {
        super();
        this.headerTemplate = document.createElement('template');
        this.headerTemplate.style.cssText = `
        .product_tag {
            display: flex;
            flex-direction: row;
        }
        .product_icon {
            padding: 5px;
        }
        .product_title {
            margin: auto;
            margin-left: 0;
        }
        `;
        this.headerTemplate.innerHTML = `
        <div class="product_tag">
            <div class="content-wrapper">
                <div class="product_icon">
                    <img src="../static/images/behance.svg" alt="behance">
                </div>
                <div class="product_title">
                    <h3>${this.product_title}</h3>
                </div>
            </div>
        </div>
        `
    }

    connectedCallback() {
        this.product_title = this.getAttribute('product_title');
        // alert(this.product_title)
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.headerTemplate.content);
    }
}

customElements.define('header-component', Header);