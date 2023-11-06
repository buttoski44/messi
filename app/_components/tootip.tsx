import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type tooltipPropType = {
  children: React.ReactNode;
  tip: String;
};
export const ToolTipProvider = ({ children, tip }: tooltipPropType) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="p-4 text-bla bg-ora" sideOffset={5}>
            {tip}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
