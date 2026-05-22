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

<!-- Right navbar -->
<ul class="navbar-nav ml-auto">
    <li class="nav-item d-flex align-items-center pr-3">
        <span id="network-indicator" style="
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
            transition: all 0.3s ease;
        ">
            <span id="network-dot" style="
                width: 8px;
                height: 8px;
                border-radius: 50%;
                display: inline-block;
                transition: background 0.3s;
            "></span>
            <span id="network-label"></span>
        </span>
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

injectHTML('#navbar', navbarHTML, function () {

    let isOnline = true;
    let pingInterval = null;

    function setStatus(online) {
        // Hindari re-render jika status tidak berubah
        if (online === isOnline && document.getElementById('network-label').textContent !== '') return;
        isOnline = online;

        const indicator = document.getElementById('network-indicator');
        const dot = document.getElementById('network-dot');
        const label = document.getElementById('network-label');
        if (!indicator) return;

        if (online) {
            indicator.style.background = 'rgba(22, 163, 74, 0.12)';
            indicator.style.border = '1px solid rgba(22, 163, 74, 0.3)';
            dot.style.background = '#16a34a';
            dot.style.boxShadow = '0 0 6px rgba(22, 163, 74, 0.7)';
            label.style.color = '#15803d';
            label.textContent = 'Online';
        } else {
            indicator.style.background = 'rgba(220, 38, 38, 0.10)';
            indicator.style.border = '1px solid rgba(220, 38, 38, 0.3)';
            dot.style.background = '#dc2626';
            dot.style.boxShadow = '0 0 6px rgba(220, 38, 38, 0.6)';
            label.style.color = '#b91c1c';
            label.textContent = 'Offline';
        }
    }

    // Ping aktif — lebih reliable di WebView Android
    // Menggunakan endpoint API yang sudah dipakai di halaman ini
    function pingCheck() {
        const url = 'https://api.aladhan.com/v1/status?' + Date.now(); // cache-bust
        const timeout = 5000; // 5 detik

        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);

        fetch(url, {
                method: 'HEAD',
                signal: controller.signal,
                cache: 'no-store'
            })
            .then(() => {
                clearTimeout(timer);
                setStatus(true);
            })
            .catch(() => {
                clearTimeout(timer);
                setStatus(false);
            });
    }

    function startPing() {
        pingCheck(); // langsung cek pertama kali
        pingInterval = setInterval(pingCheck, 10000); // cek tiap 10 detik
    }

    // Event browser (tetap dipasang sebagai trigger cepat)
    window.addEventListener('online', () => pingCheck());
    window.addEventListener('offline', () => setStatus(false));

    // Mulai
    startPing();
});