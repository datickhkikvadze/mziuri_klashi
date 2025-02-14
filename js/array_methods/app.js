/*
! 1. shift() => შლის მასივვის პირველ ელემენტს
! 2. unshift() => ამატებს პირველ ელემენტს
! 3. pop() => შლის ბოლო ელემენტს
! 4. push() => ამატებს მასივის ბოლო ელემენტს

! 5. join() => მასივი გადაჰყავს სტრიქონიში და შეგიძლია დაამატო ნებისმიერი
! ინფორმაცია, მათ სორის სასვენი ნიშნები
! 6. include() => აერთიანებს მასივებს
! 7.concat () => აერთიანებს მასივებს 
! 8.reverse () => ათვლას იწყებს ბოლო მასივიდან
! 9.slice () => გამოაქვს კონკ მითითებული ინფორმაცია
!დასაწყებად ინდექსი და დასასრული ინდექსი
! 10.splice () =>
    !1 შლის ელემენტებს 
    !2 შლის და ამატებს   
    !3 მხოლოდ ამატებს
*/


// const symbols = ['🖕', '🙏', '👊', '💋', '💤']

// console.log(symbols)

// const del_element = symbols.shift()

// const add_element = symbols.unshift('🤞')


// const add_element = symbols.pop()

// console.log(symbols)

// const del_element = symbols.push('🤞')

// console.log(symbols)

// const users = ['ana','luka','gela','valera']
// console.log(users);
// console.log(users.include('an'));
// console.log(users.reverse());

// const extra_arrays = users.contact(symbols)

// console.log(extra_arrays);

// const join_user = users.join(' and ')



// const numbers = [1,2,3,1,2,3,1,2,3,1,2,3,]

// console.log(numbers)

// const slice_el = numbers.slice(0,2)
// const slice_el = numbers.slice(2)
// const slice_el = numbers.slice(-2)

// console.log(slice_el)

// const del_element = numbers.splice(0,2)

// log(del_element, numbers)



// const edit_element = numbers.splice(0,2,true,132)

// console.log(edit_element)

// const add_element = numbers.splice(0,0,true,132)

// console.log(numbers)

const people = ['👨', '👩', '👴', '👵', '👶', '👦']
const activity = ['🚣', '🏌', '🏸', '🏋', '🤽', '🤼']
const numbers = [1, 2, 3, 4, 5, 6]


let oneBigEl = people.concat(numbers,activity)
oneBigEl = oneBigEl.reverse()


console.log(oneBigEl)

const lastThree = oneBigEl.slice(-3)

// console.log(lastThree)


const del_el = oneBigEl.splice(3,6)



// console.log(del_el)



const edit_el = oneBigEl.splice(6, 3, "davit", "Cxikvadze", 13)

console.log(oneBigEl)