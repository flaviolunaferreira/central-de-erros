import React from 'react'
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
} from "@chakra-ui/react"

import LinkButton from "./LinkButton";

export const MenuSideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Button ref={btnRef} color="#ED1941" onClick={onOpen}>
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
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <LinkButton title="Home" route="/" onClose={onClose} />
            <LinkButton title="Quem Somos" route="/aboutus" onClose={onClose} />
            <LinkButton title="Comentários" route="/comments" onClose={onClose} />
            <LinkButton title="Sobre o Projeto" route="/aboutproject" onClose={onClose} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose} color="#0C9FA6">
              <LinkButton title="Login" route="/login" onClose={onClose} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}


