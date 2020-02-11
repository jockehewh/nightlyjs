export const container = (parent, size = 'auto') =>{
  let div = document.createElement('div')
  div.style.width = size
  parent.appendChild(div)
  return div
}