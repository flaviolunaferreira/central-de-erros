import React from "react";
import {
  // Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // useDisclosure,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

export const CentralErrorsSideBar = () => {
  // const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  // const btnRef = React.useRef();

  const history = useHistory();

  return (
    // <div>
    //   <Button ref={btnRef} color="#ED1941" onClick={onOpen}>
    //     Buscar
    //   </Button>
    //   <Drawer
    //     isOpen={isOpen}
    //     placement="left"
    //     onClose={onClose}
    //     finalFocusRef={btnRef}
    //   >
    //     <DrawerOverlay />
    //     <DrawerContent>
    //       <DrawerCloseButton />
    //       <DrawerHeader>Buscar</DrawerHeader>

    //       <DrawerBody>
    // <LinkButton title="Data" route="/date" onClose={onClose} />
    // <LinkButton title="Origem" route="/origin" onClose={onClose} />
    // <LinkButton title="Nível" route="/level" onClose={onClose} />
    // <LinkButton title="Descrição" route="/description" onClose={onClose} />
    // <LinkButton title="Personalizada" route="/custom" onClose={onClose} />
    //       </DrawerBody>

    //       <DrawerFooter>
    //         <Button variant="outline" mr={3} onClick={onClose} color="#0C9FA6">
    //           <LinkButton title="Logout" route="/" onClose={onClose} />
    //         </Button>
    //       </DrawerFooter>
    //     </DrawerContent>
    //   </Drawer>
    // </div>
    <Box ml={16} mt={6} mb={10}>
      <Menu>
        <MenuButton color="#035559" as={Button} rightIcon={<ChevronDownIcon />}>
          Buscar
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => history.push('/date')}>Data</MenuItem>
          <MenuItem onClick={() => history.push('/origin')}>Origem</MenuItem>
          <MenuItem onClick={() => history.push('/level')}>Nível</MenuItem>
          <MenuItem onClick={() => history.push('/description')}>Descrição</MenuItem>
          <MenuItem onClick={() => history.push('/custom')}>Personalizada</MenuItem>
          {/* <LinkButton title="Data" route="/date" onClose={onClose} />
          <LinkButton title="Origem" route="/origin" onClose={onClose} />
          <LinkButton title="Nível" route="/level" onClose={onClose} />
          <LinkButton
            title="Descrição"
            route="/description"
            onClose={onClose}
          />
          <LinkButton title="Personalizada" route="/custom" onClose={onClose} /> */}
        </MenuList>
      </Menu>
    </Box>
  );
};
