import { paragraph } from "./paragraph"
import { title } from "./title"

export const gridElement = (parent, element)=>{
  let outerDiv = document.createElement('div')
  title(outerDiv, element.title, 3)
  paragraph(outerDiv, element.body)
  outerDiv.classList.add('is-grid-element')
  parent.appendChild(outerDiv)
  return outerDiv
}

export const squareElements = (elementList)=>{
  elementList.forEach(element=>{
    element.style.height = element.clientWidth+"px"
  })
}