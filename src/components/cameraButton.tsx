import { Tooltip } from "@radix-ui/themes";
import { ReactNode } from "react";

export default function CameraButton({
  message,
  setState,
  state,
  component,
}: {
  message: string;
  setState: (state: unknown) => void;
  state: unknown;
  component: ReactNode;
}) {
  return (
    <Tooltip content={message}>
      <button
        className="border-dark hover:bg-primary rounded-md border p-2 duration-150"
        onClick={() => setState(state)}
      >
        {component}
      </button>
    </Tooltip>
  );
}
