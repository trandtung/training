function Slider(container){
    this.container=document.querySelector(container)
    this.slides=this.container.getElementsByClassName("myslide");
    this.dots=this.container.getElementsByClassName("dot");
    this.next=this.container.querySelector('.next')
    this.prev=this.container.querySelector('.prev')
    this.slideIndex=1
    if(this.next || this.prev){
        this.next.onclick=()=>{
            this.showSlide(this.slideIndex +=1)
        }
        this.prev.onclick=()=>{
            this.showSlide(this.slideIndex -=1)
        }
    }
    const autoSlide =()=>{
        this.cleartime=setInterval(()=>{
            this.showSlide(this.slideIndex+=1)
    },1000)
    }
    for (let i = 0; i < this.dots.length; i++) {
        this.dots[i].addEventListener("click", () => {
          this.showSlide(this.slideIndex=i+1)
        });
    }
    this.showSlide=(n)=>{
        if (n > this.dots.length) this.slideIndex=1
        else if (n<1) this.slideIndex=this.dots.length
        for (let i = 0; i < this.dots.length; i++) {
            this.slides[i].style.display = "none";
            this.dots[i] = this.dots[i].classList.remove("active-dot");
          }
        this.slides[this.slideIndex - 1].style.display = "flex";
        this.dots[this.slideIndex - 1].classList.add('active-dot')
        clearInterval(this.cleartime)
        autoSlide()
    }
}
const bannerSlide1= new Slider('#slide01')
bannerSlide1.showSlide(1)
const bannerSlide2= new Slider('#slide02')
bannerSlide2.showSlide(1)