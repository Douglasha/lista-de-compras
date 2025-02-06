
document.getElementById('item-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  
  const inputValue = document.getElementById('add-item').value.trim();
  if (!inputValue) return; // Não faz nada se o input estiver vazio
  
  const itemSpan = document.getElementById('colocar-item')
  
  if (!itemSpan.textContent.trim()){
    //se a span está vazia, atualiza seu valor
    itemSpan.textContent = inputValue;
  } else {
    // Se a span já tem um valor, cria uma nova div com a class "itens"
    // Cria uma nova div com a class "itens"
    const newItemDiv = document.createElement('div');
    newItemDiv.className = 'itens';
    
    // Cria a estrutura interna da nova div
    newItemDiv.innerHTML = `
    <div class="checkbox-image">
    <input type="checkbox" name="" id="">
    </div>
    <span id="colocar-item">${inputValue}</span>
    <div class="lixeira">
    <img src="./assetis/lixeira.svg" alt="">
    <button class=""></button>
    </div>
    `;
    
    // Adiciona a nova div ao final da div com a class "list"
    document.querySelector('.list').appendChild(newItemDiv);
  }

  // Limpa o input após adicionar o item
  document.getElementById('add-item').value = '';

  // Mostra a div "list" se ainda estiver oculta
  document.querySelector('.list').classList.remove('hidden');
});


