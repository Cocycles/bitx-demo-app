import * as checkout from '@acme/checkout-flow';

export const RetryButton = ({ orderId }: { orderId: string }) => (
  <button onClick={() => checkout.retryPayment(orderId, 3)}>Retry</button>
);
