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

export type ArticlesMap = Record<string, FC>;
// [key: string] = typ obiektu typu string / FC = component
// [key: string]: FC;

export const articlesMap: ArticlesMap = {
  js_types_PL: JSTypesPL,
  array_methods_PL: ArrayMethodsPL,
  operators_and_loops_PL: OperatorsAndLoopsPL,
  execution_context_EN: ExecutionContextEN,
  primitive_types_and_operators_EN: PrimitiveTypesAndOperatorsEN,
  objects_and_functions_EN: ObjectsAndFunctionsEn,
  object_oriented_java_script_EN: ObjectOrientedJavaScriptEN,
  async_await_EN: AsyncAwaitEN,
  iterators_EN: IteratorsEN,
  mongo_with_nextJS_EN: MongoWithNextjsEN,
  static_vs_dynamic_in_next_EN: StaticVsDynamicNext,
  caching_in_next_EN: CachingInNext,
  typescript_for_react_EN: TypeScriptforReactEN,
  redux_toolkit_EN: ReduxToolkitEN,
  server_and_clients_components_EN: ServerAndClientComponentsEN,
  fetching_in_nextjs_EN: FetchingInNextEN,
  server_actions_nextjs_EN: ServerActionsEN,
  errors_in_next_EN: ErrorsInNextEN,
  route_handlers_EN: RouteHandlersEN,
  image_optimization_EN: ImageOptimizationEN,
  unions_and_narrowing_EN: UnionsAndNarrowingEN,
  objects_in_typescript_EN: ObjectsInTypeScriptsEN,
  functions_in_typescript_EN: FunctionsTypeScriptEN,
  arrays_in_typescript_EN: ArraysInTypeScriptEN,
  interfaces_EN: InterfacesEN,
  type_modifiers_EN: TypeModifiersEN,
};
