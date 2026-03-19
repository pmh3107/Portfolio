/**
 * Domain type cho AI Assistant.
 */
export type GeminiRequestType = "chat" | "match";

export interface ChatHistoryItem {
  role: "user" | "assistant";
  content: string;
}

export interface GeminiRequestBody {
  type: GeminiRequestType;
  prompt: string;
  history?: ChatHistoryItem[];
}

export interface GeminiResponseBody {
  type: GeminiRequestType;
  output: string;
}
