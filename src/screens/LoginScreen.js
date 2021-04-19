import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import { ReactComponent as Loader } from '../assets/spiner-white.svg'
import { Button } from '../styles/buttons'
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  ContentContainer,
  LogoContainer,
  LogoLink,
  MainText,
  Image,
  Form,
  Heading,
  Input,
  Label,
  Wraper,
  Message,
  StyledLink,
  StyledParagraph,
  LabelWraper,
} from '../styles/userForms'

export default function LoginScreen({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const { loading, error, userAuth } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userAuth) {
      history.push('/')
    }
  }, [history, userAuth])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <MainContainer>
      <LeftContainer>
        <ContentContainer>
          <LogoContainer>
            <LogoLink to='/'>Parikaar</LogoLink>
          </LogoContainer>
          <MainText>Discover the world’s top Recipes & Cooking Chefs.</MainText>
          <Image src='/img/hart2.jpg' />
        </ContentContainer>
      </LeftContainer>
      <RightContainer>
        <ContentContainer>
          {loading ? (
            <Loader />
          ) : (
            <Form onSubmit={handleSubmit}>
              <Heading>Log in to Parikaar</Heading>
              <Label>Email Address</Label>
              <Input
                white
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <LabelWraper>
                <Label>Password</Label>
                <StyledLink to='/reset'>Forgot password?</StyledLink>
              </LabelWraper>
              <Input
                white
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Wraper>
                {error && <Message>{error}</Message>}
                <Button>Log In</Button>
                <StyledParagraph>
                  Need an account?{' '}
                  <StyledLink to='/register'>Sign Up</StyledLink>
                </StyledParagraph>
              </Wraper>
            </Form>
          )}
        </ContentContainer>
      </RightContainer>
    </MainContainer>
  )
}
