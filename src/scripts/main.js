AOS.init();
const dataDoEvento = new Date("August 19, 2026 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const tempoEspera = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;
    const diasAteoEvento = Math.floor(distanciaAteOevento / (1000 * 60 * 60 * 24));
    const horasAteOEevento = Math.floor((distanciaAteOevento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento= Math.floor((distanciaAteOevento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteoEvento = Math.floor((distanciaAteOevento % (1000 * 60 )) / 1000);
    console.log(segundosAteoEvento);
    console.log(minutosAteOEvento);
    console.log(diasAteoEvento);
    console.log(horasAteOEevento);
    document.getElementById('contador').innerHTML = `Começa em ${ diasAteoEvento}d  ${horasAteOEevento}h  ${minutosAteOEvento}m  ${segundosAteoEvento}s`;
    

    if (diasAteoEvento < 0){
        clearInterval(tempoEspera);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }

},1000)