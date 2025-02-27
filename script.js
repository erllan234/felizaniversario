const btnelementopen=document.querySelector('#open')
const btnelementclose=document.querySelector('#close')




btnelementopen.addEventListener('click', ()=> {
    btnelementopen.disabled=true
    btnelementclose.disabled=false
    const coverElement = document.querySelector('.cover' )

    coverElement.classList.add('open-cover')

     
      
   
    
  const audio= new Audio('FNAF - Kids Cheering (Yeaaaaaay)  Sound Effect.mp3');
  audio.play();

  
    setTimeout(()=>{
    coverElement.style.zIndex= -1
    const upElements=document.querySelector('.emotes')
    upElements.classList.add('emotes-up')
    
    const paperElement= document.querySelector('.papel')
    const wordElement= document.querySelector('.happy')
    wordElement.classList.add('happy-word')
    paperElement.classList.remove('close-papel')
    paperElement.classList.add('open-papel')
    const ballonElemnet = document.querySelector('.balão')
    ballonElemnet.style.display ='block'
    const link=document.querySelector('.clique')
    link.classList.remove('clique-open')
    
    },1000)
    setTimeout(() => {if (audio) {
      audio.pause(); // Pausa o áudio
    }  },20000);
    console.log('holasd');
    
})

btnelementclose.addEventListener('click', ()=> {
  btnelementopen.disabled=false
  btnelementclose.disabled=true


      
  

     const upElements=document.querySelector('.emotes')
       upElements.classList.remove('emotes-up')

  
     const coverElement = document.querySelector('.cover' )
     const wordElement= document.querySelector('.happy')
       wordElement.classList.remove('happy-word')
  
     const paperElement= document.querySelector('.papel')
       paperElement.classList.remove('open-papel')
       paperElement.classList.add('close-papel')

    
     setTimeout(()=>{
       coverElement.style.zIndex= -0
       coverElement.classList.remove('open-cover')
      const ballonElemnet = document.querySelector('.balão')
    ballonElemnet.style.display ='none'

    const link=document.querySelector('.clique')
    link.classList.add('clique-open')
    
    },1000)

    audio.pause();
    
    console.log('holasd');
    

    
})