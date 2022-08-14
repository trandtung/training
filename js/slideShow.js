function Slider(container){ 
    this.container=document.querySelector(container)
    this.slides=this.container.getElementsByClassName("myslide");
    this.dots=this.container.getElementsByClassName("dot");
    this.next=this.container.querySelector('.next')
    this.prev=this.container.querySelector('.prev')
    this.slideIndex=1

    this.slideTran=this.container.querySelector(".tab-slidemain");
    this.container.style='overflow: hidden'  
    this.slideItemWidth=this.slides[0].offsetWidth
    this.slideTran.append(this.slides[0].cloneNode(true))
    this.slideTran.prepend( this.slides[this.slides.length-1].cloneNode(true))

    const arr=['black','none','green','black','none']
    for(let i=0;i<this.slides.length;i++) this.slides[i].style.backgroundColor = arr[i];

    if(this.next || this.prev){
        this.next.onclick=()=>{
            this.showSlide(this.slideIndex++)     
        }
        this.prev.onclick=()=>{
            this.showSlide(this.slideIndex--)
        }
    }
    const autoSlide =()=>{
        this.cleartime=setInterval(()=>{
            this.showSlide(this.slideIndex+=1)
    },3000)
    }
    for (let i = 0; i < this.dots.length; i++) {
        this.dots[i].addEventListener("click", () => {
          this.showSlide(this.slideIndex=i+1)
        });
    }
    this.showSlide=(n)=>{
        if(this.slideIndex==this.slides.length){    
            this.slideTran.style = 'transition:none'
            this.slideIndex=1
            this.slideTran.style.transform = `translateX(${-this.slideItemWidth * (this.slideIndex)}px)`;
            this.showSlide(this.slideIndex+=1)
        }
        else if(this.slideIndex==0){
            this.slideTran.style = 'transition:none'
            this.slideIndex=this.slides.length-1
            this.slideTran.style.transform = `translateX(${-this.slideItemWidth * (this.slideIndex)}px)`;
            this.showSlide(this.slideIndex=this.slides.length-2)
        }    
        this.slideItemWidth=this.slides[0].offsetWidth
        for (let i = 0; i < this.dots.length; i++)  this.dots[i] = this.dots[i].classList.remove("active-dot");
        this.slideTran.style = `transform:translateX(${-(this.slideIndex)*this.slideItemWidth }px)`;
        (this.slideIndex==this.slides.length-1 ) ? this.dots[0].classList.add('active-dot') :  this.dots[this.slideIndex -1].classList.add('active-dot')
        clearInterval(this.cleartime)
        autoSlide()
    }
}
const slideIntro= new Slider('#slide-intro')
slideIntro.showSlide(1)
const slideProjects= new Slider('#slide-projects')
slideProjects.showSlide(1)


