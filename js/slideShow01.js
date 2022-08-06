const arrColor=['red','blue','green']
function slideActive(plus,pointClick){
    let index= currentLocation()
    $('.tab-slide.active-tab').classList.remove("active-tab");
    $('.dot.active-dot').classList.remove("active-dot");
    index+=plus
    if (index === tabItem.length) index = 0;
    else if (index < 0) index = tabItem.length-1;
    else if (plus==0) index =pointClick;
    tabItem[index].style.backgroundColor = arrColor[index]
    tabItem[index].classList.add('active-tab')
    dotItem[index].classList.add('active-dot')
    clearInterval(cleartimeout)
    autoSlideShow()
}
function handleClickActive(){
    dotItem.forEach((dot,index) => {
        dot.onclick=()=>{
            slideActive(0,index)
        }
    });   
}
let currentLocation=()=>{
    let local
    dotItem.forEach((dot,index)=>{
        dot.classList.contains('active-dot') ? local=index :0
    })
    return local
}
function autoSlideShow(){
    cleartimeout=setInterval( () => {
        slideActive(1,0)
      }, delay);
}
function slideShow(slide,delay){
    this.tabItem=$$(`.${slide} .tab-slide`)
    this.dotItem=$$(`.${slide} .dot`)
    this.delay=delay
    handleClickActive()
    autoSlideShow()
    $('.arrow__right').onclick=()=>{
        slideActive(1,0)
    }
    $('.arrow__left').onclick=()=>{
        slideActive(-1,0)
    }
}
// slideShow('slide1',3000)

// slideShow('slide2',3000)