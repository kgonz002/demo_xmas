console.log("hi there");

//Header and footer
class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <ul class="nav-links">
          <span class="image-clickable">
            <li>
              <a href="index.html">
                <img     
                  src="assets/images/logo.png"
                  alt="logo"
                  class="logo"
                />
              </a>
            </li>
          </span>
          <li><a href="about.html">about</a></li>
          <li><a href="shop.html">shop</a></li>
          <li><a href="list.html">my list</a></li>
        </ul>
      </header>`;
  }
}

customElements.define("cust-header", CustomHeader);

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>© Kimberly R. Gonzales 2022</p>
      </footer>
    `;
  }
}

customElements.define("cust-footer", CustomFooter);

//locomotive-scroll

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
