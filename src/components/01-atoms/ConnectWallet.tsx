import { ThemeContext } from "@/contexts/theme-config";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useContext, useState } from "react";

export const ConnectWallet = () => {
  const { theme } = useContext(ThemeContext);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  const onCTAHover = ({ hovering }: { hovering: boolean }) => {
    setIsCtaHovered(hovering);
  };

  const ctaConfig = {
    ...theme,
    background: isCtaHovered
      ? theme.hoveredConnectWalletBackground
      : theme.connectWalletBackground,
    color: isCtaHovered
      ? theme.hoveredConnectWalletTextColor
      : theme.connectWalletTextColor,
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    style={{
                      background: ctaConfig.background,
                      color: ctaConfig.color,
                      fontWeight: 600,
                      padding: "8px 16px",
                      fontSize: 20,
                      borderRadius: 6,
                      transition: "ease-in-out 0.4s",
                    }}
                    onMouseEnter={() => onCTAHover({ hovering: true })}
                    onMouseLeave={() => onCTAHover({ hovering: false })}
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: theme.primaryTextColor,
                    }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={12}
                            height={12}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    style={{ color: theme.primaryTextColor }}
                    type="button"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
