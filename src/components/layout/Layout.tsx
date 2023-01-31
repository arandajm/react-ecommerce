import { FC, PropsWithChildren } from "react";
import { Stack } from "@chakra-ui/react";
import Header from "./Header";

type Props = PropsWithChildren<{ showFooter?: boolean }>;

const Layout: FC<Props> = ({ children, showFooter = false }) => {
  return (
    <Stack>
      <Stack as="header">
        <Header title="Ecommerce" />
      </Stack>
      <Stack as="main">{children}</Stack>
      {showFooter && (
        <Stack as="footer">
          <h2>footer</h2>
        </Stack>
      )}
    </Stack>
  );
};

export default Layout;
