

    // Assemble string

// input = [
//     "a*c**",
//     "**cd*",
//     "a*cd*"
// ]
// result = "a#cd#"

// function assembleString(array){
//     if(!array.length) return ''
//     let word = Array.from(array[0])
//     array.forEach(i => {
//         for (j = 0; j < i.length; j++) {
//             if(i[j] !== word[j]  && i[j] !== "*") {
//                 word[j] = i[j]
//             }
//         }
//     })
//     return word.map(i => i === '*' ? '#' : i).join('')
// }


    //Meeting

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// res = "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
//
//     function meeting(s) {
//         const arr = s.toUpperCase().split(';').map(i => i.split(':').reverse())
//
//         return arr
//             .sort()
//             .map(i =>  `(${i[0]}, ${i[1]})`)
//             .join('')
//     }
