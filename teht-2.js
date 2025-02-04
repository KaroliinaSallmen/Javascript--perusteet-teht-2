// Puhelinluettelo, jossa muutama lisätty henkilö esimerkkinä
let phonebook = [
  {
    name: "Matti",
    number: "0504567890",
  },
  {
    name: "Teppo",
    number: "0404759735",
  },
  {
    name: "Seppo",
    number: "0503821773",
  },
];

// Lisää henkilön puhelinluetteloon
function addPerson(name, number) {
  let newPerson = {
    name: name,
    number: number,
  };

  phonebook.push(newPerson);

  console.log(phonebook);
}

// Etsii puhelinnumeron nimellä
function findPhoneNumber(phonebook, name) {
  const contact = phonebook.find(
    (person) => person.name.toLowerCase() === name.toLowerCase()
  );
  return contact ? contact.number : "Numeroa ei löytynyt";
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// "Päävalikko", josta voi valita toiminnon
function menu() {
  rl.question(
    "Valitse toiminto: \n1 = Lisää henkilön tiedot \n2 = Etsi puhelinnumero \n3 = Sulje ohjelma",
    (choice) => {
      if (choice === "1") {
        rl.question("Anna nimi: ", (name) => {
          rl.pause();

          rl.question("Anna numero: ", (number) => {
            addPerson(name, number);
            menu();
          });
        });
      }
      if (choice === "2") {
        rl.question("Anna nimi: ", (answer) => {
          let number = findPhoneNumber(phonebook, answer);
          console.log("Henkilön numero: " + number);
          menu();
        });
      }
      if (choice === "3") {
        rl.close();
      }
    }
  );
}
menu();
