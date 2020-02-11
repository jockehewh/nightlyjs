import title from '../components/title'
import navbar from '../components/navbar'
import {click, dblclick} from '../components/events/events.js'
//import {SPAFullHeight} from '../components/SPAFullHeight'
import '../components/css/main.css'
import {SPAMinHeight} from '../components/SPAMinHeight'
import { createForm, addTextInput, addFileInput, addSelect, addCheckboxInput } from '../components/forms'
import { showLoader } from '../components/loader'
import { container } from '../components/container'
function main(){
  const loaodingElement = showLoader()
  setTimeout(function(){loaodingElement.remove()}, 10000)
  const divone = container(document.body)
  const divtwo = container(document.body)
 fetch('./body.json').then(res=>{
   return res.json()
 }).then(async t =>{
   const appBody = await SPAMinHeight(divone, t)
   SPAMinHeight(divtwo, t)
  /*  const newForm = await createForm(appBody.querySelector('.section-1'))
  addTextInput(newForm, 'text', 'name')
  addTextInput(newForm, 'textarea', 'name2')
  addFileInput(newForm, 'image/*', true)
  addSelect(newForm, 'selectit', ['selects oAtions','selectsCtions','selects oVions','selects oBtions'])
  addCheckboxInput(newForm, 'chekboxeez', [1,2,3,4,5,6,7,8,9]) */
 }).catch(err=>{
   console.log(err)
 })
 /* SPAFullHeight([
  {
  "title": "titreA",
  "body": {
    "title": "titreA1",
    "body": [
  {
    "title": "Multi Example Title", 
    "body": "This is a multiple elements display from a json file"
  },
  {
    "title": "Multi Example Title", 
    "body": "This is a multiple elements display from a json file"
  },
  {
    "title": "Multi Example Title", 
    "body": "This is a multiple elements display from a json file"
  },
  {
    "title": "Multi Example Title", 
    "body": "This is a multiple elements display from a json file"
  },
  {
    "title": "Multi Example Title", 
    "body": "This is a multiple elements display from a json file"
  },
  {
    "title": "Multi Example Title", 
    "body": "This is a multiple elements display from a json file"
  }
]
    }
  },
  {
  "title": "titreB",
  "body": "text only paragraphe"
  },
  {
  "title": "titreC",
  "body": {
    "title": "titreC1",
    "body": "paragraphe 123"
    }
  }
]) */
}
window.onload = main()
