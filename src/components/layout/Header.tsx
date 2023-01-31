import { FC } from "react";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

interface Props {
  title: string;
}
const Header: FC<Props> = ({ title }) => {
  return (
    <Container
      maxW="6xl"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>{title}</Text>
      <Navbar showColorModeSwitcher />
    </Container>
  );
};

export default Header;
