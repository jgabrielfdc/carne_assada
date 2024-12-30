$(document).ready(function(){
    function temCarne(){
        let temCarne;

        if($("#chapa")[0].children.length<2){
            temCarne=true;
        }else{
            temCarne=false;
        }

        return temCarne;
    }

    

    $("#fonte_carne").on("click",function(){
        if(temCarne()){


                // Cria um elemento para representar a carne
                let carne=document.createElement("img")

                $(carne).addClass("tamanho_carne")
                $(carne).css("cursor","pointer");
                $(carne).attr("id","carne_crua");
                $(carne).attr("src","assets/imgs/carne_crua.png");
                $("#chapa").prepend($(carne));
                
                // Seta o timer inicial
                let segundos=5;
                $("#timer").html("00:0"+segundos)
                
                    let timer=setInterval(function () {
                        if(segundos>1){
                            segundos-=1;
                            $("#timer").html("00:0"+segundos)
                        }else{
                            $("#timer").html("00:00")
                            let idItemChapa=$("#chapa")[0].children[0].id="carne_assada";

                            if(temCarne() && $("#chapa")[0].children[0].id=="carne_crua"){
                                $("#"+idItemChapa).attr("id","carne_assada");
                                $("#timer").html("00:00");
                            }
                            $("#carne_assada")[0].src="assets/imgs/carne_assada.png"; 
                            clearInterval(timer);
                        }
                    }, 1000);
                
            }
    })
   
    $("#carne_assada").ready(function(){
        $("#timer").on("click",function(){
        
            $("#prato").prepend($("#carne_assada"));
            $("#timer").html("");
            
        })
    })
    
})