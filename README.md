# bitx-demo-app

Another team's app that uses `@acme/checkout-flow` from [bitx-demo](https://github.com/Cocycles/bitx-demo).

It exists to show [bitx](https://www.npmjs.com/package/@cocycles/bitx) checking a change against a
repository that isn't yours: from `bitx-demo`, run

```sh
bitx impact --repo github.com/Cocycles/bitx-demo-app
```

and bitx clones this repo, finds where it uses what changed, and reports each use by file and line:

- `src/checkout/pay.ts` breaks (it imports a removed type and calls `retryPayment` with one argument)
- `src/checkout/status.ts` is flagged for review (its `switch` may not handle a new status)
- `src/checkout/admin.tsx` is safe (it passes both arguments)
