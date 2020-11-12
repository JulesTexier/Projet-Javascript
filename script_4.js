const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



/*Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ; console.log(entrepreneurs.year >= 1970 && year < 1980]*/
  
  console.log("Voici les entrepreneurs nés dans les années 70 :")

  entrepreneurs.forEach(element => {
    if (element.year < 1980 && element.year > 1969) {
      console.log(element);
    }
  });
  

  /*Sors une array qui contient le prénom et le nom des entrepreneurs ;*/
  console.log("Voici les noms et prénoms des entrepreurs :")

  array = []
  entrepreneurs.forEach(creator => {
    array.push(creator.first+' '+creator.last) 
  });
  
  console.log(array)
  

  /*Quel âge aurait chaque inventeur aujourd'hui ?;*/
  console.log("Voici l'age des entrepreneurs aujourd'hui :")

  array = []
  entrepreneurs.forEach(creator => {
    array.push(creator.first+' '+creator.last+' : '+(2020-creator.year)+' ans') 
  });
  
  console.log(array)
  
  
  /*Trie les entrepreneurs par ordre alphabétique du nom de famille.*/
  console.log("Voici les entrepreneurs classés par ordre alphabétique :")


  const sortArray = entrepreneurs

  console.log(sortArray.sort((a, b) => {
    if (a.last < b.last)
      return -1;
    if (a.last > b.last)
      return 1;
    return 0;
  }));

  sortArray.forEach(element => {
    console.log(element);
  })
