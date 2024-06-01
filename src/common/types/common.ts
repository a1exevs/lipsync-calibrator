export type Optional<E> = E | undefined;

export type Nullable<E> = E | null;

export type Nillable<E> = E | null | undefined;

export type KeyOfOptionalValue<T, V> = {
  [K in keyof T]: T[K] extends V | undefined ? K : never;
}[keyof T];

export type KeyOfValue<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

export type UnionTypeFromConstObject<T = Record<string, string>> = T[keyof T];

export type NonRequired<T> = {
  [K in keyof T]?: T[K];
};

export type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};
