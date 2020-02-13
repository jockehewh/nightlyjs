import { paragraph } from "./paragraph"
import { title } from "./title"

export const gridElement = (context, element)=>{
  let outerDiv = document.createElement('div')
  if(/(:img:)/.test(element.body)){
    let imgurl = element.body.split(':img:').join('')
    let img = document.createElement('img')
    img.src = imgurl
    title(outerDiv, element.title, 6)
    outerDiv.appendChild(img)
    outerDiv.style.gridColumnStart = 1,
    outerDiv.style.gridColumnEnd = 3
    outerDiv.style.textAlign = "unset"
  }else{
    title(outerDiv, element.title, 3)
    paragraph(outerDiv, element.body)
  }
  
  outerDiv.classList.add('is-grid-element')
  outerDiv.style.color = '#00cc66'
  context.appendChild(outerDiv)
  return outerDiv
}
