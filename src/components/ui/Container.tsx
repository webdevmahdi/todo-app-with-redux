import { ReactNode } from "react";

type TTodoProps = {
  children: ReactNode;
};

const Container = ({ children }: TTodoProps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
