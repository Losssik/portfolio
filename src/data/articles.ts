import JSTypesPL from "../articles/JSTypesPL";
import ArrayMethodsPL from "../articles/ArrayMethodsPL";
import type { FC } from "react";
import OperatorsAndLoopsPL from "../articles/OperatorsAndLoopsPL";
import ExecutionContextEN from "../articles/ExecutionContextEN";
import PrimitiveTypesAndOperatorsEN from "../articles/PrimitiveTypesAndOperatorsEN";
import ObjectsAndFunctionsEn from "../articles/ObjectsAndFunctionsEN";
import ObjectOrientedJavaScriptEN from "../articles/ObjectOrientedJavaScriptEN";
import AsyncAwaitEN from "../articles/AsyncAwaitEN";
import IteratorsEN from "../articles/IteratorsEN";
import MongoWithNextjsEN from "../articles/MongoWithNextjsEN";
import StaticVsDynamicNext from "../articles/StaticVsDynamicNext";
import CachingInNext from "../articles/CachingInNext";
import TypeScriptforReactEN from "../articles/TypeScriptForReactEN";
import ReduxToolkitEN from "../articles/ReduxToolkitEN";
import ServerAndClientComponentsEN from "../articles/ServerAndClientComponentsEN";
import FetchingInNextEN from "../articles/FetchingInNextEN";
import ServerActionsEN from "../articles/ServerActionsEN";
import ErrorsInNextEN from "../articles/ErrorsInNextEN";
import RouteHandlersEN from "../articles/RouteHandlersEN";
import ImageOptimizationEN from "../articles/ImageOptimizationEN";
import UnionsAndNarrowingEN from "../articles/UnionsAndNarrowingEN";
import ObjectsInTypeScriptsEN from "../articles/ObjectsInTypescriptEN";
import FunctionsTypeScriptEN from "../articles/FunctionsTypeScriptEN";
import ArraysInTypeScriptEN from "../articles/ArraysInTypeScriptEN";
import InterfacesEN from "../articles/InterfacesEN";
import TypeModifiersEN from "../articles/TypeModifiersEN";
import GenericsEN from "../articles/GeneriscEN";
import ReduxWithTypescriptEN from "../articles/ReduxWithTypescriptEN";
import CRUDOperationsEN from "../articles/CRUDOperationsEN";
import PopulateEN from "../articles/PopulateEN";
import ParamsEn from "../articles/ParamsEN";
import LoopsInJSPL from "../articles/LoopsInJSPL";
import PersistReduxDataEN from "../articles/PersistReduxDataEn";
import CustomHooksEn from "../articles/CustomHooksEN";

export type Article = {
  component: FC;
  category: "next" | "typescript" | "javascript" | "other";
};

export const articlesMap: Record<string, Article> = {
  // JS basics
  js_types_PL: {
    component: JSTypesPL,
    category: "javascript",
  },
  array_methods_PL: {
    component: ArrayMethodsPL,
    category: "javascript",
  },
  operators_and_loops_PL: {
    component: OperatorsAndLoopsPL,
    category: "javascript",
  },
  loops_in_JS_PL: {
    component: LoopsInJSPL,
    category: "javascript",
  },

  execution_context_EN: {
    component: ExecutionContextEN,
    category: "javascript",
  },
  primitive_types_and_operators_EN: {
    component: PrimitiveTypesAndOperatorsEN,
    category: "javascript",
  },
  objects_and_functions_EN: {
    component: ObjectsAndFunctionsEn,
    category: "javascript",
  },
  object_oriented_java_script_EN: {
    component: ObjectOrientedJavaScriptEN,
    category: "javascript",
  },
  async_await_EN: {
    component: AsyncAwaitEN,
    category: "javascript",
  },
  iterators_EN: {
    component: IteratorsEN,
    category: "javascript",
  },

  // Next.js
  mongo_with_nextJS_EN: {
    component: MongoWithNextjsEN,
    category: "next",
  },
  static_vs_dynamic_in_next_EN: {
    component: StaticVsDynamicNext,
    category: "next",
  },
  caching_in_next_EN: {
    component: CachingInNext,
    category: "next",
  },
  server_and_clients_components_EN: {
    component: ServerAndClientComponentsEN,
    category: "next",
  },
  fetching_in_nextjs_EN: {
    component: FetchingInNextEN,
    category: "next",
  },
  server_actions_nextjs_EN: {
    component: ServerActionsEN,
    category: "next",
  },
  errors_in_next_EN: {
    component: ErrorsInNextEN,
    category: "next",
  },
  route_handlers_EN: {
    component: RouteHandlersEN,
    category: "next",
  },
  image_optimization_EN: {
    component: ImageOptimizationEN,
    category: "next",
  },
  crud_operations_EN: {
    component: CRUDOperationsEN,
    category: "next",
  },
  params_EN: {
    component: ParamsEn,
    category: "next",
  },

  // TypeScript
  typescript_for_react_EN: {
    component: TypeScriptforReactEN,
    category: "typescript",
  },
  unions_and_narrowing_EN: {
    component: UnionsAndNarrowingEN,
    category: "typescript",
  },
  objects_in_typescript_EN: {
    component: ObjectsInTypeScriptsEN,
    category: "typescript",
  },
  functions_in_typescript_EN: {
    component: FunctionsTypeScriptEN,
    category: "typescript",
  },
  arrays_in_typescript_EN: {
    component: ArraysInTypeScriptEN,
    category: "typescript",
  },
  interfaces_EN: {
    component: InterfacesEN,
    category: "typescript",
  },
  type_modifiers_EN: {
    component: TypeModifiersEN,
    category: "typescript",
  },
  generics_EN: {
    component: GenericsEN,
    category: "typescript",
  },
  redux_with_typescript_EN: {
    component: ReduxWithTypescriptEN,
    category: "typescript",
  },

  // Other
  redux_toolkit_EN: {
    component: ReduxToolkitEN,
    category: "other",
  },
  populate_EN: {
    component: PopulateEN,
    category: "other",
  },
  persisting_data_in_redux_EN: {
    component: PersistReduxDataEN,
    category: "other",
  },
  custom_hooks_EN: {
    component: CustomHooksEn,
    category: "other",
  },
};
