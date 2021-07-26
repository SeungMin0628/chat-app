import React from 'react'
import styled from 'styled-components'
import { Container, Box, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

const MenuButton = styled(IconButton)`
  margin-right: 16px;
`

const Title = styled(Typography)`
  flex-grow: 1;
`

const DefaultTemplate: React.FC = ({children}) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <MenuButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </MenuButton>
        <Title variant="h6">
          News
        </Title>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Box>
        {children}
      </Box>
    </Container>
  </>
)

export default DefaultTemplate
