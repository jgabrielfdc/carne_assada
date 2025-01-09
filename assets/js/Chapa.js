class Chapa{
    constructor(chapa,tempoCozimento){
        this.chapa=chapa;
        this.tempoCozimento=tempoCozimento;
    }
}

Chapa.prototype.assaCarne=function(){
        let tempoCozimento=this.tempoCozimento;
        $("#timer").html("00:0"+tempoCozimento);
       
        let timerCozinha=setInterval(function(){
            if(tempoCozimento>1){
                tempoCozimento-=1;
                $("#timer").html("00:0"+tempoCozimento);
            }else{
                $("#timer").html("00:00");
                let itemChapa=$(this.chapa)[0].children[0].id="carne_assada";
                
                 if(this.temCarne("#chapa") && itemChapa=="carne_assada"){
                    $("#"+itemChapa).attr("id","carne_assada");
                    $("#timer").html("00:00");
                 }
                 $("#carne_assada")[0].src="assets/imgs/carne_assada.png"; 
                clearInterval(timerCozinha);
            }
        },1000);
};

Chapa.prototype.tiraCarne=function(id){
     $("#prato").prepend($(id));
     $("#timer").html("");

}
