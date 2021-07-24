import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import LinkButton from "./LinkButton";
import { useHistory } from "react-router-dom";

export const MenuSideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const history = useHistory();

  const token = localStorage.getItem("getToken");
  const handleLogin = () => {
    history.push("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("getToken");
    history.push("/");
  };

  return (
    <div>
      <Button ml={10} ref={btnRef} color="#ED1941" onClick={onOpen}>
        Home
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="3xl">Menu</DrawerHeader>

          <DrawerBody mt={8}>
            <LinkButton title="Home" route="/" onClose={onClose} />
            <LinkButton title="Quem Somos" route="/aboutus" onClose={onClose} />
            <LinkButton
              title="Comentários"
              route="/comments"
              onClose={onClose}
            />
            <LinkButton
              title="Sobre o Projeto"
              route="/aboutproject"
              onClose={onClose}
            />
            {token ? (
              <LinkButton
                title="Buscar"
                route="/centralerrors"
                onClose={onClose}
              />
            ) : (
              ""
            )}
          </DrawerBody>

          <DrawerFooter>
            {token ? (
              <Button
                variant="outline"
                mr={3}
                onClick={() => handleLogout()}
                color="#0C9FA6"
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="outline"
                mr={3}
                onClick={() => handleLogin()}
                color="#0C9FA6"
                fontSize="lg"
              >
                Login
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
