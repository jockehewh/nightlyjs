import { paragraph } from './paragraph.js'
import { title } from './title'
import './css/fullheight.css'
import { gridElement } from './gridelements.js'
import { gridContainer } from './gridContainer.js'
import { container } from './container.js'
export const SPAFullHeight = (parent, pageContent)=>{
  let linkCount = 0
  const navbar = document.createElement('nav')
  const navbarList = document.createElement('ul')
  const body = document.createElement('main')
  navbar.appendChild(navbarList)
  pageContent.forEach(async section=>{
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
      if(Array.isArray(section.body.body)){
      let sectionWrapper = gridContainer(div, 3)
        section.body.body.forEach(article=>{
          gridElement(sectionWrapper, article)
        })
      }else if(typeof section.body.body === 'string'){
        let sectionWrapper = container(div)
        paragraph(sectionWrapper, section.body.body)
      }else{
        let sectionWrapper = container(div)
        paragraph(sectionWrapper, section.body.body)
      }
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
  return body
}