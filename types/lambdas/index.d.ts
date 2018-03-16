// FUNCS ///////////////////////////////////////////////////////////////////////
export type Func<T> = () => T;
export type AsyncFunc<T> = () => Promise<T>;

/** Synchronous callback with a single parameter. */
export type Func1<T1, TResult> = (p1: T1) => TResult;
/** Asynchronous callback with a single parameter. */
export type AsyncFunc1<T1, TResult> = (p1: T1) => Promise<TResult>;

export type Func2<T1, T2, TResult> = (p1: T1, p2: T2) => TResult;
export type AsyncFunc2<T1, T2, TResult> = (p1: T1, p2: T2) => Promise<TResult>;

export type Func3<T1, T2, T3, TResult> = (p1: T1, p2: T2, p3: T3) => TResult;
export type AsyncFunc3<T1, T2, T3, TResult> = (p1: T1, p2: T2, p3: T3) => Promise<TResult>;

export type Func4<T1, T2, T3, TResult> = (p1: T1, p2: T2, p3: T3) => TResult;
export type AsyncFunc4<T1, T2, T3, T4, TResult> = (p1: T1, p2: T2, p3: T3, p4: T4) => Promise<TResult>;

// ACTIONS /////////////////////////////////////////////////////////////////////
export type Action = () => void;
export type AsyncAction = () => Promise<void>;

export type Action1<T> = (p1: T) => void;
export type AsyncAction1<T> = (p1: T) => Promise<void>;

export type Action2<T1, T2> = (p1: T1, p2: T2) => void;
export type AsyncAction2<T1, T2> = (p1: T1, p2: T2) => Promise<void>;
