AOS.init();

const datadoevento = new Date("Jan 5, 2024 19:00:00");
const timestampdoevento = datadoevento.getTime();

const contaashoras = setInterval(function() {

    const agora = new Date();
    const timestampatual = agora.getTime();

    const distanciaevento = timestampdoevento - timestampatual;

    const diams = 1000 * 60 * 60 * 24;
    const horams = 1000 * 60 * 60;
    const minutoms = 1000 * 60;

   const diasateevento = Math.floor(distanciaevento / diams);
   const horasateevento = Math.floor((distanciaevento % diams) / horams);
   const minutosateevento = Math.floor((distanciaevento % horams) / minutoms);
   const segundosateevento = Math.floor((distanciaevento % minutoms) / 1000);

   console.log(diasateevento);
   console.log(horasateevento);
   console.log(minutosateevento);
   console.log(segundosateevento);

   document.getElementById('contador').innerHTML = `${diasateevento}d ${horasateevento}h ${minutosateevento}m ${segundosateevento}s`;

   if (distanciaevento < 0) {
    clearInterval(contaashoras);
    document.getElementById('contador').innerHTML = 'Evento Expirado'

   }
}, 1000);