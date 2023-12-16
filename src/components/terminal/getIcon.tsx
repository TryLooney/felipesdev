import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { type TerminalType } from ".";

export function getIcon(type: TerminalType) {
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
