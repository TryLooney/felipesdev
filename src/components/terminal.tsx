"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";

export type TerminalType = "info" | "error" | "warning" | "success";

interface TerminalProps {
  title?: string;
  classNames?: {
    wrapper?: string;
    terminal?: string;
  };
  messages: {
    message: string | JSX.Element;
    type?: TerminalType;
    timestamp?: Date;
    delay?: number;
    input?: boolean;
    user?: string;
    path?: string;
    typingSpeed?: number;
  }[];
}

function parseMessage(message: string | JSX.Element) {
  if (typeof message !== "string") {
    return {
      segments: [
        {
          text: [{ char: message, styles: ["text-foreground-500"] }],
          styles: ["text-foreground-500"],
        },
      ],
      messageLength: 1,
    };
  }

  const colorCodes = {
    "{red}": "text-red-500",
    "{blue}": "text-blue-500",
    "{green}": "text-green-500",
    "{yellow}": "text-yellow-500",
    "{purple}": "text-purple-500",
    "{cyan}": "text-cyan-500",
    "{white}": "text-white",
    "{reset}": "text-default-500",
    "{bold}": "font-bold",
    "{semibold}": "font-semibold",
    "{medium}": "font-medium",
    "{regular}": "font-normal",
    "{italic}": "italic",
    "{underline}": "underline",
  };

  type Segment = {
    text: { char: string | JSX.Element; styles: string[] }[];
    styles: string[];
  };

  const segments: Segment[] = [{ text: [], styles: ["text-foreground-500"] }];
  const currentStyles = ["text-foreground-500"];
  let messageLength = 0;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === "{") {
      const code = message.slice(i, message.indexOf("}", i) + 1);
      if (code in colorCodes) {
        currentStyles.push(colorCodes[code as keyof typeof colorCodes]);
        i += code.length - 1;
        continue;
      }
    }
    if (message[i] === "\n") {
      segments[0]?.text.push({ char: <br />, styles: [] });
      continue;
    }
    if (i < message.length && message[i] !== undefined) {
      const char: string | JSX.Element = message[i] ?? "";
      segments[0]?.text.push({ char, styles: [...currentStyles] });
      messageLength++;
    }
  }

  return { segments, messageLength };
}

export function Terminal({ title, classNames, messages }: TerminalProps) {
  let totalDelay = 0;

  return (
    <motion.div
      className={cn(
        "flex min-w-[32rem] flex-col rounded-lg bg-background-100",
        classNames?.wrapper,
      )}
    >
      <motion.div className="grid w-full grid-cols-3 items-center justify-center border-b">
        <motion.div className="flex flex-row items-center gap-2 p-4">
          <motion.div className="h-3 w-3 rounded-full bg-red-500" />
          <motion.div className="h-3 w-3 rounded-full bg-yellow-500" />
          <motion.div className="h-3 w-3 rounded-full bg-green-500" />
        </motion.div>
        <motion.span className="flex items-center justify-center text-sm font-semibold text-foreground-300">
          {title}
        </motion.span>
      </motion.div>
      <motion.ul
        className={cn(
          "flex flex-col items-start justify-start space-y-4 overflow-auto p-8 [&::-webkit-scrollbar]:hidden",
          classNames?.terminal,
        )}
      >
        {messages.map((msg, index) => {
          totalDelay += msg.delay ?? 0;
          const { segments: messageSegments, messageLength } = parseMessage(
            msg.message,
          );
          const messageElement = (
            <motion.li
              key={index}
              initial={{ display: "none", y: -10 }}
              animate={{ display: "flex", y: 0 }}
              transition={{ delay: totalDelay }}
              className="flex items-center justify-start space-x-1"
            >
              <span>{!msg.input && msg.type && getIcon(msg.type)}</span>
              {msg.input && (
                <span>
                  <span className="text-yellow-500">
                    λ {msg.user ?? "trylooney"}{" "}
                  </span>
                  <span className="text-green-500">{msg.path ?? ""}</span>
                  <span className="text-yellow-500"> →</span>
                </span>
              )}
              <span className="break-words">
                {messageSegments[0]?.text.map((segment, i) => (
                  <motion.span
                    key={i}
                    className={cn(segment.styles.join(" "))}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: totalDelay + i * (msg.typingSpeed ?? 0.05),
                    }}
                  >
                    {segment.char}
                  </motion.span>
                ))}
              </span>
            </motion.li>
          );
          totalDelay += messageLength * (msg.typingSpeed ?? 0.05);
          return messageElement;
        })}
      </motion.ul>
    </motion.div>
  );
}

function getIcon(type: TerminalType) {
  switch (type) {
    case "info":
      return <Info className="h-5 w-5 text-blue-500" />;
    case "error":
      return <XCircle className="h-5 w-5 text-red-500" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
  }
}
