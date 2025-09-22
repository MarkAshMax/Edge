export type PaymentStatus = "requires_payment" | "paid" | "failed";

export interface PaymentService {
  createIntent(input: {
    orderId: string;
    amount: number;
    currency: string;
    customerEmail?: string;
  }): Promise<{ paymentId: string; status: PaymentStatus }>;

  confirm(input: {
    paymentId: string;
    paymentMethodNonce?: string;
  }): Promise<{ status: PaymentStatus }>;
}

export class MockPaymentService implements PaymentService {
  async createIntent(input: {
    orderId: string;
    amount: number;
    currency: string;
    customerEmail?: string;
  }): Promise<{ paymentId: string; status: PaymentStatus }> {
    // Pretend to call a real provider but simply hand back an identifier
    return {
      paymentId: `pay_${input.orderId}`,
      status: "requires_payment",
    };
  }

  async confirm({ paymentId }: { paymentId: string; paymentMethodNonce?: string }): Promise<{ status: PaymentStatus }> {
    // Confirm immediately for the mock implementation
    void paymentId;
    return { status: "paid" };
  }
}

export const payment = new MockPaymentService();
