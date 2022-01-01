// switch to dark mode
const swt = document.querySelector('.switch');
var toggle = false;
var currLinkColor = '#222';
swt.addEventListener('click',(e)=>{
    // console.log('clicked');
    if(toggle){
        swt.style.backgroundColor = '#eee';
        document.querySelector('.switch .switch-btn').style.left = '-10%';
        document.body.style.backgroundColor = `#eee`;
        document.querySelector('nav').style.backgroundColor = `#eee`;
        document.body.style.color = `#222`;
        currLinkColor = '#555';
        document.querySelector('.nav-bottom-image').src = 'images/zoombox_logo.svg';
        document.querySelector('#table-head').style.backgroundColor = '#eee';
        document.querySelector('#table-head tr').style.boxShadow = '0 5px 10px #eee';
        toggle = false;
    }else{
        swt.style.backgroundColor = '#777';
        document.querySelector('.switch .switch-btn').style.left = '55%';
        document.body.style.backgroundColor = `#222`;
        document.querySelector('nav').style.backgroundColor = `#222`;
        document.body.style.color = `#ddd`;
        currLinkColor = '#aaa';
        document.querySelector('.nav-bottom-image').src = 'images/zoombox_logo_dark.svg';
        document.querySelector('#table-head').style.backgroundColor = '#222';
        document.querySelector('#table-head tr').style.boxShadow = '0 5px 10px #222';
        toggle = true;
    }
    setLinkColor(-1)
});



//hamburger menu open / close
const ham = document.querySelector('#ham');
var navOpen = false;
ham.addEventListener('click',toggleNav);

function toggleNav(e){
    if(navOpen){
        document.querySelector('nav').style.transform = `translateX(-110%)`;
        ham.children[0].classList.remove('fa-close');
        document.querySelector('.nav-xs-overlay').style.display = 'none';
        ham.children[0].classList.add('fa-bars');
        navOpen = false;
    }else{
        document.querySelector('nav').style.transform = `translateX(0)`;
        ham.children[0].classList.remove('fa-bars');
        ham.children[0].classList.add('fa-close');
        document.querySelector('.nav-xs-overlay').style.display = 'block';
        navOpen = true;
    }
}


document.querySelector('.nav-xs-overlay').onclick = ()=>{
    toggleNav();
}


// scroll spy to et link colro on scrol

const spy = document.querySelectorAll('[spy-data]');


function setLinkColor(str){
    spy.forEach((link,index)=>{
        if(link.getAttribute('spy-data')==str){
            link.style.color =  `#007bff`;
        }
        else
            link.style.color = currLinkColor;
    });
}




let options = {
    root: null,
    rootMargin: '-90px 0px -300px 0px',
    threshold: 0
  }
const setLinkColorScroll = new IntersectionObserver((entries,setLinkColorScroll)=>{
    entries.forEach((entry,index) =>{
        if(entry.isIntersecting){
            setLinkColor(entry.target.getAttribute('id'));
        }
    })
},options);


spy.forEach( link=>{
    link.setAttribute('href',`#${link.getAttribute('spy-data')}`);
    setLinkColorScroll.observe(document.querySelector(`#${link.getAttribute('spy-data')}`))
});


setLinkColor('one');
