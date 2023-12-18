class TodaysGame {
  constructor(word) {
    this.todaysWord = word;
    this.guesses = [];
  }
  makeGuess(guessWord) {
    //has the word already been guessed
    //add to guesses
    let guess = {};
    if (!this.guesses.some((ele) => ele.guessWord === guessWord)) {
      guess.guessWord = guessWord;
    } else {
      return "";
    }

    const letterMeta = Array(5).fill("none");
    const guessArray = guessWord.split("");
    const todaysWordArr = this.todaysWord.split("");

    for (let i = 0; i < guessWord.length; i++) {
      if (guessArray[i] === this.todaysWord[i]) {
        letterMeta[i] = "green";
        todaysWordArr[i] = "-";
        guessArray[i] = "-";
      }
      //TODO not getting "none" if green letter is after current guess letter that is the same
      for (let i = 0; i < guessWord.length; i++)
        if (
          todaysWordArr.toSpliced(i, 1).includes(guessArray[i]) &&
          guessArray[i] !== "-"  && todaysWordArr[i] !== "-"
        ) {
          letterMeta[i] = "yellow";
          const yellowLetterIndex = todaysWordArr.indexOf(guessArray[i]);
          todaysWordArr[yellowLetterIndex] = "-";
        }
    }
    guess.locations = letterMeta;
    this.guesses.push(guess);
    console.log(this.todaysWord);
    console.log(this.guesses);
  }
}

module.exports = TodaysGame;
