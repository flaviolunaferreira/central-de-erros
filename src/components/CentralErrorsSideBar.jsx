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

export const CentralErrorsSideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Button ref={btnRef} color="#ED1941" onClick={onOpen}>
        Buscar
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
          <DrawerHeader>Buscar</DrawerHeader>

          <DrawerBody>
            <LinkButton title="Data" route="/date" onClose={onClose} />
            <LinkButton title="Tipo" route="/type" onClose={onClose} />
            <LinkButton title="Origem" route="/origin" onClose={onClose} />
            <LinkButton title="Nível" route="/level" onClose={onClose} />
            <LinkButton title="Descrição" route="/description" onClose={onClose} />
            <LinkButton title="Personalizada" route="/custom" onClose={onClose} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose} color="#0C9FA6">
              <LinkButton title="Logout" route="/" onClose={onClose} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}