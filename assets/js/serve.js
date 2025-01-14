$(document).ready(function(){
        let lista_clientes=[];
        $("#clientes div ul").children().each(function(){
                let id=$(this).parent().parent().attr('id')
                let cliente='#'+id;
                lista_clientes.push(id);
                lista_clientes[id]=[];
                $(cliente+" ul").children().each(function(){
                        let pedido=$(this).attr("id");
                        lista_clientes[id].push(pedido);
                })
       })
})