import { PaymentError, retryPayment } from '@acme/checkout-flow';

export function show(e: PaymentError): string {
  return e.code;
}

export async function retry(orderId: string) {
  return retryPayment(orderId);
}
