import { Nullable } from 'src/common/types/common';

export function entries<K extends PropertyKey, V>(r: Nullable<Record<K, V>>): [K, V][] {
  return Object.entries(r ?? {}).map(([k, v]) => [k as K, v as V]);
}

export function fromEntries<K extends PropertyKey, V>(v: (readonly [K, V])[]): Record<K, V> {
  return Object.fromEntries(v) as Record<K, V>;
}

export function mapAsync<K extends PropertyKey, A, B>(r: Record<K, A>, f: (_: A) => Promise<B>): Promise<Record<K, B>> {
  const parallelMapping = entries(r).map(([k, v]) => f(v).then(mapped => [k, mapped] as const));
  return Promise.all(parallelMapping).then(fromEntries);
}

export function map<K extends PropertyKey, A, B>(r: Record<K, A>, f: (_: A) => B): Record<K, B> {
  return fromEntries(entries(r).map(([k, v]) => [k, f(v)]));
}

export function identity<T>(t: T): T {
  return t;
}
