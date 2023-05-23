class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="flex-div">
        <div class="nav-left flex-div">
            <img src="images/logo-black.png" class="menu-icon")>
            <img src="images/favicon.jpg" class="logo">
        </div>
        <div class="nav-middle flex-div">
            <div class="search-box flex-div">
                <input type="text" placeholder="Search">
                <img src="images/favicon.jpg" alt="">
            </div>
            <img src="images/favicon.jpg" class="mic-icon">
        </div>
        <div class="nav-right flex-div">
            <img src="images/pic-person-01.jpg.jpg">
            <img src="images/pic-person-01.jpg.jpg">
            <img src="images/pic-person-01.jpg.jpg">
            <img src="images/pic-person-01.jpg.jpg" class="user-icon">
        </div>
    </nav>
    `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        `
    }
}

customElements.define('my-footer', MyFooter)