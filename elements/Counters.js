import Counter from "./Counter.js"

const Counters = () => {

  const element = document.createElement("div")
        element.classList.add("counters")

  const counterLabels = ["Homens", "Mulheres", "Crianças"]
  
  counterLabels.forEach(label => {
    const counter = Counter(label)
    element.appendChild(counter)
  })

  return element      
}
export default Counters