
import '../components/css/main.css'
import {SPAMinHeight} from '../components/SPAMinHeight'
import { showLoader } from '../components/loader'
import { container } from '../components/container'
function main(){
  const loadingApp = showLoader()
  const divone = container(document.body)
 fetch('./body.json').then(res=>{
   return res.json()
 }).then(t =>{
   const appBody = SPAMinHeight(divone, t)
   loadingApp.remove()
 }).catch(err=>{
   console.log(err)
 })
}
window.onload = main()
