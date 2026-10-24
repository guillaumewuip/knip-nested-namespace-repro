import * as Root from './index.ts'

// hops = number of `.member` accesses after `Root`
console.log(Root.A.a1) // 2 hops
console.log(Root.A.B.b1) // 3 hops
console.log(Root.A.B.C.c1) // 4 hops
console.log(Root.A.B.C.D.d1) // 5 hops

// the same depth in type position
export type FromTypePosition = Root.A.B.C.D.D1
