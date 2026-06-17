(function () {
    var btn = document.querySelector('.w-nav-button');
    var menu = document.querySelector('.w-nav-menu');

    if (!btn || !menu) return;

    function openMenu() {
        menu.setAttribute('data-nav-menu-open', '');
        btn.classList.add('w--open');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.removeAttribute('data-nav-menu-open');
        btn.classList.remove('w--open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
        if (btn.classList.contains('w--open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && btn.classList.contains('w--open')) {
            closeMenu();
        }
    });
}());
