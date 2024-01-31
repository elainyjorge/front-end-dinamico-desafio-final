import Checkbox from "./Checkbox.js"
import InputForm from "./InputForm.js"

const Form = () => {
  const element = document.createElement("form")

  const inputName = InputForm("text", "name", "name", "Digite seu nome")
  const inputEmail = InputForm("email", "email", "email", "Digite seu email")
  const inputCep = InputForm("number", "postal-code", "postalCode", "Digite seu CEP")
  const checkbox = Checkbox("consent-checkbox", "optIn", "Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.")
  element.append(inputName)
  element.append(inputEmail)
  element.append(inputCep)
  element.append(checkbox)

  return element
}

export default Form