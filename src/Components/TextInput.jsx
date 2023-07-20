import React, { useState } from "react";
import { Button, Textarea, useToast } from "@chakra-ui/react";

const TextInput = () => {
  const [text, setText] = useState("");

  const submitText = () => {
    console.log(text);
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
