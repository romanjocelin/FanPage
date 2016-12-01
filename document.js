$(document).ready(function(){
    $('#ok').click(function(){
        $('#ok').fadeOut('slow');
    });
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + "</div>")
    });
    $(document).on('click','.item',function(){
        $(this).remove();
    });
});

