import { paragraph } from './paragraph.js'
import { title } from './title'
import './css/fullheight.css'
import { gridElement, squareElements } from './gridelements.js'
export const SPAFullHeight = (parent, pageContent)=>{
  let linkCount = 0
  const navbar = document.createElement('nav')
  const navbarList = document.createElement('ul')
  const body = document.createElement('main')
  navbar.appendChild(navbarList)
  pageContent.forEach(section=>{
    let li = document.createElement('li')
    let a = document.createElement('a')
    let div = document.createElement('div')
    li.appendChild(a)
    a.href = "#"+section.title
    a.innerText = section.title
    a.dataset.linkTo = linkCount
    navbarList.appendChild(li)
    if(typeof section.body === 'string'){
      paragraph(div, section.body)
      div.id = section.title
      div.dataset.isLink = linkCount
      body.appendChild(div)
    }else if(typeof section.body === 'object'){
      title(div, section.body.title, 1)
      let sectionWrapper = document.createElement('div')
      sectionWrapper.style.display = 'grid'
      sectionWrapper.style.gridTemplateColumns = "1fr 1fr 1fr"
      sectionWrapper.style.gridTemplateRows = 'auto'
      if(Array.isArray(section.body.body)){
        section.body.body.forEach(article=>{
          gridElement(sectionWrapper, article)
        })
      }else{
        paragraph(sectionWrapper, section.body.body)
      }
      div.appendChild(sectionWrapper)
      div.id = section.title
      div.dataset.isLink = linkCount
      body.appendChild(div)
    }
    div.classList.add('section-'+linkCount)
    linkCount++
  })
  parent.appendChild(navbar)
  parent.appendChild(body)
  linkCount = 0
  squareElements(document.querySelectorAll('.is-grid-element'))
  return body
}