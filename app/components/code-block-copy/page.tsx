import React from "react";
import { CodeBlockWithCopy } from "./CodeBlockWithCopy";

export default function Codeblock() {
  return (
    <div>
      <h1 className="h1">Codeblock with Copy</h1>
      <CodeBlockWithCopy code={`npx create-next-app@latest`} />
    </div>
  );
}
