const request = require('request')
const cheerio = require('cheerio')
let jobs = []
request('https://realpython.github.io/fake-jobs/',cb)
function cb(err,response,html) {
    if(err) {
        console.log(err)
    } else {
        handlehtml(response,html)
    }
}
function cb2(err,response,html) {
    if(err) {
        console.log(err)
    } else {
        handlepage2(html)
    }
}
function handlehtml(response,html) {
    let selectTool = cheerio.load(html)
    let cards = selectTool("a.card-footer-item")
    let applyCards = []
    for(let i=0;i<cards.length;i++) {
        if(cards[i].children[0].data == "Apply") {
            let link = cards[i].attribs.href
            applyCards.push(link)
            request(link,cb2)
        }
    }
    // console.log(applyCards)
    // console.log(cards[1].children[0].data)
}

function handlepage2(html) {
    let selectTool = cheerio.load(html)
    let jobTitle = selectTool("h1.title.is-2")
    jobs.push(jobTitle)
    console.log(jobTitle[0].children[0].data)
}