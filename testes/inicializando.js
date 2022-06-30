function acumuladoSemestral(anoMes) {
    let semestre = "";
    var estrela = document.getElementById('estrela-copa');

    if(Number(anoMes.slice(4, 6)) <= 6){
        document.getElementsByClassName('mdl-layout-title bold')[0].innerHTML = 'Placar da Retomada'
        estrela.innerHTML = `<scan hidden>${Number(anoMes.slice(4, 6))}/${Number(anoMes.slice(0, 4))}</scan>`;
        semestre = "I Sem";   
        
        $('#titulo-fat-acum-sem').text(`Fat. Bruto Acum ${semestre}`);
        $('#titulo-vol-acum-sem').text(`Volume Acum ${semestre}`);
        $('#titulo-margem-acum-sem').text(`Margem Contrib. Acum ${semestre}`);  
        $('#tit-vol-acum-sem-tab').text(`Volume - Acumulado ${semestre}`);
        $('#tit-marg-acum-sem-tab').text(`Margem Contribuição - Acumulado ${semestre}`);
    
    } else if (Number(anoMes.slice(4, 6)) >= 7){
        document.getElementsByClassName('mdl-layout-title bold')[0].innerHTML = 'Placar Tempo de Virada'
        estrela.innerHTML = `<scan hidden>${Number(anoMes.slice(4, 6))}/${Number(anoMes.slice(0, 4))}</scan>`;
        semestre = "II Sem";  
        inserirEstrela(anoMes, estrela)      
    }
    
        $('#titulo-fat-acum-sem').text(`Fat. Bruto Acum ${semestre}`);
        $('#titulo-vol-acum-sem').text(`Volume Acum ${semestre}`);
        $('#titulo-margem-acum-sem').text(`Margem Contrib. Acum ${semestre}`);  
        $('#tit-vol-acum-sem-tab').text(`Volume - Acumulado ${semestre}`);
        $('#tit-marg-acum-sem-tab').text(`Margem Contribuição - Acumulado ${semestre}`);
}

function inserirEstrela(anoMes, estrela) {
    if ((Number(anoMes.slice(0, 4)) == 2022) && (Number(anoMes.slice(4, 6)) >= 7)) {
        estrela.style.marginLeft = "20px";
        estrela.innerHTML = `<scan hidden>${Number(anoMes.slice(4, 6))}/${Number(anoMes.slice(0, 4))}</scan>`;
        for (var i = 0; i < 6; i++) {
            estrela.innerHTML += '<img src="images/estrela.png" height="35" width="35"/>'
        }
      } else {
        estrela.innerHTML =  `<scan hidden>${Number(anoMes.slice(4, 6))}/${Number(anoMes.slice(0, 4))}</scan>`;
      }
}