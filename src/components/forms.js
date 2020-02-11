export const createForm = (parent, id = 'form', method = 'post', action= '/')=>{
  let form = document.createElement('form')
  let submitBtn = document.createElement('button')
  form.id = id
  form.method = method
  form.action = action
  submitBtn.innerText = 'submit'
  form.appendChild(submitBtn)
  appendToFormOrBody(parent, form)
  return form
}

export const addTextInput = (parent, type, name, label = name)=>{
  let inputContainer = document.createElement('label')
  let input = document.createElement('input')
  input.setAttribute('type', type)
  input.setAttribute('name', name)
  input.setAttribute('id', name)
  inputContainer.textContent = label+' '
  inputContainer.appendChild(input)
  appendToFormOrBody(parent, inputContainer)
  return input
}

export const addFileInput = (parent, acceptedFileMIMEType, multiple = false)=>{
  let input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('id', "file-upload")
  input.setAttribute('accept', acceptedFileMIMEType)
  input.setAttribute('multiple', multiple)
  appendToFormOrBody(parent, input)
  return input
}

export const addSelect = (parent, name, options)=>{
  let selectContainer = document.createElement('div')
  let selectElement = document.createElement('select')
  let label = document.createElement('label')
  label.textContent = name
  selectContainer.appendChild(label)
  selectContainer.appendChild(selectElement)
  options.forEach(option=>{
    if(option !== undefined){
      let opt = document.createElement('option')
      opt.textContent = option
      opt.value = option
      selectElement.appendChild(opt)
    }
  })
  appendToFormOrBody(parent, selectContainer)
  return selectElement
}

export const addCheckboxInput = (parent, name, options)=>{
  let checkboxContainer = document.createElement('div')
  checkboxContainer.id = name
  options.forEach(option =>{
    let inputContainer = document.createElement('label')
    let input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', option)
    input.value = option
    inputContainer.textContent = option+' '
    inputContainer.appendChild(input)
    checkboxContainer.appendChild(inputContainer)
  })
  appendToFormOrBody(parent, checkboxContainer)
  return checkboxContainer
}

const appendToFormOrBody = (parent, formElement) =>{
  if(parent.nodeName === "FORM"){
    parent.insertBefore(formElement, parent.querySelector('button'))
  }else{
    parent.appendChild(formElement)
  }
}