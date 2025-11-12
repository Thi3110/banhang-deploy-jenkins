import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {SnackbarProvider} from 'notistack'
// BƯỚC 1: Import component Chatbox AI (Đã hoàn thành)
import AIChatbox from "./components/AIChatbox"; 

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}> 
        {/* Component chính của ứng dụng */}
        <App /> 
        
        {/* BƯỚC 2: Nhúng Chatbox vào DOM với vị trí cố định */}
        <div style={{ 
            position: 'fixed', 
            bottom: 20, 
            right: 20, 
            width: 350, // Kích thước hộp chat
            zIndex: 9999 
        }}>
            <AIChatbox />
        </div>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
