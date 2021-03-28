
import {ChatEngine} from 'react-chat-engine';
import LogIn from './login';



const projectID= 'c23001ad-d5aa-40f6-80e0-20db69a61842'

const LoggedIn = () => {
    if(!localStorage.getItem('username')) return <LogIn/>;
  return (
    <>
      <ChatEngine
        height="90vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        hideUI={false}
       // renderChatList={(chatAppState) => {}}
        //Event Hooks Here
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
      </>
  );
}

export default LoggedIn;