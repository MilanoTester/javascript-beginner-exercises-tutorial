
let string1 = "there will be an answer, ";
let string2 = "whisper words of wisdom, let it be";


    function stringRepeated(repetitions) {
        let string = "let it be, ";
        let printstring = "let it be, ";
        for (i=1; i<repetitions; i++) {
            printstring = printstring + string;
        }
        return printstring;
    }

    function sing() {
        return (stringRepeated(4) + string1 + stringRepeated(5) + string2);
    }

//Your code above ^^^
console.log(sing());