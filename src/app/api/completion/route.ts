import { createCompletion } from "@/lib/ia/actions";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = (await req.json()) as { prompt?: string };

  if (!prompt) {
    return new Response("No prompt provided", { status: 400 });
  }

  const response = await createCompletion({
    model: "openchat_3.5",
    stream: true,
    messages: [
      {
        role: "system",
        content: `\
You are an AI trained to autocomplete sentences.
Please provide ONLY the text you want to autocomplete.
No other text should be provided.
        `,
      },
      {
        role: "user",
        content: `\
I will give you a text and you must complete it.
You shouldn't rewrite it, just finish it

Text:
${prompt}
        `,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  console.log(prompt);
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
