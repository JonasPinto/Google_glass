function mudaFoto(foto){
    document.getElementById("icone").src = foto
}

function atualiza() {
    document.querySelectorAll('.dir').forEach((el) => {
      el.textContent = 'ultima atualização 21/04/2025';
    });
  }
