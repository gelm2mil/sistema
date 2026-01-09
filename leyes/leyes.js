function buscar(){
  const q = document.getElementById("q").value.trim().toLowerCase();
  const cont = document.getElementById("resultados");
  cont.innerHTML = "";

  if(!q){
    cont.innerHTML = "<p>Escribe una palabra o frase.</p>";
    return;
  }

  let encontrados = 0;

  LEYES.forEach(item=>{
    if(item.texto.toLowerCase().includes(q)){
      encontrados++;

      const marcado = item.texto.replace(
        new RegExp(q, "gi"),
        m => `<span class="marcado">${m}</span>`
      );

      cont.innerHTML += `
        <div class="resultado">
          <h3>${item.ley}</h3>
          <small>${item.articulo}</small>
          <p>${marcado}</p>
        </div>
      `;
    }
  });

  if(!encontrados){
    cont.innerHTML = "<p>No se encontraron coincidencias.</p>";
  }
}
