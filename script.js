console.log('Test')

function start() {
    const text_area = document.querySelector('#regexp')
    const inputlist = document.querySelectorAll('.sample-input')
    let buttons = document.querySelectorAll('.answer')
    let text_area_sizes = [text_area.clientHeight, text_area.clientWidth]
    
    inputlist[0].addEventListener('input', event => {
        console.log(event.target.value)

        change_button_data(buttons[0], determine_button_color
            (text_area.clientHeight, parseInt(inputlist[0].value)),
            determine_button_text(text_area.clientHeight, parseInt(inputlist[0].value)))

        
        // if (text_area.clientHeight == parseInt(inputlist[0].value)) {
        //     buttons[0].style.background = 'green'
        //     buttons[0].textContent = 'Match!'
        // } else {
        //     buttons[0].style.background = 'palevioletred'
        //     buttons[0].textContent = 'No match!'
        // }
    })
    
    inputlist[1].addEventListener('input', event => {
        console.log(event.target.value)
        
        change_button_data(buttons[1], determine_button_color
            (text_area.clientWidth, parseInt(inputlist[1].value)),
            determine_button_text(text_area.clientWidth, parseInt(inputlist[1].value)))

        
        // if (text_area.clientWidth == parseInt(inputlist[1].value)) {
        //     buttons[1].style.background = 'green'
        //     buttons[1].textContent = 'Match!'
        // } else {
        //     buttons[1].style.background = 'palevioletred'
        //     buttons[1].textContent = 'No match!'
        // }
    })

    
    text_area.addEventListener('focus', (event) => {
        console.log(event.target.clientHeight)
        console.log(event.target.clientWidth)
        
        console.log(inputlist[0].value)
        console.log(inputlist[1].value)
        
        change_button_data(buttons[0], determine_button_color
            (event.target.clientHeight, parseInt(inputlist[0].value)),
            determine_button_text(event.target.clientHeight, parseInt(inputlist[0].value)))

        change_button_data(buttons[1], determine_button_color
            (event.target.clientWidth, parseInt(inputlist[1].value)),
            determine_button_text(event.target.clientWidth, parseInt(inputlist[1].value)))
    

        // if (parseInt(inputlist[0].value) == event.target.clientHeight) {
        //     buttons[0].style.background = 'green'
        //     buttons[0].textContent = 'Match!'
        // } else {
        //     buttons[0].style.background = 'palevioletred'
        //     buttons[0].textContent = 'No match!'
        // }
        // if (parseInt(inputlist[1].value) == event.target.clientWidth) {
        //     buttons[1].style.background = 'green'
        //     buttons[1].textContent = 'Match!'
        // } else {
        //     buttons[1].style.background = 'palevioletred'
        //     buttons[1].textContent = 'No match!'
        // }
    } )
}

function determine_button_color(text_area_size, input_text) {
    if (text_area_size == input_text) {
        return 'green'
    }
    else {
        return 'palevioletred'
    }
}

function determine_button_text(text_area_size, input_text) {
    if (text_area_size == input_text) {
        return 'Match!'
    }
    else {
        return 'No match!'
    }
}

function change_button_data(button, color, text) {
    button.style.background = color
    button.textContent = text
}

document.addEventListener('DOMContentLoaded', start);