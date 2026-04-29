import CodeBlock from "../components/CodeBlock/CodeBlock";

const ArraysInTypeScriptEN = () => {
  return (
    <div className="article">
      <h1>Arrays in typescript </h1>
      <p>
        TypeScript respects the best practice of keeping to one data type per
        array by remembering what type of data is initially inside an array, and
        only allowing the array to operate on that kind of data.
      </p>
      <CodeBlock
        code={`const warriors = ["Artemisia", "Boudica"];

warriors.push("Zenobia");
// Ok: "Zenobia" is a string

warriors.push(true);
// Argument of type 'boolean' is not assignable to parameter of type 'string'.`}
      />
      <h2>Array Types</h2>
      <p>
        The type annotation for an array requires the type of elements in the
        array followed by a [] :
      </p>
      <CodeBlock
        code={`let arrayOfNumbers: number[];

arrayOfNumbers = [4, 8, 15, 16, 23, 42];`}
      />
      <h3>Array and Function Types</h3>
      <p>
        Array types are an example of a syntax container where function types
        may need parentheses to distinguish what’s in the function type or not.
      </p>
      <CodeBlock
        code={`// Type is a function that returns an array of strings

let createStrings: () => string[];`}
      />
      <h3>Union-Type Arrays</h3>
      <p>
        You can use a union type to indicate that each element of an array can
        be one of multiple select types.
      </p>
      <CodeBlock
        code={`
// variable can be string or arrays of numbers
let stringOrArrayOfNumbers: string | number[];

stringOrArrayOfNumbers = "hello"; // OK
stringOrArrayOfNumbers = [1, 2, 3]; // OK
stringOrArrayOfNumbers = ["a", 1]; // Error

// variable is always array that can hold strings or numbers
let arrayOfStringOrNumbers: (string | number)[];

arrayOfStringOrNumbers = [1, "hello", 3]; // OK
arrayOfStringOrNumbers = ["a", "b"]; // OK
arrayOfStringOrNumbers = 123; // Error
`}
      />
      <h3>Multidimensional Arrays</h3>
      <p>A 2D array, or an array of arrays, will have two “[]”s:</p>
      <CodeBlock
        code={`let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
];`}
      />
      <h3>Spreads</h3>
      <p>
        The spread operator (...) in arrays in TypeScript / JavaScript is used
        to unpack elements from one array into another.
      </p>
      <CodeBlock
        code={`const first = [1, 2];
const second = [3, 4];

const result = [...first, ...second];

console.log(result); // [1, 2, 3, 4]`}
      />
      <CodeBlock
        code={`function sum(...numbers: number[]): number {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4)); // 10`}
      />
      <h3>tuples</h3>
      <p>
        Tuples in TypeScript are fixed-length arrays where each position has a
        specific type. Unlike normal arrays, the order and number of elements
        matter.
      </p>
      <CodeBlock
        code={`let user: [string, number];

user = ["Tom", 25]; // OK
user = [25, "Tom"]; // Error`}
      />
      <h3>tuples with parameters</h3>
      <p>
        Tuples with rest parameters in TypeScript let you define a function that
        accepts a fixed structure of arguments using tuple types. The following
        snippet means: "function must receive exactly two arguments: first
        string, second number".
      </p>
      <CodeBlock
        code={`function printUser(...user: [string, number]) {
  const [name, age] = user;

  console.log(name);
  console.log(age);
}

printUser("Tom", 25); // OK
printUser(25, "Tom"); // Error`}
      />
    </div>
  );
};

export default ArraysInTypeScriptEN;
