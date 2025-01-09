Object.prototype.temCarne=
                function(id){
                    let qntdCarne=$(id)[0].children.length;
                    if(qntdCarne<2){
                        return true;
                    }else{
                        return false
                }
            }

$(document).ready(function(){
      $("#fonte_carne").on("click",function(){
                if(temCarne("#chapa")){
                    caixaCarne.adicionaCarne();
                    chapa.assaCarne();}
    });
})