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
      <h2>Type Assertions</h2>
      <p>
        Type assertions are used to tell TypeScript that "I know better what
        type it is". You can do this by using <b>as</b> keyword.
      </p>
      <CodeBlock
        code={`const rawData = ["apple", "kiwi"];

JSON.parse(rawData); // Type: any

JSON.parse(rawData) as string[]; // Type: string[]

`}
      />
      <h3>Asserting Caught Error Types</h3>
      <p>
        In TypeScript, errors caught in try...catch are typed as <b>unknown</b>,
        so you need to assert or narrow their type before using them.
      </p>
      <CodeBlock
        code={`try {
 //code to execute
} catch (err) {
  console.log(err.message); //  Error ERR IS UNKNOWN
}`}
      />
      <b>type narrowing: (recommended)</b>
      <CodeBlock
        code={`try {
 //code to execute
} catch (err) {
   if (err instanceof Error) {
    console.log(err.message); // OK
  }
}`}
      />
      <b>type assertion:</b>
      <CodeBlock
        code={`try {
   //code to execute
} catch (err) {
  const error = err as Error;
  console.log(error.message); // OK
}`}
      />
      <h3>Non-Null Assertions</h3>
      <p>
        Some values can be null or undefined, if you are 100% sure it really
        exists than you can use <b>!</b> operator.
      </p>
      <CodeBlock
        code={`const input = document.querySelector("input")!;
// without ! - you will get error that input is possibly null
input.value = "Hello";`}
      />
      <h3>Assertion assignability</h3>
      <p>
        Some assertions type are forbidden. For example, switching from one
        primitive to another is not allowed, as primitives have nothing to do
        with each other:{" "}
      </p>
      <CodeBlock
        code={`let myValue = "Stella!" as number;
`}
      />
      If you absolutely must switch a value from one type to a totally unrelated
      type, you can use a double type assertion:
      <CodeBlock
        code={`let myValueDouble = "1337" as unknown as number; // Ok, but you should avoid it
`}
      />
      <h2>Const Assertions</h2>
      <p>
        Const assertions in TypeScript (using <b>as const</b>) make values fully
        immutable and as literal as possible.
      </p>
      <CodeBlock
        code={`const user = {
  name: "Tom",
  age: 25,
} as const;`}
      />
      Now TypeScript treats it as:
      <CodeBlock
        code={`{
  readonly name: "Tom";
  readonly age: 25;
}`}
      />
      <p>
        It added <b>readonly</b> and converted values to literal types from{" "}
        <b>string</b> to "Tom" and from <b>number</b> to 25.
      </p>
      <h3>Read-only Objects</h3>
      <p>
        Read-only objects in TypeScript are objects whose properties cannot be
        changed after they are created.
      </p>
      <CodeBlock
        code={`const user = {
  name: "Tom",
  age: 25,
} as const;`}
      />
      Now everything becomes read-only:
      <CodeBlock
        code={`user.name = "Anna"; // ERROR
user.age = 30; // ERROR`}
      />
    </div>
  );
};

export default TypeModifiersEN;
