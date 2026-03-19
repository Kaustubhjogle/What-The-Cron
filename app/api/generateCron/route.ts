import { GEMNINI_BASE_INSTRUCTION } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

// export function GET(){
//     return Response.json({message:"hello"})
// }

export async function POST(request: NextRequest) {
  const req = await request.json();
  const API_KEY = process.env.GEMINI_API_KEY!;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Instruction: ${GEMNINI_BASE_INSTRUCTION} Input: ${req.textIp}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 20,
        },
      }),
    },
  );
  const res = await response.json();
  return NextResponse.json(res);
}
