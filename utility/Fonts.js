const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Brygada+1918:wght@500&display=swap'
  link.rel = 'stylesheet'
    
  document.head.appendChild(link)

  const poynter = new FontFaceObserver('Brygada-1918')

  poynter.load().then(() => {
    document.documentElement.classList.add('Brygada-1918')
  })
}

export default Fonts