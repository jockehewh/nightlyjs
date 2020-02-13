import { paragraph } from "./paragraph"
import { title } from "./title"
import { addImage } from './addImage.js'

export const gridElement = (context, element)=>{
  let outerDiv = document.createElement('div')
  if(/^(:img:)/.test(element.body)){
    let imgurl = element.body.split(':img:')
    title(outerDiv, element.title, 6)
    let img = addImage(outerDiv, imgurl[1], 'new component exemple')
    console.dir(img)
      outerDiv.style.gridColumnStart = 1,
      outerDiv.style.gridColumnEnd = 3
      outerDiv.style.textAlign = "unset"
      context.parentElement.style.minHeight = 'min-content'
  }else if(/(:img:)$/.test(element.body)){
      let details = element.body.split(':img:')
      title(outerDiv, element.title, 3)
      console.log(details)
      paragraph(outerDiv, details[0])
      let imgurl = details[1]
      let img = addImage(outerDiv, imgurl)
      context.parentElement.style.minHeight = 'min-content'
      /* if(img.width > context.clientWidth*2){
      outerDiv.style.gridColumnStart = 1,
      outerDiv.style.gridColumnEnd = 3
      outerDiv.style.textAlign = "unset"
      }else{
        img.width = context.clientWidth+'px'
      } */
    }else{
      title(outerDiv, element.title, 3)
      paragraph(outerDiv, element.body)
    }
    outerDiv.classList.add('is-grid-element')
  outerDiv.style.color = '#00cc66'
  context.appendChild(outerDiv)
  return outerDiv
  }

