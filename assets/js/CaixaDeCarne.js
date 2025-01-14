
class CaixaCarne{
}

CaixaCarne.prototype.adicionaCarne=function(){
    let carneObj=new Carne();
    let carne=$(carneObj.carne);   
        carne.addClass("tamanho_carne");
        carne.css("cursor","pointer");
        carne.attr("id","carne_crua");
        carne.attr("src","assets/imgs/carne_crua.png");
        carne.attr("onclick","chapa.tiraCarne('#carne_assada');");
        
    let chapa=$("#chapa")
        chapa.css("background","url('assets/imgs/Grelha/Grelha_on.png'");
        chapa.prepend(carne);
}


