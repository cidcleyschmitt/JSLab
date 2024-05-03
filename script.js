    //Teste de consumo de API com javascript puro. uso de fetch
    
    fetch('https://dadosabertos.camara.leg.br/api/v2/deputados')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            let deputs = data.dados;
            deputs.forEach(function(deputado) {
                let card = document.createElement('div');
                card.classList.add('card');
                let img = document.createElement('img');
                img.src = deputado.urlFoto;
                img.alt = 'Foto Dep. ' + deputado.nome;
                img.style.width = '250px';
                let container = document.createElement('div');
                container.classList.add('container');
                let h4 = document.createElement('h4');
                h4.innerHTML = '<b>' + deputado.nome + '</b>';
                let p = document.createElement('p');
                p.textContent = deputado.siglaPartido + ' / ' + deputado.siglaUf;
                container.appendChild(h4);
                container.appendChild(p);
                card.appendChild(img);
                card.appendChild(container);
                document.body.appendChild(card);
            });
        })
        .catch((error) => {
            console.log(error);
        });