class CaixaCarne{
    constructor(carne,temCarne){
        this.carne=$(carne.carne);
    }
}

CaixaCarne.prototype.adicionaCarne=function(){
    let carne=this.carne;   
        carne.addClass("tamanho_carne");
        carne.css("cursor","pointer");
        carne.attr("id","carne_crua");
        carne.attr("src","assets/imgs/carne_crua.png");
        carne.attr("onclick","chapa.tiraCarne('#carne_assada');");
        
        $("#chapa").prepend(carne);
}


