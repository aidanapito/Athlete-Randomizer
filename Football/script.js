//football

const footballNames = [
    "Patrick Mahomes", "Jay Cutler", "John Elway", "Tom Brady", "Aaron Rodgers", "Eli Manning", "Payton Manning", "Sam Darnold", //QBS
    "Bernie Sanders", "Walter Payton", "Derrick Henry", "Todd Gurley", "Leveon Bell", "Kyle Juczjk", "William Perry", "Raheem Mostert", //HBS or FB
    "Jerry Rice", "Randy Moss", "Stefon Diggs", "Dionte Johnson", "Brandon Cooks", "Chris Watson", "Jerry Jeudy", "Jamarr Chase", "Justin Jefferson", //WR ADD WAY MORE
    "Travis Kelce", "Tony Gonzalez", " Darren Waller", "Mark Andrews", "Irv Smith", "Dallas Goedert", //TE
    "", "", "", "", "", "", "", "", "", "", "", //Tackles
    "", "", "", "", "", "", "", "", "", "", "", //Guards
    "", "", "", "", "", "", "", "", "", "", "", //Centers
    "Baltimore", "Bears", "Steelers", "Raiders", "49ers", "Jets", "Giants", "Denver", "Arizona", "Packers", "Rams", //Defense
    "", "", "", "", "", "", "", "", "", "", "", //defensive players
  ];
  
  function getRandomName() {
    const randomIndex = Math.floor(Math.random() * footballNames.length);
    return footballNames[randomIndex];
  }
  
  // Example usage:
  const randomName = getRandomName();
  console.log("Random Name:", randomName);





// etc