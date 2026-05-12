import CodeBlock from "../components/CodeBlock/CodeBlock";

const ReduxWithTypescriptEN = () => {
  return (
    <div className="article">
      <h1>Redux with TypeScript</h1>

      <p>
        In this article we are going to focus on Redux Toolkit usage with
        TypeScript in the Next.js App Router.
      </p>

      <h2>Folder structure</h2>
      <CodeBlock
        code={`/app
  layout.tsx
  page.tsx
  StoreProvider.tsx
  /components
    Counter.tsx
/lib
  store.ts
  hooks.ts
  /features
    /counter
      counterSlice.ts`}
      />

      <h3>Creating a Redux Store per Request</h3>
      <CodeBlock
        code={`// lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
`}
      />

      <p>
        Now we have a function, <strong>makeStore</strong>, that creates a new
        store instance per request. This is important in the App Router because
        we should avoid using a global store.
      </p>

      <p>
        Even though we don’t export a store instance, we can still infer{" "}
        <strong>RootState</strong> and <strong>AppDispatch</strong> using
        TypeScript.
      </p>

      <h3>Creating Typed Hooks</h3>
      <CodeBlock
        code={`// lib/hooks.ts
import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";

// Typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
`}
      />

      <p>
        These hooks allow us to use Redux without manually typing dispatch or
        state every time.
      </p>

      <h3>Creating a Slice</h3>
      <CodeBlock
        code={`// lib/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    initializeCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, initializeCount } =
  counterSlice.actions;

export default counterSlice.reducer;
`}
      />

      <h3>Providing the Store</h3>
      <p>
        To use the store, we need to create a client component that wraps the
        application.
      </p>

      <CodeBlock
        code={`// app/StoreProvider.tsx
'use client';

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
`}
      />

      <p>
        The next step is to include <strong>StoreProvider</strong> in your
        layout so the entire app has access to Redux.
      </p>

      <h3>Wrapping the Application</h3>
      <CodeBlock
        code={`// app/layout.tsx
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
`}
      />

      <h3>Using Redux in a Component</h3>
      <CodeBlock
        code={`// app/components/Counter.tsx
'use client';

import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { increment, decrement } from "../../lib/features/counter/counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
`}
      />

      <h3>Using the Component</h3>
      <CodeBlock
        code={`// app/page.tsx
import Counter from "./components/Counter";

export default function Page() {
  return (
    <div>
      <h1>Redux Toolkit + TypeScript</h1>
      <Counter />
    </div>
  );
}
`}
      />

      <h3>Loading Initial Data</h3>
      <p>
        If you want to pass initial data into Redux, you can dispatch an action
        when creating the store.
      </p>

      <CodeBlock
        code={`// app/StoreProvider.tsx (with initial data)
'use client';

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { initializeCount } from "../lib/features/counter/counterSlice";

export default function StoreProvider({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeCount(count));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
`}
      />

      <h3>Summary</h3>
      <p>
        You now know how to set up Redux Toolkit with TypeScript in the Next.js
        App Router, including store creation, typed hooks, slices, and usage in
        components.
      </p>
    </div>
  );
};

export default ReduxWithTypescriptEN;
