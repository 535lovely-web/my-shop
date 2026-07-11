(function () {
    var PAGE = document.body.dataset.page || '';

    var NAV_MAP = {
        'pastor':      { top: 'church-intro', sub: 'pastor' },
        'staff':       { top: 'church-intro', sub: 'staff' },
        'history':     { top: 'church-intro' },
        'people':      { top: 'church-intro' },
        'worship':     { top: 'church-intro' },
        'map':         { top: 'church-intro' },
        'sermon':      { top: 'sermon' },
        'new-family':  { top: 'education' },
        'nurture':     { top: 'education' },
        'kids':        { top: 'next-gen' },
        'youth':       { top: 'next-gen' },
        'news':        { top: 'news' },
    };

    function loadHTML(id, url) {
        return fetch(url)
            .then(function (r) { return r.text(); })
            .then(function (html) { document.getElementById(id).innerHTML = html; });
    }

    Promise.all([
        loadHTML('site-header', '/components/header.html'),
        loadHTML('site-footer', '/components/footer.html'),
    ]).then(function () {
        var toggle = document.getElementById('menuToggle');
        if (toggle) {
            toggle.addEventListener('click', function () {
                var nav = document.getElementById('mainNav');
                if (nav) nav.classList.toggle('open');
            });
        }

        var map = NAV_MAP[PAGE];
        if (map) {
            if (map.top) {
                var topItem = document.querySelector('[data-nav="' + map.top + '"]');
                if (topItem) topItem.classList.add('active');
            }
            if (map.sub) {
                var subLink = document.querySelector('[data-nav="' + map.sub + '"]');
                if (subLink) subLink.classList.add('active');
            }
        }
    });
})();
