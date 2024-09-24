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
                const waktuSholatLink = document.getElementById('waktu-sholat-link');
                const sibLink = document.getElementById('sib-link');
                const vmtLink = document.getElementById('vmt-link');
                const wsPolinusLink = document.getElementById('ws-polinus-link');
                const dosenLink = document.getElementById('dosen-link');

                // Cek apakah URL saat ini mengandung 'index.html' untuk menambahkan class 'active'
                if (currentURL.includes('waktu-sholat.html')) {
                    waktuSholatLink.classList.add('active');
                } else if (currentURL.includes('sib.html')) {
                    sibLink.classList.add('active');
                } else if (currentURL.includes('vmt.html')) {
                    vmtLink.classList.add('active');
                } else if (currentURL.includes('ws.html')) {
                    wsPolinusLink.classList.add('active');
                } else if (currentURL.includes('dosen.html')) {
                    dosenLink.classList.add('active');
                } else {
                    waktuSholatLink.classList.add('active');
                }
            } else {
                console.error("Sidebar container not found");
            }


            // Sidebar

            const searchSidebar = document.getElementById('searchSidebar')
            const Items = document.querySelectorAll('#navbarItem li');

            searchSidebar.addEventListener('input', function () {
                console.log('ok');
                const query = searchSidebar.value.toLowerCase();

                Items.forEach(item => {
                    // Ambil semua teks dari elemen dalam card
                    const textContent = item.textContent.toLowerCase();

                    // Tampilkan atau sembunyikan item berdasarkan pencarian
                    if (textContent.includes(query)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
