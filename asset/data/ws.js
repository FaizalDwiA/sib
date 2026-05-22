/**
 * ws.js — Data & Render Website + Sosmed Polinus
 * Faizal Dwi Al Farizi
 */

const websiteData = {
    resmi: [{
            nama: "Polinus",
            url: "https://www.poltekindonusa.ac.id/",
            urlShort: "poltekindonusa.ac.id",
            deskripsi: "Politeknik Indonusa Surakarta",
            icon: "fas fa-graduation-cap",
            theme: "wc-blue",
        },
        {
            nama: "Polinus Payment",
            url: "https://sikeu.poltekindonusa.ac.id",
            urlShort: "sikeu.poltekindonusa.ac.id",
            deskripsi: "Sistem Keuangan Mahasiswa",
            icon: "fas fa-credit-card",
            theme: "wc-green",
        },
        {
            nama: "Informasi Akademik",
            url: "https://akademik.poltekindonusa.ac.id",
            urlShort: "akademik.poltekindonusa.ac.id",
            deskripsi: "Kalender & Info Akademik",
            icon: "fas fa-calendar-alt",
            theme: "wc-orange",
        },
        {
            nama: "Siakad Polinus",
            url: "https://siakadv2.poltekindonusa.ac.id",
            urlShort: "siakadv2.poltekindonusa.ac.id",
            deskripsi: "Sistem Informasi Akademik",
            icon: "fas fa-chalkboard-teacher",
            theme: "wc-slate",
        },
    ],
    sosmed: [{
            nama: "Facebook",
            url: "https://www.facebook.com/share/D7BSWbPEFoqxoesL/?mibextid=qi2Omg",
            urlShort: "facebook.com/poltekindonusa",
            deskripsi: "@poltek_indonusa",
            icon: "fab fa-facebook-f",
            theme: "wc-fb",
        },
        {
            nama: "TikTok",
            url: "https://www.tiktok.com/@poltek_indonusa",
            urlShort: "tiktok.com/@poltek_indonusa",
            deskripsi: "@poltek_indonusa",
            icon: "fab fa-tiktok",
            theme: "wc-tiktok",
        },
        {
            nama: "Instagram",
            url: "https://www.instagram.com/poltek_indonusa",
            urlShort: "instagram.com/poltek_indonusa",
            deskripsi: "@poltek_indonusa",
            icon: "fab fa-instagram",
            theme: "wc-ig",
        },
    ],
};

function buildWsCard(item, delay) {
    return `
	<div class="col-lg-6 col-12">
		<a href="${item.url}" target="_blank" rel="noopener"
			class="ws-card ${item.theme}" style="animation-delay:${delay}ms">
			<div class="ws-card-head">
				<div class="ws-icon-box"><i class="${item.icon}"></i></div>
				<div class="ws-card-head-text">
					<h4>${item.nama}</h4>
					<span class="ws-url">${item.urlShort}</span>
				</div>
				<span class="ws-ext-icon"><i class="fas fa-external-link-alt"></i></span>
			</div>
			<div class="ws-card-foot">
				<span>${item.deskripsi}</span>
				<i class="fas fa-arrow-right"></i>
			</div>
		</a>
	</div>`;
}

function renderWebsite() {
    let delay = 40;

    const resmiRow = document.getElementById('ws-resmi-row');
    if (resmiRow) {
        resmiRow.innerHTML = websiteData.resmi.map(item => {
            const html = buildWsCard(item, delay);
            delay += 50;
            return html;
        }).join('');
    }

    const sosmedRow = document.getElementById('ws-sosmed-row');
    if (sosmedRow) {
        sosmedRow.innerHTML = websiteData.sosmed.map(item => {
            const html = buildWsCard(item, delay);
            delay += 50;
            return html;
        }).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderWebsite);