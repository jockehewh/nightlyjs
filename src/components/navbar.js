export const navbar = (parent, l)=>{
  let navbar = document.createElement('nav')
  l.forEach(link=>{
    let li = document.createElement('li')
    let a = document.createElement('a')
    li.appendChild(a)
    a.innerText = link
    a.href = '#'
    navbar.appendChild(li)
  })
  parent.appendChild(navbar)
  return navbar
}