import CodeBlock from "../components/CodeBlock/CodeBlock";

const PersistReduxDataEN = () => {
  return (
    <div className="article">
      <h1>How to Persist Redux State in Next.js with Redux Persist</h1>

      <p>
        Redux stores application state in memory. This means that when the
        browser page is refreshed, the Redux state is recreated and all
        previously stored data is lost.
      </p>

      <p>
        This can be a problem when building applications that need to remember
        user data, such as shopping carts, wishlists, filters, or user
        preferences.
      </p>

      <p>
        In this guide, we will learn how to persist Redux state in a Next.js
        application using <b>Redux Persist</b> and <b>localStorage</b>.
      </p>

      <p>
        The example will use a shopping cart because it is one of the most
        common use cases for persistent Redux state.
      </p>

      <h3>What we are going to build</h3>

      <p>
        We will configure Redux Persist so that our Redux cart survives a page
        refresh.
      </p>

      <CodeBlock
        code={`Redux Store
     ↓
Redux Persist
     ↓
localStorage

Browser refresh
     ↓
localStorage
     ↓
Redux Persist
     ↓
Redux Store`}
      />

      <p>
        After the setup is complete, products added to the shopping cart will
        still be available after refreshing the page.
      </p>

      <h3>Installing Redux Persist</h3>

      <p>
        If Redux Toolkit is already installed in the project, we only need to
        install Redux Persist:
      </p>

      <CodeBlock
        code={`// terminal

npm install redux-persist`}
      />

      <p>
        Redux Persist works together with Redux and provides the functionality
        needed to save and restore Redux state.
      </p>

      <h3>Creating the cart type</h3>

      <p>
        In this example, our Redux store contains a shopping cart. We start by
        defining the structure of a cart item.
      </p>

      <CodeBlock
        code={`// features/cart/cartTypes.ts

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  stock: number;
};`}
      />

      <p>
        Each cart item contains basic product information, the selected
        quantity, and the available stock.
      </p>

      <h3>Creating the cart slice</h3>

      <p>
        The cart slice is responsible for managing the cart state. In this
        example, we will use a simplified version containing actions for adding
        and removing products.
      </p>

      <CodeBlock
        code={`// features/cart/cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartTypes";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<CartItem>
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    removeItemFromCart: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;`}
      />

      <h3>Creating the root reducer</h3>

      <p>
        Before adding Redux Persist, we need to combine our Redux reducers.
        Currently, our application only has the cart reducer.
      </p>

      <CodeBlock
        code={`// store/store.ts

import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});`}
      />

      <p>The Redux state now has the following structure:</p>

      <CodeBlock
        code={`{
  cart: {
    items: []
  }
}`}
      />

      <h3>Importing Redux Persist</h3>

      <p>Now we can import the functions required by Redux Persist.</p>

      <CodeBlock
        code={`// store/store.ts

import {
  persistReducer,
  persistStore,
} from "redux-persist";

import storage from "redux-persist/lib/storage";`}
      />

      <p>
        The <b>storage</b> adapter uses the browser's <b>localStorage</b>.
      </p>

      <p>
        This means that Redux Persist will be able to save our Redux state
        inside the browser.
      </p>

      <h3>Creating the persist configuration</h3>

      <p>
        Next, we create a configuration object that tells Redux Persist how the
        state should be stored.
      </p>

      <CodeBlock
        code={`// store/store.ts

const persistConfig = {
  key: "root",
  storage,
};`}
      />

      <p>
        The <b>key</b> is the name under which Redux Persist stores the
        persisted state.
      </p>

      <p>
        The <b>storage</b> property specifies where the data should be stored.
        In our example, it is browser localStorage.
      </p>

      <h3>Creating the persisted reducer</h3>

      <p>
        We can now pass our normal root reducer to <b>persistReducer</b>.
      </p>

      <CodeBlock
        code={`// store/store.ts

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);`}
      />

      <p>
        The persisted reducer behaves like a normal Redux reducer, but Redux
        Persist also saves and restores its state.
      </p>

      <h3>Creating the Redux store</h3>

      <p>
        Instead of passing the normal <b>rootReducer</b> to{" "}
        <b>configureStore</b>, we use the new <b>persistedReducer</b>.
      </p>

      <CodeBlock
        code={`// store/store.ts

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});`}
      />

      <p>
        We disable the Redux Toolkit serializable check because Redux Persist
        uses some internal values that can trigger serializability warnings.
      </p>

      <h3>Creating the persistor</h3>

      <p>
        Redux Persist also requires a persistor. The persistor is responsible
        for controlling the persistence and rehydration process.
      </p>

      <CodeBlock
        code={`// store/store.ts

import { persistStore } from "redux-persist";

export const persistor = persistStore(store);`}
      />

      <h3>Complete store configuration</h3>

      <p>At this point, our complete Redux store looks like this:</p>

      <CodeBlock
        code={`// store/store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;`}
      />

      <h3>Why is RootState created from rootReducer?</h3>

      <p>
        When using Redux Persist, it is important to understand where the
        <b>RootState</b> type comes from.
      </p>

      <p>
        We define it using the normal <b>rootReducer</b>:
      </p>

      <CodeBlock
        code={`// store/store.ts

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;`}
      />

      <p>
        This gives TypeScript the actual structure of our application state:
      </p>

      <CodeBlock
        code={`RootState
└── cart
    └── items: CartItem[]`}
      />

      <p>
        Using the root reducer here also avoids exposing Redux Persist's
        additional internal state type to the rest of the application.
      </p>

      <h3>Creating typed Redux hooks</h3>

      <p>
        We can create typed versions of <b>useSelector</b> and{" "}
        <b>useDispatch</b>.
      </p>

      <CodeBlock
        code={`// store/hooks.ts

"use client";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import type {
  RootState,
  AppDispatch,
} from "./store";

export const useAppDispatch =
  useDispatch.withTypes<AppDispatch>();

export const useAppSelector =
  useSelector.withTypes<RootState>();`}
      />

      <p>
        Thanks to these typed hooks, TypeScript knows the structure of our Redux
        state when we use <b>useAppSelector</b>.
      </p>

      <h3>Creating StoreProvider</h3>

      <p>
        Next.js uses Server Components by default. Redux and Redux Persist need
        to run on the client, so we create a dedicated Client Component.
      </p>

      <CodeBlock
        code={`// store/provider.tsx

"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  store,
  persistor,
} from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}`}
      />

      <h3>What does PersistGate do?</h3>

      <p>
        When the application starts, Redux Persist needs to read the previously
        saved state from localStorage.
      </p>

      <p>
        <b>PersistGate</b> waits for this process to finish before rendering its
        children.
      </p>

      <CodeBlock
        code={`Application starts
        ↓
Read localStorage
        ↓
Restore Redux state
        ↓
PersistGate finishes
        ↓
Application renders`}
      />

      <p>
        This process is called <b>rehydration</b>.
      </p>

      <h3>Connecting StoreProvider to Next.js</h3>

      <p>
        Now we can use <b>StoreProvider</b> inside the root layout.
      </p>

      <CodeBlock
        code={`// app/layout.tsx

import StoreProvider from "./store/provider";

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
}`}
      />

      <p>The entire application is now connected to Redux and Redux Persist.</p>

      <h3>Adding a product to Redux</h3>

      <p>Now let's see what happens when we add a product to the cart.</p>

      <CodeBlock
        code={`// AddToCart.tsx

"use client";

import { useAppDispatch } from "@/app/store/hooks";

import {
  addItemToCart,
} from "@/app/features/cart/cartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        stock: product.stock,
      })
    );
  };

  return (
    <button onClick={handleAddToCart}>
      Add to cart
    </button>
  );
};

export default AddToCart;`}
      />

      <p>
        The product is first added to the Redux store. Redux Persist then
        detects the state change and saves the persisted state to localStorage.
      </p>

      <h3>Reading persisted Redux data</h3>

      <p>
        Reading the data does not change when using Redux Persist. We simply use
        our normal <b>useAppSelector</b> hook.
      </p>

      <CodeBlock
        code={`// ShoppingCart.tsx

"use client";

import {
  useAppSelector,
} from "@/app/store/hooks";

const ShoppingCart = () => {
  const items = useAppSelector(
    (state) => state.cart.items
  );

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name} × {item.quantity}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;`}
      />

      <p>
        After refreshing the browser, the same selector will return the restored
        cart data.
      </p>

      <h3>Checking localStorage</h3>

      <p>
        We can verify that Redux Persist is working by opening the browser
        Developer Tools.
      </p>

      <CodeBlock
        code={`Developer Tools
    ↓
Application
    ↓
Local Storage`}
      />

      <p>
        Redux Persist will create a storage entry based on the key from our
        configuration:
      </p>

      <CodeBlock
        code={`// store/store.ts

const persistConfig = {
  key: "root",
  storage,
};`}
      />

      <p>The persisted data is stored as serialized data in localStorage.</p>

      <h3>Persisting only selected reducers</h3>

      <p>Sometimes we do not want to persist the entire Redux store.</p>

      <p>For example, imagine that our application has:</p>

      <CodeBlock
        code={`{
  cart: {},
  products: {},
  filters: {},
  ui: {}
}`}
      />

      <p>We may only want the cart to survive a page refresh.</p>

      <p>
        Redux Persist provides a <b>whitelist</b> option for this:
      </p>

      <CodeBlock
        code={`// store/store.ts

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};`}
      />

      <p>
        Now only the <b>cart</b> reducer will be persisted.
      </p>

      <h3>Using blacklist</h3>

      <p>
        Another option is <b>blacklist</b>. This allows us to persist everything
        except selected reducers.
      </p>

      <CodeBlock
        code={`// store/store.ts

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["ui"],
};`}
      />

      <p>
        In this example, everything will be persisted except the <b>ui</b>{" "}
        reducer.
      </p>

      <h3>Redux Persist vs manually using localStorage</h3>

      <p>
        It is possible to persist Redux state manually using <b>localStorage</b>{" "}
        and <b>useEffect</b>.
      </p>

      <p>For example:</p>

      <CodeBlock
        code={`// ShoppingCart.tsx

useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(items)
  );
}, [items]);`}
      />

      <p>
        We would also need additional logic to read the data from localStorage
        when the application starts.
      </p>

      <CodeBlock
        code={`// ShoppingCart.tsx

useEffect(() => {
  const savedCart =
    localStorage.getItem("cart");

  if (savedCart) {
    const cart = JSON.parse(savedCart);

    // restore cart
  }
}, []);`}
      />

      <p>
        This approach works, but it requires us to manually handle saving,
        loading, parsing, and restoring the state.
      </p>

      <p>
        Redux Persist handles these operations for us and integrates directly
        with the Redux store.
      </p>

      <h3>Why use Redux Persist for a shopping cart?</h3>

      <p>
        A shopping cart is one of the most practical examples of persistent
        client-side state.
      </p>

      <p>Without persistence:</p>

      <CodeBlock
        code={`Add product
    ↓
Redux Store
    ↓
Refresh page
    ↓
Cart is empty`}
      />

      <p>With Redux Persist:</p>

      <CodeBlock
        code={`Add product
    ↓
Redux Store
    ↓
Redux Persist
    ↓
localStorage
    ↓
Refresh page
    ↓
Redux Persist
    ↓
Cart restored`}
      />

      <h3>Important consideration about localStorage</h3>

      <p>
        Data stored in localStorage belongs to the browser. It is not a
        replacement for a database.
      </p>

      <p>
        You should not store sensitive information such as passwords, private
        tokens, or other sensitive server-side data in Redux Persist using
        localStorage.
      </p>

      <p>
        Redux Persist is best suited for client-side application state such as
        shopping carts, UI preferences, filters, and wishlists.
      </p>

      <h3>Project structure</h3>

      <p>A simple feature-based structure for this setup can look like this:</p>

      <CodeBlock
        code={`app/
│
├── features/
│   └── cart/
│       ├── cartSlice.ts
│       └── cartTypes.ts
│
├── store/
│   ├── store.ts
│   ├── hooks.ts
│   └── provider.tsx
│
├── components/
│   ├── Product/
│   ├── ShoppingCart/
│   ├── Header/
│   └── Footer/
│
├── layout.tsx
└── page.tsx`}
      />

      <h3>Complete data flow</h3>

      <p>After completing the setup, the complete data flow looks like this:</p>

      <CodeBlock
        code={`User clicks "Add to cart"
          ↓
      dispatch()
          ↓
     cartSlice
          ↓
     Redux Store
          ↓
    Redux Persist
          ↓
     localStorage


Browser refresh
          ↓
     localStorage
          ↓
    Redux Persist
          ↓
      rehydrate
          ↓
     Redux Store
          ↓
   React components`}
      />

      <h3>Conclusion</h3>

      <p>
        Redux Persist provides a simple way to make Redux state survive browser
        refreshes. Instead of manually synchronizing Redux with localStorage,
        Redux Persist handles storing and restoring the state for us.
      </p>

      <p>
        In a Next.js application, the basic setup consists of four important
        pieces:
      </p>

      <CodeBlock
        code={`1. persistReducer
2. persistStore
3. PersistGate
4. StoreProvider`}
      />

      <p>
        Once configured, Redux can continue to be used normally with{" "}
        <b>dispatch</b> and <b>useSelector</b>, while Redux Persist takes care
        of persistence in the background.
      </p>
    </div>
  );
};

export default PersistReduxDataEN;
