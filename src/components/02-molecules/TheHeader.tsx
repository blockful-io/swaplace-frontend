import { ConnectWallet, LightModeToggle } from "../01-atoms";

export const TheHeader = () => {
  return (
    <header className="flex justify-between p-4 fixed top-0 left-0 w-screen">
      <LightModeToggle />
      <ConnectWallet />
    </header>
  );
};
