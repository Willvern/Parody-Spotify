function atualizarSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    
    let saudacao;
    
    if (hora >= 5 && hora < 12) {
        saudacao = "Good Morning";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Good Afternoom";
    } else {
        saudacao = "Good Night";
    }
    
    document.getElementById('saudacao').textContent = saudacao;
    // document.getElementById('horario').textContent = horaFormatada;
}

// Atualiza a saudação imediatamente e depois a cada segundo
atualizarSaudacao();
setInterval(atualizarSaudacao, 1000);