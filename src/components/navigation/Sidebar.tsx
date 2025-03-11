import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import classes from './Sidebar.module.css'
import { Button, Center, Stack, useMantineColorScheme } from '@mantine/core'
import { IconArrowsJoin, IconMoon, IconPlus, IconSun } from '@tabler/icons-react'

function Sidebar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <nav className={classes.navbar}>
      <div className='nav-items'>
        <Center>
          <Button
            className={classes.link}
            variant='subtle'
            radius={100}
            onClick={() => { }}
          >
            <IconPlus radius={100} />
          </Button>
        </Center>

        <Center>
          <Button
            className={classes.link}
            variant='subtle'
            radius={100}
            onClick={() => { }}
          >
            <IconArrowsJoin radius={100} />
          </Button>
        </Center>

        <Stack justify='center' align='center'>
          <Button
            className={classes.link}
            variant='subtle'
            onClick={toggleColorScheme}
            radius={100}
            p={0}
          >
            {colorScheme == 'dark' ? (<IconMoon radius={100} />) : (<IconSun radius={100} />)}
          </Button>
        </Stack>
      </div>
    </nav>
  )
}

export default Sidebar