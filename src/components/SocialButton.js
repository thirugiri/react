import React from 'react'
import SocialLogin from 'react-social-login'
import { Button, Icon, Input, Menu, Modal, Header } from 'semantic-ui-react'
 
const Buttonvar = ({ children, triggerLogin, ...props }) => (
  <Button color='facebook' onClick={triggerLogin} {...props}>
    { children }
  </Button>
)
 
export default SocialLogin(Buttonvar)