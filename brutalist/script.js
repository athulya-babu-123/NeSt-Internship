// Kinetic typography: cycle through words with CSS pulse
const words = ['DESIGN','CODE','SPEED','IMPACT','BRUTAL']
let i = 0
const kt = document.getElementById('kt-words')
function pulseWord(){
  kt.classList.remove('pulse')
  void kt.offsetWidth
  kt.textContent = words[i]
  kt.style.animation = 'pulseIn 900ms ease'
  kt.style.boxShadow = '0 6px 40px rgba(0,255,153,0.12)'
  setTimeout(()=>{ kt.style.animation=''; kt.style.boxShadow=''; },900)
  i = (i+1) % words.length
}

// initial
setTimeout(pulseWord,200)
setInterval(pulseWord,1400)

// add click interaction: immediate pulse
kt && kt.addEventListener('click', ()=>{ pulseWord() })
