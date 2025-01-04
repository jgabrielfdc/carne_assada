import 
function CaixaDeCarne(){
    this.carne;
}

CaixaDeCarne.prototype={
    adicionaCarne:function(){
        this.carne=document.createElement("img");
        carne=$(this.carne);

        carne.addClass("tamanho_carne");
        carne.css("cursor","pointer");
        carne.attr("id","carne_crua");
        carne.attr("src","assets/imgs/carne_crua.png");
        
        $("#chapa")
    }
}