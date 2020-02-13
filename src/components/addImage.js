export const addImage = (context, imgurl, description = "image")=>{
  let image = document.createElement('img')
  image.src = imgurl
  image.alt = description
  context.appendChild(image)
  return image
}