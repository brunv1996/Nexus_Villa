// Filtros da Galeria
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const itensGaleria = document.querySelectorAll('.item-galeria');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remover classe active de todos os botões
        botoesFiltro.forEach(b => b.classList.remove('active'));
        botao.classList.add('active');

        const filtro = botao.getAttribute('data-filter');

        itensGaleria.forEach(item => {
            if (filtro === 'todos' || item.getAttribute('data-category') === filtro) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lightbox Modal
const modal = document.getElementById('lightbox-modal');
const imgModal = document.getElementById('img-modal');
const legendaModal = document.getElementById('legenda-modal');
const btnFechar = document.querySelector('.fechar-modal');

itensGaleria.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const titulo = item.querySelector('h3').innerText;
        const descricao = item.querySelector('p').innerText;

        modal.style.display = 'flex';
        imgModal.src = img.src;
        legendaModal.innerHTML = `<strong>${titulo}</strong> - ${descricao}`;
    });
});

// Fechar Modal
btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
// Captura os cliques em todos os botões de pacote
document.querySelectorAll('.btn-pacote').forEach(botao => {
    botao.addEventListener('click', (e) => {
        const plano = botao.getAttribute('data-plano');
        const selectPlano = document.getElementById('plano-select');
        
        if (selectPlano && plano) {
            selectPlano.value = plano;
        }
    });
});