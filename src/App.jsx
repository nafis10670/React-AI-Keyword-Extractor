import { Box, Container } from "@chakra-ui/react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import TextInput from "./Components/TextInput.jsx";

const App = () => {
  const extractKeywords = (text) => {
    console.log(text);
  };

  return (
    <Box bg={"blue.600"} color={"white"} height={"100vh"} paddingTop={130}>
      <Container maxW={"3xl"} centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
