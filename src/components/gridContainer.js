export const gridContainer = (context = document.body, columns)=>{
  let div = document.createElement('div')
      div.style.display = 'grid'
      div.style.gridTemplateColumns = "1fr ".repeat(parseInt(columns))
      div.style.gridTemplateRows = 'auto'
      div.style.minHeight = 'inherit'
      context.appendChild(div)
      return div
}