const footerHTML = `
    <strong style="margin: auto;">Copyright &copy; 2025 
        <a href="https://faizaldwia.github.io/portofolio/index.html">Faizal Dwi Al Farizi</a>
    </strong>

    <!-- Back to Top -->
	<a href="#" class="back-to-top d-flex align-items-center justify-content-center" style="color: #fff !important; text-decoration: none !important">
		<i class="bi bi-arrow-up-short"></i>
	</a>
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