import title from '../components/title'
import navbar from '../components/navbar'
import {click, dblclick} from '../components/events/events.js'
import {SPAFullHeight} from '../components/SPAFullHeight'
import '../components/css/main.css'
//import {SPAMinHeight} from '../components/SPAMinHeight'
import { createForm, addTextInput, addFileInput, addSelect, addCheckboxInput } from '../components/forms'
import { showLoader } from '../components/loader'
import { container } from '../components/container'
function main(){
  const loaodingElement = showLoader()
  const divone = container(document.body)
 fetch('./body.json').then(res=>{
   return res.json()
 }).then(t =>{
   const appBody = SPAFullHeight(divone, t)
   loaodingElement.remove()
 }).catch(err=>{
   console.log(err)
 })
}
window.onload = main()
