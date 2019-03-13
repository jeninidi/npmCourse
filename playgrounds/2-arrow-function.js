const square = function (x) {
return x*x
}
console.log(square(3))


const square2 = (y) => {
return y*y
}
console.log(square2(3))


const square3 = (z) => z*z
console.log(square3(5))

const event = {
    name: 'Birthday party',
    guestList: ['Andrew', 'Jane', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()

