class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        const sombra = this.attachShadow({mode:'open'});
        //sombra.innerHTML = "<h1>Meu titulo</h1>";
        //base do componente
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'JeyJey';
        //estilizar o componete
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color: red;
            }
        `;
        //enviar para a shadow
         sombra.appendChild(componentRoot)
         sombra.appendChild(style);
       }
}
    

customElements.define('titulo-dinamico', TituloDinamico);