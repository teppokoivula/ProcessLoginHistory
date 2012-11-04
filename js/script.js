$(document).ready(function() {
    // more/less links
    $('table.login-history tr').each(function() {
        $(this)
            .find('td:eq(3)')
                .addClass('user-agent')
                .wrapInner('<span></span>')
                .find('span')
                    .after('<a href="#" class="toggle-more">more <b>&or;</b></a>');
    });
    // more/less functionality
    $('table.login-history td.user-agent a').toggle(function() {
        $(this)
            .html('less <b>&and;</b>')
            .parents('tr:first')
                .addClass('open')
                .after('<tr class="more '+$(this).prev('span').find('#device-type td').text()+'-device"><td colspan="4"><div>'+$(this).prev('span').html()+'</div></td></tr>');
        return false;
    }, function() {
        $(this)
            .html('more <b>&or;</b>')
            .parents('tr:first')
                .removeClass('open')
                .next('tr.more')
                    .remove();
        return false;
    });
    // hide extra info when ordering data
    $('table.login-history th.header').click(function() {
        $('table.login-history tr.open a.toggle-more').click();
    });
});