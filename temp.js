const dataInicial = new Date(2025, 0, 30, 0, 0, 0);

function atualizarContador() {
    const agora = new Date();
    let diff = agora - dataInicial; // diferença em milissegundos
    // Calcular tempo
    const segundosTotais = Math.floor(diff / 1000);
    const dias = Math.floor(segundosTotais / (60 * 60 * 24));
    const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
    const segundos = segundosTotais % 60;
    // Formatar
    const texto = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    // Mostrar
    document.getElementById('contador').innerText = texto;}

// Atualizar a cada segundo
setInterval(atualizarContador, 1000);

// Atualizar imediatamente ao carregar
atualizarContador();
