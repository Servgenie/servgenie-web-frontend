import { NextResponse } from 'next/server';
import axios from 'axios';

const BREVO_API_URL = process.env.NEXT_PUBLIC_BREVO_API_URL || "";
const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY || "";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const response = await axios.post(
            BREVO_API_URL,
            {
                email,
                updateEnabled: true,
                listIds: [2]
            },
            {
                headers: {
                    'api-key': BREVO_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        return NextResponse.json({ message: 'Subscription successful', data: response.data });
    } catch (error) {
        console.error('Error adding subscriber:', error);
        return NextResponse.json({ error: 'Failed to add subscriber' }, { status: 500 });
    }
}
