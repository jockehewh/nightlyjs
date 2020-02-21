
import '../components/css/main.css'
import {SPAMinHeight} from '../components/SPAMinHeight'
import { showLoader } from '../components/loader'
import { SPAFullHeight } from '../components/SPAFullHeight'
import { navigationLink } from '../components/linkmaker'
async function main(){
  const loadingApp = showLoader()
  var appDesign = Math.floor(Math.random()*2+1)
  fetch('./body.json').then(res=>{
   return res.json()
 }).then(async t =>{
   loadingApp.remove()
   if(appDesign === 1)return document.app = await SPAFullHeight(document.body, t)
   if(appDesign === 2)return document.app = await SPAMinHeight(document.body, t)
 }).then((app)=>{
  let sectionOneText = app.querySelector('.section-0 p').innerText.split('').map(c=>{
    let span = document.createElement('span')
    span.innerText = c
    return span
  })
  app.querySelector('.section-0 p').innerText = ''
  sectionOneText.forEach(element=>{
    app.querySelector('.section-0 p').appendChild(element)
  })
  let li = document.createElement('li')
  let docsLink = navigationLink(li, 'Docs', '/docs.html')
  document.querySelector('nav ul').appendChild(li)

}).catch(err=>{
   console.log(err)
 })
}
window.onload = main()
