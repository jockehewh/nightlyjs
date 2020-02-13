import { paragraph } from './paragraph.js'
import { title } from './title'
import {gridElement} from './gridelements.js'
import './css/minheight.css'
import { gridContainer } from './gridContainer.js'
import { container } from './container.js'
export const SPAMinHeight = (context, pageContent)=>{
  let linkCount = 0
  const navbar = document.createElement('nav')
  const navbarList = document.createElement('ul')
  const body = document.createElement('main')
  navbar.appendChild(navbarList)
  pageContent.forEach(async section=>{
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
  context.appendChild(navbar)
  context.appendChild(body)
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
  body.querySelector('div').style.display = 'block'
  return body
}