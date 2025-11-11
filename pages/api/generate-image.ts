/*import { HEIGHT, WIDTH } from "@/constants";
import { RequestProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Use server-side environment variable (no NEXT_PUBLIC_)
  const gptApiKey = process.env.GPT_API_KEY;
  const gptUrl = "https://chatgpt-42.p.rapidapi.com/texttoimage";

  if (!gptApiKey) {
    return res.status(500).json({ error: "Server API key is missing" });
  }

  try {
    const { prompt }: RequestProps = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const apiResp = await fetch(gptUrl, {
      method: "POST",
      body: JSON.stringify({
        text: prompt,
        width: WIDTH,
        height: HEIGHT,
      }),
      headers: {
        "x-rapidapi-key": gptApiKey.trim(),
        "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });

    // Get raw text for debugging if error occurs
    const text = await apiResp.text();

    if (!apiResp.ok) {
      console.error("RapidAPI Error:", apiResp.status, text);
      return res.status(apiResp.status).json({ error: text });
    }

    const data = JSON.parse(text);

    return res.status(200).json({
      imageUrl: data?.generated_image || "https://via.placeholder.com/600x400?text=Generated+Image",
    });

  } catch (err) {
    console.error("Unexpected API Route Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default handler;
*/



