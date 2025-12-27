const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are the official AI assistant of EESA.

IMPORTANT FACTS:
- EESA stands for Electronics Engineering Student Association.
- EESA belongs to the Electronics & Telecommunication Engineering department.
- EESA focuses on technical events, workshops, alumni networking, and placement guidance.

RULES:
- NEVER expand EESA incorrectly.
- NEVER guess or hallucinate.
- If information is unavailable, say "Information not available".
          `,
        },
        {
          role: "assistant",
          content: `
EESA (Electronics Engineering Student Association) supports students through:
• Technical workshops
• Alumni interactions
• Placement preparation
• Departmental events
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ reply: "AI service failed" });
  }
};
