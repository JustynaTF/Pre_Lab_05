const cardColors = ["red", "red", "green", "green", "blue", "blue", "magenta", "magenta", "yellow", "yellow", "bisque", "bisque", "brown", "brown", "cyan", "cyan", "orange", "orange"];

let elements = document.querySelectorAll('div');
elements = [...elements]


let gamesLeft = cardColors.length/2;
let activeCard = '';
const activeCards = [];
const clickCard = function(){
    activeCard = this;
    console.log(activeCard)

    if(activeCard === activeCards[0]){
        return;
    }
    activeCard.classList.remove('hidden');
    if(activeCards.length === 0){
        activeCards.push(activeCard); //0
        return;
    }else{
        elements.forEach(elem =>{
            elem.removeEventListener('click', clickCard);
        });
           activeCards.push(activeCard); //1
           setTimeout(function(){
                if(activeCards[0].className===activeCards[1].className){
                    activeCards.forEach(card=>card.classList.add("off"));
                    elements = elements.filter(card=> !card.classList.contains("off"));
                     gamesLeft--;
                }
           else
           {
                activeCards.forEach(card=> card.classList.add("hidden"));
           }

           activeCard="";
           activeCards.length = 0;
           elements.forEach(card => card.addEventListener('click', clickCard))
           if (gamesLeft === 0) {
                      location.reload();
                  }
        }, 1000)
    }
}
const init = function () {
   elements.forEach(elem => {
       const position = Math.floor(Math.random() * cardColors.length);
       elem.classList.add(cardColors[position]);
       cardColors.splice(position, 1);


setTimeout(function(){
    elements.forEach(elem=>{
        elem.classList.add('hidden');
        elem.addEventListener('click', clickCard);
        });

    }, 500)
  });
};
init();
