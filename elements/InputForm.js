
const InputForm = (type, id, name, placeholder) => {
  const element = document.createElement("input")
  element.classList.add("input-form")
  element.type = type
  element.id = id
  element.name = name
  element.placeholder = placeholder

  
  return element
}
export default InputForm