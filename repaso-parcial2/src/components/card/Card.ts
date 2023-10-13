export enum AttributesCard {
    "namerick" = "namerick",
    "image" = "image",
    "anime_name" = "anime_name",
    "url" = "url"
}

export default class Card extends HTMLElement {
    namerick: string = "";
    image: string = "";
    anime_name: string = "";
    url: string = "";

    static get observedAttributes(){
        const attrs: Record<AttributesCard, null> = {
            namerick: null,
            image: null,
            anime_name: null,
            url: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName: AttributesCard, _: unknown, newValue: string){
        switch (propName) {        
            default:
                this[propName]=newValue
                break;
        }
            this.render()
    }

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>${this.namerick}</h1>
            <img src="${this.image}" alt="">
            <h1>${this.anime_name}</h1>
            <img src="${this.url}" alt="">
            `
        }
    }
}

customElements.define("my-card", Card)