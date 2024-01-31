import Header from "../elements/Header.js"
import CalculatorPage from "./CalculatorPage.js"

const ResultPage = () => {
  
  const element = document.createElement('div')
  element.classList.add('result-total-guest')

  const h3 = Header(3, 'Confira a lista para o seu churrasco!')
  element.append(h3)

  const totalGuest = document.createElement('p')
  totalGuest.id = "total-guest"
  totalGuest.textContent = "0 convidado"
  element.append(totalGuest)

  const guestListMan = document.createElement('span')
  guestListMan.classList.add('guest-list')
  guestListMan.textContent = '0 Homens'
  element.append(guestListMan)

  const guestListWoman = document.createElement('span')
  guestListWoman.classList.add('guest-list')
  guestListWoman.textContent = '0 Mulheres'
  element.append(guestListWoman)

  const guestListChild = document.createElement('span')
  guestListChild.classList.add('guest-list')
  guestListChild.textContent = '0 Crianças'
  element.append(guestListChild)

  const inputGroupResult = document.createElement("div")
  inputGroupResult.classList.add("input-group-result")
  element.append(inputGroupResult)

  const headerResult = document.createElement("div")
  headerResult.id = "header-result"
  inputGroupResult.append(headerResult)

  const itemHeader = document.createElement('p')
  itemHeader.textContent = "ITEM"
  headerResult.append(itemHeader)

  const amount = document.createElement('p')
  amount.textContent = "QUANTIDADE"
  headerResult.append(amount)

  const ul = document.createElement('ul')
  ul.classList.add('results')
  inputGroupResult.append(ul)

  const carne = document.createElement('li')
  const strongCarne = document.createElement('strong')
  strongCarne.textContent = 'Carne'
  const spanCarne = document.createElement('span')
  spanCarne.textContent = '0.000 kg'
  carne.appendChild(strongCarne)
  carne.appendChild(spanCarne)
  ul.appendChild(carne)

  const paoDeAlho = document.createElement('li')
  const strongPao = document.createElement('strong')
  strongPao.textContent = 'Pão de alho'
  const spanPao = document.createElement('span')
  spanPao.textContent = '0 unidade'
  paoDeAlho.appendChild(strongPao)
  paoDeAlho.appendChild(spanPao)
  ul.appendChild(paoDeAlho)

  const carvao = document.createElement('li')
  const strongCarvao = document.createElement('strong')
  strongCarvao.textContent = 'Carvão'
  const spanCarvao = document.createElement('span')
  spanCarvao.textContent = '0.000 kg'
  carvao.appendChild(strongCarvao)
  carvao.appendChild(spanCarvao)
  ul.appendChild(carvao)

  const sal = document.createElement('li')
  const strongSal = document.createElement('strong')
  strongSal.textContent = 'Sal'
  const spanSal = document.createElement('span')
  spanSal.textContent = '0.000 kg'
  sal.appendChild(strongSal)
  sal.appendChild(spanSal)
  ul.appendChild(sal)

  const gelo = document.createElement('li')
  const strongGelo = document.createElement('strong')
  strongGelo.textContent = 'Gelo'
  const spanGelo = document.createElement('span')
  spanGelo.textContent = '0.000 kg'
  gelo.appendChild(strongGelo)
  gelo.appendChild(spanGelo)
  ul.appendChild(gelo)

  const refrigerante = document.createElement('li')
  const strongRefri = document.createElement('strong')
  strongRefri.textContent = 'Refrigerante'
  const spanRefri = document.createElement('span')
  spanRefri.textContent = '0.000 ml'
  refrigerante.appendChild(strongRefri)
  refrigerante.appendChild(spanRefri)
  ul.appendChild(refrigerante)

  const agua = document.createElement('li')
  const strongAgua = document.createElement('strong')
  strongAgua.textContent = 'Água'
  const spanAgua = document.createElement('span')
  spanAgua.textContent = '0.000 ml'
  agua.appendChild(strongAgua)
  agua.appendChild(spanAgua)
  ul.appendChild(agua)

  const row = document.createElement("div")
	row.classList.add("row")
	element.append(row);
	
	const defaultButton = document.createElement("button")
  defaultButton.classList.add("default-button")
  defaultButton.textContent = "Novo cálculo"
  row.append(defaultButton)
  
  
  const homens = parseInt(localStorage.getItem('Homens'))
  const mulheres = parseInt(localStorage.getItem('Mulheres'))
  const criancas = parseInt(localStorage.getItem('Crianças'))
  const convidados = homens + mulheres + criancas
  
  
  totalGuest.textContent = `${homens + mulheres + criancas} convidados`
  guestListMan.textContent = homens == 1 ? `${homens} Homem` : `${homens} Homens`
  guestListWoman.textContent = mulheres == 1 ? `${mulheres} Mulher` : `${mulheres} Mulheres`
  guestListChild.textContent = criancas == 1 ? `${criancas} Criança` : `${criancas} Crianças`

  carne.querySelector('span').textContent = `${((0.4 * homens) + (0.32 * mulheres) + (0.2 * criancas)).toFixed(2)} kg`
    paoDeAlho.querySelector('span').textContent = `${((2 * (homens + mulheres)) + (1 * criancas))} unidades`
    carvao.querySelector('span').textContent = `${(1 * convidados)} kg`
    sal.querySelector('span').textContent = `${(0.04 * convidados).toFixed(2)} kg`
    gelo.querySelector('span').textContent = `${((5 * convidados) / 10).toFixed(1)} kg`
    refrigerante.querySelector('span').textContent = `${((2 * convidados) / 5).toFixed(3)} ml`
    agua.querySelector('span').textContent = `${((1 * convidados) / 5).toFixed(3)} ml`
  
  defaultButton.addEventListener('click', (event)=> {
  event.preventDefault()
  
  const calculatorPage = CalculatorPage();
  const resultPageContainer = document.querySelector('.result-total-guest')
  resultPageContainer.remove()
  const calculatorPageContainer = document.querySelector('.calculator');
      calculatorPageContainer.append(calculatorPage);
  })

  return element
  



}
export default ResultPage