/// <reference types="@bookshop/typings" />
import "@bookshop/typings/enum";
import type { Context, Next } from "koa";

declare type MiddleWareFn = (ctx: Context & CustomContext, next: Next) => void;
