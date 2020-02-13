export const container = (context, size = 'auto') =>{
  let div = document.createElement('div')
  div.style.width = size
  context.appendChild(div)
  return div
}