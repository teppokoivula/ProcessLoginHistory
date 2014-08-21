$(document).ready(function() {
    // index of environment (more) column
    var env_index = $('table.history thead th').length-1;
    // more/less links
    var more = $('span[data-term=more]').text();
    var less = $('span[data-term=less]').text();
    $('table.history tr').each(function() {
        $(this)
            .find('td:eq(' + env_index + ')')
                .addClass('user-agent')
                .wrapInner('<span></span>')
                .find('span')
                    .after('<a href="#" class="toggle-more">'+more+' <b>&or;</b></a>');
    });
    // more/less functionality
    $('table.history th:eq(' + env_index + ')').css('width', '100px');
    $('table.history td.user-agent a').toggle(function() {
        $(this)
            .html(less + ' <b>&and;</b>')
            .parents('tr:first')
                .addClass('open')
                .after('<tr class="more '+$(this).prev('span').find('#device-type td').text()+'-device"><td colspan="6"><div>'+$(this).prev('span').html()+'</div></td></tr>');
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
    $('table.history a.remove').live('click', function() {
        if (confirm(are_you_sure)) {
            var $link = $(this);
            $.get($(this).attr('href'), function(data) {
                data = $.parseJSON(data);
                if (data && !data.error) {
                    $($link).parents('tr:first').fadeOut('500');
                } else {
                    alert(remove_failed);
                }
            });
        }
        return false;
    });
    // hide extra info when ordering data
    $('table.history th.header').click(function() {
        $('table.history tr.open a.toggle-more').click();
    });
    // when data is filtered by id and only one row exists, show info by default
    var getp = window.location.search.replace("?", "");
    if (getp.substr(0,3) == "id=" && $('a.toggle-more').length == 1) {
        $('a.toggle-more').click();
    }
    // filter form autosubmit
    $('form#filters select, form#filters input').change(function() {
        this.form.submit();
    });
    // hide nonrelevant options in filter form
    if (
        $('form#filters select[name=username] option[selected]').attr('value') ||
        $('form#filters select[name=login_was_successful] option[selected]').attr('value') == 1
    ) {
        $('form#filters select[name=user_id]')
            .find('option:first')
                .attr('selected', 'selected')
                .end()
            .addClass('disabled')
            .attr('title', $('form#filters select[name=user_id]').attr('data-disabled-title'))
            .attr('disabled', 'disabled');
    }
    var $when = $('form#filters select[name=when]');
    if ($when.length && $when.attr('value') != "between") {
        $('form#filters .loginhistory-datepicker')
            .addClass('disabled')
            .attr('title', $('form#filters input[name=date_from]').attr('data-disabled-title'))
            .attr('disabled', 'disabled');
    }
    // datepicker
    $('.loginhistory-datepicker').each(function() {
        var options = {
            dateFormat: $(this).attr('data-dateformat'),
            minDate: $(this).attr('data-mindate'),
            maxDate: $(this).attr('data-maxdate')
        };
        $(this).datepicker(options);
    });
});
