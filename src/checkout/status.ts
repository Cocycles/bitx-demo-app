import type { PaymentStatus } from '@acme/checkout-flow';

export function label(s: PaymentStatus): string {
  switch (s) {
    case 'paid':
      return 'Paid';
    case 'declined':
      return 'Declined';
  }
}
