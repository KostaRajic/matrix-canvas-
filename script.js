// const createPracticeFunction = (cookieName, cookieValue, days) => {

//     if (days) {
//         let date = new Date()
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
//         let newDate = '; expires=' + date.toUTCString()
    
//     document.cookie = cookieName + '=' + cookieValue + newDate + '; path=/';
// }
// }

// const testCookie = (cookieName) => {
//     let vrednost = false;
//     let arrCookie = document.cookie.split(';');


//     arrCookie.forEach((item) => {
//         console.log(item)
//         const cookieS = item.split('=')
//         console.log(cookieS[0])
//         if (cookieName == cookieS[0]) {
//             vrednost = cookieS[1]
//         }
//         //console.log(cookieS)
//     })
//     console.log(arrCookie)
//     return vrednost;
// }

// const dCookie = (cookieName) => {
//     createPracticeFunction(cookieName, '', -1)
// }


// console.log(document.cookie);
// console.log(testCookie('test11'));
// console.log(testCookie('test33'));
// createPracticeFunction('test1', 'newS Cookie', 30);
// dCookie('test20')


