import "../styles/globals.css";
import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { NavbarSimple } from '../components/NavBar/NavBar';
import MainContent from '../components/MainContent';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
          <AppShell
              styles={{
                main: {
                  background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
              }}
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              navbar={
                <NavbarSimple />
              }
              // aside={
              //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              //       <Text>Application sidebar</Text>
              //     </Aside>
              //   </MediaQuery>
              // }
              // footer={
              //   <Footer height={60} p="md">
              //     Application footer
              //   </Footer>
              // }
              // header={
              //   <Header height={{ base: 50, md: 70 }} p="md">
              //     <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              //       <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              //         <Burger
              //           opened={opened}
              //           onClick={() => setOpened((o) => !o)}
              //           size="sm"
              //           color={theme.colors.gray[6]}
              //           mr="xl"
              //         />
              //       </MediaQuery>

              //       <Text>Application header</Text>
              //     </div>
              //   </Header>
              // }
            >
              <Component {...pageProps} />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
