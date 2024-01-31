
const Counter = (label) => {

  const element = document.createElement("div")
        element.classList.add("counter")

  const labelElement = document.createElement("label")
  labelElement.textContent = label

  const input = document.createElement("input")
  input.type ="number"
  input.id = label.toLowerCase()
  input.value = "0"

  const buttonGroup = document.createElement("div")
  buttonGroup.classList.add("button-group")
  
  const minusButton = document.createElement("button");
  minusButton.classList.add("input-group__button--small")
  minusButton.textContent = "-"
  buttonGroup.append(minusButton)
      
  const plusButton = document.createElement("button");
  plusButton.classList.add("input-group__button--small")
  plusButton.textContent = "+"
  buttonGroup.append(plusButton)   
  
  minusButton.addEventListener("click", () => {
    const currentValue = parseInt(input.value);
    if (currentValue > 0) {
      input.value = currentValue - 1;
    }
  });

  plusButton.addEventListener("click", () => {
    const currentValue = parseInt(input.value);
    input.value = currentValue + 1;
  });
  
  element.append(labelElement)
  element.append(input)
  element.append(buttonGroup)

  return element
}
export default Counter