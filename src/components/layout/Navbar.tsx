import { Link, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Link as RouteLink } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

interface Props {
  showColorModeSwitcher?: boolean;
}

const Navbar: FC<Props> = ({ showColorModeSwitcher = false }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Link as={RouteLink} to="/search">
        Search
      </Link>
      <Link as={RouteLink} to="/">
        Home
      </Link>
      {showColorModeSwitcher && <ColorModeSwitcher justifySelf="flex-end" />}
    </Stack>
  );
};

export default Navbar;
