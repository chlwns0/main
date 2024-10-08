const header_bg = document.querySelector('header')
const nav = document.querySelectorAll('nav a')
const section = document.querySelectorAll('section')
const body = document.querySelector('body, html')
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents .container')
const open_nav = document.querySelector('.open_nav')
const m_nav_open = document.querySelector('.m_nav_open')
window.addEventListener('scroll',function(){
    if(window.scrollY > 0){
        // console.log('.')
        header_bg.style.padding = '30px 100px 0'
        m_nav_open.style.top = '60px'
    }else {
        header_bg.style.padding = '70px 100px 0'
        m_nav_open.style.top = '100px'
    }
})
open_nav.classList.remove('active')
m_nav_open.classList.remove('active')
function toggleHandler(e) {
    open_nav.classList.toggle('active')
    m_nav_open.classList.toggle('active')
    e.preventDefault()
}
function init() {
    open_nav.addEventListener("click", toggleHandler)
}
init()
// tab而⑦뀗痢�
for(let j of tab_contents){j.style.display = 'none'}
tab_contents[0].style.display = 'flex'
tab_title.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let j of tab_contents){j.style.display = 'none'}
        for(let n of tab_title)(n.classList.remove('active'))
        tab_contents[i].style.display = 'flex'
        t.classList.add('active')
    })
})
// nav�� �대┃ �대깽��
for(let j of nav){j.classList.remove('active')}
nav[0].classList.add('active')
nav.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of nav){j.classList.remove('active')}
        t.classList.add('active')
    })
    // nav�� �ㅽ겕濡� �대깽��
    window.addEventListener('scroll',function(){
        if(body.scrollTop >= section[i].offsetTop-200){
            // console.log('.')
            for(let j of nav){j.classList.remove('active')}
            t.classList.add('active')
        }
    })
})
// �대�吏��앹뾽
$(function(){
    // 蹂��� �좎뼵
    var imageButton = $('.image a');
    var popup = $('.img-popup');
    var closeButton = popup.find('.close-btn');
    var htmlAndBody = $('html, body');
    var focusTarget;
    // �앹뾽 �앹꽦
    imageButton.on('click', function(e){
        e.preventDefault();
        var popupImg = popup.find('> .popup-inner > img');
        var image = $(this).find('> img');
        var src = image.attr('src');
        var alt = image.attr('alt');
        focusTarget = $(this);
        popupImg.attr('src', src).attr('alt', alt);
        createPopup();
    });
    // �앹뾽 �쒓굅
    popup.on('click', function(){
        removePopup();
    });
    closeButton.on('click', function(e){
        e.preventDefault();
        removePopup();
    });
    // �앹뾽 �앹꽦 �⑥닔
    function createPopup(){
        popup.addClass('active');
        htmlAndBody.css('overflow-y', 'hidden');
        setTimeout(function(){
            closeButton.focus();
        }, 50);
    }
    // �앹뾽 �쒓굅 �⑥닔
    function removePopup(){
        popup.removeClass('active');
        focusTarget.focus();
        htmlAndBody.css('overflow-y', 'visible');
    }
})

// swiper
const etc_slide = new Swiper('.etc_slide',{
    autoplay:{delay:2000},
    slidesPerView:3,
    loop:true,
    spaceBetween:20,
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        900:{slidesPerView:1},
        1240:{slidesPerView:2},
        1800:{slidesPerView:3},
    },
})