import test from "ava"
import pkgCache from "."

test("main", (t) => {
    t.true(pkgCache.endsWith("find-pkg-cache"))
})
