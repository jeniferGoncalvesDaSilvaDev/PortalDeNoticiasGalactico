//herda todos os comportamnetos de html
class CardNews extends HTMLElement{
     constructor() {
        //herda html element 
        super();
        // a variavel, cria uma sombra para ter dominio total do documento html
        //modo open, deixa outros js´s alterem o arquivo
        const shadow = this.attachShadow({mode:'open'})
        //cria um novo elemento dentro do arquivo html
        shadow.innerHTML = "<h1>hello word</h1>";

     }
}
//define um novo card e herda as prpriedades da classe CardNews-cria uma tag html!
customElements.define('card-new',CardNews);
