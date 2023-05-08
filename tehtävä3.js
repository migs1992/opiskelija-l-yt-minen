const henkilö (etunimi, sukunimi, hetu);
const opiskelija (henkilö, op);


    var henkilö = {
    firstName: "Matti",
    lastName : "Meikäläinen",
    hetu     : 123456-123A,
    }
    henkilö : function() {
        return this.firstName + this.lastName + 'on Henkilö jonka henkilötunnus on' + this.hetu;
    }

class opiskelija extends henkilö {
     constructor(etunimi, sukunimi, hetu, op) {
     }
};

const person = {
    name: 'foo',
    id_number: '123',
    varX: ree
  }
  
  console.log(`nimi on ${person.name} jonka henkilötunnus on ${person.id_number}`);