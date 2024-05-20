import { KeyOfValue } from 'src/common/types/common';

export function arrayToObject<T = Record<string, unknown>>(
  arr: T[],
  keyField: KeyOfValue<T, string>,
): Record<string, T> {
  return Object.assign({}, ...arr.map(item => ({ [item[keyField] as string]: item })));
}
