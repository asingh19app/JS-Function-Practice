// Your Code Here
// nested area of if and if-else staments for review


/* note that for nested if-else statements are tricky. 
// in order for the entire program to work variables have to be defined, both options do not have be 
nested in the same {}
the left path must have its { open until the options for it is over then it must be closed 
and same goes for the right path
*/

// let firstAnswer  = window.prompt('Do you head left or right?')


// if(firstAnswer === 'left') {
//     let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it or continue on your path?')

//     if(secondAnswer === 'follow') {
//         let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')

//         if(thirdAnswer === 'stay') {
//             let fourthAnswer = window.alert('You live happily amongst the cats for the rest of your days.')
//         }

//         else if(thirdAnswer === 'alert'){
//             let fourthAnswer = ('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
//         }
//     }

//     else if(secondAnswer === 'continue') {
//         let thirdAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?')

//         if(thirdAnswer === 'staircase') {
//             let fourthAnswer = window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever. ')
//         }

//         else if(thirdAnswer === 'ladder') {
//             let fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
//         }
//     }
// }

// if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?')

//     if(secondAnswer === 'past') {
//         let thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run?')

//         if(thirdAnswer=== 'stay') {
//             let fourthAnswer = window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
//         }
//         else if(thirdAnswer=== 'run') {
//             let fourthAnswer = window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
//         }
//     }

//     else if(secondAnswer === 'away') {
//         let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')

//         if(thirdAnswer === 'draw') {
//             let fourthAnswer = window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.')
//         }

//         else if(thirdAnswer === 'pick') {
//             let fourthAnswer = window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
//         }
//     }
// }

function start () {
    let firstAnswer = window.prompt('Do you head left or right?')

    if(firstAnswer === 'left') {
        goLeft()
    }

    else if(firstAnswer === 'right') {
        goRight()
    }
}

function goLeft() {
    let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you `follow` it, `continue` on your path, or go `back`?')

     if(secondAnswer === 'follow') {
        catworld()
    }

    else if(secondAnswer === 'continue')
    stairsorladders()

    if(secondAnswer === 'back'){
        start()
    }
}

function catworld() {
    let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you `staying`, but you wonder if you should `alert` the world to this magical safe haven, or go `back`.')
    if(thirdAnswer === 'stay'){
        let fourthAnswer = window.alert('You live happily amongst the cats for the rest of your days.')
    }
    else if(thirdAnswer === 'alert') {
        let fourthAnswer = window.alert('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
    }

    if(thirdAnswer === 'back') {
        goLeft()
    }

}

function stairsorladders() {
    let thirdAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding `staircase` and a much quicker, but rickety-looking, `ladder` that lead up towards the light, or go `back`. Which do you take?')
   
    if(thirdAnswer === 'staircase') {
        let fourthAnswer = window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
    }

    else if(thirdAnswer === 'ladder') {
        let fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
    }

    if(thirdAnswer === 'back') {
        goLeft()
    }
}

//right side 
function goRight() {
    let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Do you go `past` the dragon or `away` from it, or teleport `back`?')

    if(secondAnswer=== 'past') {
        drago()
    }

    else if(secondAnswer === 'away') {
       passo()
        
    }
    if(secondAnswer === 'back') {
        start()
    }

}

function drago() {
let thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to `stay`, to `run`, or go `back`:')
if(thirdAnswer === 'stay') {
    let fourthAnswer = window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
}
else if(thirdAnswer === 'run') {
    let fourthAnswer = window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
}

if(thirdAnswer === 'back') {
    goRight()
}

}

function passo() {
       let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either `draw` it,`pick` it, or go `back`. Which do you do?')
       if(thirdAnswer === 'draw'){
        let fourthAnswer = window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.')
       }

       else if(thirdAnswer === 'pick'){
        let fourthAnswer = window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
       }

       if(thirdAnswer === 'back'){
        goRight()
       }
}



start()