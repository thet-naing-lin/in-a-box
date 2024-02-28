class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-dark sticky-top">

            <div class="container-fluid">
        
            <a href="./index.html" class="text-decoration-none text-dark navbar-brand fw-bold text-white">
                <i class="bi bi-box me-1 text-danger"></i>
                In A Box
            </a>
            <button class="navbar-toggler bg-white btn-danger" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
                <li class="nav-item">
                    <a href="./index.html" class="nav-link active text-white">Home</a>
                </li>
        
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link text-white dropdown-toggle" role="button" data-bs-toggle="dropdown">
                    Services &Products Offered</a>
        
                    <ul class="dropdown-menu">
                    <li><a href="./recipe.html" class="dropdown-item">Recipe Guide</a></li>
                    <li><a href="./bakeAtHomeSet.html" class="dropdown-item">Bake At Home Set</a></li>
                    <li><a href="./ingredient.html" class="dropdown-item">Ingredients</a></li>
                    <li class="nav-item dropend">
                        <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                        style="margin-left: 7px;color: black;">
                        Other Items</a>
        
                        <ul class="dropdown-menu">
                        <li><a href="./mealPlanner.html" class="dropdown-item">Meal Planner</a></li>
                        <li><a href="./nutritionalApp.html" class="dropdown-item">Nutritional Information App</a></li>
                        <li><a href="./weeklymenu.html" class="dropdown-item">Weekly Recipes Choice</a></li>
                        <li><a href="./giftBox.html" class="dropdown-item">Gift Box</a></li>
        
                        </ul>
        
                    </ul>
                </li>
        
                <li class="nav-item">
                    <a href="./packageOffered.html" class="nav-link text-white">Packages Offered</a>
                </li>
        
                <li class="nav-item">
                    <a href="./contactUs.html" class="nav-link text-white">Contact Us</a>
                </li>
        
                </ul>
        
                <ul class="navbar-nav mb-2 mb-lg-0">
                <li>
                    <a href="./login.html" class="nav-item"><button type="button"
                        class="btn btn-outline-success text-white mx-lg-2 mb-2">Login</button></a>
                </li>
                <li>
                    <a href="./signup.html" class="nav-item">
                    <button type="button" class="btn btn-outline-success text-white">Sign
                        Up</button></a>
                </li>
                </ul>
        
            </div>
        
            </div>
        
        </nav>
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div class="footer border-top border-success border-4 py-3 mt-5 bg-secondary-subtle">
            <div class="row">
            <div class="col-lg-4 text-center mt-5">
                <h4>About In A Box</h4>
                <div class="d-flex flex-column">
                <a href="./contactUs.html" class="text-decoration-none text-muted my-3">Our Story</a>
                <a href="./contactUs.html" class="text-decoration-none text-muted mt-2">How it work?</a>
                </div>
            </div>
            <div class="col-lg-4 text-center mt-5">
                <h4>Contact Us</h4>
                <div class="d-flex flex-column">
                <a href="tel:+959762710957" class="text-decoration-none text-muted my-3"><i class="fa-solid fa-phone pe-2"></i>
                    +959762710957</a>
                <a href="mailto:info@inabox.com" class="text-decoration-none text-muted mt-2"><i class="fa-solid fa-envelope pe-3"></i>
                    info@inabox.com</a>
                </div>
            </div>
            <div class="col-lg-4 text-center mt-5">
                <h4>Join Our Community</h4>
                <div class="d-flex flex-row justify-content-evenly fs-3 mt-4">
                <a href="https://www.facebook.com/?stype=lo&jlou=Affs6QGRZOaFq1n1RcyQLnpnDVLXw312U-WZLociRxBHgxuOwp3hHS5lSDGqTbcWMKVbSKgm2vMP2DSm2M6JvQmskXhsv7oQ7Rdz-d6RlQL-jA&smuh=30767&lh=Ac-ZjwsGxj35eHd6Eps"
                    target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/accounts/login/" target="_blank"><i class="fa-brands fa-instagram"
                    style="color: #d94571;"></i></a>
                <a href="https://twitter.com/?lang=en" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"
                    style="color: #e70d2b;"></i></a>
                </div>
            </div>
            </div>
        </div>
        `
    }
}

customElements.define('my-footer', MyFooter);
