export function parseMessage(message: string | JSX.Element) {
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
