const display = document.getElementById("display")
const showToDisplay = (input) => {
    display.value += input
}
const clearDisplay = () => {
    display.value = ''
}
const calculate = () => {
    display.value = eval(display.value)
}