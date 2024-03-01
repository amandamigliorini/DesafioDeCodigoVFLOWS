const input = document.getElementById('cep');

const apiFetch = async () =>{
    let cep = input.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            fullfillAddress(data)
            const errorMessage = document.querySelector('.error');
            errorMessage.textContent = "";
        }
        } catch(error){
            const errorMessage = document.querySelector('.error');
            errorMessage.textContent = `Cep inválido. Digite apenas números.`;
        }
}


const fullfillAddress = (data) =>{
    const address = document.getElementById('endereco');
    const number = document.getElementById('numero');
    const moreInfo = document.getElementById('complemento');
    const neighborhood = document.getElementById('bairro');
    const city = document.getElementById('municipio');
    const state = document.getElementById('estado');

    address.value = data.logradouro;
    number.value = data.bairro;
    moreInfo.value = data.complemento;
    neighborhood.value = data.bairro;
    city.value = data.localidade;
    state.value = data.uf;
}

input.addEventListener('input', apiFetch);

