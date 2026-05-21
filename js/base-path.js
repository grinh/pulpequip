// Ustawia <base href> dla GitHub Pages (/nazwa-repo/) i lokalnie (/).
(function () {
    var existing = document.querySelector('base');
    if (existing) {
        existing.remove();
    }

    var base = document.createElement('base');
    var host = window.location.hostname;

    if (host.endsWith('.github.io')) {
        var segments = window.location.pathname.split('/').filter(Boolean);
        var repo = segments.length > 0 ? segments[0] : '';
        base.href = repo ? '/' + repo + '/' : '/';
    } else {
        base.href = '/';
    }

    document.head.insertBefore(base, document.head.firstChild);
})();
