class NewProduct extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        this.script(shadow);
        
    }

    build(){
        const componentRoot = document.createElement('div');
        const componentForm = document.createElement('div');
        componentForm.setAttribute('class', 'component');
        
        const divTrash = document.createElement('div')
        divTrash.setAttribute('class', 'div-trash');
        const trashIcon = document.createElement('img');
        trashIcon.setAttribute('src', '/assets/fluigicon-trash.png');
        trashIcon.setAttribute('alt', 'Trash Icon');
        divTrash.appendChild(trashIcon);
        componentForm.appendChild(divTrash);

        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('class', 'product-fieldset');
        
        const legend = document.createElement('legend');
        legend.textContent = this.getAttribute('title');
        fieldset.appendChild(legend);

        const divIcon = document.createElement('div');
        divIcon.setAttribute('class', 'div-icon');
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', '/assets/package-box-white.ico');
        productIcon.setAttribute('alt', 'Box Icon');
        divIcon.appendChild(productIcon);
        fieldset.appendChild(divIcon);

        const divForm = document.createElement('div');
        divForm.setAttribute('class', 'product-data');

        const divProduct = document.createElement('div');
        divProduct.setAttribute('class', 'product');
        const labelProduct = document.createElement('label');
        labelProduct.textContent = 'Produto';
        const inputProduct = document.createElement('input');
        inputProduct.setAttribute('type', 'text');
        inputProduct.setAttribute('name', 'product');
        inputProduct.setAttribute('id', 'product');
        inputProduct.required = this.getAttribute('required');
        divProduct.appendChild(labelProduct);
        divProduct.appendChild(inputProduct);

        const divMeasure = document.createElement('div');
        divMeasure.setAttribute('class', 'measure');
        const labelMeasure = document.createElement('label');
        labelMeasure.textContent = 'UND.Medida';
        const selectMeasure = document.createElement('select');
        selectMeasure.innerHTML = `<option value="" disabled selected></option><option value="un">UN</option><option value="kg">Kg</option><option value="g">gramas</option>`;
        divMeasure.appendChild(labelMeasure);
        divMeasure.appendChild(selectMeasure);
        
        const divQuantity = document.createElement('div');
        divQuantity.setAttribute('class', 'quantity');
        const labelQuantity = document.createElement('label');
        labelQuantity.textContent = 'QTDE. em Estoque';
        const inputQuantity = document.createElement('input');
        inputQuantity.setAttribute('type', 'text');
        inputQuantity.setAttribute('name', 'quantity');
        inputQuantity.setAttribute('id', 'quantity');
        divQuantity.appendChild(labelQuantity);
        divQuantity.appendChild(inputQuantity);

        const divUnity = document.createElement('div');
        divUnity.setAttribute('class', 'unity');
        const labelUnity = document.createElement('label');
        labelUnity.textContent = 'Valor Unitário';
        const inputUnity = document.createElement('input');
        inputUnity.setAttribute('type', 'text');
        inputUnity.setAttribute('name', 'unity');
        inputUnity.setAttribute('id', 'unity');
        divUnity.appendChild(labelUnity);
        divUnity.appendChild(inputUnity);

        const divTotal = document.createElement('div');
        divTotal.setAttribute('class', 'total');
        const labelTotal = document.createElement('label');
        labelTotal.textContent = 'Valor Total';
        const inputTotal = document.createElement('input');
        inputTotal.setAttribute('type', 'text');
        inputTotal.setAttribute('name', 'total');
        inputTotal.setAttribute('id', 'total');
        inputTotal.disabled = true;
        inputTotal.required = true;
        divTotal.appendChild(labelTotal);
        divTotal.appendChild(inputTotal);
            
        divForm.appendChild(divProduct);
        divForm.appendChild(divMeasure);
        divForm.appendChild(divQuantity);
        divForm.appendChild(divUnity);
        divForm.appendChild(divTotal);
        fieldset.appendChild(divForm);

        const fieldsetBtn = document.createElement('fieldset');
        fieldsetBtn.setAttribute('class', 'btn-fieldset');
        const btnAdd = document.createElement('button');
        btnAdd.setAttribute('class', 'add-product');
        btnAdd.textContent = 'Adcionar Produto';
        fieldsetBtn.appendChild(btnAdd);
        
        componentForm.appendChild(fieldset);
        componentRoot.appendChild(componentForm);
        //componentRoot.appendChild(fieldsetBtn);

        return componentRoot
        
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        .component{
            display: flex;
            align-items:center;
        }

        .div-trash img{
            background-color: red;
            width: 40px;
            height: 40px;
            padding: .2rem;
            margin: .5rem;
            border-radius: .2rem
        }

        .product-fieldset, .btn-fieldset{
            display: flex;
            align-items: center;
            width:100%;
            border-radius: 10px;
            margin: .5rem;
            
        }
        .btn-fieldset{
            display: flex;
            align-items: center;
            width:inherit;
            border-radius: 10px;
            margin: .5rem;
            border: none;
            
        }

        .div-icon{
            border: 1px solid rgba(130, 144, 205, 1);
            border-radius: 100px;
            width: fit-content;
            background-color: rgba(130, 144, 205, .5) ;
            transparency: .9
        }

        .div-icon img{
            width: 70px;
            padding: 1rem;   
        }

        .product-data{
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            padding: 1.5rem
        }
         
        .product{
            grid-column: 1/9;
            grid-row: 1/2;
            margin: .2rem;
        }

        .measure{
            grid-column: 1/3;
            grid-row: 2/3;
            margin: .2rem;
            padding: .5rem;
            width: 100%
        }

        .quantity{
            grid-column: 3/5;
            grid-row: 2/3;
            margin: .2rem;
            padding: .5rem;
            
        }

        .unity{
            grid-column: 5/7;
            grid-row: 2/3;
            margin: .2rem;
            padding: .5rem;
        }

        .total{
            grid-column: 7/9;
            grid-row: 2/3;
            margin: .2rem;
            padding: .5rem;
            padding-right: 0;
        }

        .product > input, .measure > select, .quantity > input, .unity > input, .total > input{
            width: 100%;
            padding: .5rem;
            border-radius: 8px;
            
        }
        .total > input{
            background-color: rgba(89, 89, 89, .5);
        }
        .add-product{
            width:100%;
            padding: .5rem;
            border-radius: 10px;
            background-color: rgba(1, 158, 15, 1);
            border:none;
            text-emphasis-color: white;
            color: white;
            margin: 1rem;
            box-shadow: none;
        }

        @media (max-width: 850px) {
            .div-icon{
                display: none;
            }
            .product-data{
                display: block;
            }
        }
        `
      return style
    }

    script(shadow){
        const quantity = shadow.querySelector("#quantity");
        const unity = shadow.querySelector("#unity");
        const total = shadow.querySelector("#total");

        const getTotal = () => {
            const totalValue = (parseFloat(quantity.value) || 0) * (parseFloat(unity.value) || 0);
            total.value = totalValue.toFixed(2);
        }

        quantity.addEventListener('input', getTotal);
        unity.addEventListener('input', getTotal);
    }


}
document.addEventListener('DOMContentLoaded', () => {
    customElements.define('new-product', NewProduct);
});
