/**
 * description:
 * const arr = ['1', 2, '3']
 * type ArrType = UnwrapArray<typeof arr> => string | number
 */
declare type UnwrapArray<T> = T extends Array<infer P> ? P : never;
