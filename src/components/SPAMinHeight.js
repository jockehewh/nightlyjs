import { paragraph } from './paragraph.js'
import { title } from './title'
import {gridElement, squareElements} from './gridelements.js'
import './css/minheight.css'
export const SPAMinHeight = (parent, pageContent)=>{
  let linkCount = 0
  const navbar = document.createElement('nav')
  const navbarList = document.createElement('ul')
  const body = document.createElement('main')
  navbar.appendChild(navbarList)
  pageContent.forEach(section=>{
    let li = document.createElement('li')
    let a = document.createElement('a')
    let div = document.createElement('div')
    div.style.display = 'none'
    li.appendChild(a)
    a.href = section.title
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
  navbar.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault()
      body.querySelectorAll('[data-is-link]').forEach(b=>{
        if(b.dataset.isLink === e.target.dataset.linkTo){
          b.style.display = 'block'
        }else{
          b.style.display = 'none'
        }
      })
    })
  })
  linkCount = 0
  body.querySelector('main div').style.display = 'block'
  squareElements(document.querySelectorAll('.is-grid-element'))
  return body
}