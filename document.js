$(document).ready(function(){
    $('#col-md-6').click(function(){
        $('#col-md-6').fadeOut('slow');
    });

    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + "</div>")
    });
    $(document).on('click','.item',function(){
        $(this).remove();
    });


