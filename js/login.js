(function() {

    var init = function() {

        // add viewport meta tag?
        if (!document.querySelector('meta[name="viewport"]')) {
            var meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1, maximum-scale=1';
            document.head.appendChild(meta);
        }

        // login form extra fields
        var form = document.getElementById('ProcessLoginForm');
        if (form) {
            var fields = {
                javascript: '1',
                screen: screen.width + 'x' + screen.height,
                window: window.innerWidth + 'x' + window.innerHeight
            };
            Object.keys(fields).forEach(function(name) {
                var input = document.createElement('input');
                input.type = 'hidden';
                input.name = name;
                input.value = fields[name];
                form.appendChild(input);
            });
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
