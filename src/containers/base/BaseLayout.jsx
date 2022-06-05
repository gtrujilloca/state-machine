import { useMachine } from '@xstate/react'
import { Nav } from '../../components/nav/Nav';
import bookingMachine from '../../machines/bookingMachine';
import { StepsLayout } from '../step/StepsLayout';

import './baseLayout.css';

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log('nuestra maquina', state.value, state.context);

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send}/>
    </div>
  )
}
