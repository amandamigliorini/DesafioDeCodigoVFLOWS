const addProductBtn = document.querySelector('.add-product');
const addfileBtn = document.querySelector('.add-file');
const inputFile1 = document.querySelector('#file1');
const inputFile2 = document.querySelector('#file2');

const addFiles = () =>{
    if(inputFile1.files.length ===0){
        inputFile1.click()
    } else if (inputFile2.files.length ===0){
        inputFile2.click()
    }   
}

const inputFiles = (inputElement) =>{
    if (inputElement.files.length > 0){
        const file = inputElement.files[0];
        const reader = new FileReader();
        reader.onload = (event) =>{
            const blobFile = new Blob([event.target.result], {type:file.type})
            sessionStorage.setItem('blob', URL.createObjectURL(blobFile));
        };
        reader.readAsArrayBuffer(file);

    }
}

addfileBtn.addEventListener('click', addFiles);
inputFile1.addEventListener('change', () => inputFiles(inputFile1));
inputFile2.addEventListener('change', () => inputFiles(inputFile2));


const supplier = {};
const saveBtn = document.querySelector('#save');

const saveSupplier = () =>{
    supplier['razaoSocial'] = document.querySelector('#razao-social').value;
    supplier['nomeFantasia'] = document.querySelector('#nome-fantasia').value;
    supplier['cnpj'] = document.querySelector('#cnpj').value;
    supplier['incricaoEstadual'] =  document.querySelector('#i-estadual').value;
    supplier['incricaoMunicipal'] = document.querySelector('#i-municipal').value;
    supplier['nomeContato'] = document.querySelector('#contato').value;
    supplier['telefoneContato'] = document.querySelector('#telefone').value;
    supplier['emailContato'] = document.querySelector('#email').value;
    supplier['produtos'] = {};
    supplier['anexos'] = {}; 
    let jsonFile = JSON.stringify(supplier);
    let jsonURL = `data:application/json;charset=utf-8,${encodeURIComponent(jsonFile)}`;
    window.open(jsonURL, 'blank');
}

saveBtn.addEventListener('click', () => saveSupplier);

