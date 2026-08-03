

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.arr = arr
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
       // cria uma referencia com o elemento do carousel
       let ref = document.getElementById("carousel-title");

       // pega o item do carousel de acordo com a sequencia
       let corouselItem = Carousel.arr[Carousel._sequence];

       //escreve o conteudo do carousel no html
       ref.innerHTML = `<a href="${corouselItem.url}" target="_blank"><img src="${corouselItem.image}" alt="${corouselItem.title}"></a>`;
        
       //avança a sequencia do carousel
       Carousel._sequence++;

         //verifica se a sequencia chegou ao final do array
         if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
         }
    }
};
