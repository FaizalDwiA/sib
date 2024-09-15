document.addEventListener("DOMContentLoaded", function () {
    fetch('../layout/sidebar.html')  // Pastikan path benar
        .then(response => response.text())
        .then(data => {
            const sidebarContainer = document.getElementById('sidebar-container');
            if (sidebarContainer) {
                sidebarContainer.innerHTML = data;
                // Mendapatkan URL halaman saat ini
                const currentURL = window.location.href;

                // Mendapatkan elemen link sidebar
                const sibLink = document.getElementById('sib-link');
                const vmtLink = document.getElementById('vmt-link');
                const websitePolinusLink = document.getElementById('website-polinus-link');

                // Cek apakah URL saat ini mengandung 'index.html' untuk menambahkan class 'active'
                if (currentURL.includes('index.html')) {
                    sibLink.classList.add('active');
                } else if (currentURL.includes('vmt.html')) {
                    vmtLink.classList.add('active');
                } else if (currentURL.includes('website-polinus.html')) {
                    websitePolinusLink.classList.add('active');
                } else {
                    sibLink.classList.add('active');
                }
            } else {
                console.error("Sidebar container not found");
            }
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
