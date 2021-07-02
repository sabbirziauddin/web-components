
const template  =document.createElement('template');
template.innerHTML =`

<style>
.user-card{
    font-family:'Arial',san-serif;
    background:#f4f4f4 ;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr; 
    grid-gap:10px;
    margin-bottom:15px;
    border-bottom:darkorchid 5px solid;
    margin:auto;
    margin-bottom:10px
   
}
.user-card img{
    width: 100%;
    border-radius: 50%;
    margin-left:5px;
}
.user-card button{
     cursor: pointe0r;
    background: darkorange;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
    

}
</style>




<div class ='user-card'>
    <img/>
    <div>
        <h3></h3>
        <div class ="info">

        <p> Email:<slot name ="email"/></p>
        <p>Phone: <slot name= "phone"/> </p>
        </div>
        <button id ="btn-info">Hide Info </button>
    </div>

</div>

 `;

class userCard extends HTMLElement{
    constructor(){
        super();
        this.displyInfo =true;
        //shadow root
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText =this.getAttribute("name");
        this.shadowRoot.querySelector('img').src =this.getAttribute("avatar");


    }

    showInfo(){
       this.displyInfo = !this.displyInfo;
       const info = this.shadowRoot.querySelector('.info');
       const showButton = this.shadowRoot.querySelector('#btn-info')
       if(this.displyInfo){

        info.style.display ='block';
        showButton.innerText ='Hide info'


       }else{
        info.style.display ='none';
        showButton.innerText ='Show info'


       }
    }
     connectedCallback(){
        this.shadowRoot.querySelector('#btn-info').
        addEventListener('click',()=>this.showInfo())
     }
     disconnectedCallback(){
        this.shadowRoot.querySelector('#btn-info').
        removeEventListener();

     }
}
//define user card element
 window.customElements.define('user-card',userCard);