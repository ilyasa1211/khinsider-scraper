
var message = "Choose:\n1. MP3\n2. FLAC"
var option = {}
switch (prompt(message)) {
    case "1":
        option.number = 8;
        option.type = 'MP3';
        break;
    case "2":
        option.number = 9;
        option.type = 'FLAC';
        break;
    default: throw new Error('Wrong Input');
}
console.log(`GETTING LINKS FOR ${option.type}`)
var links;
firstFetch().then(value => {
    links = value;
    console.info("type show() to show display list of links")
})

function show() {
    Array.from(document.body.children).forEach(child => child.remove())
    const pre = document.createElement('pre')

    const copyButton = document.createElement('input')
    const copyMessage = document.createElement('p')
    copyMessage.textContent = 'Copied!'
    copyMessage.setAttribute('id', 'copy-message')
    copyMessage.style.visibility = 'hidden'
    pre.textContent = links.join('\n')

    copyButton.setAttribute('type', 'button')
    copyButton.setAttribute('id', 'copy-button')
    copyButton.setAttribute('value', 'Copy to clipboard')

    copyButton.onclick = async function (e) {
        navigator.clipboard.writeText(pre.textContent)
        copyMessage.style.visibility = 'visible'
        setTimeout(() => {
            copyMessage.style.visibility = 'hidden'
        }, 2000);

    }
    document.body.appendChild(pre)
    document.body.appendChild(copyButton)
    document.body.appendChild(copyMessage)
}

async function htmlFetch(url) {
    const response = await fetch(url);
    const html = await response.text();

    return new DOMParser().parseFromString(html, 'text/html')
}

async function firstFetch() {
    const doc = await htmlFetch(window.location.href);
    const songlist = doc.getElementById("songlist");
    const listFirstUrl = getAllUrlFromTheSongList(songlist)
    const listLastUrl = await lastFetch(listFirstUrl)

    return listLastUrl
}

/**
 * 
 * @param {Array} url 
 * @returns Array
 */
async function lastFetch(url) {
    const download = []
    url.forEach(async function (value, index) {
        const doc = await htmlFetch(value)
        const pageContent = doc.getElementById('pageContent')
        const linkDownload = pageContent.children[option.number].children[0].getAttribute('href')
        download.push(linkDownload)
    })

    return download
}

/**
 * 
 * @param {Document} songlist 
 * @returns 
 */
function getAllUrlFromTheSongList(songlist) {
    const temptxt = []
    Array.from(songlist.children[0].children).forEach(function (element, index) {
        if (index === 0) return;
        temptxt.push(element.children[2].children[0].href)
    })
    temptxt.pop()

    return temptxt
}


