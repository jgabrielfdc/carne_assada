class Chapa{
    constructor(chapa,tempoCozimento){
        this.chapa=chapa;
        this.tempoCozimento=tempoCozimento;
    }
}

Chapa.prototype={
    assaCarne:function(){
        let tempoCozimento=this.tempoCozimento;
        $("#timer").html("00:0"+tempoCozimento);
       
        let timerCozinha=setInterval(function(){
            if(tempoCozimento>5){
                tempoCozimento-=1;
                $("#timer").html("00:0"+tempoCozimento);
            }else{
                let itemChapa=$(this.chapa[0].children[0].id="carne_assada");
                 if(this.temCarne() && itemChapa=="carne_assada"){

                 }
            }
        },1000);
    }
}