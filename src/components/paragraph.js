import './css/paragraph.css'
export const paragraph = (parent, content)=>{
  const p = document.createElement('p')
  p.innerText = content
  parent.appendChild(p)
  return p
}