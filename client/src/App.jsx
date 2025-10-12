import { RouterProvider } from "react-router-dom";
import router from "./routes"; 
import './App.css'
import { SessionProvider } from "./context/SessionContext";

function App() {
  

  return (
      <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 h-screen">
        <div className="flex justify-center items-center h-screen">
          <SessionProvider>
            <RouterProvider router={router} />
          </SessionProvider>
        </div>
      </div>
  )
} 

export default App
