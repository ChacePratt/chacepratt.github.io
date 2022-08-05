var darkMode = false;

function refreshPage() {
    location.reload()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function bgColorChange(mode) {
    let startColor;
    let endColor;
    let currentColor;
    let done = false;

    if (mode == true) {
        startColor = 50
        endColor = 35

        currentColor = startColor;

        done = false
    } else {
        startColor = 255
        endColor = 220

        currentColor = startColor;

        done = false
    }

    while (mode == darkMode) {
        if (mode == true) {
            // dark

            // kinda bad system lol
            
            document.body.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`

            if (currentColor > endColor && done == false) {
                currentColor -= 1
                document.body.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`
            } else if (currentColor == endColor) {
                done = true;         
            }

            if (currentColor < startColor && done == true) {
                currentColor += 1
                document.body.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`
            } else if (currentColor == startColor) {
                done = false;
            }

            
        } else {
            // light

            document.body.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`

            if (currentColor > endColor && done == false) {
                currentColor -= 5
                document.body.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`
            } else if (currentColor == endColor) {
                done = true;         
            }

            if (currentColor < startColor && done == true) {
                currentColor += 5
                document.body.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`
            } else if (currentColor == startColor) {
                done = false;
            }
        }
        await sleep(1000);
    }
}

function changeColorMode() {
    if (darkMode) {
        // light mode
        darkMode = false;
        document.getElementById('page-title').style.color = "#0e0e0e"

        for (let i = 0; i < document.getElementsByClassName('subtitle').length; i++) {
            document.getElementsByClassName('subtitle')[i].style.color = "#0e0e0e"
        }

        for (let i = 0; i < document.getElementsByClassName('title-left').length; i++) {
            document.getElementsByClassName('title-left')[i].style.color = "#0e0e0e"
        }

        for (let i = 0; i < document.getElementsByClassName('title-mid').length; i++) {
            document.getElementsByClassName('title-mid')[i].style.color = "#0e0e0e"
        }

        for (let i = 0; i < document.getElementsByClassName('project').length; i++) {
            document.getElementsByClassName('project')[i].style.backgroundColor = 'grey'
            document.getElementsByClassName('project')[i].style.border = '3px solid #484848'
        }

        for (let i = 0; i < document.getElementsByClassName('textSection').length; i++) {
            document.getElementsByClassName('textSection')[i].style.backgroundColor = 'grey'
            document.getElementsByClassName('textSection')[i].style.border = '3px solid #484848'
        }

        document.getElementById('colorModeButton').textContent = "Dark Mode"
        document.body.style.backgroundColor = "white"

        bgColorChange(darkMode)
    } else {
        // dark mode
        darkMode = true;
        document.getElementById('page-title').style.color = "white"

        for (let i = 0; i < document.getElementsByClassName('subtitle').length; i++) {
            document.getElementsByClassName('subtitle')[i].style.color = "white"
        }

        for (let i = 0; i < document.getElementsByClassName('title-left').length; i++) {
            document.getElementsByClassName('title-left')[i].style.color = "white"
        }

        for (let i = 0; i < document.getElementsByClassName('title-mid').length; i++) {
            document.getElementsByClassName('title-mid')[i].style.color = "white"
        }

        for (let i = 0; i < document.getElementsByClassName('project').length; i++) {
            document.getElementsByClassName('project')[i].style.backgroundColor = '#141414'
            document.getElementsByClassName('project')[i].style.border = '3px solid #484848'
        }

        for (let i = 0; i < document.getElementsByClassName('textSection').length; i++) {
            document.getElementsByClassName('textSection')[i].style.backgroundColor = '#141414'
            document.getElementsByClassName('textSection')[i].style.border = '3px solid #484848'
        }

        document.getElementById('colorModeButton').textContent = "Light Mode"
        document.body.style.backgroundColor = "#323232"

        bgColorChange(darkMode)
    }
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = false;
    changeColorMode()
} else {
    darkMode = true;
    changeColorMode()
}