const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://use.typekit.net/lux8adg.css'
  link.rel = 'stylesheet'
    
  document.head.appendChild(link)

  const poynter = new FontFaceObserver('poynter-oldstyle-display')

  poynter.load().then(() => {
    document.documentElement.classList.add('aktiv-grotesk')
  })
}

export default Fonts