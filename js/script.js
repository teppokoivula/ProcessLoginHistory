$(document).ready(function() {
    // more/less links
    var more = $('span[data-term=more]').text();
    var less = $('span[data-term=less]').text();
    $('table.login-history tr').each(function() {
        $(this)
            .find('td:eq(4)')
                .addClass('user-agent')
                .wrapInner('<span></span>')
                .find('span')
                    .after('<a href="#" class="toggle-more">'+more+' <b>&or;</b></a>');
    });
    // more/less functionality
    $('table.login-history th:eq(4)').css('width', '100px');
    $('table.login-history td.user-agent a').toggle(function() {
        $(this)
            .html(less + ' <b>&and;</b>')
            .parents('tr:first')
                .addClass('open')
                .after('<tr class="more '+$(this).prev('span').find('#device-type td').text()+'-device"><td colspan="5"><div>'+$(this).prev('span').html()+'</div></td></tr>');
        return false;
    }, function() {
        $(this)
            .html(more + ' <b>&or;</b>')
            .parents('tr:first')
                .removeClass('open')
                .next('tr.more')
                    .remove();
        return false;
    });
    // remove link
    var are_you_sure = $('span[data-term=are_you_sure]').text();
    var remove_failed = $('span[data-term=remove_failed]').text();
    $('table.login-history a.remove').live('click', function() {
        if (confirm(are_you_sure)) {
            var $link = $(this);
            $.get($(this).attr('href'), function(data) {
                data = $.parseJSON(data);
                if (data && !data.error) {
                    $($link).parents('tr:first').addClass('removable').prev('tr').addClass('removable');
                    $('tr.removable').fadeOut('500');
                } else {
                    alert(remove_failed);
                }
            });
        }
        return false;
    });
    // hide extra info when ordering data
    $('table.login-history th.header').click(function() {
        $('table.login-history tr.open a.toggle-more').click();
    });
});