"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { getIcon } from "./getIcon";
import { parseMessage } from "./parseMessage";

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

export function Terminal({ title, classNames, messages }: TerminalProps) {
  let totalDelay = 0;

  return (
    <motion.div
      className={cn(
        "flex flex-col rounded-lg bg-background-100",
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
          "flex flex-col items-start justify-start space-y-4 overflow-auto p-4 md:p-8 [&::-webkit-scrollbar]:hidden",
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
              className="flex flex-col items-center justify-center space-x-1 md:flex-row"
            >
              <span>{!msg.input && msg.type && getIcon(msg.type)}</span>
              {msg.input && (
                <span className="">
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
