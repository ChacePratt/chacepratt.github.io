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
            'border': '3px solid #2c2c2c'
        },
        'wikiTextSection': {
            'type': 'class-styles',
            'color': 'white',
            'background-color': '#696969',
            'border': '3px solid #2c2c2c'
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
            'border': '3px solid #2c2c2c'
        },
        'projectDivider': {
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
        }
    },

    'white': {
        'body': {
            'type': 'tag-styles',
            'background-color': '#e4e4e4'
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
            'background-color': '#cdcdcd',
            'border': '3px solid #ffffff'
        },
        'wikiTextSection': {
            'type': 'class-styles',
            'color': '#0d0d0d',
            'background-color': '#cdcdcd',
            'border': '3px solid #ffffff'
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
            'background-color': '#cdcdcd',
            'border': '3px solid #ffffff'
        },
        'projectDivider': {
            'type': 'class-styles',
            'border-top': '3px solid #818181'
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
        }
    }
};

if (getCookie('theme') != null) {
    theme = getCookie('theme');
    setTheme();
    //console.log('Set website theme to ' + theme + ' based on your saved settings')
} else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
    } else {
        theme = 'white';
    }
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
    // set theme button
    if (theme == 'dark') {
        document.getElementById('themeIcon').setAttribute('src', "/assets/images/icons/sun.png")
    } else if (theme == 'white') {
        document.getElementById('themeIcon').setAttribute('src', "/assets/images/icons/moon.png")
    }

    var themeSettings = themes[theme];
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
        theme = 'white';
    }
    saveTheme(theme);
}