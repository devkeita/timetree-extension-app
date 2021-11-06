import React from "react";
import Link from "next/link";
import { Box, Button, Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import { RequiredLogin } from "../components/common/RequiredLogin";
import { userSelectors } from "../states/user";
import { Header } from "../components/common/Header";

const Home: NextPage = () => {
  const { data } = userSelectors.useUser();

  return (
    <RequiredLogin>
      <Header name={data?.name} imageUrl={data?.imageUrl} />
      <Box h="10vh" />
      <Container mt={5}>
        <Link href="/events/create" passHref>
          <Button
            colorScheme="green"
            leftIcon={<AddIcon w={6} h={6} />}
            width="100%"
            height="20"
          >
            予定を作成する
          </Button>
        </Link>
      </Container>
    </RequiredLogin>
  );
};

export default Home;
