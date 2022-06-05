import { Passengers } from '../../components/passengers/Passengers';
import { Search } from '../../components/search/Search';
import { Tickets } from '../../components/tickets/Tickets';
import { Welcome } from '../../components/welcome/Welcome';
import './stepsLayout.css';

export const StepsLayout = ({ state, send }) => {

  const renderContent = () => {
    if(state.matches('initial')) return <Welcome send={send}/>;
    if(state.matches('search')) return <Search state={state} send={send}/>;
    if(state.matches('tickets')) return <Tickets send={send} context={state.context}/>;
    if(state.matches('passengers')) return <Passengers state={state} send={send}/>;
    return null;
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
};