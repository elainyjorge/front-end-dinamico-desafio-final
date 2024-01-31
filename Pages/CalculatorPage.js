import Header from '../elements/Header.js';
import Counters from '../elements/Counters.js';
import ResultPage from './ResultPage.js';

const CalculatorPage = () => {
	const element = document.createElement('div');
	element.classList.add('calculator-page')
	
  const h3 = Header(3, 'Precisa de uma ajudinha com o churrasco? :) <br> <br> Quantas pessoas vão participar?');
	element.append(h3);
	
  const counters = Counters()
	element.append(counters)
	
  const row = document.createElement("div")
	row.classList.add("row")
	element.append(row);
	
	const defaultButton = document.createElement("button")
  defaultButton.classList.add("default-button")
  defaultButton.textContent = "Calcular"
  row.append(defaultButton)
	
	defaultButton.addEventListener('click', (event)=> {
    event.preventDefault()
    
    localStorage.setItem('Homens', document.getElementById('homens').value)
    localStorage.setItem('Mulheres', document.getElementById('mulheres').value)
    localStorage.setItem('Crianças', document.getElementById('crianças').value)
    
    const resultPage = ResultPage()
    const calculatorPageContainer = document.querySelector('.calculator-page')
    calculatorPageContainer.remove()
    const resultPageContainer = document.querySelector('.calculator');
    resultPageContainer.append(resultPage);

  })
	
	return element;
};
export default CalculatorPage;
