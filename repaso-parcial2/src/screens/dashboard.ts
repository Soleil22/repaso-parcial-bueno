import { DataRick } from "../services/getData"
import { DataAnime } from "../services/getData"
import "../components/export"
import { DataTypes } from "../types/types"
import { AttributesCard } from "../components/card/Card"

class Dashboard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    async connectedCallback(){
        const dataRick = await DataRick();
        const dataAnime = await DataAnime();
        this.render(dataRick, dataAnime)
    }

    render(dataRick?: any, dataAnime?:any){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
        dataRick.forEach((final: DataTypes) => { //falta completar lo otro de los componentes para llenar esta shit
            const card = this.ownerDocument.createElement("my-card")
            card.setAttribute(AttributesCard.namerick, final.name)
            card.setAttribute(AttributesCard.image, final.image)
            this.shadowRoot?.appendChild(card)
        });
            const btn = this.ownerDocument.createElement('button')
            btn.innerText = "monstrame lo otro ps"
            this.shadowRoot?.appendChild(btn)
            btn.addEventListener('click', ()=>{
            dataAnime.forEach((final: DataTypes) => {
            const card = this.ownerDocument.createElement("my-card")
            card.setAttribute(AttributesCard.anime_name, final.anime_name)
            card.setAttribute(AttributesCard.url, final.url)
            this.shadowRoot?.appendChild(card)
             })
        })
        }
    }
}

customElements.define("app-dashboard", Dashboard)