var cookies = document.cookie;
var theme = 'dark';

// theme name -> class -> type + style settings
var themes = {
    'dark': {
        'body': {
            'type': 'tag-styles',
            'background-color': '#525252'
        },
        'header': {
            'type': 'class-styles',
            'background-color': '#3a3a3a',
            'border-bottom': '3px solid #444444'
        },
        'pageTitle': {
            'type': 'class-styles',
            'color': 'white'
        },
        'wikiTitle': {
            'type': 'class-styles',
            'color': 'white'
        },
        'pageSubtitle': {
            'type': 'class-styles',
            'color': 'white'
        },
        'pageSectionTitle': {
            'type': 'class-styles',
            'color': 'white'
        },
        'textSection': {
            'type': 'class-styles',
            'color': 'white',
            'background-color': '#696969',
            'border': '3px solid #2c2c2c',
            'box-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.3)'
        },
        'wikiTextSection': {
            'type': 'class-styles',
            'color': 'white',
            'background-color': '#696969',
            'border': '3px solid #2c2c2c',
            'box-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.3)'
        },
        'projectTitle': {
            'type': 'class-styles',
            'color': 'white'
        },
        'projectSubtitle': {
            'type': 'class-styles',
            'color': 'white'
        },
        'projectDownloadsTitle': {
            'type': 'class-styles',
            'color': 'white'
        },
        'project': {
            'type': 'class-styles',
            'background-color': '#696969',
            'border': '3px solid #2c2c2c',
            'box-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.3)'
        },
        'projectDivider': {
            'type': 'class-styles',
            'border-top': '3px solid #353535'
        },
        'projectDownloadsDivider': {
            'type': 'class-styles',
            'border-top': '3px solid #353535'
        },
        'githubButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/github_white.png'
        },
        'steamButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/steam_logo_white.png'
        },
        'curseForgeButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/curseforge_white.png'
        },
        'modrinthButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/modrinth_white.png'
        },
        'homeHeaderButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/home_white.png'
        },
        'projectButton': {
            'type': 'class-styles',
            'border-color': '#353535'
        },
        'projectDownloadButton': {
            'type': 'class-styles',
            'border-color': '#353535'
        },
        'subWikiButton': {
            'type': 'class-styles',
            'border-color': '#353535'
        },
        'link': {
            'type': 'class-styles',
            'color': '#ffffff'
        }
    },

    'white': {
        'body': {
            'type': 'tag-styles',
            'background-color': '#f7f7f7'
        },
        'header': {
            'type': 'class-styles',
            'background-color': '#fafafa',
            'border-bottom': '3px solid #f0f0f0'
        },
        'pageTitle': {
            'type': 'class-styles',
            'color': '#0d0d0d'
        },
        'wikiTitle': {
            'type': 'class-styles',
            'color': '#0d0d0d'
        },
        'pageSubtitle': {
            'type': 'class-styles',
            'color': '#0d0d0d'
        },
        'pageSectionTitle': {
            'type': 'class-styles',
            'color': '#0d0d0d'
        },
        'textSection': {
            'type': 'class-styles',
            'color': '#0d0d0d',
            'background-color': '#f0f0f0',
            'border': '3px solid #ffffff',
            'box-shadow': '0 0 10px 0 rgba(143, 143, 143, 0.5)'
        },
        'wikiTextSection': {
            'type': 'class-styles',
            'color': '#0d0d0d',
            'background-color': '#f0f0f0',
            'border': '3px solid #ffffff',
            'box-shadow': '0 0 10px 0 rgba(143, 143, 143, 0.5)'
        },
        'projectTitle': {
            'type': 'class-styles',
            'color': '#0d0d0d'
        },
        'projectSubtitle': {
            'type': 'class-styles',
            'color': '#0d0d0d'
        },
        'projectDownloadsTitle': {
            'type': 'class-styles',
            'color': '#0d0d0d'
        },
        'project': {
            'type': 'class-styles',
            'background-color': '#f0f0f0',
            'border': '3px solid #ffffff',
            'box-shadow': '0 0 10px 0 rgba(143, 143, 143, 0.5)'
        },
        'projectDivider': {
            'type': 'class-styles',
            'border-top': '3px solid #ffffff'
        },
        'projectDownloadsDivider': {
            'type': 'class-styles',
            'border-top': '3px solid #ffffff'
        },
        'githubButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/github.png'
        },
        'steamButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/steam_logo.png'
        },
        'curseForgeButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/curseforge.png'
        },
        'modrinthButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/modrinth.png'
        },
        'homeHeaderButtonImg': {
            'type': 'class-attributes',
            'src': '/assets/images/icons/home.png'
        },
        'projectButton': {
            'type': 'class-styles',
            'border-color': '#c6c6c6'
        },
        'projectDownloadButton': {
            'type': 'class-styles',
            'border-color': '#c6c6c6'
        },
        'subWikiButton': {
            'type': 'class-styles',
            'border-color': '#c6c6c6'
        },
        'link': {
            'type': 'class-styles',
            'color': 'black'
        }
    }
};

