function reloadGraph() {
   var now = new Date();

   document.images['telegram'].src = 'https://web.telegram.org/#/im?p=@alerta_tuenvio' + now.getTime();
   document.images['carlos3'].src = 'https://www.tuenvio.cu/carlos3/Products?depPid=46081' + now.getTime();
   document.images['4caminos'].src = 'https://www.tuenvio.cu/4caminos/Products?depPid=46081' + now.getTime();
   document.images['pedregal'].src = 'https://www.tuenvio.cu/tvpedregal/Products?depPid=55' + now.getTime();
   document.images['caribehabana'].src = 'https://www.tuenvio.cu/caribehabana/Products?depPid=46087' + now.getTime();
   document.images['tipica'].src = 'https://www.tuenvio.cu/tipicaboyeros/Products?depPid=62006' + now.getTime();
   document.images['5tay42'].src = 'https://5tay42.xetid.cu/100003-alimentos-refrigerados' + now.getTime();

   // Start new timer (1 min)
   timeoutID = setTimeout('reloadGraph()', 60000);

}
