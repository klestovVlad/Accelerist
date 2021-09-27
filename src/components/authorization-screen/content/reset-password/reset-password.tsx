import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../../../../ui/buttons/button'
import { InputForm } from './input-form/input-form'
import { ResentForm } from './resend-form/resend-form'
import { ButtonContainer, Content, H1 } from './styles'

export const ResetPassword: FC = () => {
  const [seconds, setSeconds] = useState(-1)
  const history = useHistory()

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    }
  })

  return (
    <Content>
      <H1>Password Reset</H1>
      {seconds === -1 && <InputForm setSeconds={setSeconds} />}
      {seconds !== -1 && <ResentForm seconds={seconds} setSeconds={setSeconds} />}
      <ButtonContainer>
        <Button
          label="Return to Login"
          onClick={() => history.push('/login')}
          colorScheme="darkTransparent"
          type="button"
          isLoading={false}
          validate
        />
      </ButtonContainer>
    </Content>
  )
}
