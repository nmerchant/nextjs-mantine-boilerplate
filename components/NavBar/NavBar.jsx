import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons';
import { UserButton } from '../UserButton/UserButton';
import { LinksGroup } from '../NavBarLinksGroup/NavBarLinksGroup';
import useStyles from './NavBar.styles';

const navigation = [
  { label: 'Admin', icon: IconGauge, link: '/admin' },
  {
    label: 'Events',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Search Events', link: '/events/search' },
      { label: 'My Events', link: '/events/mine' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

// const useStyles = createStyles((theme) => ({
//   navbar: {
//     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
//     paddingBottom: 0,
//   },

//   header: {
//     padding: theme.spacing.md,
//     paddingTop: 0,
//     marginLeft: -theme.spacing.md,
//     marginRight: -theme.spacing.md,
//     color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//     borderBottom: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,
//   },

//   links: {
//     marginLeft: -theme.spacing.md,
//     marginRight: -theme.spacing.md,
//   },

//   linksInner: {
//     paddingTop: theme.spacing.xl,
//     paddingBottom: theme.spacing.xl,
//   },

//   footer: {
//     marginLeft: -theme.spacing.md,
//     marginRight: -theme.spacing.md,
//     borderTop: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,
//   },
// }));

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const links = navigation.map((item) => <LinksGroup {...item} key={item.label} />);

  console.log(links);

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
            <a className={cx(classes.link)} href="/">phozee.io</a>
            <ColorSchemeToggle />
            {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}