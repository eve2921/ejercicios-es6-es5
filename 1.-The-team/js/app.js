// ES5

// declaracion de las variables

//var [teachersTeam, members] = [
//  'formacion',
//  ['Pau', 'Cata', 'Silvana', 'Jonh', 'Mike', 'Dení', 'Lizzie']
//];

//var formatTeamMessage = function (teachersTeam, members) {
//  var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
//  console.log(message)
//  return message;
//};

//formatTeamMessage(teachersTeam, members);




// Ahora comenta todo el código anterior y escribelo en ES6


//  ES6
// declaracion de las variables 

 const [teamName, product] = [
   'formacion',  ['Pau', 'Cata', 'Silvana', 'Jonh', 'Mike', 'Dení', 'Lizzie'],
 ];


 const formatTeamMessage = (teamName, people) => {
  const message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
  console.log(message)
  return message;
};

formatTeamMessage(teachersTeam, members);



//   // escribe tu código en ES6 aqui...
// }

// formatTeamMessage(teamName, product);