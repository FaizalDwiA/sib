const navbarHTML = `
<!-- Left navbar links -->
<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
        <a href="waktu_sholat.html" class="nav-link">Home</a>
    </li>
</ul>
`;

function injectHTML(selector, html, callback) {
    const target = document.querySelector(selector);
    if (target) {
        target.innerHTML = html;
        if (typeof callback === 'function') callback();
    } else {
        console.warn(`Selector "${selector}" tidak ditemukan.`);
    }
}

injectHTML('#navbar', navbarHTML);