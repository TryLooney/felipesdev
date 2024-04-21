"use client";

import { useCompletion } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";

export function BlogWriter() {
  const { completion, input, handleInputChange, handleSubmit, error } =
    useCompletion();
  const [isTyping, setIsTyping] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTyping(false);

      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <>
      <div>
        {error && (
          <div className="fixed left-0 top-0 w-full bg-red-500 p-4 text-center text-white">
            {error.message}
          </div>
        )}
        <div
          className={`size-8 ${isTyping ? "bg-green-500" : "bg-red-500"}`}
        ></div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Textarea
            value={input}
            placeholder="Say something..."
            onKeyDown={() => {
              setIsTyping(true);
            }}
            onChange={handleInputChange}
          />
        </form>
        <div className="mt-8 flex items-center space-x-4">
          <div className="rounded-lg border bg-background p-1">
            <span className="">Predict</span>
          </div>
          <p>{completion}</p>
        </div>
      </div>
    </>
  );
}
