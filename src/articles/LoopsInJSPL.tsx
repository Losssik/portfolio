import CodeBlock from "../components/CodeBlock/CodeBlock";

const LoopsInJSPL = () => {
  return (
    <div className="article">
      <h1>Pętle w JavaScript — praktyczne zadania</h1>

      <h2>Iteracja po obiekcie (for...in)</h2>

      <p>
        Możesz używać pętli <b>for...in</b>, aby przejść przez wszystkie klucze
        obiektu i odczytać ich wartości.
      </p>

      <CodeBlock
        code={`const person = {
  name: "Kasia",
  age: 27,
  city: "Warszawa",
  profession: "Programista",
};

for (let key in person) {
  console.log(key, person[key]);
}`}
      />

      <h2>Tablice obiektów — podstawowe operacje</h2>

      <p>
        Poniżej znajduje się tablica użytkowników, na której wykonujemy różne
        operacje.
      </p>

      <CodeBlock
        code={`const users = [
  { name: "Kasia", age: 27, city: "Warszawa" },
  { name: "Jan", age: 35, city: "Kraków" },
  { name: "Ola", age: 22, city: "Gdańsk" },
  { name: "Tomek", age: 19, city: "Warszawa" },
  { name: "Ania", age: 30, city: "Gdańsk" },
];`}
      />

      <h2>1. Średnia wieku</h2>

      <CodeBlock
        code={`let sum = 0;
const numberOfUsers = users.length;

for (let i = 0; i < users.length; i++) {
  sum = sum + users[i].age;
}

const result = sum / numberOfUsers;
console.log(result);`}
      />

      <h2>2. Osoby z Warszawy</h2>

      <CodeBlock
        code={`for (let i = 0; i < users.length; i++) {
  if (users[i].city === "Warszawa") {
    console.log(users[i].name);
  }
}`}
      />

      <h2>3. Najmłodsza osoba</h2>

      <CodeBlock
        code={`let youngestPerson = users[0];

for (let i = 0; i < users.length; i++) {
  if (users[i].age < youngestPerson.age) {
    youngestPerson = users[i];
  }
}

console.log(youngestPerson);`}
      />

      <h2>4. Ile osób ma 25+ lat</h2>

      <CodeBlock
        code={`let sumOfPeopleOver25 = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 25) {
    sumOfPeopleOver25++;
  }
}

console.log(sumOfPeopleOver25);`}
      />

      <h2>5. Imiona w jednej linii</h2>

      <CodeBlock
        code={`const result2 = [];

for (let i = 0; i < users.length; i++) {
  result2.push(users[i].name);
}

console.log(result2.join(", "));`}
      />

      <h2>6. Miasta bez powtórzeń</h2>

      <CodeBlock
        code={`let cities = [];

for (let i = 0; i < users.length; i++) {
  const currentCity = users[i].city;

  if (!cities.includes(currentCity)) {
    cities.push(currentCity);
  }
}

console.log(cities);`}
      />
    </div>
  );
};

export default LoopsInJSPL;
