import {
  Center,
  Container,
  Heading,
  Stack,
  Box,
  Button,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

export default function SplashScreen({ handleClick }) {
  const [spinner, setSpinner] = useState(true);

  const close = async () => {
    setSpinner(false);
    setTimeout(() => {
      setSpinner(true);
      handleClick();
    }, 2000);
  };

  return (
    <Box>
      <Center h="70vh">
        <Box maxW="32rem" textAlign="center">
          <Heading mb={8}>Avvento dell'Elis 🎄</Heading>
          <Container>
            Benvenuti, ragazze e ragazzi all'interno del calendario dell'avvento
            dell'Elis.
          </Container>
          <Container mt={2}>
            Ringrazia La geniale mente di{" "}
            <Text color="blue.300">@bighands</Text>
          </Container>
          <Button size="lg" colorScheme="green" mt="24px" onClick={close}>
            Entra
          </Button>
          <Box hidden={spinner}></Box>
        </Box>
      </Center>
      <Center h="30vh">
        <Stack align="center">
          <Spinner hidden={spinner} color="red.500" />
          <Text>
            Powered by{" "}
            <Text display="inline-block" color="blue.300">
              @matteomad
            </Text>
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
