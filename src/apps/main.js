
import '../components/css/main.css'
import {SPAMinHeight} from '../components/SPAMinHeight'
import { showLoader } from '../components/loader'
import { SPAFullHeight } from '../components/SPAFullHeight'
function main(){
  const loadingApp = showLoader()
  var appDesign = Math.floor(Math.random()*2+1)
  fetch('./body.json').then(res=>{
   return res.json()
 }).then(t =>{
   loadingApp.remove()
   if(appDesign === 1)return document.app = SPAFullHeight(document.body, t)
   if(appDesign === 2)return document.app = SPAMinHeight(document.body, t)
 }).catch(err=>{
   console.log(err)
 })
}
window.onload = main()
