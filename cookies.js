function ingredientescookies(){
    ingredientes=document.getElementById("ingredientes").value
    document.getElementById("manteigasemsal").innerText=ingredientes*150+ "g de manteiga de sem sal"
    document.getElementById("açucar").innerText=ingredientes*100+ "g de açúcar"
    document.getElementById("mascavo").innerText=ingredientes*100+ "g de açúcar mascavo"
    document.getElementById("ovo").innerText=ingredientes*1+ "ovo"
    document.getElementById("chocolatepo").innerText=ingredientes*1+ "colher (sopa) de Chocolate em Pó 50%"
    document.getElementById("sal").innerText=ingredientes*1+ "pitada de sal"
    document.getElementById("baunilha").innerText=ingredientes*1+ " colher (chá) de essência de baunilha"
    document.getElementById("farinha").innerText=ingredientes*185+ " g de farinha de trigo"
    document.getElementById("fermento").innerText=ingredientes*1+ " colher (sopa) de fermento químico em pó"
    document.getElementById("chocolate").innerText=ingredientes*100+ "g de chocolate ao leite"

    document.getElementById("leitecondensado").innerText=ingredientes*1+ "caixa de leite condensado"
    document.getElementById("leiteempo").innerText=ingredientes*6+ "colheres(sopa) de leite em pó"
    document.getElementById("manteiga").innerText=ingredientes*1+ "colher(sopa) de manteiga"
    document.getElementById("cremedeleite").innerText=ingredientes*125+ "g de creme de leite"
   
}