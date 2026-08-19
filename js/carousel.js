

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
                Carousel.container = document.getElementById("carousel");

                //exibir primeira imagem do carousel
                Carousel.Render();

                // inicia o tempo da imagem quando ocorre a mudança de imagem
                Carousel.ResetTimer();

                // criação de referência para os botões de navegação do carrosel
                const prevBtn = document.getElementById("prev");
                const nextBtn = document.getElementById("next");

                // chama a função de navegação do carousel quando o botão p é clicado
                if(prevBtn){
                    prevBtn.addEventListener("click", function(){
                        Carousel.Prev();
                    });
                    


                // chama a função de navegação do carousel quando o botão next é clicado
                if(nextBtn){
                    nextBtn.addEventListener("click", function(){
                        Carousel.Next();
                    });
                }

            }
            
            } else {
            throw "Method Start need a Array Variable.";
            }
        }
    }

    static Render(){
        if(!Carousel.container) return;
        
        // pega o item do carousel de acordo com a sequencia
        const currentItem = Carousel.arr[Carousel._sequence];

        let ref = document.getElementById("carousel-title");

        //escreve o conteudo do carousel no html
        ref.innerHTML = `<a href="${currentItem.url}" target="_blank"><img src="${currentItem.image}" alt="${currentItem.title}"></a>`;
        ref.innerHTML += `<a href="${currentItem.url}" target="_blank"><h2>${currentItem.title}</h2></a>`;
    }

    static ResetTimer(){
        //verifica se o timer existe e limpa ele
        if(Carousel._interval){
            clearInterval(Carousel._interval);
        }

        //inicia o timer para a troca de imagens do carousel
        Carousel._interval= setInterval(() => {
            Carousel.Next();
        }, 5000);
    }


    static Next(){

        Carousel._sequence++;

        //verifica se a sequencia chegou ao final do array
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }

        Carousel.Render();
        Carousel.ResetTimer();
    }   

    static Prev(){

        Carousel._sequence--;

        //verifica se a sequencia chegou ao inicio do array
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Render();
        Carousel.ResetTimer();
    }
}       

