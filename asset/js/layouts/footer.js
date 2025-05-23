const footerHTML = `
<div class="float-right d-none d-sm-block">
    <b>Version</b> 1.0.0
</div>
<strong>Copyright &copy; 2025 <a href="https://faizaldwia.github.io/portofolio/index.html">Faizal Dwi Al
        Farizi</a>.</strong> All rights
reserved.
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

injectHTML('#footer', footerHTML);