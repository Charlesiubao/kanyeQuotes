document.getElementById('button').addEventListener('click', () => {
    fetch('https://api.kanye.rest').then((response) => {
        response.json().then((data) => {
        
            const quotes = data.quote
            const newDiv = document.createElement('div')
            const actualQuote = document.createElement('h3')
            const sayings = document.querySelector('#quotes')

            actualQuote.innerText = quotes

            sayings.append(newDiv)
            newDiv.append(actualQuote)

        })
    })
})

