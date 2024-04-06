// Iteration 1: Names and Input
let hacker1 = "Carlos"
console.log(`El nombre del conductor es ${hacker1}`)

let hacker2 = "Firefox"
console.log(`El nombre del navegante es ${hacker2}`)

// Iteration 2: Conditionals

let hacker1Length = hacker1.length
let hacker2Length = hacker2.length
if (hacker1Length > hacker2Length) {
  console.log(
    `El conductor tiene el nombre más largo, tiene ${hacker1Length} caracteres.`
  )
} else if (hacker1Length < hacker2Length) {
  console.log(
    `Parece que el navegante tiene el nombre más largo, tiene ${hacker2Length} caracteres.`
  )
} else {
  console.log(
    `¡Vaya, ambos tienen nombres igual de largos, ${hacker1Length} caracteres!.`
  )
}

// Iteration 3: Loops
// 3.1 Imprime todos los caracteres del nombre del conductor, separados por un espacio y en mayúsculas, por ejemplo "J O H N"
let hacker1UpperCase = hacker1.toUpperCase()
let hacker1Separated = ""
for (let i = 0; i < hacker1UpperCase.length; i++) {
  hacker1Separated += hacker1UpperCase[i] + " "
}
console.log(hacker1Separated)

// 3.2 Imprima todos los caracteres del nombre del navegador, en orden inverso.es decir, " nhoJ"
let hacker2Inverso = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Inverso += hacker2[i]
}
console.log(hacker2Inverso)

// 3.3 Según el orden lexicográfico de las cadenas, imprime:
// * El nombre del conductor va primero.
// * Yo, el navegador va primero definitivamente.
// * ¿Qué? ¿Los dos tienen el mismo nombre?
let strings = [
  "El nombre del conductor va primero.",
  "Yo, el navegador va primero definitivamente.",
  "¿Qué? ¿Los dos tienen el mismo nombre?",
].sort()
for (let i = 0; i < strings.length; i++) {
  console.log(strings[i])
}

// Bono 1: Ve al generador de lorem ipsum y:
// * Genera 3 párrafos. Guarda el texto en una variable de tipo cadena.
// * Haz que tu programa cuente el número de palabras de la cadena.
// * Haz que tu programa cuente el número de veces que aparece la palabra latina et.

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis vitae magna at molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere nisl et felis sodales eleifend. Praesent auctor diam ut nibh varius, eu pharetra urna fermentum. Nullam nulla quam, rutrum finibus faucibus ut, tincidunt quis elit. Cras non venenatis ex, sed pharetra nunc. Nulla eu ornare eros, ac molestie felis. Sed a tempor libero. Aliquam eu neque ipsum. Duis a accumsan diam, nec lacinia nibh. Suspendisse porta venenatis lacus eget molestie.

Nulla urna velit, iaculis commodo lobortis eu, mollis vitae tortor. Donec sit amet massa ultrices, semper turpis vehicula, maximus dolor. Donec at rutrum est. Ut id facilisis augue. Nunc volutpat ante vel ex sodales aliquam. Praesent vitae rutrum nisl. Ut at ornare tortor. Proin et faucibus lacus, eu pellentesque neque. Sed id molestie nisl. Nulla et hendrerit elit. Aliquam tempus vel tortor ut pellentesque. Aenean mi enim, luctus eget suscipit ullamcorper, consectetur vel metus. Donec facilisis venenatis mi, ac cursus erat sodales eget. Quisque eget sodales leo.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet vitae lectus nec luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse lobortis lobortis metus. Etiam in ipsum eleifend neque mattis vehicula sed eget mauris. Quisque placerat massa consequat dui porta finibus. Fusce a diam vel nibh vulputate mollis ac vel sem. Praesent congue arcu in eros sollicitudin, sed ullamcorper lacus facilisis. Fusce a quam sit amet enim efficitur viverra. Vestibulum ut elementum ligula, at aliquet risus. Sed luctus orci sed maximus vestibulum.`
const wordNum = loremIpsum.split(/\s/).length
const etNum = loremIpsum.search("et")
console.log("Número de palabras:", wordNum)
console.log("Número de veces que aparece la palabra 'et':", etNum)

// Bono 2: Crea una nueva variable phraseToCheck y haz que contenga algún valor de cadena. Escribe un código que compruebe si el valor que asignamos a esta variable es un palíndromo.

// Frases para testear:
// * "No mames, se mamón" // No es palíndromo (por la tilde)
// * "Tienes mucho pelo" // No es palíndromo
// * "Di clases al Cid" // Es palíndromo
// * "Lavar ese Raval" // Es palíndromo
// * "Atar a la rata" // Es palíndromo

const phraseToCheck = "Atar a la rata" // Es palíndromo
const cleanPhrase = phraseToCheck.toLowerCase().replace(/[\s,]/g, "")
const phraseLength = phraseToCheck.length

let isPalindrome = true
for (let i = 0; i < phraseToCheck.length; i++) {
  const fromStart = phraseToCheck.charAt(i)
  const fromEnd = phraseToCheck.charAt(phraseLength - i - 1)

  if (fromStart !== fromEnd) {
    isPalindrome = false
    break
  }
}
console.log(isPalindrome)
