const sidebarHTML = `
<!-- Brand Logo -->
<a href="waktu_sholat.html" class="brand-link">
    <img src="../asset/img/logo/sib.webp" alt="TRPL B" class="brand-image img-circle bg-white elevation-3"
        style="opacity: .8">
    <span class="brand-text font-weight-light">TRPL B</span>
</a>

<!-- Sidebar -->
<div class="sidebar">
    <!-- Sidebar user (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
            <img src="../asset/img/logo/sib.webp" class="img-circle bg-white elevation-2" alt="User Image">
        </div>
        <div class="info">
            <a href="sib.html" class="d-block">Faizal Dwi Al Farizi</a>
        </div>
    </div>

    <!-- SidebarSearch Form -->
    <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
                <button class="btn btn-sidebar">
                    <i class="fas fa-search fa-fw"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library -->
            <li class="nav-item">
                <a href="waktu_sholat.html" class="nav-link" id="waktu_sholat">
                    <i class="nav-icon fas fa-mosque"></i>
                    <p>
                        Waktu Sholat
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="sib.html" class="nav-link" id="sib">
                    <i class="nav-icon fas fa-users"></i>
                    <p>
                        SIB
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="vmt.html" class="nav-link" id="vmt">
                    <i class="nav-icon fas fa-bullseye"></i>
                    <p>
                        VMT D4
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="dosen.html" class="nav-link" id="dosen">
                    <i class="nav-icon fas fa-chalkboard-teacher"></i>
                    <p>
                        Dosen
                    </p>
                </a>
            </li>
            <li class="nav-item">
                <a href="ws.html" class="nav-link" id="ws">
                    <i class="nav-icon fas fa-globe"></i>
                    <p>
                        Website
                    </p>
                </a>
            </li>
            <li class="nav-item bg-danger">
                <a href="#" class="nav-link">
                    <i class="nav-icon fa fa-sign-out-alt"></i>
                    <p>
                        logout
                    </p>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
</div>
<!-- /.sidebar -->
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

injectHTML('#sidebar', sidebarHTML, function () {
    const url = window.location.href;
    let file = url.substring(url.lastIndexOf('/') + 1);
    if (file === '' || file.indexOf('.') === -1) {
        file = 'index';
    } else {
        file = file.split('.')[0];
    }

    const menuMap = {
        waktu_sholat: 'waktu_sholat',
        sib: 'sib',
        vmt: 'vmt',
        dosen: 'dosen',
        ws: 'ws'
    };

    if (menuMap[file]) {
        const target = document.getElementById(menuMap[file]);

        if (target) {
            target.classList.add('active');
        } else {
            console.warn(`Elemen dengan ID "${menuMap[file]}" tidak ditemukan.`);
        }
    }
});