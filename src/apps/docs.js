import '../components/css/docs.css'
import {container} from '../components/container'
import { title } from '../components/title'
import { navigationLink } from '../components/linkmaker'
import { paragraph } from '../components/paragraph'

function docs(){
  let main = document.createElement('main')
  let menuDiv = container(main, '25%', 'auto')
  let docDiv = container(main, '100%', 'auto')
  menuDiv.classList.add('menu')
  docDiv.classList.add('docdiv')
  title(docDiv, 'Nightly documentation')
  title(docDiv, 'why the contextual approach?', 2)
  let intro = paragraph(docDiv, `Because i \u2764 functional programming, i have created Nightly.js.
  Nightly.js's mindset is to turn any component into a function.
  The best thing is that if you know Javascript you know Nightly too.
  Have good walk-through :)`)
   intro.classList.add('intro')
  docobj.components.forEach(modul =>{
    let currentLink = navigationLink(menuDiv, modul.name, '#'+modul.name)
    let currentContainer = container(docDiv, 'auto', '150px')
    currentContainer.id = modul.name
    let currentTitle = title(currentContainer, modul.name, 4)
    paragraph(currentContainer, modul.description)
    let paramspan = document.createElement('span')
    let opening = document.createElement('span')
    let closing = document.createElement('span')
    opening.innerText = '('
    closing.innerText = ')'
    paramspan.innerText = modul.parameters.join(', ')
    paramspan.classList.add('params')
    currentTitle.appendChild(opening)
    currentTitle.appendChild(paramspan)
    currentTitle.appendChild(closing)
  })
  document.body.appendChild(main)
  docobj.servers.forEach(server =>{
    let currentLink = navigationLink(menuDiv, server.name, '#'+server.name)
    let currentContainer = container(docDiv, 'auto', '150px')
    currentContainer.id = server.name
    let currentTitle = title(currentContainer, server.name+'.js', 2)
    paragraph(currentContainer, server.description)
  })
}

const docobj = {
  components: [
    {
      name: 'addImage',
      description: 'add an image to the provided context.',
      parameters: ['DOMElement: context', 'String: ImageURL', 'String: imageALT']
    },
    {
      name: 'container',
      description: 'add a container to the provided context.',
      parameters: ['DOMElement: context', 'String: width', 'String: height']
    },
    {
      name: 'gridContainer',
      description: 'add a grid container to the provided context with a classname of ".is-grid".',
      parameters: ['DOMElement: context', 'Integer: number of columns']
    },
    {
      name: 'gridElement',
      description: 'add a grid element to the provided context with a classname of ".is-grid-element".',
      parameters: ['DOMElement: context', '{title: "", body: ""}']
    },
    {
      name: 'linkmaker.js > linkElements',
      description: 'link to DOM elements together for in-page navigation.',
      parameters: ['DOMElement: link', 'DOMElement: target', 'String: label']
    },
    {
      name: 'linkmaker.js > navigationLink',
      description: 'add a link element to the provided context.',
      parameters: ['DOMElement: context', 'String: visible text', 'String: destination link']
    },
    {
      name: 'loader',
      description: 'add big div over the document.',
      parameters: ['no parameters']
    },
    {
      name: 'navbar',
      description: 'create a navigation bar and add it to the context.',
      parameters: ['DOMElement: context', '[String]: an array of words']
    },
    {
      name: 'paragraph',
      description: 'add a paragraph to the provided context.',
      parameters: ['DOMElement: context', 'String: text']
    },
    {
      name: 'title',
      description: 'add an header component to the provided context.',
      parameters: ['DOMElement: context', 'String: text', 'Integer: Header size']
    },
    {
      name: 'forms.js > createForm',
      description: 'create a form and add to the provided context.',
      parameters: ['DOMElement: context', 'String: formID', 'String: formMethod', 'String: formAction']
    },
    {
      name: 'forms.js > addTextInput',
      description: 'add a text input to the provided context.',
      parameters: ['DOMElement: context', 'String: type', 'String: name', 'String: label']
    },
    {
      name: 'forms.js > addFileInput',
      description: 'add a file input to the provided context.',
      parameters: ['DOMElement: context', 'String: name', 'String: acceptedFileMIMEType', 'Boolean: multiple']
    },
    {
      name: 'forms.js > addSelect',
      description: 'add a select element to the provided context.',
      parameters: ['DOMElement: context', 'String: name', '[String]: array of options']
    },
    {
      name: 'forms.js > addCheckboxInput',
      description: 'add checkbox input to the provided context.',
      parameters: ['DOMElement: context', 'String: name', '[String]: array of options']
    }
  ],
  servers: [
    {
      name: 'nightly.js',
      description: 'runs a webpack devServer with hot module reloading.'
    },
    {
      name: 'nightly-prod.js',
      description: 'runs webpack then serve the dist folder.'
    }
  ]
}

window.onload = docs()