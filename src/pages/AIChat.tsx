import { useState } from "react";
import axios from "axios";

interface AIResponse {
  reply: string;
}

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, "You: " + message]);
    setLoading(true);

    try {
      const res = await axios.post<AIResponse>(
        "http://localhost:5000/api/ai/chat",
        { message }
      );

      setChat((prev) => [...prev, "AI: " + res.data.reply]);
    } catch (error) {
      setChat((prev) => [...prev, "AI: Something went wrong"]);
    }

    setMessage("");
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">EESA AI Assistant</h2>

      <div className="border p-3 h-64 overflow-y-auto mb-2">
        {chat.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
        {loading && <p>AI is typing...</p>}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border w-full p-2 mb-2"
        placeholder="Ask something..."
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
