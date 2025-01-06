class CaixaCarne{
    constructor(carne){
        this.carne=carne;
    }
}

CaixaCarne.prototype={
    adicionaCarne:function(){
        this.carne=
        carne=$(this.carne);

        carne.addClass("tamanho_carne");
        carne.css("cursor","pointer");
        carne.attr("id","carne_crua");
        carne.attr("src","assets/imgs/carne_crua.png");
        
        $("#chapa").prepend(carne);
    }
}

