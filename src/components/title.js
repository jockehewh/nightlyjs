import './css/title.css'
export const title = (parent, text, size = 1)=>{
  let title = document.createElement('h'+size)
  title.innerText = text
  parent.appendChild(title)
  return title
}