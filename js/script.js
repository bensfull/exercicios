$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-00')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            telefone:{
                required: true
            },
            email:{
                required: true
            },
            endereco:{
                required: true
            },
            cpf:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            nome:'Por favor insira seu Nome',

            telefone:'Digite seu Telefone',

            cpf:'Digite seu CPF',

            cep:'Digite seu CEP',

            email:'Digite seu E-mail',

            endereco:'Digite seu Endereço'
        }
    })
})

