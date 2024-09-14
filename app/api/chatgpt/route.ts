import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

export const POST = async (request: Request) => {
    const { question } = await request.json();

    try {

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {"role": "system", "content": "You are a knowledgeable assistant that provides quality information."},
                {"role": "user", "content": `Tell me ${question}`},
            ]
        });
        
        const reply = completion.choices[0].message.content;
        console.log(reply)
        return NextResponse.json({ reply })
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}