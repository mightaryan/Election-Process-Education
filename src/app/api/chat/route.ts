import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    // System prompt to constrain the AI's behavior
    const systemMessage = {
      role: "system",
      content: "You are a helpful, beginner-friendly Election Guide Assistant. Your job is to answer questions about the U.S. election process accurately and simply. Keep your answers concise, unbiased, and easy to understand. If a user asks a question unrelated to elections, voting, or civics, politely redirect them to election-related topics.",
    };

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({ result: completion.choices[0].message });
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "An error occurred during your request." },
      { status: 500 }
    );
  }
}
