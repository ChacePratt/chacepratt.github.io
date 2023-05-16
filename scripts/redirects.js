function openGithubPage(repoName) {
    window.open("https://github.com/Gitko01/" + repoName, '_blank')
}

function openPage(page) {
    window.open(page)
}

function redirectGithub(repoName, replace) {
    if (replace) {
        window.location.replace("https://github.com/Gitko01/" + repoName)
    } else {
        window.location.href = "https://github.com/Gitko01/" + repoName
    }
}

function redirect(page, replace) {
    if (replace) {
        window.location.replace(page)
    } else {
        window.location.href = page
    }
}
