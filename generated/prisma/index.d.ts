
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model detailLapangan
 * 
 */
export type detailLapangan = $Result.DefaultSelection<Prisma.$detailLapanganPayload>
/**
 * Model booking
 * 
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const statusBooking: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED'
};

export type statusBooking = (typeof statusBooking)[keyof typeof statusBooking]


export const user_gender: {
  Pria: 'Pria',
  Wanita: 'Wanita'
};

export type user_gender = (typeof user_gender)[keyof typeof user_gender]


export const user_role: {
  Admin: 'Admin',
  User: 'User'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type statusBooking = $Enums.statusBooking

export const statusBooking: typeof $Enums.statusBooking

export type user_gender = $Enums.user_gender

export const user_gender: typeof $Enums.user_gender

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailLapangan`: Exposes CRUD operations for the **detailLapangan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailLapangans
    * const detailLapangans = await prisma.detailLapangan.findMany()
    * ```
    */
  get detailLapangan(): Prisma.detailLapanganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    detailLapangan: 'detailLapangan',
    booking: 'booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "detailLapangan" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      detailLapangan: {
        payload: Prisma.$detailLapanganPayload<ExtArgs>
        fields: Prisma.detailLapanganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detailLapanganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detailLapanganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload>
          }
          findFirst: {
            args: Prisma.detailLapanganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detailLapanganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload>
          }
          findMany: {
            args: Prisma.detailLapanganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload>[]
          }
          create: {
            args: Prisma.detailLapanganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload>
          }
          createMany: {
            args: Prisma.detailLapanganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detailLapanganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload>
          }
          update: {
            args: Prisma.detailLapanganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload>
          }
          deleteMany: {
            args: Prisma.detailLapanganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detailLapanganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detailLapanganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailLapanganPayload>
          }
          aggregate: {
            args: Prisma.DetailLapanganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailLapangan>
          }
          groupBy: {
            args: Prisma.detailLapanganGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailLapanganGroupByOutputType>[]
          }
          count: {
            args: Prisma.detailLapanganCountArgs<ExtArgs>
            result: $Utils.Optional<DetailLapanganCountAggregateOutputType> | number
          }
        }
      }
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>
        fields: Prisma.bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    detailLapangan?: detailLapanganOmit
    booking?: bookingOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }


  /**
   * Count Type DetailLapanganCountOutputType
   */

  export type DetailLapanganCountOutputType = {
    bookings: number
  }

  export type DetailLapanganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | DetailLapanganCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * DetailLapanganCountOutputType without action
   */
  export type DetailLapanganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailLapanganCountOutputType
     */
    select?: DetailLapanganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetailLapanganCountOutputType without action
   */
  export type DetailLapanganCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    gender: $Enums.user_gender | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.user_role | null
    nomor: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    gender: $Enums.user_gender | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.user_role | null
    nomor: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    gender: number
    createdAt: number
    updatedAt: number
    role: number
    nomor: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    nomor?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    nomor?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    nomor?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    gender: $Enums.user_gender | null
    createdAt: Date
    updatedAt: Date | null
    role: $Enums.user_role | null
    nomor: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    nomor?: boolean
    bookings?: boolean | user$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    nomor?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "gender" | "createdAt" | "updatedAt" | "role" | "nomor", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | user$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      bookings: Prisma.$bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      gender: $Enums.user_gender | null
      createdAt: Date
      updatedAt: Date | null
      role: $Enums.user_role | null
      nomor: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
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
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends user$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, user$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly gender: FieldRef<"user", 'user_gender'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly nomor: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.bookings
   */
  export type user$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model detailLapangan
   */

  export type AggregateDetailLapangan = {
    _count: DetailLapanganCountAggregateOutputType | null
    _avg: DetailLapanganAvgAggregateOutputType | null
    _sum: DetailLapanganSumAggregateOutputType | null
    _min: DetailLapanganMinAggregateOutputType | null
    _max: DetailLapanganMaxAggregateOutputType | null
  }

  export type DetailLapanganAvgAggregateOutputType = {
    harga: number | null
  }

  export type DetailLapanganSumAggregateOutputType = {
    harga: number | null
  }

  export type DetailLapanganMinAggregateOutputType = {
    id: string | null
    nama: string | null
    alamat: string | null
    harga: number | null
    tipeLapangan: string | null
    linkGambar: string | null
    noTelp: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailLapanganMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    alamat: string | null
    harga: number | null
    tipeLapangan: string | null
    linkGambar: string | null
    noTelp: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailLapanganCountAggregateOutputType = {
    id: number
    nama: number
    alamat: number
    harga: number
    tipeLapangan: number
    linkGambar: number
    noTelp: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DetailLapanganAvgAggregateInputType = {
    harga?: true
  }

  export type DetailLapanganSumAggregateInputType = {
    harga?: true
  }

  export type DetailLapanganMinAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    harga?: true
    tipeLapangan?: true
    linkGambar?: true
    noTelp?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailLapanganMaxAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    harga?: true
    tipeLapangan?: true
    linkGambar?: true
    noTelp?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailLapanganCountAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    harga?: true
    tipeLapangan?: true
    linkGambar?: true
    noTelp?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DetailLapanganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detailLapangan to aggregate.
     */
    where?: detailLapanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailLapangans to fetch.
     */
    orderBy?: detailLapanganOrderByWithRelationInput | detailLapanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detailLapanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailLapangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailLapangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detailLapangans
    **/
    _count?: true | DetailLapanganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailLapanganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailLapanganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailLapanganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailLapanganMaxAggregateInputType
  }

  export type GetDetailLapanganAggregateType<T extends DetailLapanganAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailLapangan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailLapangan[P]>
      : GetScalarType<T[P], AggregateDetailLapangan[P]>
  }




  export type detailLapanganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detailLapanganWhereInput
    orderBy?: detailLapanganOrderByWithAggregationInput | detailLapanganOrderByWithAggregationInput[]
    by: DetailLapanganScalarFieldEnum[] | DetailLapanganScalarFieldEnum
    having?: detailLapanganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailLapanganCountAggregateInputType | true
    _avg?: DetailLapanganAvgAggregateInputType
    _sum?: DetailLapanganSumAggregateInputType
    _min?: DetailLapanganMinAggregateInputType
    _max?: DetailLapanganMaxAggregateInputType
  }

  export type DetailLapanganGroupByOutputType = {
    id: string
    nama: string
    alamat: string
    harga: number
    tipeLapangan: string
    linkGambar: string
    noTelp: string
    deskripsi: string
    createdAt: Date
    updatedAt: Date | null
    _count: DetailLapanganCountAggregateOutputType | null
    _avg: DetailLapanganAvgAggregateOutputType | null
    _sum: DetailLapanganSumAggregateOutputType | null
    _min: DetailLapanganMinAggregateOutputType | null
    _max: DetailLapanganMaxAggregateOutputType | null
  }

  type GetDetailLapanganGroupByPayload<T extends detailLapanganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailLapanganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailLapanganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailLapanganGroupByOutputType[P]>
            : GetScalarType<T[P], DetailLapanganGroupByOutputType[P]>
        }
      >
    >


  export type detailLapanganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    harga?: boolean
    tipeLapangan?: boolean
    linkGambar?: boolean
    noTelp?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | detailLapangan$bookingsArgs<ExtArgs>
    _count?: boolean | DetailLapanganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailLapangan"]>



  export type detailLapanganSelectScalar = {
    id?: boolean
    nama?: boolean
    alamat?: boolean
    harga?: boolean
    tipeLapangan?: boolean
    linkGambar?: boolean
    noTelp?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type detailLapanganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "alamat" | "harga" | "tipeLapangan" | "linkGambar" | "noTelp" | "deskripsi" | "createdAt" | "updatedAt", ExtArgs["result"]["detailLapangan"]>
  export type detailLapanganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | detailLapangan$bookingsArgs<ExtArgs>
    _count?: boolean | DetailLapanganCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $detailLapanganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detailLapangan"
    objects: {
      bookings: Prisma.$bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      alamat: string
      harga: number
      tipeLapangan: string
      linkGambar: string
      noTelp: string
      deskripsi: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["detailLapangan"]>
    composites: {}
  }

  type detailLapanganGetPayload<S extends boolean | null | undefined | detailLapanganDefaultArgs> = $Result.GetResult<Prisma.$detailLapanganPayload, S>

  type detailLapanganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detailLapanganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailLapanganCountAggregateInputType | true
    }

  export interface detailLapanganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detailLapangan'], meta: { name: 'detailLapangan' } }
    /**
     * Find zero or one DetailLapangan that matches the filter.
     * @param {detailLapanganFindUniqueArgs} args - Arguments to find a DetailLapangan
     * @example
     * // Get one DetailLapangan
     * const detailLapangan = await prisma.detailLapangan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detailLapanganFindUniqueArgs>(args: SelectSubset<T, detailLapanganFindUniqueArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailLapangan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detailLapanganFindUniqueOrThrowArgs} args - Arguments to find a DetailLapangan
     * @example
     * // Get one DetailLapangan
     * const detailLapangan = await prisma.detailLapangan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detailLapanganFindUniqueOrThrowArgs>(args: SelectSubset<T, detailLapanganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailLapangan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailLapanganFindFirstArgs} args - Arguments to find a DetailLapangan
     * @example
     * // Get one DetailLapangan
     * const detailLapangan = await prisma.detailLapangan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detailLapanganFindFirstArgs>(args?: SelectSubset<T, detailLapanganFindFirstArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailLapangan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailLapanganFindFirstOrThrowArgs} args - Arguments to find a DetailLapangan
     * @example
     * // Get one DetailLapangan
     * const detailLapangan = await prisma.detailLapangan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detailLapanganFindFirstOrThrowArgs>(args?: SelectSubset<T, detailLapanganFindFirstOrThrowArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailLapangans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailLapanganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailLapangans
     * const detailLapangans = await prisma.detailLapangan.findMany()
     * 
     * // Get first 10 DetailLapangans
     * const detailLapangans = await prisma.detailLapangan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailLapanganWithIdOnly = await prisma.detailLapangan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detailLapanganFindManyArgs>(args?: SelectSubset<T, detailLapanganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailLapangan.
     * @param {detailLapanganCreateArgs} args - Arguments to create a DetailLapangan.
     * @example
     * // Create one DetailLapangan
     * const DetailLapangan = await prisma.detailLapangan.create({
     *   data: {
     *     // ... data to create a DetailLapangan
     *   }
     * })
     * 
     */
    create<T extends detailLapanganCreateArgs>(args: SelectSubset<T, detailLapanganCreateArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailLapangans.
     * @param {detailLapanganCreateManyArgs} args - Arguments to create many DetailLapangans.
     * @example
     * // Create many DetailLapangans
     * const detailLapangan = await prisma.detailLapangan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detailLapanganCreateManyArgs>(args?: SelectSubset<T, detailLapanganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetailLapangan.
     * @param {detailLapanganDeleteArgs} args - Arguments to delete one DetailLapangan.
     * @example
     * // Delete one DetailLapangan
     * const DetailLapangan = await prisma.detailLapangan.delete({
     *   where: {
     *     // ... filter to delete one DetailLapangan
     *   }
     * })
     * 
     */
    delete<T extends detailLapanganDeleteArgs>(args: SelectSubset<T, detailLapanganDeleteArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailLapangan.
     * @param {detailLapanganUpdateArgs} args - Arguments to update one DetailLapangan.
     * @example
     * // Update one DetailLapangan
     * const detailLapangan = await prisma.detailLapangan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detailLapanganUpdateArgs>(args: SelectSubset<T, detailLapanganUpdateArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailLapangans.
     * @param {detailLapanganDeleteManyArgs} args - Arguments to filter DetailLapangans to delete.
     * @example
     * // Delete a few DetailLapangans
     * const { count } = await prisma.detailLapangan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detailLapanganDeleteManyArgs>(args?: SelectSubset<T, detailLapanganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailLapangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailLapanganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailLapangans
     * const detailLapangan = await prisma.detailLapangan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detailLapanganUpdateManyArgs>(args: SelectSubset<T, detailLapanganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailLapangan.
     * @param {detailLapanganUpsertArgs} args - Arguments to update or create a DetailLapangan.
     * @example
     * // Update or create a DetailLapangan
     * const detailLapangan = await prisma.detailLapangan.upsert({
     *   create: {
     *     // ... data to create a DetailLapangan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailLapangan we want to update
     *   }
     * })
     */
    upsert<T extends detailLapanganUpsertArgs>(args: SelectSubset<T, detailLapanganUpsertArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailLapangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailLapanganCountArgs} args - Arguments to filter DetailLapangans to count.
     * @example
     * // Count the number of DetailLapangans
     * const count = await prisma.detailLapangan.count({
     *   where: {
     *     // ... the filter for the DetailLapangans we want to count
     *   }
     * })
    **/
    count<T extends detailLapanganCountArgs>(
      args?: Subset<T, detailLapanganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailLapanganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailLapangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailLapanganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailLapanganAggregateArgs>(args: Subset<T, DetailLapanganAggregateArgs>): Prisma.PrismaPromise<GetDetailLapanganAggregateType<T>>

    /**
     * Group by DetailLapangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailLapanganGroupByArgs} args - Group by arguments.
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
      T extends detailLapanganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detailLapanganGroupByArgs['orderBy'] }
        : { orderBy?: detailLapanganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, detailLapanganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailLapanganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detailLapangan model
   */
  readonly fields: detailLapanganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detailLapangan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detailLapanganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends detailLapangan$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, detailLapangan$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detailLapangan model
   */
  interface detailLapanganFieldRefs {
    readonly id: FieldRef<"detailLapangan", 'String'>
    readonly nama: FieldRef<"detailLapangan", 'String'>
    readonly alamat: FieldRef<"detailLapangan", 'String'>
    readonly harga: FieldRef<"detailLapangan", 'Int'>
    readonly tipeLapangan: FieldRef<"detailLapangan", 'String'>
    readonly linkGambar: FieldRef<"detailLapangan", 'String'>
    readonly noTelp: FieldRef<"detailLapangan", 'String'>
    readonly deskripsi: FieldRef<"detailLapangan", 'String'>
    readonly createdAt: FieldRef<"detailLapangan", 'DateTime'>
    readonly updatedAt: FieldRef<"detailLapangan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * detailLapangan findUnique
   */
  export type detailLapanganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * Filter, which detailLapangan to fetch.
     */
    where: detailLapanganWhereUniqueInput
  }

  /**
   * detailLapangan findUniqueOrThrow
   */
  export type detailLapanganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * Filter, which detailLapangan to fetch.
     */
    where: detailLapanganWhereUniqueInput
  }

  /**
   * detailLapangan findFirst
   */
  export type detailLapanganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * Filter, which detailLapangan to fetch.
     */
    where?: detailLapanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailLapangans to fetch.
     */
    orderBy?: detailLapanganOrderByWithRelationInput | detailLapanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detailLapangans.
     */
    cursor?: detailLapanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailLapangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailLapangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detailLapangans.
     */
    distinct?: DetailLapanganScalarFieldEnum | DetailLapanganScalarFieldEnum[]
  }

  /**
   * detailLapangan findFirstOrThrow
   */
  export type detailLapanganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * Filter, which detailLapangan to fetch.
     */
    where?: detailLapanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailLapangans to fetch.
     */
    orderBy?: detailLapanganOrderByWithRelationInput | detailLapanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detailLapangans.
     */
    cursor?: detailLapanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailLapangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailLapangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detailLapangans.
     */
    distinct?: DetailLapanganScalarFieldEnum | DetailLapanganScalarFieldEnum[]
  }

  /**
   * detailLapangan findMany
   */
  export type detailLapanganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * Filter, which detailLapangans to fetch.
     */
    where?: detailLapanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailLapangans to fetch.
     */
    orderBy?: detailLapanganOrderByWithRelationInput | detailLapanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detailLapangans.
     */
    cursor?: detailLapanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailLapangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailLapangans.
     */
    skip?: number
    distinct?: DetailLapanganScalarFieldEnum | DetailLapanganScalarFieldEnum[]
  }

  /**
   * detailLapangan create
   */
  export type detailLapanganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * The data needed to create a detailLapangan.
     */
    data: XOR<detailLapanganCreateInput, detailLapanganUncheckedCreateInput>
  }

  /**
   * detailLapangan createMany
   */
  export type detailLapanganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detailLapangans.
     */
    data: detailLapanganCreateManyInput | detailLapanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detailLapangan update
   */
  export type detailLapanganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * The data needed to update a detailLapangan.
     */
    data: XOR<detailLapanganUpdateInput, detailLapanganUncheckedUpdateInput>
    /**
     * Choose, which detailLapangan to update.
     */
    where: detailLapanganWhereUniqueInput
  }

  /**
   * detailLapangan updateMany
   */
  export type detailLapanganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detailLapangans.
     */
    data: XOR<detailLapanganUpdateManyMutationInput, detailLapanganUncheckedUpdateManyInput>
    /**
     * Filter which detailLapangans to update
     */
    where?: detailLapanganWhereInput
    /**
     * Limit how many detailLapangans to update.
     */
    limit?: number
  }

  /**
   * detailLapangan upsert
   */
  export type detailLapanganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * The filter to search for the detailLapangan to update in case it exists.
     */
    where: detailLapanganWhereUniqueInput
    /**
     * In case the detailLapangan found by the `where` argument doesn't exist, create a new detailLapangan with this data.
     */
    create: XOR<detailLapanganCreateInput, detailLapanganUncheckedCreateInput>
    /**
     * In case the detailLapangan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detailLapanganUpdateInput, detailLapanganUncheckedUpdateInput>
  }

  /**
   * detailLapangan delete
   */
  export type detailLapanganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
    /**
     * Filter which detailLapangan to delete.
     */
    where: detailLapanganWhereUniqueInput
  }

  /**
   * detailLapangan deleteMany
   */
  export type detailLapanganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detailLapangans to delete
     */
    where?: detailLapanganWhereInput
    /**
     * Limit how many detailLapangans to delete.
     */
    limit?: number
  }

  /**
   * detailLapangan.bookings
   */
  export type detailLapangan$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * detailLapangan without action
   */
  export type detailLapanganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailLapangan
     */
    select?: detailLapanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailLapangan
     */
    omit?: detailLapanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailLapanganInclude<ExtArgs> | null
  }


  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalharga: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalharga: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lapanganId: string | null
    tanggalBooking: Date | null
    jamMulai: Date | null
    jamSelesai: Date | null
    totalharga: number | null
    status: $Enums.statusBooking | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lapanganId: string | null
    tanggalBooking: Date | null
    jamMulai: Date | null
    jamSelesai: Date | null
    totalharga: number | null
    status: $Enums.statusBooking | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    lapanganId: number
    tanggalBooking: number
    jamMulai: number
    jamSelesai: number
    totalharga: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalharga?: true
  }

  export type BookingSumAggregateInputType = {
    totalharga?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    lapanganId?: true
    tanggalBooking?: true
    jamMulai?: true
    jamSelesai?: true
    totalharga?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    lapanganId?: true
    tanggalBooking?: true
    jamMulai?: true
    jamSelesai?: true
    totalharga?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    lapanganId?: true
    tanggalBooking?: true
    jamMulai?: true
    jamSelesai?: true
    totalharga?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    lapanganId: string
    tanggalBooking: Date | null
    jamMulai: Date | null
    jamSelesai: Date | null
    totalharga: number | null
    status: $Enums.statusBooking | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lapanganId?: boolean
    tanggalBooking?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    totalharga?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    detailLapangan?: boolean | detailLapanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type bookingSelectScalar = {
    id?: boolean
    userId?: boolean
    lapanganId?: boolean
    tanggalBooking?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    totalharga?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lapanganId" | "tanggalBooking" | "jamMulai" | "jamSelesai" | "totalharga" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    detailLapangan?: boolean | detailLapanganDefaultArgs<ExtArgs>
  }

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      detailLapangan: Prisma.$detailLapanganPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lapanganId: string
      tanggalBooking: Date | null
      jamMulai: Date | null
      jamSelesai: Date | null
      totalharga: number | null
      status: $Enums.statusBooking | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<Prisma.$bookingPayload, S>

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking'], meta: { name: 'booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingFindUniqueArgs>(args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingFindFirstArgs>(args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingFindManyArgs>(args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends bookingCreateArgs>(args: SelectSubset<T, bookingCreateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingCreateManyArgs>(args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends bookingDeleteArgs>(args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingUpdateArgs>(args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingDeleteManyArgs>(args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingUpdateManyArgs>(args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends bookingUpsertArgs>(args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
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
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking model
   */
  readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detailLapangan<T extends detailLapanganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, detailLapanganDefaultArgs<ExtArgs>>): Prisma__detailLapanganClient<$Result.GetResult<Prisma.$detailLapanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<"booking", 'String'>
    readonly userId: FieldRef<"booking", 'String'>
    readonly lapanganId: FieldRef<"booking", 'String'>
    readonly tanggalBooking: FieldRef<"booking", 'DateTime'>
    readonly jamMulai: FieldRef<"booking", 'DateTime'>
    readonly jamSelesai: FieldRef<"booking", 'DateTime'>
    readonly totalharga: FieldRef<"booking", 'Int'>
    readonly status: FieldRef<"booking", 'statusBooking'>
    readonly createdAt: FieldRef<"booking", 'DateTime'>
    readonly updatedAt: FieldRef<"booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    gender: 'gender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    nomor: 'nomor'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DetailLapanganScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    harga: 'harga',
    tipeLapangan: 'tipeLapangan',
    linkGambar: 'linkGambar',
    noTelp: 'noTelp',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DetailLapanganScalarFieldEnum = (typeof DetailLapanganScalarFieldEnum)[keyof typeof DetailLapanganScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lapanganId: 'lapanganId',
    tanggalBooking: 'tanggalBooking',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    totalharga: 'totalharga',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    nomor: 'nomor'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const detailLapanganOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    tipeLapangan: 'tipeLapangan',
    linkGambar: 'linkGambar',
    noTelp: 'noTelp',
    deskripsi: 'deskripsi'
  };

  export type detailLapanganOrderByRelevanceFieldEnum = (typeof detailLapanganOrderByRelevanceFieldEnum)[keyof typeof detailLapanganOrderByRelevanceFieldEnum]


  export const bookingOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    lapanganId: 'lapanganId'
  };

  export type bookingOrderByRelevanceFieldEnum = (typeof bookingOrderByRelevanceFieldEnum)[keyof typeof bookingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'user_gender'
   */
  export type Enumuser_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'statusBooking'
   */
  export type EnumstatusBookingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusBooking'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    gender?: Enumuser_genderNullableFilter<"user"> | $Enums.user_gender | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    role?: Enumuser_roleNullableFilter<"user"> | $Enums.user_role | null
    nomor?: StringNullableFilter<"user"> | string | null
    bookings?: BookingListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    nomor?: SortOrderInput | SortOrder
    bookings?: bookingOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    gender?: Enumuser_genderNullableFilter<"user"> | $Enums.user_gender | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    role?: Enumuser_roleNullableFilter<"user"> | $Enums.user_role | null
    nomor?: StringNullableFilter<"user"> | string | null
    bookings?: BookingListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    nomor?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    gender?: Enumuser_genderNullableWithAggregatesFilter<"user"> | $Enums.user_gender | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    role?: Enumuser_roleNullableWithAggregatesFilter<"user"> | $Enums.user_role | null
    nomor?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type detailLapanganWhereInput = {
    AND?: detailLapanganWhereInput | detailLapanganWhereInput[]
    OR?: detailLapanganWhereInput[]
    NOT?: detailLapanganWhereInput | detailLapanganWhereInput[]
    id?: StringFilter<"detailLapangan"> | string
    nama?: StringFilter<"detailLapangan"> | string
    alamat?: StringFilter<"detailLapangan"> | string
    harga?: IntFilter<"detailLapangan"> | number
    tipeLapangan?: StringFilter<"detailLapangan"> | string
    linkGambar?: StringFilter<"detailLapangan"> | string
    noTelp?: StringFilter<"detailLapangan"> | string
    deskripsi?: StringFilter<"detailLapangan"> | string
    createdAt?: DateTimeFilter<"detailLapangan"> | Date | string
    updatedAt?: DateTimeNullableFilter<"detailLapangan"> | Date | string | null
    bookings?: BookingListRelationFilter
  }

  export type detailLapanganOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    harga?: SortOrder
    tipeLapangan?: SortOrder
    linkGambar?: SortOrder
    noTelp?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    bookings?: bookingOrderByRelationAggregateInput
    _relevance?: detailLapanganOrderByRelevanceInput
  }

  export type detailLapanganWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: detailLapanganWhereInput | detailLapanganWhereInput[]
    OR?: detailLapanganWhereInput[]
    NOT?: detailLapanganWhereInput | detailLapanganWhereInput[]
    nama?: StringFilter<"detailLapangan"> | string
    alamat?: StringFilter<"detailLapangan"> | string
    harga?: IntFilter<"detailLapangan"> | number
    tipeLapangan?: StringFilter<"detailLapangan"> | string
    linkGambar?: StringFilter<"detailLapangan"> | string
    noTelp?: StringFilter<"detailLapangan"> | string
    deskripsi?: StringFilter<"detailLapangan"> | string
    createdAt?: DateTimeFilter<"detailLapangan"> | Date | string
    updatedAt?: DateTimeNullableFilter<"detailLapangan"> | Date | string | null
    bookings?: BookingListRelationFilter
  }, "id">

  export type detailLapanganOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    harga?: SortOrder
    tipeLapangan?: SortOrder
    linkGambar?: SortOrder
    noTelp?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: detailLapanganCountOrderByAggregateInput
    _avg?: detailLapanganAvgOrderByAggregateInput
    _max?: detailLapanganMaxOrderByAggregateInput
    _min?: detailLapanganMinOrderByAggregateInput
    _sum?: detailLapanganSumOrderByAggregateInput
  }

  export type detailLapanganScalarWhereWithAggregatesInput = {
    AND?: detailLapanganScalarWhereWithAggregatesInput | detailLapanganScalarWhereWithAggregatesInput[]
    OR?: detailLapanganScalarWhereWithAggregatesInput[]
    NOT?: detailLapanganScalarWhereWithAggregatesInput | detailLapanganScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"detailLapangan"> | string
    nama?: StringWithAggregatesFilter<"detailLapangan"> | string
    alamat?: StringWithAggregatesFilter<"detailLapangan"> | string
    harga?: IntWithAggregatesFilter<"detailLapangan"> | number
    tipeLapangan?: StringWithAggregatesFilter<"detailLapangan"> | string
    linkGambar?: StringWithAggregatesFilter<"detailLapangan"> | string
    noTelp?: StringWithAggregatesFilter<"detailLapangan"> | string
    deskripsi?: StringWithAggregatesFilter<"detailLapangan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"detailLapangan"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"detailLapangan"> | Date | string | null
  }

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    id?: StringFilter<"booking"> | string
    userId?: StringFilter<"booking"> | string
    lapanganId?: StringFilter<"booking"> | string
    tanggalBooking?: DateTimeNullableFilter<"booking"> | Date | string | null
    jamMulai?: DateTimeNullableFilter<"booking"> | Date | string | null
    jamSelesai?: DateTimeNullableFilter<"booking"> | Date | string | null
    totalharga?: IntNullableFilter<"booking"> | number | null
    status?: EnumstatusBookingNullableFilter<"booking"> | $Enums.statusBooking | null
    createdAt?: DateTimeNullableFilter<"booking"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"booking"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    detailLapangan?: XOR<DetailLapanganScalarRelationFilter, detailLapanganWhereInput>
  }

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lapanganId?: SortOrder
    tanggalBooking?: SortOrderInput | SortOrder
    jamMulai?: SortOrderInput | SortOrder
    jamSelesai?: SortOrderInput | SortOrder
    totalharga?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    detailLapangan?: detailLapanganOrderByWithRelationInput
    _relevance?: bookingOrderByRelevanceInput
  }

  export type bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    userId?: StringFilter<"booking"> | string
    lapanganId?: StringFilter<"booking"> | string
    tanggalBooking?: DateTimeNullableFilter<"booking"> | Date | string | null
    jamMulai?: DateTimeNullableFilter<"booking"> | Date | string | null
    jamSelesai?: DateTimeNullableFilter<"booking"> | Date | string | null
    totalharga?: IntNullableFilter<"booking"> | number | null
    status?: EnumstatusBookingNullableFilter<"booking"> | $Enums.statusBooking | null
    createdAt?: DateTimeNullableFilter<"booking"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"booking"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    detailLapangan?: XOR<DetailLapanganScalarRelationFilter, detailLapanganWhereInput>
  }, "id">

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lapanganId?: SortOrder
    tanggalBooking?: SortOrderInput | SortOrder
    jamMulai?: SortOrderInput | SortOrder
    jamSelesai?: SortOrderInput | SortOrder
    totalharga?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: bookingCountOrderByAggregateInput
    _avg?: bookingAvgOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
    _sum?: bookingSumOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    OR?: bookingScalarWhereWithAggregatesInput[]
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"booking"> | string
    userId?: StringWithAggregatesFilter<"booking"> | string
    lapanganId?: StringWithAggregatesFilter<"booking"> | string
    tanggalBooking?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
    jamMulai?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
    jamSelesai?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
    totalharga?: IntNullableWithAggregatesFilter<"booking"> | number | null
    status?: EnumstatusBookingNullableWithAggregatesFilter<"booking"> | $Enums.statusBooking | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    gender?: $Enums.user_gender | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.user_role | null
    nomor?: string | null
    bookings?: bookingCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    gender?: $Enums.user_gender | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.user_role | null
    nomor?: string | null
    bookings?: bookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    nomor?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    nomor?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    gender?: $Enums.user_gender | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.user_role | null
    nomor?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    nomor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    nomor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detailLapanganCreateInput = {
    id?: string
    nama: string
    alamat: string
    harga: number
    tipeLapangan: string
    linkGambar: string
    noTelp: string
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    bookings?: bookingCreateNestedManyWithoutDetailLapanganInput
  }

  export type detailLapanganUncheckedCreateInput = {
    id?: string
    nama: string
    alamat: string
    harga: number
    tipeLapangan: string
    linkGambar: string
    noTelp: string
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    bookings?: bookingUncheckedCreateNestedManyWithoutDetailLapanganInput
  }

  export type detailLapanganUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    tipeLapangan?: StringFieldUpdateOperationsInput | string
    linkGambar?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingUpdateManyWithoutDetailLapanganNestedInput
  }

  export type detailLapanganUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    tipeLapangan?: StringFieldUpdateOperationsInput | string
    linkGambar?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingUncheckedUpdateManyWithoutDetailLapanganNestedInput
  }

  export type detailLapanganCreateManyInput = {
    id?: string
    nama: string
    alamat: string
    harga: number
    tipeLapangan: string
    linkGambar: string
    noTelp: string
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type detailLapanganUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    tipeLapangan?: StringFieldUpdateOperationsInput | string
    linkGambar?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detailLapanganUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    tipeLapangan?: StringFieldUpdateOperationsInput | string
    linkGambar?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingCreateInput = {
    id?: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user: userCreateNestedOneWithoutBookingsInput
    detailLapangan: detailLapanganCreateNestedOneWithoutBookingsInput
  }

  export type bookingUncheckedCreateInput = {
    id?: string
    userId: string
    lapanganId: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutBookingsNestedInput
    detailLapangan?: detailLapanganUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lapanganId?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingCreateManyInput = {
    id?: string
    userId: string
    lapanganId: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lapanganId?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumuser_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableFilter<$PrismaModel> | $Enums.user_gender | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    nomor?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    nomor?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    nomor?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumuser_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_genderNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type detailLapanganOrderByRelevanceInput = {
    fields: detailLapanganOrderByRelevanceFieldEnum | detailLapanganOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type detailLapanganCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    harga?: SortOrder
    tipeLapangan?: SortOrder
    linkGambar?: SortOrder
    noTelp?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detailLapanganAvgOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type detailLapanganMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    harga?: SortOrder
    tipeLapangan?: SortOrder
    linkGambar?: SortOrder
    noTelp?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detailLapanganMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    harga?: SortOrder
    tipeLapangan?: SortOrder
    linkGambar?: SortOrder
    noTelp?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detailLapanganSumOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumstatusBookingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.statusBooking | EnumstatusBookingFieldRefInput<$PrismaModel> | null
    in?: $Enums.statusBooking[] | null
    notIn?: $Enums.statusBooking[] | null
    not?: NestedEnumstatusBookingNullableFilter<$PrismaModel> | $Enums.statusBooking | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type DetailLapanganScalarRelationFilter = {
    is?: detailLapanganWhereInput
    isNot?: detailLapanganWhereInput
  }

  export type bookingOrderByRelevanceInput = {
    fields: bookingOrderByRelevanceFieldEnum | bookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lapanganId?: SortOrder
    tanggalBooking?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    totalharga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingAvgOrderByAggregateInput = {
    totalharga?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lapanganId?: SortOrder
    tanggalBooking?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    totalharga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lapanganId?: SortOrder
    tanggalBooking?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    totalharga?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookingSumOrderByAggregateInput = {
    totalharga?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumstatusBookingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusBooking | EnumstatusBookingFieldRefInput<$PrismaModel> | null
    in?: $Enums.statusBooking[] | null
    notIn?: $Enums.statusBooking[] | null
    not?: NestedEnumstatusBookingNullableWithAggregatesFilter<$PrismaModel> | $Enums.statusBooking | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatusBookingNullableFilter<$PrismaModel>
    _max?: NestedEnumstatusBookingNullableFilter<$PrismaModel>
  }

  export type bookingCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumuser_genderFieldUpdateOperationsInput = {
    set?: $Enums.user_gender | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type bookingCreateNestedManyWithoutDetailLapanganInput = {
    create?: XOR<bookingCreateWithoutDetailLapanganInput, bookingUncheckedCreateWithoutDetailLapanganInput> | bookingCreateWithoutDetailLapanganInput[] | bookingUncheckedCreateWithoutDetailLapanganInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutDetailLapanganInput | bookingCreateOrConnectWithoutDetailLapanganInput[]
    createMany?: bookingCreateManyDetailLapanganInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutDetailLapanganInput = {
    create?: XOR<bookingCreateWithoutDetailLapanganInput, bookingUncheckedCreateWithoutDetailLapanganInput> | bookingCreateWithoutDetailLapanganInput[] | bookingUncheckedCreateWithoutDetailLapanganInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutDetailLapanganInput | bookingCreateOrConnectWithoutDetailLapanganInput[]
    createMany?: bookingCreateManyDetailLapanganInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bookingUpdateManyWithoutDetailLapanganNestedInput = {
    create?: XOR<bookingCreateWithoutDetailLapanganInput, bookingUncheckedCreateWithoutDetailLapanganInput> | bookingCreateWithoutDetailLapanganInput[] | bookingUncheckedCreateWithoutDetailLapanganInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutDetailLapanganInput | bookingCreateOrConnectWithoutDetailLapanganInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutDetailLapanganInput | bookingUpsertWithWhereUniqueWithoutDetailLapanganInput[]
    createMany?: bookingCreateManyDetailLapanganInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutDetailLapanganInput | bookingUpdateWithWhereUniqueWithoutDetailLapanganInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutDetailLapanganInput | bookingUpdateManyWithWhereWithoutDetailLapanganInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutDetailLapanganNestedInput = {
    create?: XOR<bookingCreateWithoutDetailLapanganInput, bookingUncheckedCreateWithoutDetailLapanganInput> | bookingCreateWithoutDetailLapanganInput[] | bookingUncheckedCreateWithoutDetailLapanganInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutDetailLapanganInput | bookingCreateOrConnectWithoutDetailLapanganInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutDetailLapanganInput | bookingUpsertWithWhereUniqueWithoutDetailLapanganInput[]
    createMany?: bookingCreateManyDetailLapanganInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutDetailLapanganInput | bookingUpdateWithWhereUniqueWithoutDetailLapanganInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutDetailLapanganInput | bookingUpdateManyWithWhereWithoutDetailLapanganInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutBookingsInput = {
    create?: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingsInput
    connect?: userWhereUniqueInput
  }

  export type detailLapanganCreateNestedOneWithoutBookingsInput = {
    create?: XOR<detailLapanganCreateWithoutBookingsInput, detailLapanganUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: detailLapanganCreateOrConnectWithoutBookingsInput
    connect?: detailLapanganWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumstatusBookingFieldUpdateOperationsInput = {
    set?: $Enums.statusBooking | null
  }

  export type userUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingsInput
    upsert?: userUpsertWithoutBookingsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBookingsInput, userUpdateWithoutBookingsInput>, userUncheckedUpdateWithoutBookingsInput>
  }

  export type detailLapanganUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<detailLapanganCreateWithoutBookingsInput, detailLapanganUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: detailLapanganCreateOrConnectWithoutBookingsInput
    upsert?: detailLapanganUpsertWithoutBookingsInput
    connect?: detailLapanganWhereUniqueInput
    update?: XOR<XOR<detailLapanganUpdateToOneWithWhereWithoutBookingsInput, detailLapanganUpdateWithoutBookingsInput>, detailLapanganUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumuser_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableFilter<$PrismaModel> | $Enums.user_gender | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumuser_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_gender | Enumuser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_gender[] | null
    notIn?: $Enums.user_gender[] | null
    not?: NestedEnumuser_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_genderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumstatusBookingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.statusBooking | EnumstatusBookingFieldRefInput<$PrismaModel> | null
    in?: $Enums.statusBooking[] | null
    notIn?: $Enums.statusBooking[] | null
    not?: NestedEnumstatusBookingNullableFilter<$PrismaModel> | $Enums.statusBooking | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumstatusBookingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusBooking | EnumstatusBookingFieldRefInput<$PrismaModel> | null
    in?: $Enums.statusBooking[] | null
    notIn?: $Enums.statusBooking[] | null
    not?: NestedEnumstatusBookingNullableWithAggregatesFilter<$PrismaModel> | $Enums.statusBooking | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatusBookingNullableFilter<$PrismaModel>
    _max?: NestedEnumstatusBookingNullableFilter<$PrismaModel>
  }

  export type bookingCreateWithoutUserInput = {
    id?: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    detailLapangan: detailLapanganCreateNestedOneWithoutBookingsInput
  }

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string
    lapanganId: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
  }

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>
  }

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[]
    OR?: bookingScalarWhereInput[]
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[]
    id?: StringFilter<"booking"> | string
    userId?: StringFilter<"booking"> | string
    lapanganId?: StringFilter<"booking"> | string
    tanggalBooking?: DateTimeNullableFilter<"booking"> | Date | string | null
    jamMulai?: DateTimeNullableFilter<"booking"> | Date | string | null
    jamSelesai?: DateTimeNullableFilter<"booking"> | Date | string | null
    totalharga?: IntNullableFilter<"booking"> | number | null
    status?: EnumstatusBookingNullableFilter<"booking"> | $Enums.statusBooking | null
    createdAt?: DateTimeNullableFilter<"booking"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"booking"> | Date | string | null
  }

  export type bookingCreateWithoutDetailLapanganInput = {
    id?: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user: userCreateNestedOneWithoutBookingsInput
  }

  export type bookingUncheckedCreateWithoutDetailLapanganInput = {
    id?: string
    userId: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type bookingCreateOrConnectWithoutDetailLapanganInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutDetailLapanganInput, bookingUncheckedCreateWithoutDetailLapanganInput>
  }

  export type bookingCreateManyDetailLapanganInputEnvelope = {
    data: bookingCreateManyDetailLapanganInput | bookingCreateManyDetailLapanganInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutDetailLapanganInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutDetailLapanganInput, bookingUncheckedUpdateWithoutDetailLapanganInput>
    create: XOR<bookingCreateWithoutDetailLapanganInput, bookingUncheckedCreateWithoutDetailLapanganInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutDetailLapanganInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutDetailLapanganInput, bookingUncheckedUpdateWithoutDetailLapanganInput>
  }

  export type bookingUpdateManyWithWhereWithoutDetailLapanganInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutDetailLapanganInput>
  }

  export type userCreateWithoutBookingsInput = {
    id?: string
    username: string
    email: string
    password: string
    gender?: $Enums.user_gender | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.user_role | null
    nomor?: string | null
  }

  export type userUncheckedCreateWithoutBookingsInput = {
    id?: string
    username: string
    email: string
    password: string
    gender?: $Enums.user_gender | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    role?: $Enums.user_role | null
    nomor?: string | null
  }

  export type userCreateOrConnectWithoutBookingsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
  }

  export type detailLapanganCreateWithoutBookingsInput = {
    id?: string
    nama: string
    alamat: string
    harga: number
    tipeLapangan: string
    linkGambar: string
    noTelp: string
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type detailLapanganUncheckedCreateWithoutBookingsInput = {
    id?: string
    nama: string
    alamat: string
    harga: number
    tipeLapangan: string
    linkGambar: string
    noTelp: string
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type detailLapanganCreateOrConnectWithoutBookingsInput = {
    where: detailLapanganWhereUniqueInput
    create: XOR<detailLapanganCreateWithoutBookingsInput, detailLapanganUncheckedCreateWithoutBookingsInput>
  }

  export type userUpsertWithoutBookingsInput = {
    update: XOR<userUpdateWithoutBookingsInput, userUncheckedUpdateWithoutBookingsInput>
    create: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBookingsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBookingsInput, userUncheckedUpdateWithoutBookingsInput>
  }

  export type userUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    nomor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumuser_genderFieldUpdateOperationsInput | $Enums.user_gender | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    nomor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detailLapanganUpsertWithoutBookingsInput = {
    update: XOR<detailLapanganUpdateWithoutBookingsInput, detailLapanganUncheckedUpdateWithoutBookingsInput>
    create: XOR<detailLapanganCreateWithoutBookingsInput, detailLapanganUncheckedCreateWithoutBookingsInput>
    where?: detailLapanganWhereInput
  }

  export type detailLapanganUpdateToOneWithWhereWithoutBookingsInput = {
    where?: detailLapanganWhereInput
    data: XOR<detailLapanganUpdateWithoutBookingsInput, detailLapanganUncheckedUpdateWithoutBookingsInput>
  }

  export type detailLapanganUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    tipeLapangan?: StringFieldUpdateOperationsInput | string
    linkGambar?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detailLapanganUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    tipeLapangan?: StringFieldUpdateOperationsInput | string
    linkGambar?: StringFieldUpdateOperationsInput | string
    noTelp?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingCreateManyUserInput = {
    id?: string
    lapanganId: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailLapangan?: detailLapanganUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lapanganId?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lapanganId?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingCreateManyDetailLapanganInput = {
    id?: string
    userId: string
    tanggalBooking?: Date | string | null
    jamMulai?: Date | string | null
    jamSelesai?: Date | string | null
    totalharga?: number | null
    status?: $Enums.statusBooking | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type bookingUpdateWithoutDetailLapanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingUncheckedUpdateWithoutDetailLapanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingUncheckedUpdateManyWithoutDetailLapanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tanggalBooking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalharga?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumstatusBookingFieldUpdateOperationsInput | $Enums.statusBooking | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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