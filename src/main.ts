import Immutable from "immutable";
import * as R from "ramda";

// Define implementation outside of Ramda's curry
function nullishGetBase<V>(
  defaultValue: V,
  key: string,
  map: Immutable.Map<string, V>
): V {
  return map.get(key) ?? defaultValue;
}

// Note the explicit type here
const nullishGetArray = R.curry(nullishGetBase<unknown[]>)([]);

// result type is unknown[]
const result = nullishGetArray("foo", Immutable.Map({ foo: ["bar"] }));

console.log(result);
