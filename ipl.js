const request = require('request')
const cheerio = require('cheerio')
const URL = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard'
const baseURL = 'https://www.espncricinfo.com'

request(URL,cb)
function cb(error, response, html) {
    if(error) {
        console.log(error)
    } else {
        handle(html)
    }
}
function handle(html) {
    let $ = cheerio.load(html)
    let widgetLinks = $(".widget-tab-link")
    let comLink = $(widgetLinks[2]).attr("href")
    comLink = baseURL + comLink
    request(comLink, cb2)
}

function cb2(error, response, html) {
    if(error) {
        console.log(error)
    } else {
        handle2(html)
    }
}

function handle2(html) {
    let $ = cheerio.load(html)
    let comm = $("div.match-comment-long-text")
    let text = $(comm[1]).text()
    let htmData = $(comm[1]).html()
    console.log(text)
    console.log(htmData)
}