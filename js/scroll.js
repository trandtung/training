const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
window.addEventListener('scroll', ()=>{
	const scroll = window.scrollY;
    scroll >1000 ? $(".scroll-arrowup").classList.add('scroll--active') : $(".scroll-arrowup").classList.remove('scroll--active');

});

$('.scroll-arrowup').addEventListener("click",()=>{
	window.scrollTo({
		top:0,
		behavior: 'smooth',
	});
});
