import React, { useState } from "react";
import { Button, Textarea, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter text to extract keywords",
        status: "error",
        duration: 4000,
        isClosable: false,
        position: "top",
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        bg={"blue.300"}
        color={"white"}
        padding={4}
        marginTop={6}
        height={200}
        width={"100%"}
        value={text}
        onChange={(ev) => {
          setText(ev.target.value);
        }}
      />
      <Button
        bg={"blue.500"}
        color={"white"}
        marginTop={4}
        width={"100%"}
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
