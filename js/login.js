$(function() {

    // add viewport meta tag?
    if (!document.querySelector('meta[name="viewport"]')) {
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />');
    }

    // login form extra fields
    if (document.getElementById('ProcessLoginForm')) {
        $('form#ProcessLoginForm').append('<input type="hidden" name="javascript" value="1" />');
        $('form#ProcessLoginForm').append('<input type="hidden" name="screen" value="'+screen.width+'x'+screen.height+'" />');
        $('form#ProcessLoginForm').append('<input type="hidden" name="window" value="'+window.innerWidth+'x'+window.innerHeight+'" />');
    }
});
