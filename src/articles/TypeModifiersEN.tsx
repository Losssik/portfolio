import CodeBlock from "../components/CodeBlock/CodeBlock";

const TypeModifiersEN = () => {
  return (
    <div className="article">
      <h1>Type Modifiers</h1>
      <h2>Top Types</h2>
      <p>
        A <b>top type</b> or <b>universal type</b> is a type that can represent
        any possible value in a system. <b>any</b> is great example:
      </p>
      <CodeBlock
        code={`let value: any = 10;

value = "hello"; // OK
value = true;    // OK`}
      />
      <h3>unknown</h3>
      <p>
        You can consider <b>unknown</b> as safer version of <b>any</b>. It
        basically means the same (value can be anything) but typescript checks
        its type before using it.
      </p>
      <CodeBlock
        code={`let value: unknown;;

value = "hello"; // OK
value = 123;    // OK
 
value.toUpperCase(); // ERROR

// YOU MUST CHECK THE TYPE FIRST

if (typeof value === "string") {
  value.toUpperCase(); // OK
}
`}
      />
      <h3>Type Predicates</h3>
      <p>
        Type predicates in TypeScript are functions that tell TypeScript what
        type a value is after a check. They use the <b>value is "Type"</b>{" "}
        syntax. Function must always returns true/false in type predicates.
      </p>
      <CodeBlock
        code={`function isString(value: unknown): value is string {
  return typeof value === "string";
}`}
      />
      <CodeBlock
        code={`function print(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TS knows it is string
  }
}`}
      />
      In the above example <b>value is string</b> basically means: if the
      function returns <b>true</b> then value is <b>string</b>.
      <h2>Type Operators</h2>
      <h3>keyof</h3>
      <p>
        keyof in TypeScript is an operator that creates a union of all property
        names (keys) of a type.
      </p>
      <CodeBlock
        code={`type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;`}
      />
      UserKeys becomes:
      <CodeBlock
        code={`"name" | "age"
      
      
function printKey(key: keyof User) {
  console.log(key);
}

printKey("name"); // OK
printKey("age");  // OK
printKey("email"); // Error`}
      />
      <h3>typeof</h3>
      In type context <b>typeof</b> get the type of a variable.
      <CodeBlock
        code={`const user = {
  name: "Tom",
  age: 25,
};

type User = typeof user;`}
      />
      now:
      <CodeBlock
        code={`type User = {
  name: string;
  age: number;
}`}
      />
      <h3>keyof typeof</h3>
      In short = keys of object as types.
      <CodeBlock
        code={`const user = {
  name: "Tom",
  age: 25,
};

type UserKeys = keyof typeof user;`}
      />
      Effect:
      <CodeBlock code={`type UserKeys = "name" | "age";`} />
    </div>
  );
};

export default TypeModifiersEN;
