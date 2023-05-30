
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = {
  id: number
  uuid: string
  username: string
  name: string
  password: string
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
}

/**
 * Model user_detail
 * 
 */
export type user_detail = {
  id: number
  uuid: string
  user_id: number
  city: string | null
  bio: string | null
  birth_date: Date | null
  cover_pict: string | null
  profile_pict: string | null
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
}

/**
 * Model user_app
 * 
 */
export type user_app = {
  id: number
  uuid: string
  user_id: number
  apps_id: number
  desc: string
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
}

/**
 * Model apps
 * 
 */
export type apps = {
  id: number
  uuid: string
  name: string
  desc: string | null
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.user_detail`: Exposes CRUD operations for the **user_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_details
    * const user_details = await prisma.user_detail.findMany()
    * ```
    */
  get user_detail(): Prisma.user_detailDelegate<GlobalReject>;

  /**
   * `prisma.user_app`: Exposes CRUD operations for the **user_app** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_apps
    * const user_apps = await prisma.user_app.findMany()
    * ```
    */
  get user_app(): Prisma.user_appDelegate<GlobalReject>;

  /**
   * `prisma.apps`: Exposes CRUD operations for the **apps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.apps.findMany()
    * ```
    */
  get apps(): Prisma.appsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.1
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    user_detail: 'user_detail',
    user_app: 'user_app',
    apps: 'apps'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    user_app: number
    user_detail: number
  }

  export type UserCountOutputTypeSelect = {
    user_app?: boolean
    user_detail?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type AppsCountOutputType
   */


  export type AppsCountOutputType = {
    user_app: number
  }

  export type AppsCountOutputTypeSelect = {
    user_app?: boolean
  }

  export type AppsCountOutputTypeGetPayload<S extends boolean | null | undefined | AppsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AppsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AppsCountOutputTypeArgs)
    ? AppsCountOutputType 
    : S extends { select: any } & (AppsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AppsCountOutputType ? AppsCountOutputType[P] : never
  } 
      : AppsCountOutputType




  // Custom InputTypes

  /**
   * AppsCountOutputType without action
   */
  export type AppsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AppsCountOutputType
     */
    select?: AppsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    username: string | null
    name: string | null
    password: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    username: string | null
    name: string | null
    password: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uuid: number
    username: number
    name: number
    password: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    name?: true
    password?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    name?: true
    password?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    name?: true
    password?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    uuid: string
    username: string
    name: string
    password: string
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    id?: boolean
    uuid?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    user_app?: boolean | user$user_appArgs
    user_detail?: boolean | user$user_detailArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type userInclude = {
    user_app?: boolean | user$user_appArgs
    user_detail?: boolean | user$user_detailArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user_app' ? Array < user_appGetPayload<S['include'][P]>>  :
        P extends 'user_detail' ? Array < user_detailGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user_app' ? Array < user_appGetPayload<S['select'][P]>>  :
        P extends 'user_detail' ? Array < user_detailGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): Prisma.PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user_app<T extends user$user_appArgs= {}>(args?: Subset<T, user$user_appArgs>): Prisma.PrismaPromise<Array<user_appGetPayload<T>>| Null>;

    user_detail<T extends user$user_detailArgs= {}>(args?: Subset<T, user$user_detailArgs>): Prisma.PrismaPromise<Array<user_detailGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.user_app
   */
  export type user$user_appArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    where?: user_appWhereInput
    orderBy?: Enumerable<user_appOrderByWithRelationInput>
    cursor?: user_appWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_appScalarFieldEnum>
  }


  /**
   * user.user_detail
   */
  export type user$user_detailArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    where?: user_detailWhereInput
    orderBy?: Enumerable<user_detailOrderByWithRelationInput>
    cursor?: user_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_detailScalarFieldEnum>
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
  }



  /**
   * Model user_detail
   */


  export type AggregateUser_detail = {
    _count: User_detailCountAggregateOutputType | null
    _avg: User_detailAvgAggregateOutputType | null
    _sum: User_detailSumAggregateOutputType | null
    _min: User_detailMinAggregateOutputType | null
    _max: User_detailMaxAggregateOutputType | null
  }

  export type User_detailAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_detailSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_detailMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: number | null
    city: string | null
    bio: string | null
    birth_date: Date | null
    cover_pict: string | null
    profile_pict: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_detailMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: number | null
    city: string | null
    bio: string | null
    birth_date: Date | null
    cover_pict: string | null
    profile_pict: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_detailCountAggregateOutputType = {
    id: number
    uuid: number
    user_id: number
    city: number
    bio: number
    birth_date: number
    cover_pict: number
    profile_pict: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    _all: number
  }


  export type User_detailAvgAggregateInputType = {
    id?: true
    user_id?: true
    created_by?: true
    modified_by?: true
  }

  export type User_detailSumAggregateInputType = {
    id?: true
    user_id?: true
    created_by?: true
    modified_by?: true
  }

  export type User_detailMinAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    city?: true
    bio?: true
    birth_date?: true
    cover_pict?: true
    profile_pict?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type User_detailMaxAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    city?: true
    bio?: true
    birth_date?: true
    cover_pict?: true
    profile_pict?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type User_detailCountAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    city?: true
    bio?: true
    birth_date?: true
    cover_pict?: true
    profile_pict?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    _all?: true
  }

  export type User_detailAggregateArgs = {
    /**
     * Filter which user_detail to aggregate.
     */
    where?: user_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: Enumerable<user_detailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_details
    **/
    _count?: true | User_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_detailMaxAggregateInputType
  }

  export type GetUser_detailAggregateType<T extends User_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_detail[P]>
      : GetScalarType<T[P], AggregateUser_detail[P]>
  }




  export type User_detailGroupByArgs = {
    where?: user_detailWhereInput
    orderBy?: Enumerable<user_detailOrderByWithAggregationInput>
    by: User_detailScalarFieldEnum[]
    having?: user_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_detailCountAggregateInputType | true
    _avg?: User_detailAvgAggregateInputType
    _sum?: User_detailSumAggregateInputType
    _min?: User_detailMinAggregateInputType
    _max?: User_detailMaxAggregateInputType
  }


  export type User_detailGroupByOutputType = {
    id: number
    uuid: string
    user_id: number
    city: string | null
    bio: string | null
    birth_date: Date | null
    cover_pict: string | null
    profile_pict: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    _count: User_detailCountAggregateOutputType | null
    _avg: User_detailAvgAggregateOutputType | null
    _sum: User_detailSumAggregateOutputType | null
    _min: User_detailMinAggregateOutputType | null
    _max: User_detailMaxAggregateOutputType | null
  }

  type GetUser_detailGroupByPayload<T extends User_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_detailGroupByOutputType[P]>
            : GetScalarType<T[P], User_detailGroupByOutputType[P]>
        }
      >
    >


  export type user_detailSelect = {
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    city?: boolean
    bio?: boolean
    birth_date?: boolean
    cover_pict?: boolean
    profile_pict?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    user?: boolean | userArgs
  }


  export type user_detailInclude = {
    user?: boolean | userArgs
  }

  export type user_detailGetPayload<S extends boolean | null | undefined | user_detailArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user_detail :
    S extends undefined ? never :
    S extends { include: any } & (user_detailArgs | user_detailFindManyArgs)
    ? user_detail  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (user_detailArgs | user_detailFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? userGetPayload<S['select'][P]> :  P extends keyof user_detail ? user_detail[P] : never
  } 
      : user_detail


  type user_detailCountArgs = 
    Omit<user_detailFindManyArgs, 'select' | 'include'> & {
      select?: User_detailCountAggregateInputType | true
    }

  export interface user_detailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_detail that matches the filter.
     * @param {user_detailFindUniqueArgs} args - Arguments to find a User_detail
     * @example
     * // Get one User_detail
     * const user_detail = await prisma.user_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_detailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_detailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_detail'> extends True ? Prisma__user_detailClient<user_detailGetPayload<T>> : Prisma__user_detailClient<user_detailGetPayload<T> | null, null>

    /**
     * Find one User_detail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_detailFindUniqueOrThrowArgs} args - Arguments to find a User_detail
     * @example
     * // Get one User_detail
     * const user_detail = await prisma.user_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_detailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_detailFindUniqueOrThrowArgs>
    ): Prisma__user_detailClient<user_detailGetPayload<T>>

    /**
     * Find the first User_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailFindFirstArgs} args - Arguments to find a User_detail
     * @example
     * // Get one User_detail
     * const user_detail = await prisma.user_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_detailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_detailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_detail'> extends True ? Prisma__user_detailClient<user_detailGetPayload<T>> : Prisma__user_detailClient<user_detailGetPayload<T> | null, null>

    /**
     * Find the first User_detail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailFindFirstOrThrowArgs} args - Arguments to find a User_detail
     * @example
     * // Get one User_detail
     * const user_detail = await prisma.user_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_detailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_detailFindFirstOrThrowArgs>
    ): Prisma__user_detailClient<user_detailGetPayload<T>>

    /**
     * Find zero or more User_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_details
     * const user_details = await prisma.user_detail.findMany()
     * 
     * // Get first 10 User_details
     * const user_details = await prisma.user_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_detailWithIdOnly = await prisma.user_detail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_detailFindManyArgs>(
      args?: SelectSubset<T, user_detailFindManyArgs>
    ): Prisma.PrismaPromise<Array<user_detailGetPayload<T>>>

    /**
     * Create a User_detail.
     * @param {user_detailCreateArgs} args - Arguments to create a User_detail.
     * @example
     * // Create one User_detail
     * const User_detail = await prisma.user_detail.create({
     *   data: {
     *     // ... data to create a User_detail
     *   }
     * })
     * 
    **/
    create<T extends user_detailCreateArgs>(
      args: SelectSubset<T, user_detailCreateArgs>
    ): Prisma__user_detailClient<user_detailGetPayload<T>>

    /**
     * Create many User_details.
     *     @param {user_detailCreateManyArgs} args - Arguments to create many User_details.
     *     @example
     *     // Create many User_details
     *     const user_detail = await prisma.user_detail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_detailCreateManyArgs>(
      args?: SelectSubset<T, user_detailCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_detail.
     * @param {user_detailDeleteArgs} args - Arguments to delete one User_detail.
     * @example
     * // Delete one User_detail
     * const User_detail = await prisma.user_detail.delete({
     *   where: {
     *     // ... filter to delete one User_detail
     *   }
     * })
     * 
    **/
    delete<T extends user_detailDeleteArgs>(
      args: SelectSubset<T, user_detailDeleteArgs>
    ): Prisma__user_detailClient<user_detailGetPayload<T>>

    /**
     * Update one User_detail.
     * @param {user_detailUpdateArgs} args - Arguments to update one User_detail.
     * @example
     * // Update one User_detail
     * const user_detail = await prisma.user_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_detailUpdateArgs>(
      args: SelectSubset<T, user_detailUpdateArgs>
    ): Prisma__user_detailClient<user_detailGetPayload<T>>

    /**
     * Delete zero or more User_details.
     * @param {user_detailDeleteManyArgs} args - Arguments to filter User_details to delete.
     * @example
     * // Delete a few User_details
     * const { count } = await prisma.user_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_detailDeleteManyArgs>(
      args?: SelectSubset<T, user_detailDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_details
     * const user_detail = await prisma.user_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_detailUpdateManyArgs>(
      args: SelectSubset<T, user_detailUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_detail.
     * @param {user_detailUpsertArgs} args - Arguments to update or create a User_detail.
     * @example
     * // Update or create a User_detail
     * const user_detail = await prisma.user_detail.upsert({
     *   create: {
     *     // ... data to create a User_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_detail we want to update
     *   }
     * })
    **/
    upsert<T extends user_detailUpsertArgs>(
      args: SelectSubset<T, user_detailUpsertArgs>
    ): Prisma__user_detailClient<user_detailGetPayload<T>>

    /**
     * Count the number of User_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_detailCountArgs} args - Arguments to filter User_details to count.
     * @example
     * // Count the number of User_details
     * const count = await prisma.user_detail.count({
     *   where: {
     *     // ... the filter for the User_details we want to count
     *   }
     * })
    **/
    count<T extends user_detailCountArgs>(
      args?: Subset<T, user_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_detailAggregateArgs>(args: Subset<T, User_detailAggregateArgs>): Prisma.PrismaPromise<GetUser_detailAggregateType<T>>

    /**
     * Group by User_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_detailGroupByArgs['orderBy'] }
        : { orderBy?: User_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_detailClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user_detail base type for findUnique actions
   */
  export type user_detailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * Filter, which user_detail to fetch.
     */
    where: user_detailWhereUniqueInput
  }

  /**
   * user_detail findUnique
   */
  export interface user_detailFindUniqueArgs extends user_detailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_detail findUniqueOrThrow
   */
  export type user_detailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * Filter, which user_detail to fetch.
     */
    where: user_detailWhereUniqueInput
  }


  /**
   * user_detail base type for findFirst actions
   */
  export type user_detailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * Filter, which user_detail to fetch.
     */
    where?: user_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: Enumerable<user_detailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_details.
     */
    cursor?: user_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_details.
     */
    distinct?: Enumerable<User_detailScalarFieldEnum>
  }

  /**
   * user_detail findFirst
   */
  export interface user_detailFindFirstArgs extends user_detailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_detail findFirstOrThrow
   */
  export type user_detailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * Filter, which user_detail to fetch.
     */
    where?: user_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: Enumerable<user_detailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_details.
     */
    cursor?: user_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_details.
     */
    distinct?: Enumerable<User_detailScalarFieldEnum>
  }


  /**
   * user_detail findMany
   */
  export type user_detailFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * Filter, which user_details to fetch.
     */
    where?: user_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_details to fetch.
     */
    orderBy?: Enumerable<user_detailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_details.
     */
    cursor?: user_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_details.
     */
    skip?: number
    distinct?: Enumerable<User_detailScalarFieldEnum>
  }


  /**
   * user_detail create
   */
  export type user_detailCreateArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * The data needed to create a user_detail.
     */
    data: XOR<user_detailCreateInput, user_detailUncheckedCreateInput>
  }


  /**
   * user_detail createMany
   */
  export type user_detailCreateManyArgs = {
    /**
     * The data used to create many user_details.
     */
    data: Enumerable<user_detailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_detail update
   */
  export type user_detailUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * The data needed to update a user_detail.
     */
    data: XOR<user_detailUpdateInput, user_detailUncheckedUpdateInput>
    /**
     * Choose, which user_detail to update.
     */
    where: user_detailWhereUniqueInput
  }


  /**
   * user_detail updateMany
   */
  export type user_detailUpdateManyArgs = {
    /**
     * The data used to update user_details.
     */
    data: XOR<user_detailUpdateManyMutationInput, user_detailUncheckedUpdateManyInput>
    /**
     * Filter which user_details to update
     */
    where?: user_detailWhereInput
  }


  /**
   * user_detail upsert
   */
  export type user_detailUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * The filter to search for the user_detail to update in case it exists.
     */
    where: user_detailWhereUniqueInput
    /**
     * In case the user_detail found by the `where` argument doesn't exist, create a new user_detail with this data.
     */
    create: XOR<user_detailCreateInput, user_detailUncheckedCreateInput>
    /**
     * In case the user_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_detailUpdateInput, user_detailUncheckedUpdateInput>
  }


  /**
   * user_detail delete
   */
  export type user_detailDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
    /**
     * Filter which user_detail to delete.
     */
    where: user_detailWhereUniqueInput
  }


  /**
   * user_detail deleteMany
   */
  export type user_detailDeleteManyArgs = {
    /**
     * Filter which user_details to delete
     */
    where?: user_detailWhereInput
  }


  /**
   * user_detail without action
   */
  export type user_detailArgs = {
    /**
     * Select specific fields to fetch from the user_detail
     */
    select?: user_detailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_detailInclude | null
  }



  /**
   * Model user_app
   */


  export type AggregateUser_app = {
    _count: User_appCountAggregateOutputType | null
    _avg: User_appAvgAggregateOutputType | null
    _sum: User_appSumAggregateOutputType | null
    _min: User_appMinAggregateOutputType | null
    _max: User_appMaxAggregateOutputType | null
  }

  export type User_appAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    apps_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_appSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    apps_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_appMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: number | null
    apps_id: number | null
    desc: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_appMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: number | null
    apps_id: number | null
    desc: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type User_appCountAggregateOutputType = {
    id: number
    uuid: number
    user_id: number
    apps_id: number
    desc: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    _all: number
  }


  export type User_appAvgAggregateInputType = {
    id?: true
    user_id?: true
    apps_id?: true
    created_by?: true
    modified_by?: true
  }

  export type User_appSumAggregateInputType = {
    id?: true
    user_id?: true
    apps_id?: true
    created_by?: true
    modified_by?: true
  }

  export type User_appMinAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    apps_id?: true
    desc?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type User_appMaxAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    apps_id?: true
    desc?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type User_appCountAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    apps_id?: true
    desc?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    _all?: true
  }

  export type User_appAggregateArgs = {
    /**
     * Filter which user_app to aggregate.
     */
    where?: user_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: Enumerable<user_appOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_apps
    **/
    _count?: true | User_appCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_appAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_appSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_appMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_appMaxAggregateInputType
  }

  export type GetUser_appAggregateType<T extends User_appAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_app]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_app[P]>
      : GetScalarType<T[P], AggregateUser_app[P]>
  }




  export type User_appGroupByArgs = {
    where?: user_appWhereInput
    orderBy?: Enumerable<user_appOrderByWithAggregationInput>
    by: User_appScalarFieldEnum[]
    having?: user_appScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_appCountAggregateInputType | true
    _avg?: User_appAvgAggregateInputType
    _sum?: User_appSumAggregateInputType
    _min?: User_appMinAggregateInputType
    _max?: User_appMaxAggregateInputType
  }


  export type User_appGroupByOutputType = {
    id: number
    uuid: string
    user_id: number
    apps_id: number
    desc: string
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    _count: User_appCountAggregateOutputType | null
    _avg: User_appAvgAggregateOutputType | null
    _sum: User_appSumAggregateOutputType | null
    _min: User_appMinAggregateOutputType | null
    _max: User_appMaxAggregateOutputType | null
  }

  type GetUser_appGroupByPayload<T extends User_appGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_appGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_appGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_appGroupByOutputType[P]>
            : GetScalarType<T[P], User_appGroupByOutputType[P]>
        }
      >
    >


  export type user_appSelect = {
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    apps_id?: boolean
    desc?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    user?: boolean | userArgs
    apps?: boolean | appsArgs
  }


  export type user_appInclude = {
    user?: boolean | userArgs
    apps?: boolean | appsArgs
  }

  export type user_appGetPayload<S extends boolean | null | undefined | user_appArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user_app :
    S extends undefined ? never :
    S extends { include: any } & (user_appArgs | user_appFindManyArgs)
    ? user_app  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? userGetPayload<S['include'][P]> :
        P extends 'apps' ? appsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (user_appArgs | user_appFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? userGetPayload<S['select'][P]> :
        P extends 'apps' ? appsGetPayload<S['select'][P]> :  P extends keyof user_app ? user_app[P] : never
  } 
      : user_app


  type user_appCountArgs = 
    Omit<user_appFindManyArgs, 'select' | 'include'> & {
      select?: User_appCountAggregateInputType | true
    }

  export interface user_appDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_app that matches the filter.
     * @param {user_appFindUniqueArgs} args - Arguments to find a User_app
     * @example
     * // Get one User_app
     * const user_app = await prisma.user_app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_appFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_appFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_app'> extends True ? Prisma__user_appClient<user_appGetPayload<T>> : Prisma__user_appClient<user_appGetPayload<T> | null, null>

    /**
     * Find one User_app that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_appFindUniqueOrThrowArgs} args - Arguments to find a User_app
     * @example
     * // Get one User_app
     * const user_app = await prisma.user_app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_appFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_appFindUniqueOrThrowArgs>
    ): Prisma__user_appClient<user_appGetPayload<T>>

    /**
     * Find the first User_app that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appFindFirstArgs} args - Arguments to find a User_app
     * @example
     * // Get one User_app
     * const user_app = await prisma.user_app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_appFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_appFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_app'> extends True ? Prisma__user_appClient<user_appGetPayload<T>> : Prisma__user_appClient<user_appGetPayload<T> | null, null>

    /**
     * Find the first User_app that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appFindFirstOrThrowArgs} args - Arguments to find a User_app
     * @example
     * // Get one User_app
     * const user_app = await prisma.user_app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_appFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_appFindFirstOrThrowArgs>
    ): Prisma__user_appClient<user_appGetPayload<T>>

    /**
     * Find zero or more User_apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_apps
     * const user_apps = await prisma.user_app.findMany()
     * 
     * // Get first 10 User_apps
     * const user_apps = await prisma.user_app.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_appWithIdOnly = await prisma.user_app.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_appFindManyArgs>(
      args?: SelectSubset<T, user_appFindManyArgs>
    ): Prisma.PrismaPromise<Array<user_appGetPayload<T>>>

    /**
     * Create a User_app.
     * @param {user_appCreateArgs} args - Arguments to create a User_app.
     * @example
     * // Create one User_app
     * const User_app = await prisma.user_app.create({
     *   data: {
     *     // ... data to create a User_app
     *   }
     * })
     * 
    **/
    create<T extends user_appCreateArgs>(
      args: SelectSubset<T, user_appCreateArgs>
    ): Prisma__user_appClient<user_appGetPayload<T>>

    /**
     * Create many User_apps.
     *     @param {user_appCreateManyArgs} args - Arguments to create many User_apps.
     *     @example
     *     // Create many User_apps
     *     const user_app = await prisma.user_app.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_appCreateManyArgs>(
      args?: SelectSubset<T, user_appCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_app.
     * @param {user_appDeleteArgs} args - Arguments to delete one User_app.
     * @example
     * // Delete one User_app
     * const User_app = await prisma.user_app.delete({
     *   where: {
     *     // ... filter to delete one User_app
     *   }
     * })
     * 
    **/
    delete<T extends user_appDeleteArgs>(
      args: SelectSubset<T, user_appDeleteArgs>
    ): Prisma__user_appClient<user_appGetPayload<T>>

    /**
     * Update one User_app.
     * @param {user_appUpdateArgs} args - Arguments to update one User_app.
     * @example
     * // Update one User_app
     * const user_app = await prisma.user_app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_appUpdateArgs>(
      args: SelectSubset<T, user_appUpdateArgs>
    ): Prisma__user_appClient<user_appGetPayload<T>>

    /**
     * Delete zero or more User_apps.
     * @param {user_appDeleteManyArgs} args - Arguments to filter User_apps to delete.
     * @example
     * // Delete a few User_apps
     * const { count } = await prisma.user_app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_appDeleteManyArgs>(
      args?: SelectSubset<T, user_appDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_apps
     * const user_app = await prisma.user_app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_appUpdateManyArgs>(
      args: SelectSubset<T, user_appUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_app.
     * @param {user_appUpsertArgs} args - Arguments to update or create a User_app.
     * @example
     * // Update or create a User_app
     * const user_app = await prisma.user_app.upsert({
     *   create: {
     *     // ... data to create a User_app
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_app we want to update
     *   }
     * })
    **/
    upsert<T extends user_appUpsertArgs>(
      args: SelectSubset<T, user_appUpsertArgs>
    ): Prisma__user_appClient<user_appGetPayload<T>>

    /**
     * Count the number of User_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_appCountArgs} args - Arguments to filter User_apps to count.
     * @example
     * // Count the number of User_apps
     * const count = await prisma.user_app.count({
     *   where: {
     *     // ... the filter for the User_apps we want to count
     *   }
     * })
    **/
    count<T extends user_appCountArgs>(
      args?: Subset<T, user_appCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_appCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_app.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_appAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_appAggregateArgs>(args: Subset<T, User_appAggregateArgs>): Prisma.PrismaPromise<GetUser_appAggregateType<T>>

    /**
     * Group by User_app.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_appGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_appGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_appGroupByArgs['orderBy'] }
        : { orderBy?: User_appGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_appGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_appGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_app.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_appClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    apps<T extends appsArgs= {}>(args?: Subset<T, appsArgs>): Prisma__appsClient<appsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user_app base type for findUnique actions
   */
  export type user_appFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * Filter, which user_app to fetch.
     */
    where: user_appWhereUniqueInput
  }

  /**
   * user_app findUnique
   */
  export interface user_appFindUniqueArgs extends user_appFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_app findUniqueOrThrow
   */
  export type user_appFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * Filter, which user_app to fetch.
     */
    where: user_appWhereUniqueInput
  }


  /**
   * user_app base type for findFirst actions
   */
  export type user_appFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * Filter, which user_app to fetch.
     */
    where?: user_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: Enumerable<user_appOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_apps.
     */
    cursor?: user_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_apps.
     */
    distinct?: Enumerable<User_appScalarFieldEnum>
  }

  /**
   * user_app findFirst
   */
  export interface user_appFindFirstArgs extends user_appFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_app findFirstOrThrow
   */
  export type user_appFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * Filter, which user_app to fetch.
     */
    where?: user_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: Enumerable<user_appOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_apps.
     */
    cursor?: user_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_apps.
     */
    distinct?: Enumerable<User_appScalarFieldEnum>
  }


  /**
   * user_app findMany
   */
  export type user_appFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * Filter, which user_apps to fetch.
     */
    where?: user_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_apps to fetch.
     */
    orderBy?: Enumerable<user_appOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_apps.
     */
    cursor?: user_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_apps.
     */
    skip?: number
    distinct?: Enumerable<User_appScalarFieldEnum>
  }


  /**
   * user_app create
   */
  export type user_appCreateArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * The data needed to create a user_app.
     */
    data: XOR<user_appCreateInput, user_appUncheckedCreateInput>
  }


  /**
   * user_app createMany
   */
  export type user_appCreateManyArgs = {
    /**
     * The data used to create many user_apps.
     */
    data: Enumerable<user_appCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_app update
   */
  export type user_appUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * The data needed to update a user_app.
     */
    data: XOR<user_appUpdateInput, user_appUncheckedUpdateInput>
    /**
     * Choose, which user_app to update.
     */
    where: user_appWhereUniqueInput
  }


  /**
   * user_app updateMany
   */
  export type user_appUpdateManyArgs = {
    /**
     * The data used to update user_apps.
     */
    data: XOR<user_appUpdateManyMutationInput, user_appUncheckedUpdateManyInput>
    /**
     * Filter which user_apps to update
     */
    where?: user_appWhereInput
  }


  /**
   * user_app upsert
   */
  export type user_appUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * The filter to search for the user_app to update in case it exists.
     */
    where: user_appWhereUniqueInput
    /**
     * In case the user_app found by the `where` argument doesn't exist, create a new user_app with this data.
     */
    create: XOR<user_appCreateInput, user_appUncheckedCreateInput>
    /**
     * In case the user_app was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_appUpdateInput, user_appUncheckedUpdateInput>
  }


  /**
   * user_app delete
   */
  export type user_appDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    /**
     * Filter which user_app to delete.
     */
    where: user_appWhereUniqueInput
  }


  /**
   * user_app deleteMany
   */
  export type user_appDeleteManyArgs = {
    /**
     * Filter which user_apps to delete
     */
    where?: user_appWhereInput
  }


  /**
   * user_app without action
   */
  export type user_appArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
  }



  /**
   * Model apps
   */


  export type AggregateApps = {
    _count: AppsCountAggregateOutputType | null
    _avg: AppsAvgAggregateOutputType | null
    _sum: AppsSumAggregateOutputType | null
    _min: AppsMinAggregateOutputType | null
    _max: AppsMaxAggregateOutputType | null
  }

  export type AppsAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type AppsSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type AppsMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    desc: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type AppsMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    desc: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type AppsCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    desc: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    _all: number
  }


  export type AppsAvgAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type AppsSumAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type AppsMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    desc?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type AppsMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    desc?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type AppsCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    desc?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    _all?: true
  }

  export type AppsAggregateArgs = {
    /**
     * Filter which apps to aggregate.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: Enumerable<appsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apps
    **/
    _count?: true | AppsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppsMaxAggregateInputType
  }

  export type GetAppsAggregateType<T extends AppsAggregateArgs> = {
        [P in keyof T & keyof AggregateApps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApps[P]>
      : GetScalarType<T[P], AggregateApps[P]>
  }




  export type AppsGroupByArgs = {
    where?: appsWhereInput
    orderBy?: Enumerable<appsOrderByWithAggregationInput>
    by: AppsScalarFieldEnum[]
    having?: appsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppsCountAggregateInputType | true
    _avg?: AppsAvgAggregateInputType
    _sum?: AppsSumAggregateInputType
    _min?: AppsMinAggregateInputType
    _max?: AppsMaxAggregateInputType
  }


  export type AppsGroupByOutputType = {
    id: number
    uuid: string
    name: string
    desc: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    _count: AppsCountAggregateOutputType | null
    _avg: AppsAvgAggregateOutputType | null
    _sum: AppsSumAggregateOutputType | null
    _min: AppsMinAggregateOutputType | null
    _max: AppsMaxAggregateOutputType | null
  }

  type GetAppsGroupByPayload<T extends AppsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AppsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppsGroupByOutputType[P]>
            : GetScalarType<T[P], AppsGroupByOutputType[P]>
        }
      >
    >


  export type appsSelect = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    desc?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    user_app?: boolean | apps$user_appArgs
    _count?: boolean | AppsCountOutputTypeArgs
  }


  export type appsInclude = {
    user_app?: boolean | apps$user_appArgs
    _count?: boolean | AppsCountOutputTypeArgs
  }

  export type appsGetPayload<S extends boolean | null | undefined | appsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? apps :
    S extends undefined ? never :
    S extends { include: any } & (appsArgs | appsFindManyArgs)
    ? apps  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user_app' ? Array < user_appGetPayload<S['include'][P]>>  :
        P extends '_count' ? AppsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (appsArgs | appsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user_app' ? Array < user_appGetPayload<S['select'][P]>>  :
        P extends '_count' ? AppsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof apps ? apps[P] : never
  } 
      : apps


  type appsCountArgs = 
    Omit<appsFindManyArgs, 'select' | 'include'> & {
      select?: AppsCountAggregateInputType | true
    }

  export interface appsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Apps that matches the filter.
     * @param {appsFindUniqueArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends appsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, appsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'apps'> extends True ? Prisma__appsClient<appsGetPayload<T>> : Prisma__appsClient<appsGetPayload<T> | null, null>

    /**
     * Find one Apps that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {appsFindUniqueOrThrowArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends appsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, appsFindUniqueOrThrowArgs>
    ): Prisma__appsClient<appsGetPayload<T>>

    /**
     * Find the first Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsFindFirstArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends appsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, appsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'apps'> extends True ? Prisma__appsClient<appsGetPayload<T>> : Prisma__appsClient<appsGetPayload<T> | null, null>

    /**
     * Find the first Apps that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsFindFirstOrThrowArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends appsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, appsFindFirstOrThrowArgs>
    ): Prisma__appsClient<appsGetPayload<T>>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.apps.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.apps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appsWithIdOnly = await prisma.apps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends appsFindManyArgs>(
      args?: SelectSubset<T, appsFindManyArgs>
    ): Prisma.PrismaPromise<Array<appsGetPayload<T>>>

    /**
     * Create a Apps.
     * @param {appsCreateArgs} args - Arguments to create a Apps.
     * @example
     * // Create one Apps
     * const Apps = await prisma.apps.create({
     *   data: {
     *     // ... data to create a Apps
     *   }
     * })
     * 
    **/
    create<T extends appsCreateArgs>(
      args: SelectSubset<T, appsCreateArgs>
    ): Prisma__appsClient<appsGetPayload<T>>

    /**
     * Create many Apps.
     *     @param {appsCreateManyArgs} args - Arguments to create many Apps.
     *     @example
     *     // Create many Apps
     *     const apps = await prisma.apps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends appsCreateManyArgs>(
      args?: SelectSubset<T, appsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apps.
     * @param {appsDeleteArgs} args - Arguments to delete one Apps.
     * @example
     * // Delete one Apps
     * const Apps = await prisma.apps.delete({
     *   where: {
     *     // ... filter to delete one Apps
     *   }
     * })
     * 
    **/
    delete<T extends appsDeleteArgs>(
      args: SelectSubset<T, appsDeleteArgs>
    ): Prisma__appsClient<appsGetPayload<T>>

    /**
     * Update one Apps.
     * @param {appsUpdateArgs} args - Arguments to update one Apps.
     * @example
     * // Update one Apps
     * const apps = await prisma.apps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends appsUpdateArgs>(
      args: SelectSubset<T, appsUpdateArgs>
    ): Prisma__appsClient<appsGetPayload<T>>

    /**
     * Delete zero or more Apps.
     * @param {appsDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.apps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends appsDeleteManyArgs>(
      args?: SelectSubset<T, appsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const apps = await prisma.apps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends appsUpdateManyArgs>(
      args: SelectSubset<T, appsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apps.
     * @param {appsUpsertArgs} args - Arguments to update or create a Apps.
     * @example
     * // Update or create a Apps
     * const apps = await prisma.apps.upsert({
     *   create: {
     *     // ... data to create a Apps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apps we want to update
     *   }
     * })
    **/
    upsert<T extends appsUpsertArgs>(
      args: SelectSubset<T, appsUpsertArgs>
    ): Prisma__appsClient<appsGetPayload<T>>

    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appsCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.apps.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends appsCountArgs>(
      args?: Subset<T, appsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppsAggregateArgs>(args: Subset<T, AppsAggregateArgs>): Prisma.PrismaPromise<GetAppsAggregateType<T>>

    /**
     * Group by Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppsGroupByArgs['orderBy'] }
        : { orderBy?: AppsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for apps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__appsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user_app<T extends apps$user_appArgs= {}>(args?: Subset<T, apps$user_appArgs>): Prisma.PrismaPromise<Array<user_appGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * apps base type for findUnique actions
   */
  export type appsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * Filter, which apps to fetch.
     */
    where: appsWhereUniqueInput
  }

  /**
   * apps findUnique
   */
  export interface appsFindUniqueArgs extends appsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * apps findUniqueOrThrow
   */
  export type appsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * Filter, which apps to fetch.
     */
    where: appsWhereUniqueInput
  }


  /**
   * apps base type for findFirst actions
   */
  export type appsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * Filter, which apps to fetch.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: Enumerable<appsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps.
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps.
     */
    distinct?: Enumerable<AppsScalarFieldEnum>
  }

  /**
   * apps findFirst
   */
  export interface appsFindFirstArgs extends appsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * apps findFirstOrThrow
   */
  export type appsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * Filter, which apps to fetch.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: Enumerable<appsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps.
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps.
     */
    distinct?: Enumerable<AppsScalarFieldEnum>
  }


  /**
   * apps findMany
   */
  export type appsFindManyArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * Filter, which apps to fetch.
     */
    where?: appsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: Enumerable<appsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apps.
     */
    cursor?: appsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    distinct?: Enumerable<AppsScalarFieldEnum>
  }


  /**
   * apps create
   */
  export type appsCreateArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * The data needed to create a apps.
     */
    data: XOR<appsCreateInput, appsUncheckedCreateInput>
  }


  /**
   * apps createMany
   */
  export type appsCreateManyArgs = {
    /**
     * The data used to create many apps.
     */
    data: Enumerable<appsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * apps update
   */
  export type appsUpdateArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * The data needed to update a apps.
     */
    data: XOR<appsUpdateInput, appsUncheckedUpdateInput>
    /**
     * Choose, which apps to update.
     */
    where: appsWhereUniqueInput
  }


  /**
   * apps updateMany
   */
  export type appsUpdateManyArgs = {
    /**
     * The data used to update apps.
     */
    data: XOR<appsUpdateManyMutationInput, appsUncheckedUpdateManyInput>
    /**
     * Filter which apps to update
     */
    where?: appsWhereInput
  }


  /**
   * apps upsert
   */
  export type appsUpsertArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * The filter to search for the apps to update in case it exists.
     */
    where: appsWhereUniqueInput
    /**
     * In case the apps found by the `where` argument doesn't exist, create a new apps with this data.
     */
    create: XOR<appsCreateInput, appsUncheckedCreateInput>
    /**
     * In case the apps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appsUpdateInput, appsUncheckedUpdateInput>
  }


  /**
   * apps delete
   */
  export type appsDeleteArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
    /**
     * Filter which apps to delete.
     */
    where: appsWhereUniqueInput
  }


  /**
   * apps deleteMany
   */
  export type appsDeleteManyArgs = {
    /**
     * Filter which apps to delete
     */
    where?: appsWhereInput
  }


  /**
   * apps.user_app
   */
  export type apps$user_appArgs = {
    /**
     * Select specific fields to fetch from the user_app
     */
    select?: user_appSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_appInclude | null
    where?: user_appWhereInput
    orderBy?: Enumerable<user_appOrderByWithRelationInput>
    cursor?: user_appWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<User_appScalarFieldEnum>
  }


  /**
   * apps without action
   */
  export type appsArgs = {
    /**
     * Select specific fields to fetch from the apps
     */
    select?: appsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AppsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    desc: 'desc',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by'
  };

  export type AppsScalarFieldEnum = (typeof AppsScalarFieldEnum)[keyof typeof AppsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    username: 'username',
    name: 'name',
    password: 'password',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_appScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    user_id: 'user_id',
    apps_id: 'apps_id',
    desc: 'desc',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by'
  };

  export type User_appScalarFieldEnum = (typeof User_appScalarFieldEnum)[keyof typeof User_appScalarFieldEnum]


  export const User_detailScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    user_id: 'user_id',
    city: 'city',
    bio: 'bio',
    birth_date: 'birth_date',
    cover_pict: 'cover_pict',
    profile_pict: 'profile_pict',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by'
  };

  export type User_detailScalarFieldEnum = (typeof User_detailScalarFieldEnum)[keyof typeof User_detailScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    username?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    user_app?: User_appListRelationFilter
    user_detail?: User_detailListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    user_app?: user_appOrderByRelationAggregateInput
    user_detail?: user_detailOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = {
    id?: number
    uuid?: string
    username?: string
  }

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
  }

  export type user_detailWhereInput = {
    AND?: Enumerable<user_detailWhereInput>
    OR?: Enumerable<user_detailWhereInput>
    NOT?: Enumerable<user_detailWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    user_id?: IntFilter | number
    city?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    birth_date?: DateTimeNullableFilter | Date | string | null
    cover_pict?: StringNullableFilter | string | null
    profile_pict?: StringNullableFilter | string | null
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type user_detailOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    city?: SortOrder
    bio?: SortOrder
    birth_date?: SortOrder
    cover_pict?: SortOrder
    profile_pict?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type user_detailWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type user_detailOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    city?: SortOrder
    bio?: SortOrder
    birth_date?: SortOrder
    cover_pict?: SortOrder
    profile_pict?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    _count?: user_detailCountOrderByAggregateInput
    _avg?: user_detailAvgOrderByAggregateInput
    _max?: user_detailMaxOrderByAggregateInput
    _min?: user_detailMinOrderByAggregateInput
    _sum?: user_detailSumOrderByAggregateInput
  }

  export type user_detailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_detailScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_detailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_detailScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    user_id?: IntWithAggregatesFilter | number
    city?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    birth_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cover_pict?: StringNullableWithAggregatesFilter | string | null
    profile_pict?: StringNullableWithAggregatesFilter | string | null
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
  }

  export type user_appWhereInput = {
    AND?: Enumerable<user_appWhereInput>
    OR?: Enumerable<user_appWhereInput>
    NOT?: Enumerable<user_appWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    user_id?: IntFilter | number
    apps_id?: IntFilter | number
    desc?: StringFilter | string
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    user?: XOR<UserRelationFilter, userWhereInput>
    apps?: XOR<AppsRelationFilter, appsWhereInput>
  }

  export type user_appOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    apps_id?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    user?: userOrderByWithRelationInput
    apps?: appsOrderByWithRelationInput
  }

  export type user_appWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type user_appOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    apps_id?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    _count?: user_appCountOrderByAggregateInput
    _avg?: user_appAvgOrderByAggregateInput
    _max?: user_appMaxOrderByAggregateInput
    _min?: user_appMinOrderByAggregateInput
    _sum?: user_appSumOrderByAggregateInput
  }

  export type user_appScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_appScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_appScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_appScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    user_id?: IntWithAggregatesFilter | number
    apps_id?: IntWithAggregatesFilter | number
    desc?: StringWithAggregatesFilter | string
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
  }

  export type appsWhereInput = {
    AND?: Enumerable<appsWhereInput>
    OR?: Enumerable<appsWhereInput>
    NOT?: Enumerable<appsWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    name?: StringFilter | string
    desc?: StringNullableFilter | string | null
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    user_app?: User_appListRelationFilter
  }

  export type appsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    user_app?: user_appOrderByRelationAggregateInput
  }

  export type appsWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type appsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    _count?: appsCountOrderByAggregateInput
    _avg?: appsAvgOrderByAggregateInput
    _max?: appsMaxOrderByAggregateInput
    _min?: appsMinOrderByAggregateInput
    _sum?: appsSumOrderByAggregateInput
  }

  export type appsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<appsScalarWhereWithAggregatesInput>
    OR?: Enumerable<appsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<appsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    desc?: StringNullableWithAggregatesFilter | string | null
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
  }

  export type userCreateInput = {
    uuid: string
    username: string
    name: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_app?: user_appCreateNestedManyWithoutUserInput
    user_detail?: user_detailCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    uuid: string
    username: string
    name: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_app?: user_appUncheckedCreateNestedManyWithoutUserInput
    user_detail?: user_detailUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_app?: user_appUpdateManyWithoutUserNestedInput
    user_detail?: user_detailUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_app?: user_appUncheckedUpdateManyWithoutUserNestedInput
    user_detail?: user_detailUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    uuid: string
    username: string
    name: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type userUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_detailCreateInput = {
    uuid: string
    city?: string | null
    bio?: string | null
    birth_date?: Date | string | null
    cover_pict?: string | null
    profile_pict?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user: userCreateNestedOneWithoutUser_detailInput
  }

  export type user_detailUncheckedCreateInput = {
    id?: number
    uuid: string
    user_id: number
    city?: string | null
    bio?: string | null
    birth_date?: Date | string | null
    cover_pict?: string | null
    profile_pict?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_detailUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cover_pict?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pict?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneRequiredWithoutUser_detailNestedInput
  }

  export type user_detailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cover_pict?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pict?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_detailCreateManyInput = {
    id?: number
    uuid: string
    user_id: number
    city?: string | null
    bio?: string | null
    birth_date?: Date | string | null
    cover_pict?: string | null
    profile_pict?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_detailUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cover_pict?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pict?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_detailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    city?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cover_pict?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pict?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_appCreateInput = {
    uuid: string
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user: userCreateNestedOneWithoutUser_appInput
    apps: appsCreateNestedOneWithoutUser_appInput
  }

  export type user_appUncheckedCreateInput = {
    id?: number
    uuid: string
    user_id: number
    apps_id: number
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_appUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneRequiredWithoutUser_appNestedInput
    apps?: appsUpdateOneRequiredWithoutUser_appNestedInput
  }

  export type user_appUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    apps_id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_appCreateManyInput = {
    id?: number
    uuid: string
    user_id: number
    apps_id: number
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_appUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_appUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    apps_id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type appsCreateInput = {
    uuid: string
    name: string
    desc?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_app?: user_appCreateNestedManyWithoutAppsInput
  }

  export type appsUncheckedCreateInput = {
    id?: number
    uuid: string
    name: string
    desc?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_app?: user_appUncheckedCreateNestedManyWithoutAppsInput
  }

  export type appsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_app?: user_appUpdateManyWithoutAppsNestedInput
  }

  export type appsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_app?: user_appUncheckedUpdateManyWithoutAppsNestedInput
  }

  export type appsCreateManyInput = {
    id?: number
    uuid: string
    name: string
    desc?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type appsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type appsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type User_appListRelationFilter = {
    every?: user_appWhereInput
    some?: user_appWhereInput
    none?: user_appWhereInput
  }

  export type User_detailListRelationFilter = {
    every?: user_detailWhereInput
    some?: user_detailWhereInput
    none?: user_detailWhereInput
  }

  export type user_appOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_detailCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    city?: SortOrder
    bio?: SortOrder
    birth_date?: SortOrder
    cover_pict?: SortOrder
    profile_pict?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_detailAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    city?: SortOrder
    bio?: SortOrder
    birth_date?: SortOrder
    cover_pict?: SortOrder
    profile_pict?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_detailMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    city?: SortOrder
    bio?: SortOrder
    birth_date?: SortOrder
    cover_pict?: SortOrder
    profile_pict?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_detailSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type AppsRelationFilter = {
    is?: appsWhereInput
    isNot?: appsWhereInput
  }

  export type user_appCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    apps_id?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_appAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apps_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_appMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    apps_id?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_appMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    apps_id?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_appSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apps_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type appsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type appsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type appsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type appsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type appsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type user_appCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<user_appCreateWithoutUserInput>, Enumerable<user_appUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutUserInput>
    createMany?: user_appCreateManyUserInputEnvelope
    connect?: Enumerable<user_appWhereUniqueInput>
  }

  export type user_detailCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<user_detailCreateWithoutUserInput>, Enumerable<user_detailUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_detailCreateOrConnectWithoutUserInput>
    createMany?: user_detailCreateManyUserInputEnvelope
    connect?: Enumerable<user_detailWhereUniqueInput>
  }

  export type user_appUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<user_appCreateWithoutUserInput>, Enumerable<user_appUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutUserInput>
    createMany?: user_appCreateManyUserInputEnvelope
    connect?: Enumerable<user_appWhereUniqueInput>
  }

  export type user_detailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<user_detailCreateWithoutUserInput>, Enumerable<user_detailUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_detailCreateOrConnectWithoutUserInput>
    createMany?: user_detailCreateManyUserInputEnvelope
    connect?: Enumerable<user_detailWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_appUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<user_appCreateWithoutUserInput>, Enumerable<user_appUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<user_appUpsertWithWhereUniqueWithoutUserInput>
    createMany?: user_appCreateManyUserInputEnvelope
    set?: Enumerable<user_appWhereUniqueInput>
    disconnect?: Enumerable<user_appWhereUniqueInput>
    delete?: Enumerable<user_appWhereUniqueInput>
    connect?: Enumerable<user_appWhereUniqueInput>
    update?: Enumerable<user_appUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<user_appUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<user_appScalarWhereInput>
  }

  export type user_detailUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<user_detailCreateWithoutUserInput>, Enumerable<user_detailUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_detailCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<user_detailUpsertWithWhereUniqueWithoutUserInput>
    createMany?: user_detailCreateManyUserInputEnvelope
    set?: Enumerable<user_detailWhereUniqueInput>
    disconnect?: Enumerable<user_detailWhereUniqueInput>
    delete?: Enumerable<user_detailWhereUniqueInput>
    connect?: Enumerable<user_detailWhereUniqueInput>
    update?: Enumerable<user_detailUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<user_detailUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<user_detailScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_appUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<user_appCreateWithoutUserInput>, Enumerable<user_appUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<user_appUpsertWithWhereUniqueWithoutUserInput>
    createMany?: user_appCreateManyUserInputEnvelope
    set?: Enumerable<user_appWhereUniqueInput>
    disconnect?: Enumerable<user_appWhereUniqueInput>
    delete?: Enumerable<user_appWhereUniqueInput>
    connect?: Enumerable<user_appWhereUniqueInput>
    update?: Enumerable<user_appUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<user_appUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<user_appScalarWhereInput>
  }

  export type user_detailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<user_detailCreateWithoutUserInput>, Enumerable<user_detailUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<user_detailCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<user_detailUpsertWithWhereUniqueWithoutUserInput>
    createMany?: user_detailCreateManyUserInputEnvelope
    set?: Enumerable<user_detailWhereUniqueInput>
    disconnect?: Enumerable<user_detailWhereUniqueInput>
    delete?: Enumerable<user_detailWhereUniqueInput>
    connect?: Enumerable<user_detailWhereUniqueInput>
    update?: Enumerable<user_detailUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<user_detailUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<user_detailScalarWhereInput>
  }

  export type userCreateNestedOneWithoutUser_detailInput = {
    create?: XOR<userCreateWithoutUser_detailInput, userUncheckedCreateWithoutUser_detailInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_detailInput
    connect?: userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutUser_detailNestedInput = {
    create?: XOR<userCreateWithoutUser_detailInput, userUncheckedCreateWithoutUser_detailInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_detailInput
    upsert?: userUpsertWithoutUser_detailInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutUser_detailInput, userUncheckedUpdateWithoutUser_detailInput>
  }

  export type userCreateNestedOneWithoutUser_appInput = {
    create?: XOR<userCreateWithoutUser_appInput, userUncheckedCreateWithoutUser_appInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_appInput
    connect?: userWhereUniqueInput
  }

  export type appsCreateNestedOneWithoutUser_appInput = {
    create?: XOR<appsCreateWithoutUser_appInput, appsUncheckedCreateWithoutUser_appInput>
    connectOrCreate?: appsCreateOrConnectWithoutUser_appInput
    connect?: appsWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUser_appNestedInput = {
    create?: XOR<userCreateWithoutUser_appInput, userUncheckedCreateWithoutUser_appInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_appInput
    upsert?: userUpsertWithoutUser_appInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutUser_appInput, userUncheckedUpdateWithoutUser_appInput>
  }

  export type appsUpdateOneRequiredWithoutUser_appNestedInput = {
    create?: XOR<appsCreateWithoutUser_appInput, appsUncheckedCreateWithoutUser_appInput>
    connectOrCreate?: appsCreateOrConnectWithoutUser_appInput
    upsert?: appsUpsertWithoutUser_appInput
    connect?: appsWhereUniqueInput
    update?: XOR<appsUpdateWithoutUser_appInput, appsUncheckedUpdateWithoutUser_appInput>
  }

  export type user_appCreateNestedManyWithoutAppsInput = {
    create?: XOR<Enumerable<user_appCreateWithoutAppsInput>, Enumerable<user_appUncheckedCreateWithoutAppsInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutAppsInput>
    createMany?: user_appCreateManyAppsInputEnvelope
    connect?: Enumerable<user_appWhereUniqueInput>
  }

  export type user_appUncheckedCreateNestedManyWithoutAppsInput = {
    create?: XOR<Enumerable<user_appCreateWithoutAppsInput>, Enumerable<user_appUncheckedCreateWithoutAppsInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutAppsInput>
    createMany?: user_appCreateManyAppsInputEnvelope
    connect?: Enumerable<user_appWhereUniqueInput>
  }

  export type user_appUpdateManyWithoutAppsNestedInput = {
    create?: XOR<Enumerable<user_appCreateWithoutAppsInput>, Enumerable<user_appUncheckedCreateWithoutAppsInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutAppsInput>
    upsert?: Enumerable<user_appUpsertWithWhereUniqueWithoutAppsInput>
    createMany?: user_appCreateManyAppsInputEnvelope
    set?: Enumerable<user_appWhereUniqueInput>
    disconnect?: Enumerable<user_appWhereUniqueInput>
    delete?: Enumerable<user_appWhereUniqueInput>
    connect?: Enumerable<user_appWhereUniqueInput>
    update?: Enumerable<user_appUpdateWithWhereUniqueWithoutAppsInput>
    updateMany?: Enumerable<user_appUpdateManyWithWhereWithoutAppsInput>
    deleteMany?: Enumerable<user_appScalarWhereInput>
  }

  export type user_appUncheckedUpdateManyWithoutAppsNestedInput = {
    create?: XOR<Enumerable<user_appCreateWithoutAppsInput>, Enumerable<user_appUncheckedCreateWithoutAppsInput>>
    connectOrCreate?: Enumerable<user_appCreateOrConnectWithoutAppsInput>
    upsert?: Enumerable<user_appUpsertWithWhereUniqueWithoutAppsInput>
    createMany?: user_appCreateManyAppsInputEnvelope
    set?: Enumerable<user_appWhereUniqueInput>
    disconnect?: Enumerable<user_appWhereUniqueInput>
    delete?: Enumerable<user_appWhereUniqueInput>
    connect?: Enumerable<user_appWhereUniqueInput>
    update?: Enumerable<user_appUpdateWithWhereUniqueWithoutAppsInput>
    updateMany?: Enumerable<user_appUpdateManyWithWhereWithoutAppsInput>
    deleteMany?: Enumerable<user_appScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type user_appCreateWithoutUserInput = {
    uuid: string
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    apps: appsCreateNestedOneWithoutUser_appInput
  }

  export type user_appUncheckedCreateWithoutUserInput = {
    id?: number
    uuid: string
    apps_id: number
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_appCreateOrConnectWithoutUserInput = {
    where: user_appWhereUniqueInput
    create: XOR<user_appCreateWithoutUserInput, user_appUncheckedCreateWithoutUserInput>
  }

  export type user_appCreateManyUserInputEnvelope = {
    data: Enumerable<user_appCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type user_detailCreateWithoutUserInput = {
    uuid: string
    city?: string | null
    bio?: string | null
    birth_date?: Date | string | null
    cover_pict?: string | null
    profile_pict?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_detailUncheckedCreateWithoutUserInput = {
    id?: number
    uuid: string
    city?: string | null
    bio?: string | null
    birth_date?: Date | string | null
    cover_pict?: string | null
    profile_pict?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_detailCreateOrConnectWithoutUserInput = {
    where: user_detailWhereUniqueInput
    create: XOR<user_detailCreateWithoutUserInput, user_detailUncheckedCreateWithoutUserInput>
  }

  export type user_detailCreateManyUserInputEnvelope = {
    data: Enumerable<user_detailCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type user_appUpsertWithWhereUniqueWithoutUserInput = {
    where: user_appWhereUniqueInput
    update: XOR<user_appUpdateWithoutUserInput, user_appUncheckedUpdateWithoutUserInput>
    create: XOR<user_appCreateWithoutUserInput, user_appUncheckedCreateWithoutUserInput>
  }

  export type user_appUpdateWithWhereUniqueWithoutUserInput = {
    where: user_appWhereUniqueInput
    data: XOR<user_appUpdateWithoutUserInput, user_appUncheckedUpdateWithoutUserInput>
  }

  export type user_appUpdateManyWithWhereWithoutUserInput = {
    where: user_appScalarWhereInput
    data: XOR<user_appUpdateManyMutationInput, user_appUncheckedUpdateManyWithoutUser_appInput>
  }

  export type user_appScalarWhereInput = {
    AND?: Enumerable<user_appScalarWhereInput>
    OR?: Enumerable<user_appScalarWhereInput>
    NOT?: Enumerable<user_appScalarWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    user_id?: IntFilter | number
    apps_id?: IntFilter | number
    desc?: StringFilter | string
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
  }

  export type user_detailUpsertWithWhereUniqueWithoutUserInput = {
    where: user_detailWhereUniqueInput
    update: XOR<user_detailUpdateWithoutUserInput, user_detailUncheckedUpdateWithoutUserInput>
    create: XOR<user_detailCreateWithoutUserInput, user_detailUncheckedCreateWithoutUserInput>
  }

  export type user_detailUpdateWithWhereUniqueWithoutUserInput = {
    where: user_detailWhereUniqueInput
    data: XOR<user_detailUpdateWithoutUserInput, user_detailUncheckedUpdateWithoutUserInput>
  }

  export type user_detailUpdateManyWithWhereWithoutUserInput = {
    where: user_detailScalarWhereInput
    data: XOR<user_detailUpdateManyMutationInput, user_detailUncheckedUpdateManyWithoutUser_detailInput>
  }

  export type user_detailScalarWhereInput = {
    AND?: Enumerable<user_detailScalarWhereInput>
    OR?: Enumerable<user_detailScalarWhereInput>
    NOT?: Enumerable<user_detailScalarWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    user_id?: IntFilter | number
    city?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    birth_date?: DateTimeNullableFilter | Date | string | null
    cover_pict?: StringNullableFilter | string | null
    profile_pict?: StringNullableFilter | string | null
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
  }

  export type userCreateWithoutUser_detailInput = {
    uuid: string
    username: string
    name: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_app?: user_appCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_detailInput = {
    id?: number
    uuid: string
    username: string
    name: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_app?: user_appUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_detailInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_detailInput, userUncheckedCreateWithoutUser_detailInput>
  }

  export type userUpsertWithoutUser_detailInput = {
    update: XOR<userUpdateWithoutUser_detailInput, userUncheckedUpdateWithoutUser_detailInput>
    create: XOR<userCreateWithoutUser_detailInput, userUncheckedCreateWithoutUser_detailInput>
  }

  export type userUpdateWithoutUser_detailInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_app?: user_appUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_app?: user_appUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutUser_appInput = {
    uuid: string
    username: string
    name: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_detail?: user_detailCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_appInput = {
    id?: number
    uuid: string
    username: string
    name: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user_detail?: user_detailUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_appInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_appInput, userUncheckedCreateWithoutUser_appInput>
  }

  export type appsCreateWithoutUser_appInput = {
    uuid: string
    name: string
    desc?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type appsUncheckedCreateWithoutUser_appInput = {
    id?: number
    uuid: string
    name: string
    desc?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type appsCreateOrConnectWithoutUser_appInput = {
    where: appsWhereUniqueInput
    create: XOR<appsCreateWithoutUser_appInput, appsUncheckedCreateWithoutUser_appInput>
  }

  export type userUpsertWithoutUser_appInput = {
    update: XOR<userUpdateWithoutUser_appInput, userUncheckedUpdateWithoutUser_appInput>
    create: XOR<userCreateWithoutUser_appInput, userUncheckedCreateWithoutUser_appInput>
  }

  export type userUpdateWithoutUser_appInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_detail?: user_detailUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_appInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user_detail?: user_detailUncheckedUpdateManyWithoutUserNestedInput
  }

  export type appsUpsertWithoutUser_appInput = {
    update: XOR<appsUpdateWithoutUser_appInput, appsUncheckedUpdateWithoutUser_appInput>
    create: XOR<appsCreateWithoutUser_appInput, appsUncheckedCreateWithoutUser_appInput>
  }

  export type appsUpdateWithoutUser_appInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type appsUncheckedUpdateWithoutUser_appInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_appCreateWithoutAppsInput = {
    uuid: string
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    user: userCreateNestedOneWithoutUser_appInput
  }

  export type user_appUncheckedCreateWithoutAppsInput = {
    id?: number
    uuid: string
    user_id: number
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_appCreateOrConnectWithoutAppsInput = {
    where: user_appWhereUniqueInput
    create: XOR<user_appCreateWithoutAppsInput, user_appUncheckedCreateWithoutAppsInput>
  }

  export type user_appCreateManyAppsInputEnvelope = {
    data: Enumerable<user_appCreateManyAppsInput>
    skipDuplicates?: boolean
  }

  export type user_appUpsertWithWhereUniqueWithoutAppsInput = {
    where: user_appWhereUniqueInput
    update: XOR<user_appUpdateWithoutAppsInput, user_appUncheckedUpdateWithoutAppsInput>
    create: XOR<user_appCreateWithoutAppsInput, user_appUncheckedCreateWithoutAppsInput>
  }

  export type user_appUpdateWithWhereUniqueWithoutAppsInput = {
    where: user_appWhereUniqueInput
    data: XOR<user_appUpdateWithoutAppsInput, user_appUncheckedUpdateWithoutAppsInput>
  }

  export type user_appUpdateManyWithWhereWithoutAppsInput = {
    where: user_appScalarWhereInput
    data: XOR<user_appUpdateManyMutationInput, user_appUncheckedUpdateManyWithoutUser_appInput>
  }

  export type user_appCreateManyUserInput = {
    id?: number
    uuid: string
    apps_id: number
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_detailCreateManyUserInput = {
    id?: number
    uuid: string
    city?: string | null
    bio?: string | null
    birth_date?: Date | string | null
    cover_pict?: string | null
    profile_pict?: string | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_appUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    apps?: appsUpdateOneRequiredWithoutUser_appNestedInput
  }

  export type user_appUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    apps_id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_appUncheckedUpdateManyWithoutUser_appInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    apps_id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_detailUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cover_pict?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pict?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_detailUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cover_pict?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pict?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_detailUncheckedUpdateManyWithoutUser_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cover_pict?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pict?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_appCreateManyAppsInput = {
    id?: number
    uuid: string
    user_id: number
    desc: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type user_appUpdateWithoutAppsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneRequiredWithoutUser_appNestedInput
  }

  export type user_appUncheckedUpdateWithoutAppsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}