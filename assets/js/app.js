var cards = $(".directory-item").not('.is-skeleton');
for (var i = 0; i < cards.length; i++) {
    var target = Math.floor(Math.random() * cards.length - 1) + 1;
    var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    cards.eq(target).before(cards.eq(target2));
}


$(".directory-filter :checkbox").change(function () {
    if ($(".directory-filter :checkbox:checked").length > 0) {
        $(".directory-item").not('.is-skeleton').hide();
        $(".directory-filter :checkbox:checked").each(function () {
            $(".directory-item." + $(this).val()).show();
        });
    } else {
        $(".directory-wrapper > div").show();
    }
});

lazyload();

$('#nominate .directory-filter input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 3) {
        $(this).prop('checked', false);
    }
});