if (getCookie('theme') != null) {
    theme = getCookie('theme');
    setTheme();
    //console.log('Set website theme to ' + theme + ' based on your saved settings')
} else {
    theme = 'auto';
    setCookie('theme', theme, true, 365);
    setTheme();
    //console.log('Set website theme to ' + theme);
}

function setCookie(name, value, canExpire, expirationDays) {
    if (canExpire) {
        const d = new Date();
        d.setTime(d.getTime() + (expirationDays*24*60*60*1000));

        let expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";

    } else {
        document.cookie = name + "=" + value + ";path=/";
    }
}

function getCookie(name) {
    let formattedName = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(formattedName) == 0) {
        return c.substring(formattedName.length, c.length);
      }
    }
    return null;
}

// THEMES
function setTheme() {
    let selectedTheme = '';
    let themeIcon = document.getElementById('themeIcon');

    // set theme button and class list
    if (theme == 'dark') {
        themeIcon.setAttribute('src', "/assets/images/icons/moon.png")
        themeIcon.title = "Current theme: dark";
        document.documentElement.classList.add("dark");
        selectedTheme = 'dark';
    } else if (theme == 'white') {
        themeIcon.setAttribute('src', "/assets/images/icons/sun.png")
        themeIcon.title = "Current theme: light";
        document.documentElement.classList.remove("dark");
        selectedTheme = 'white';
    } else if (theme == 'auto') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeIcon.setAttribute('src', "/assets/images/icons/auto_white.png")
            themeIcon.title = "Current theme: auto (dark)";
            document.documentElement.classList.add("dark");
            selectedTheme = 'dark';
        } else {
            themeIcon.setAttribute('src', "/assets/images/icons/auto.png")
            themeIcon.title = "Current theme: auto (light)";
            document.documentElement.classList.remove("dark");
            selectedTheme = 'white';
        }
    }

    var themeSettings = themes[selectedTheme];
    for (const [elemIdentifier, settings] of Object.entries(themeSettings)) {
        var elems = null;
        var elem = null;
        var elemType = settings['type'];

        var editingAttributes = null;

        if (elemType == 'tag-styles') {
            elems = document.getElementsByTagName(elemIdentifier);
            editingAttributes = false;

        } else if (elemType == 'class-styles') {
            elems = document.getElementsByClassName(elemIdentifier);
            editingAttributes = false;

        } else if (elemType == 'id-styles') {
            elem = document.getElementById(elemIdentifier);
            for (const [cssSetting, cssValue] of Object.entries(settings)) {
                if (cssSetting != 'type') {
                    elem.style[cssSetting] = cssValue;
                    //console.log('Set ' + cssSetting + ' of ' + elem.tagName + ' to ' + cssValue);
                }
            }
            editingAttributes = false;

        } else if (elemType == 'id-attributes') {
            elem = document.getElementById(elemIdentifier);
            editingAttributes = true;
            for (const [attribute, attributeValue] of Object.entries(settings)) {
                if (attribute != 'type') {
                    elem.setAttribute(attribute, attributeValue);
                    //console.log('Set attribute ' + attribute + ' of ' + elem.tagName + ' to ' + attributeValue);
                }
            }
        } else if (elemType == 'class-attributes') {
            elems = document.getElementsByClassName(elemIdentifier);
            editingAttributes = true;
        }

        if (elems != null && !editingAttributes) {
            for (var i = 0; i < elems.length; i++) {
                elem = elems[i];
                for (const [cssSetting, cssValue] of Object.entries(settings)) {
                    if (cssSetting != 'type') {
                        elem.style[cssSetting] = cssValue;
                        //console.log('Set ' + cssSetting + ' of ' + elem.tagName + ' to ' + cssValue);
                    }
                }
            }

        } else if (elems != null && editingAttributes) {
            for (var i = 0; i < elems.length; i++) {
                elem = elems[i];
                for (const [attribute, attributeValue] of Object.entries(settings)) {
                    if (attribute != 'type') {
                        elem.setAttribute(attribute, attributeValue);
                        //console.log('Set attribute ' + attribute + ' of ' + elem.tagName + ' to ' + attributeValue);
                    }
                }
            }
        }
    }
}

function saveTheme(theme) {
    setCookie('theme', theme, true, 365);
    setTheme();
}

function toggleTheme() {
    if (theme == 'white') {
        theme = 'dark';
    } else if (theme == 'dark') {
        theme = 'auto';
    } else if (theme == 'auto') {
        theme = 'white';
    }
    saveTheme(theme);
}