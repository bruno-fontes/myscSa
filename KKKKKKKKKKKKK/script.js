$(document).ready(function(){
    $('#inputPessoal').change(function(){
        let input = $(this).val();
        $('#ulPessoal').append('<li>' + input + '<i class="fas fa-edit"></i> <i class="fas fa-thumbtack"></i> <i class="fas fa-check"></i> <i class="fas fa-ban"></i> </li>');
        $(this).val('');
    });
    $('#inputTrabalho').change(function(){
        let input = $(this).val();
        $('#ulTrabalho').append('<li>' + input + '<i class="fas fa-edit"></i> <i class="fas fa-thumbtack"></i> <i class="fas fa-check"></i> <i class="fas fa-ban"></i> </li>');
        $(this).val('');
    });
    $('#inputEstudo').change(function(){
        let input = $(this).val();
        $('#ulEstudo').append('<li>' + input + '<i class="fas fa-edit"></i> <i class="fas fa-thumbtack"></i> <i class="fas fa-check"></i> <i class="fas fa-ban"></i> </li>');
        $(this).val('');
    });
});
$('ul').on('click', '.fa-ban', function(){
    $(this).parent('li').fadeOut(200);
});
$('ul').on('click', '.fa-check', function(){
    $(this).parent('li').toggleClass('confirmado');
    $(this).parent('li').removeClass('pinado');
});
$('ul').on('click', '.fa-thumbtack', function(){
    $(this).parent('li').toggleClass('pinado');
    $(this).parent('li').removeClass('confirmado');
}) 
$('#ulPessoal').on('click', '.fa-edit', function(){
   $('#inputPessoal').val($(this).parent('li').text());
   $(this).parent('li').fadeOut(200);
}) 
$('#navPessoal').on('click',function(){
    $('#pessoal').css("display", "block")
    $('#trabalho').css("display", "none")
    $('#estudo').css("display", "none")
    $('#navPessoal').toggleClass('selecionado')
    $('#navTrabalho').removeClass('selecionado')
    $('#navEstudo').removeClass('selecionado')
})
$('#navTrabalho').on('click',function(){
    $('#pessoal').css("display", "none")
    $('#trabalho').css("display", "block")
    $('#estudo').css("display", "none")
    $('#navPessoal').removeClass('selecionado')
    $('#navTrabalho').toggleClass('selecionado')
    $('#navEstudo').removeClass('selecionado')
})
$('#navEstudo').on('click',function(){
    $('#pessoal').css("display", "none")
    $('#trabalho').css("display", "none")
    $('#estudo').css("display", "block")
    $('#navPessoal').removeClass('selecionado')
    $('#navTrabalho').removeClass('selecionado')
    $('#navEstudo').toggleClass('selecionado')
})