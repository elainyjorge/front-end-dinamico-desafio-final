import ResultPage from './Pages/ResultPage.js';
import CalculatorPage from './Pages/CalculatorPage.js';
import RegisterFormPage from './Pages/RegisterFormPage.js';

const Calculator = () => {
	const element = document.createElement('div');
	element.classList.add('calculator');

  let registerFormPage = RegisterFormPage()
	let calculatorPage 
	let resultPage 
	
  element.append(registerFormPage)

	return element;
};
export default Calculator;
