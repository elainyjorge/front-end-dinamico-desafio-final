
const Checkbox = (id, name, labelText) => {
  const element = document.createElement("div")
  element.id = "consent-input"

  const inputCheckbox = document.createElement("input")
  inputCheckbox.type = "checkbox"
  inputCheckbox.id = id
  inputCheckbox.name = name
  inputCheckbox.checked = true

  const labelCheckbox = document.createElement("label");
  labelCheckbox.htmlFor = id
  labelCheckbox.id = "consent-label"
  labelCheckbox.textContent = labelText;

  element.append(inputCheckbox)
  element.append(labelCheckbox)

  return element
}
export default Checkbox