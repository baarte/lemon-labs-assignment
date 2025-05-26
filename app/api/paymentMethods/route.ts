import { NextResponse } from "next/server";
import paymentMethods from "@/data/paymentMethods.json";

export async function GET() {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({
      data: paymentMethods,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching payment methods:", error);
    return NextResponse.json(
      {
        data: null,
        success: false,
        message: "Failed to fetch payment methods",
      },
      { status: 500 }
    );
  }
}
