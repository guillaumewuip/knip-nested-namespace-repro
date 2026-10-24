# knip-nested-namespace-repro

Minimal reproduction for a knip regression: exports reached through 4 or more nested `export * as` namespaces are reported as unused since knip 6.0.0-0.

```sh
npm install
npm run knip
```

With the pinned knip 6.43.0, `c1` (4 hops) and `d1` (5 hops) are reported as unused even though `src/consumer.ts` reads them. Only `reallyUnused` should be reported.

With knip 5.88.1 only `reallyUnused` is reported:

```sh
npx knip@5.88.1
```

Hops are counted as `.member` accesses after the imported binding (`Root`). `a1` (2 hops), `b1` (3 hops) and the type `D1` (5 hops, type position) are tracked correctly in every version.
