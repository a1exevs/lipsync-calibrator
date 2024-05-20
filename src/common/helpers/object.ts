import { Nullable } from 'src/common/types/common';

export function entries<K extends PropertyKey, V>(r: Nullable<Record<K, V>>): [K, V][] {
  return Object.entries(r ?? {}).map(([k, v]) => [k as K, v as V]);
}

export function fromEntries<K extends PropertyKey, V>(v: [K, V][]): Record<K, V> {
  return Object.fromEntries(v) as Record<K, V>;
}

export async function mapAsync<K extends PropertyKey, A, B>(
  r: Record<K, A>,
  f: (_: A) => Promise<B>,
): Promise<Record<K, B>> {
  const result: [K, B][] = await Promise.all(entries(r).map(async ([k, v]) => [k, await f(v)]));
  return fromEntries(result);
}

export function map<K extends PropertyKey, A, B>(r: Record<K, A>, f: (_: A) => B): Record<K, B> {
  return fromEntries(entries(r).map(([k, v]) => [k, f(v)]));
}

export function identity<T>(t: T): T {
  return t;
}
