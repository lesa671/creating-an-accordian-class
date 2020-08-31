// const main = document.querySelector('main')
let myAccordian = new AccordianComponent('click to see inside', 'Here\'s a bunch of text inside the Accordian')
myAccordian.appendTo(document.querySelector('main'))

for (let index = 0; index < users.length; index++) {
    let curUser = users[index]
    let curAcc = new AccordianComponent(curUser.name, curUser)
    curAcc.appendTo(document.querySelector('main'))
    // or
    // curAcc.appendTo(main)
}





// or another way of writing the loop

// users.forEach((user) => {
//     let curAcc = new AccordianComponent(user.name, user)
//     curAcc.appendTo(document.querySelector('main'))
// })