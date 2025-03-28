// import  { useState, useRef, useEffect } from "react";
// import "./AIBoxChat.scss"; // Import the CSS file for the loader
// import { handleAIResponse } from "../../services/AIChatBox.service";

// const AIBoxChat = () => {
//   const [messages, setMessages] = useState<{ type: "sent" | "received"; text: string }[]>([
//     { type: "received", text: "How can I help you?" },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false); // To show the loader while waiting for the response
//   const chatEndRef = useRef<HTMLDivElement | null>(null); // Reference to the last message
//   const [aiResponse, setAIResponse] = useState<string>("");
//   const scrollToBottom = () => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === "") return;

//     // Add the user's message to the chat
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { type: "sent", text: inputMessage },
//     ]);

//     const aiResponse = await handleAIResponse(inputMessage);
    
//     // Clear the input field
//     setInputMessage("");

//     // Show the loader
//     setIsLoading(true);

//     // Simulate an API call or response delay
//     setTimeout(() => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "received", text: aiResponse }, // Replace with the actual AI response
//       ]);
//       setIsLoading(false); // Hide the loader after the response
//     }, 2000);
//   };

//   // Scroll to the bottom whenever messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="page-container">
//       <div className="main-content">
//         <div className="container-fluid p-h-0">
//           <div className="chat chat-app row">
//             <div className="chat-content">
//               <div className="conversation">
//                 <div className="conversation-wrapper">
//                   <div className="conversation-header justify-content-between">
//                     <div className="media align-items-center">
//                       <a
//                         href="javascript:void(0);"
//                         className="chat-close m-r-20 d-md-none d-block text-dark font-size-18 m-t-5"
//                       >
//                         <i className="anticon anticon-left-circle"></i>
//                       </a>
//                       <div className="avatar avatar-image">
//                         <img src={"/static/images/icon-web.png"} alt="" />
//                       </div>
//                       <div className="p-l-15">
//                         <h6 className="m-b-0">Learn Ease Assistant</h6>
//                         <p className="m-b-0 text-muted font-size-13 m-b-0">
//                           <span className="badge badge-success badge-dot m-r-5"></span>
//                           <span>Online</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="conversation-body">
//                     {messages.map((message, index) => (
//                       <div
//                         key={index}
//                         className={`msg ${
//                           message.type === "sent" ? "msg-sent" : "msg-recipient"
//                         }`}
//                       >
//                         {message.type === "received" && (
//                           <div className="m-r-10">
//                             <div className="avatar avatar-image">
//                               <img src={"/static/images/icon-web.png"} alt="" />
//                             </div>
//                           </div>
//                         )}
//                         <div className="bubble">
//                           <div className="bubble-wrapper">
//                             <span>{message.text}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     {isLoading && (
//                       <div className="msg msg-recipient">
//                         <div className="m-r-10">
//                           <div className="avatar avatar-image">
//                             <img src={"/static/images/icon-web.png"} alt="" />
//                           </div>
//                         </div>
//                         <div className="bubble">
//                           <div className="bubble-wrapper">
//                             <div className="loader"></div> {/* Loader animation */}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {/* Reference to the end of the chat */}
//                     <div ref={chatEndRef}></div>
//                   </div>
//                   <div className="conversation-footer">
//                     <input
//                       className="chat-input"
//                       type="text"
//                       placeholder="Type a message..."
//                       value={inputMessage}
//                       onChange={(e) => setInputMessage(e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") handleSendMessage();
//                       }}
//                     />
//                     <ul className="list-inline d-flex align-items-center m-b-0">
//                       <li className="list-inline-item">
//                         <button
//                           className="btn btn-primary"
//                           onClick={handleSendMessage}
//                           disabled={isLoading} // Disable the button while waiting for the response
//                         >
//                           <span className="m-r-10">Send</span>
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIBoxChat;