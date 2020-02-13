export const gridContainer = (parent = document.body, columns)=>{
  let div = document.createElement('div')
      div.style.display = 'grid'
      div.style.gridTemplateColumns = "1fr ".repeat(parseInt(columns))
      div.style.gridTemplateRows = 'auto'
      div.style.minHeight = 'inherit'
      parent.appendChild(div)
      return div
}