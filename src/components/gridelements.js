import { paragraph } from "./paragraph"
import { title } from "./title"
import { addImage } from './addImage.js'

export const gridElement = (context, element)=>{
  let outerDiv = document.createElement('div')
  if(/^(:img:)/.test(element.body)){
    let imgurl = element.body.split(':img:')
    let orangetitle = title(outerDiv, element.title, 4)
    orangetitle.style.color = 'var(--orange)'
    let img = addImage(outerDiv, imgurl[1], 'new component exemple')
      outerDiv.style.gridColumnStart = 1,
      outerDiv.style.gridColumnEnd = 3
      outerDiv.style.textAlign = "unset"
      //context.parentElement.style.minHeight = 'min-content'
  }else if(/(:img:)$/.test(element.body)){
      let details = element.body.split(':img:')
      title(outerDiv, element.title, 3)
      paragraph(outerDiv, details[0])
      let imgurl = details[1]
      let img = addImage(outerDiv, imgurl)
      context.parentElement.style.minHeight = 'min-content'
    }else{
      title(outerDiv, element.title, 3)
      paragraph(outerDiv, element.body)
    }
    outerDiv.classList.add('is-grid-element')
  outerDiv.style.color = '#00cc66'
  context.appendChild(outerDiv)
  return outerDiv
  }

