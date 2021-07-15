import { Box } from "@chakra-ui/react";
import React from "react";
import CommentsCard from "../components/CommentsCard";
import Header from "../components/Header";

export default function Comments() {
  return (
    <div>
      <Header title="Comentários" />
      <Box m={20}>
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-U016AC76H3K-5cb3952c982a-512"
          text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-U015WC2N0UD-1f443cee1c8f-512"
          text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-U016ABV368Z-6fbf8b9c27a5-512"
          text="Nulla congue ultrices leo, et feugiat nunc ultricies non. Aliquam in facilisis nibh, ac suscipit augue. Aenean blandit purus urna. Sed ut consectetur magna,"
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-UV69SG9N1-dcc767dd8647-512"
          text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-UUW6LLF41-b88f9e6cf661-512"
          text="Nulla congue ultrices leo, et feugiat nunc ultricies non. Aliquam in facilisis nibh, ac suscipit augue. Aenean blandit purus urna. Sed ut consectetur magna,"
        />
      </Box>
    </div>
  );
}
