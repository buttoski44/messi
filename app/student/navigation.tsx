"use client";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Home, Settings, FileWarning } from "lucide-react";
export const Navigation = () => {
  return (
    <ToggleGroup.Root
      className="absolute bottom-14 left-[42%] z-20 border-2 border-bla rounded-full overflow-hidden"
      type="single"
      defaultValue="home"
      aria-label="Text alignment"
    >
      <ToggleGroup.Item
        className="bg-gra p-3 hover:brightness-[0.8] data-[state=on]:brightness-50"
        value="settings"
        aria-label="Left aligned"
      >
        <Settings />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="bg-gra p-3 hover:brightness-[0.8] data-[state=on]:brightness-50"
        value="home"
        aria-label="Center aligned"
      >
        <Home />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="bg-gra p-3 hover:brightness-[0.8] data-[state=on]:brightness-50"
        value="complaints"
        aria-label="Right aligned"
      >
        <FileWarning />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default Navigation;
