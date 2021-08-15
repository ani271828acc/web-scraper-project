const axios = require('axios')
const usrname = "patil.aniruddhav.che20"
const pssword = "amaterasu"
const URL = 'https://www.placement.iitbhu.ac.in/recruiters?page_size=180'
const token = '09ADKZGYpcmitCkORFII4cAHqB_Uu4FTcSYU8W04O3bk0qcbvPv_pvL_gGHGPcNOdpyw__bM0A6CtSc89I6YOTmKo'
const Data = {
    username: usrname,
    password: pssword
}
const config = {
	headers: {
		"Referer": "https://www.scrapingbee.com/",
		"Referrer-Policy": "strict-origin-when-cross-origin"
	},
}
axios({
    url: URL,
    method: 'post',
    data: Data
}).then(function (response) {
    console.log(response.data)
}).catch(
    function (err) {
        console.log(err)
    }
)
