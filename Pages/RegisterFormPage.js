import Header from "../elements/Header.js"
import Form from "../elements/Form.js"
import CalculatorPage from "./CalculatorPage.js"

const RegisterFormPage = () => {
  const element = document.createElement("div")
  element.classList.add("register-form-page")

  const inputFormGroup = document.createElement("div")
  inputFormGroup.classList.add("row", "input-form-group")
  element.append(inputFormGroup)  

  const h3 = Header(3, "Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!")
  h3.id = "header-form"
  inputFormGroup.append(h3)

  const form = Form()
  inputFormGroup.append(form)

  const row = document.createElement("div")
  row.classList.add("row")
  inputFormGroup.append(row)
  
  const defaultButton = document.createElement("button")
  defaultButton.classList.add("default-button")
  defaultButton.textContent = "Cadastrar"
  row.append(defaultButton)

  const navContainer = document.createElement("div")
  navContainer.id = "nav-container"
  inputFormGroup.append(navContainer)

  const buttonForm1 = document.createElement("button")
  buttonForm1.id = "back-nav"
  buttonForm1.textContent = "Voltar"
  navContainer.append(buttonForm1) 

  const buttonForm2 = document.createElement("button")
  buttonForm2.id = "skip-register"
  buttonForm2.textContent = "Pular"
  navContainer.append(buttonForm2)

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  };
  
  const isValidCEP = (cep) => {
    const cepPattern = /^[0-9]{8}$/;
    return cepPattern.test(cep.trim());
  };

  defaultButton.addEventListener("click", (event) => {
      event.preventDefault()
      const nameInput = element.querySelector("#name")
      const emailInput = element.querySelector("#email")
      const postalCodeInput = element.querySelector("#postal-code")
  
      let isValid = true
  
      if (!nameInput.value.trim()){
        alert('Por favor, preencha o campo nome.')
        isValid = false
      }
  
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        alert('Por favor, insira um e-mail válido.');
        isValid = false;
        emailInput.focus()
        return
      } 
  
      if (!postalCodeInput.value.trim() || !isValidCEP(postalCodeInput.value.trim())) {
        alert('Por favor, insira um CEP válido.');
        isValid = false;
        postalCodeInput.focus()
        return
      }
  
      if (isValid) {
        alert("Formulário enviado com sucesso!");

        const calculatorPage = CalculatorPage();
        const registerFormPageContainer = document.querySelector('.register-form-page');
        registerFormPageContainer.remove(); // Remove a página de registro
        const calculatorPageContainer = document.querySelector('.calculator');
        calculatorPageContainer.append(calculatorPage); // Adiciona a página do calculador
      }
  
      localStorage.setItem('name', nameInput.value)
      localStorage.setItem('email', emailInput.value)
      localStorage.setItem('postalCode', postalCodeInput.value)

    } )

  return element
}

export default RegisterFormPage