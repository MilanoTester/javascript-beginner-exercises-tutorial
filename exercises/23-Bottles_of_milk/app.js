// Your code here:

for (i=99; i>0; i--) {
    let lyric;
    if (i>1) {
            lyric = i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + (i-1) + " bottles of milk on the wall.";
    } else if (i=1) {
            lyric = "1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.";
    }
    console.log(lyric);
}

if (i==0) {
    console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
} 

