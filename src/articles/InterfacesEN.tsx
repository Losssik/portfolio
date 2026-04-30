import CodeBlock from "../components/CodeBlock/CodeBlock";

const InterfacesEN = () => {
  return (
    <div className="article">
      <h1>interfaces in typescript</h1>
      <p>
        Interfaces in TypeScript are used to describe the shape of an object by
        defining its properties and their types. They work similarly to type for
        objects.
      </p>
      <CodeBlock
        code={`interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Tom",
  age: 25,
};`}
      />
      <h3>Optional Properties</h3>
      <p>
        As with object types, interface properties don’t all have to be required
        in the object. You can indicate an interface’s property is optional by
        including a ? before the : in its type annotation.
      </p>
      <CodeBlock
        code={`interface Book {

  author?: string; // OPTIONAL PROPERTY
  pages: number;

};`}
      />
      <h3>Read-Only Properties</h3>
      <p>
        Read-only properties in TypeScript are properties that can be assigned
        only once and cannot be changed after creation. They are marked with the{" "}
        <b>readonly</b> keyword. The <b>readonly</b> makes a property immutable
        after it is created.
      </p>
      <CodeBlock
        code={`type User = {
  readonly id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Tom",
};

user.name = "Anna"; // OK
user.id = 2; // Error`}
      />
      <h3>Functions and Methods</h3>
      <p>
        In the context of interfaces in TypeScript, functions and methods
        describe behaviors that an object should have.
      </p>
      <h4>Function property</h4>
      <p>A function can be written as a property with a function type:</p>
      <CodeBlock
        code={`interface User {
  name: string;
  greet: () => void;
}`}
      />
      <h4>Method syntax</h4>
      <p>The same thing can be written using method syntax:</p>
      <CodeBlock
        code={`interface User {
  name: string;
  greet(): void;
}`}
      />
      <p>
        In both cases it means that the object must have a greet function that
        returns <b>void</b>.
      </p>
      <CodeBlock
        code={`const person: User = {
  name: "Tom",
  greet() {
    console.log("Hello");
  },
};`}
      />
      <h3>Call Signatures</h3>
      <p>
        Call signatures in TypeScript describe how a function can be called —
        its parameters and return type—inside an object type or interface.
      </p>
      <CodeBlock
        code={`type Greet = {
  (name: string): string;
};

const sayHello: Greet = (name) => {
  return ('hello' + name);
};

//with inteface

interface MathOperation {
  (a: number, b: number): number;
}

`}
      />
      <h3>Index Signatures</h3>
      <p>
        Index signatures in TypeScript are used when you don’t know all property
        names in advance, but you know the type of their values. They let you
        describe objects with dynamic keys.
      </p>
      <CodeBlock
        code={`interface Scores {
// the following line means:
// any proeprty name is ALLOWED and its value MUST BE a number            
  [playerName: string]: number; 
}

const game: Scores = {
  Tom: 10,
  Anna: 15,
  John: 8,
};`}
      />
      <h3>Nested Interfaces</h3>
      <p>
        Nested interfaces in TypeScript are interfaces that contain other
        interfaces as property types, allowing you to model complex, structured
        objects.
      </p>
      <CodeBlock
        code={`interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  address: Address;
}

const user: User = {
  name: "Tom",
  address: {
    city: "London",
    country: "UK",
  },
};`}
      />
      <h3>Interface Extensions</h3>
      <p>
        Interface extensions in TypeScript allow one interface to inherit
        properties from another using the <b>extends</b> keyword.
      </p>
      <CodeBlock
        code={`interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Tom",
  role: "superadmin",
};`}
      />
      Multiple extensions example:
      <CodeBlock
        code={`interface A {
  a: number;
}

interface B {
  b: string;
}

interface C extends A, B {
  c: boolean;
}`}
      />
      <h3>Overridden Properties</h3>
      <p>
        Overridden properties in TypeScript happen when an extending interface
        defines the same property as a base interface, but with a different
        (usually more specific) type.
      </p>
      <CodeBlock
        code={`interface User {
  role: string;
}

interface Admin extends User {
  role: "admin"; // This works because "admin" is a narrower type than string.
}`}
      />
      Invalid override happens when you make the type broader.
      <CodeBlock
        code={`interface User {
  role: "admin";
}

interface Admin extends User {
  role: string; // Error (wider type)
}`}
      />
      <h3>Interface Merging</h3>
      <p>
        Interface merging in TypeScript means that multiple declarations of the
        same interface are automatically combined into one.
      </p>
      <CodeBlock
        code={`interface User {
  name: string;
}

interface User {
  age: number;
}

// IT COMBINES/MERGES INTO:
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Tom",
  age: 25,
};

`}
      />
      Note that merged interfaces may not declare the same name of a property
      multiple times with different types.
      <CodeBlock
        code={`interface User {
  name: string;
}

interface User {
  name: number; //  CONFLICT - NOT ALLOWED
}`}
      />
      <CodeBlock
        code={`interface A {
  id: string;
}

interface B {
  id: number;
}

interface C extends A, B {} //  CONFLICT - 2 DIFFERENT TYPES OF ID `}
      />
    </div>
  );
};

export default InterfacesEN;
