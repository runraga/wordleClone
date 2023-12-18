const TodaysGame = require("../main");

describe("TodaysGame", () => {
  test("should instansiate an object of type TodaysWord", () => {
    expect(new TodaysGame("SOARE") instanceof TodaysGame).toBe(true);
  });
  test("should have a makeGuess method that takes a five letter word and checks if that word has already been used", () => {
    const game = new TodaysGame("SOARE");
    game.makeGuess("CLOUD");
    const expected = "CLOUD";
    const output = game.guesses[0].guessWord;
    expect(output).toEqual(expected);
    game.makeGuess("CLOUD");
    expect(output).toEqual(expected);
  });
  test("that for a successful guess, makeGuess should add an object to the guesses array containg a property guessWord and value of the word", () => {
    const game = new TodaysGame("SOARE");
    game.makeGuess("CLOUD");
    const actual = game.guesses[0].guessWord;
    expect(actual).toBe("CLOUD");
  });

  test("that for each successful guess the object added to the guesses array has a property locations that has a value of a five membered array", () => {
    // const expected = ["green","none","none","none","none"]

    const game = new TodaysGame("SOARE");

    game.makeGuess("SLOSH");

    const guess = game.guesses.find((ele) => ele.guessWord === "SLOSH");
    expect(guess.locations.length).toBe(5);
  });
  test('that the locations array for each guess has 5 strings either "green","yellow","none" detailing which shown if each letter in the guess is in the right place, right letter wrong place or not present', () => {
    const expected = ["green", "none", "yellow", "none", "none"];
    const game = new TodaysGame("SOARE");

    game.makeGuess("SLOSH");
    const actual = game.guesses.find(
      (ele) => ele.guessWord === "SLOSH"
    ).locations;
    expect(actual).toEqual(expected);

    game.makeGuess("STARE");
    const expected2 = ["green", "none", "green", "green", "green"];
    const actual2 = game.guesses.find(
      (ele) => ele.guessWord === "STARE"
    ).locations;
    expect(actual2).toEqual(expected2);

    const game2 = new TodaysGame("TOPIC");
    game2.makeGuess("SOARE");
    const expected3 = ["none", "green", "none", "none", "none"];
    const output3 = game2.guesses.find(
      (ele) => ele.guessWord === "SOARE"
    ).locations;
    expect(output3).toEqual(expected3);
    game2.makeGuess("POUCH");
    const expected4 = ["yellow", "green", "none", "yellow", "none"];
    const output4 = game2.guesses.find(
      (ele) => ele.guessWord === "POUCH"
    ).locations;
    expect(output4).toEqual(expected4);
    game2.makeGuess("TOPIC");
    const expected5 = ["green", "green", "green", "green", "green"];
    const output5 = game2.guesses.find(
      (ele) => ele.guessWord === "TOPIC"
    ).locations;
    expect(output5).toEqual(expected5);


    const game3 = new TodaysGame("POOCH");
    game3.makeGuess("PLUTO")
    const expected6 = ["green", "none", "none", "none", "yellow"];
    const output6 = game3.guesses.find(
      (ele) => ele.guessWord === "PLUTO"
    ).locations;
    expect(output6).toEqual(expected6);

    const game4 = new TodaysGame("BACON");
    game4.makeGuess("SOARE")
    const expected7 = ["none", "yellow", "yellow", "none", "none"];
    const output7 = game4.guesses.find(
      (ele) => ele.guessWord === "SOARE"
    ).locations;
    expect(output7).toEqual(expected7);

    game4.makeGuess("QUOTA")
    const expected8 = ["none", "none", "yellow", "none", "yellow"];
    const output8 = game4.guesses.find(
      (ele) => ele.guessWord === "QUOTA"
    ).locations;
    expect(output8).toEqual(expected8);

    game4.makeGuess("AFLOW")
    const expected9 = ["yellow", "none", "none", "green", "none"];
    const output9 = game4.guesses.find(
      (ele) => ele.guessWord === "AFLOW"
    ).locations;
    expect(output9).toEqual(expected9);

    game4.makeGuess("CANON")
    const expected10 = ["yellow", "green", "none", "green", "green"];
    const output10 = game4.guesses.find(
      (ele) => ele.guessWord === "CANON"
    ).locations;
    expect(output10).toEqual(expected10);

    const game5 = new TodaysGame("CLINK");
    game5.makeGuess("SOARE")
    const expected11 = ["none", "none", "none", "none", "none"];
    const output11 = game5.guesses.find(
      (ele) => ele.guessWord === "SOARE"
    ).locations;
    expect(output11).toEqual(expected11);
    
    game5.makeGuess("QUICK")
    const expected12 = ["none", "none", "green", "yellow", "green"];
    const output12 = game5.guesses.find(
      (ele) => ele.guessWord === "QUICK"
    ).locations;
    expect(output12).toEqual(expected12);

    game5.makeGuess("CLINK")
    const expected13 = ["green", "green", "green", "green", "green"];
    const output13 = game5.guesses.find(
      (ele) => ele.guessWord === "CLINK"
    ).locations;
    expect(output13).toEqual(expected13);

    const game6 = new TodaysGame("OUTDO");
    game6.makeGuess("SOARE")
    const expected14 = ["none", "yellow", "none", "none", "none"];
    const output14 = game6.guesses.find(
      (ele) => ele.guessWord === "SOARE"
    ).locations;
    expect(output14).toEqual(expected14);

    game6.makeGuess("QUOIT")
    const expected15 = ["none", "green", "yellow", "none", "yellow"];
    const output15 = game6.guesses.find(
      (ele) => ele.guessWord === "QUOIT"
    ).locations;
    expect(output15).toEqual(expected15);

    game6.makeGuess("FUTON")
    const expected16 = ["none", "green", "green", "yellow", "none"];
    const output16 = game6.guesses.find(
      (ele) => ele.guessWord === "FUTON"
    ).locations;
    expect(output16).toEqual(expected16);

    game6.makeGuess("OUTDO")
    const expected17 = ["green", "green", "green", "green", "green"];
    const output17 = game6.guesses.find(
      (ele) => ele.guessWord === "OUTDO"
    ).locations;
    expect(output17).toEqual(expected17);

    const game7 = new TodaysGame("CRUMP");

    game7.makeGuess("SOARE")
    const expected18 = ["none", "none", "none", "yellow", "none"];
    const output18 = game7.guesses.find(
      (ele) => ele.guessWord === "SOARE"
    ).locations;
    expect(output18).toEqual(expected18);

    game7.makeGuess("DRINK")
    const expected19 = ["none", "green", "none", "none", "none"];
    const output19 = game7.guesses.find(
      (ele) => ele.guessWord === "DRINK"
    ).locations;
    expect(output19).toEqual(expected19);

    game7.makeGuess("TRUMP")
    const expected20 = ["none", "green", "green", "green", "green"];
    const output20 = game7.guesses.find(
      (ele) => ele.guessWord === "TRUMP"
    ).locations;
    expect(output20).toEqual(expected20);

    game7.makeGuess("GRUMP")
    const expected21 = ["none", "green", "green", "green", "green"];
    const output21 = game7.guesses.find(
      (ele) => ele.guessWord === "GRUMP"
    ).locations;
    expect(output21).toEqual(expected21git );
  });
});
