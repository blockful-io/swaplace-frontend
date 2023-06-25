import { useContext } from "react";
import { NextPage } from "next";
import { ThemeContext } from "@/contexts/theme-config";
import { TheHeader } from "@/components";

const IndexPage: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      style={{
        background: theme.mainColor,
      }}
    >
      <TheHeader />
    </div>
  );
};

export default IndexPage;
