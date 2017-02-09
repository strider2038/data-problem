$(document).ready(function() {
    var $value = $('.js-value');
    $value.text($value.data('value') || 0);
    $('.js-dec').click(function() {
        var v = parseInt($value.text()) - 1;
        $value.text(v);
        $value.attr('data-value', v);
    });
    $('.js-inc').click(function() {
        var v = parseInt($value.text()) + 1;
        $value.text(v);
        $value.attr('data-value', v);
    });
});