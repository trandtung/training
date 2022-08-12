function Slider(container){
    // const arr=['none','black','green','blue','none']
    const arr=['none','green','blue']
    this.container=document.querySelector(container)
    this.slides=this.container.getElementsByClassName("myslide");
    this.dots=this.container.getElementsByClassName("dot");
    this.next=this.container.querySelector('.next')
    this.prev=this.container.querySelector('.prev')
    this.slideIndex=1

    this.slideTran=this.container.querySelector(".tab-slidemain");
    this.container.style='overflow: hidden'  

    let slideItemWidth=this.slides[0].offsetWidth

    this.fistCLone=this.slides[0].cloneNode(true)
    this.lastCLone=this.slides[this.slides.length-1].cloneNode(true)
    // this.slideTran.append(this.fistCLone)
    // this.slideTran.prepend(this.lastCLone)

    // this.slideTran.style = `transform:translateX(${-(this.slideIndex-1)*slideItemWidth }px)`;
    console.log(this.slideTran)
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
    },4000)
    }
    for (let i = 0; i < this.dots.length; i++) {
        this.dots[i].addEventListener("click", () => {
          this.showSlide(this.slideIndex=i+1)
        });
    }
    this.showSlide=(n)=>{  
        slideItemWidth=this.slides[0].offsetWidth
        if (n > this.dots.length) this.slideIndex=1
        else if (n<1) this.slideIndex=this.dots.length
        for (let i = 0; i < this.dots.length; i++)  this.dots[i] = this.dots[i].classList.remove("active-dot");
        this.slides[this.slideIndex-1].style.backgroundColor = arr[this.slideIndex-1];
        this.slideTran.style = `transform:translateX(${-(this.slideIndex-1)*slideItemWidth }px)`;
        // console.log(`transform:translateX(${-(this.slideIndex)*slideItemWidth }px)`)
        this.dots[this.slideIndex - 1].classList.add('active-dot')
        clearInterval(this.cleartime)
        autoSlide()
    }
}
const bannerSlide1= new Slider('#slide01')
bannerSlide1.showSlide(1)
const bannerSlide2= new Slider('#slide02')
bannerSlide2.showSlide(1)