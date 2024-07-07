//const input = "SSRSRRR"


const revenge = (input) => {
    let bloc1 = []
    let bloc2 = []
    const bloc = input.split("")
    if (bloc[0] == 'R') {
        let result = 'Bad boy'
        return console.log(result)
    }
    else if (bloc[0] == 'S') {
        bloc1.push('S') // start bloc1 ['S']
        for (let i = 1; i < bloc.length; i++) {
            if (bloc[i] == 'S') {
                bloc1.push('S') // add bloc1 ['S','S',...]
            }
            else if(bloc[i] == 'R'){
                bloc2.push('R')

            }
            else{
                console.log('please enter only S and R')
            }
        }
        let lengthbloc1 = bloc1.length
        let lengthbloc2 = bloc2.length
        if (lengthbloc1 >= lengthbloc2) {
            console.log('Bad boy')
        }
        else if(lengthbloc2 > lengthbloc1) {
            console.log('Good boy')
        }
    }
}

 console.log(revenge("SSRSRRR"))