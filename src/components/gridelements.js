import { paragraph } from "./paragraph"
import { title } from "./title"

export const gridElement = (parent, element)=>{
  let outerDiv = document.createElement('div')
  title(outerDiv, element.title, 3)
  paragraph(outerDiv, element.body)
  outerDiv.classList.add('is-grid-element')
  outerDiv.style.color = '#00cc66'
  parent.appendChild(outerDiv)
  return outerDiv
}
