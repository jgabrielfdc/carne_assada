$(document).ready(function(){
        let lista_clientes=[];
        $("#clientes div ul").children().each(function(){
                let cliente=$(this).parent().parent().attr("id")
                lista_clientes.push(cliente);
                lista_clientes[cliente]=[];
                lista_clientes[cliente].push($(this).attr("id"));
       })
       console.log(lista_clientes);
})