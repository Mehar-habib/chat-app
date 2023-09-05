import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ChatContext = createContext();
function ChatProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      Navigate("/");
    }
  }, []);
  return (
    <>
      <ChatContext.Provider value={{ user, setUser }}>
        {children}
      </ChatContext.Provider>
    </>
  );
}
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;

// import { createContext, useContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// const ChatContext = createContext();

// const ChatProvider = ({ children }) => {
//   const [user, setUser] = useState();
//   // const navigate = useNavigate();
//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     setUser(userInfo);

//     if (!userInfo) {
//       Navigate("/");
//     }
//   }, [navigate]);

//   return (
//     <ChatContext.Provider value={{ user, setUser }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

// const ChatState = () => {
//   return useContext(ChatContext);
// };
// export { ChatProvider, ChatState };
