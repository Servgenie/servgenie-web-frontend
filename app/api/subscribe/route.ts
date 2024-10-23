import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

const BREVO_API_URL = process.env.BREVO_API_URL || "";
const BREVO_API_KEY = process.env.BREVO_API_KEY || "";

export async function POST(request: Request) {
  try {
    const { email, attributes } = await request.json();
    const contactListId = Number(process.env.BREVO_CONTACT_LIST_ID);

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await axios.post(
      BREVO_API_URL,
      {
        email,
        attributes,
        updateEnabled: true,
        listIds: [contactListId],
        emailBlacklisted: false,
        smsBlacklisted: false,
      },
      {
        headers: {
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({
      message: "Subscription successful",
      data: response.data,
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error adding subscriber:", error);

    return NextResponse.json(
      { error: axiosError.response?.data},
      { status: axiosError.status }
    );
  }
}
