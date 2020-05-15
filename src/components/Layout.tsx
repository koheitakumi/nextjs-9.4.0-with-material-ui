import React from "react";
import Head from "next/head";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(3, 6, 3, 6),
    },
  })
);

interface Props extends React.Attributes {
  className?: string;
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md" className={classes.root}>
        <Box my={4}>{children}</Box>
      </Container>
    </>
  );
}
