import { NextResponse } from "next/server";
import paymentData from "@/data/customerPayments.json";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { params } = context;
    const payment = paymentData.filter(
      async (p) => (await params).id === p.organisation_id
    );

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!payment) {
      return NextResponse.json(
        {
          data: null,
          success: false,
          message: "Payment not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      data: payment,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching payment:", error);
    return NextResponse.json(
      { data: null, success: false, message: "Failed to fetch payment" },
      { status: 500 }
    );
  }
}
