import CodeBlock from "../components/CodeBlock/CodeBlock";

const GenericsEN = () => {
  return (
    <div className="article">
      <h1>Generics</h1>
      <p>
        Generics in TypeScript let you write reusable code that works with
        different types, while still keeping type safety. Imagine this as
        placeholder for a type.
      </p>
      <h2>Generic Functions</h2>
      <p>
        A function may be made generic by placing an alias for a type parameter,
        wrapped in angle brackets, immediately before the parameters
        parentheses. That type parameter will then be available for usage in
        parameter type annotations, return type annotations, and type
        annotations inside the function’s body. The following version of
        identity declares a type parameter T for its input parameter, which
        allows TypeScript to infer that the return type of the function is T .
        TypeScript can then infer a different type for T every time identity is
        called:
      </p>
      <CodeBlock
        code={`function identity<T>(input: T) {
 return input;
}

const myString = identity("me"); // Type: "me"
const myNumber = identity(123); // Type: 123`}
      />
      <h3>arrow functions</h3>
      <p>
        Arrow functions can be generic too. Their generic declarations are also
        placed immediately before the ( before their list of parameters.
      </p>
      <CodeBlock
        code={`const identity = <T>(input: T) => input;
identity(123); // Type: 123`}
      />
      <p>
        Adding type parameters to functions in this way allows them to be reused
        with different inputs while still maintaining type safety and avoiding
        any types.
      </p>
      <p>
        The bellow example means: This function works with any type (string,
        number etc.) but input and output must be the same type.
      </p>
      <CodeBlock
        code={`function identity<T>(value: T): T {
  return value;
}`}
      />
      <h3>Multiple Function Type Parameters</h3>
      Multiple function type parameters in TypeScript mean that a function can
      use more than one generic type at the same time.
      <CodeBlock
        code={`function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];

  const result = pair("hello", 123);

  result: [string, number]
}`}
      />
      <CodeBlock
        code={`function makePair<Key, Value>(key: Key, value: Value) {

    return { key, value };

}

makePair("abc", 123); // Type: { key: string; value: number }

makePair<string, number>("abc", 123); // Type: { key: string; value: number }

makePair<"abc", 123>("abc", 123); // Type: { key: "abc"; value: 123 }

makePair<string>("abc", 123); // Error: Expected 2 type arguments, but got 1.`}
      />
      <h3>Generic Interfaces</h3>
      <p>
        Generic interfaces in TypeScript let you define interfaces that work
        with different types, using a type parameter (like T).
      </p>
      <CodeBlock
        code={`interface Box<T> {
        value: T;
    }
const stringBox: Box<string> = {
  value: "hello",
};

const numberBox: Box<number> = {
  value: 123,
};

    `}
      />
      <h3>Inferred Generic Interface Types</h3>
      <p>
        Inferred generic interface types in TypeScript mean that TypeScript can
        automatically figure out the generic type (T) based on how you use a
        value—so you don’t always have to write it manually.
      </p>
      <CodeBlock
        code={`interface Box<T> {
  value: T;
}

function createBox<T>(value: T): Box<T> {
  return { value };
}

const box = createBox("hello");`}
      />
    </div>
  );
};

export default GenericsEN;
