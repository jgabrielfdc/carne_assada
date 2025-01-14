$(document).ready(function(){
        var lista_clientes=[];
        $("#clientes div ul").children().each(function(){
                let id=$(this).parent().parent().attr('id')
                let cliente='#'+id;
                let h4=document.createElement("h4");
                let li=document.createElement("li");
                let ul=document.createElement("ul");
                h4.innerHTML=id;
                $(li).append(h4)              
                $(li).append(ul)              
                lista_clientes.push(id);
                lista_clientes[id]=[];
                
                $(cliente+" ul").children().each(function(){
                        
                        let pedido=$(this).attr("id");
                        lista_clientes[id].push(pedido);
                })
                $("#lista_pedidos").append(li);
       })
       console.log(lista_clientes)
})