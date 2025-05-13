import { FC, PropsWithChildren } from "react";


export const AppLayout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <main>
      {children}
    </main>
  );
};
