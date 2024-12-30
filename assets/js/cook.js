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
                let carne=document.createElement("div")
                $("#timer").html("00:05")
                let segundos=5;
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
                            clearInterval(timer);
                        }
                    }, 1000);
                $(carne).addClass("bg-danger rounded-circle tamanho_carne")
                $(carne).css("cursor","pointer");
                $(carne).attr("id","carne_crua");
                $("#chapa").prepend($(carne));
            }
    })
   
    $("#carne_assada").ready(function(){
        $("#timer").on("click",function(){
        
            $("#prato").prepend($("#carne_assada"));
            $("#timer").html("");
            
        })
    })
    
})