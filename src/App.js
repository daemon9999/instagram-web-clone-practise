import routes from "routes";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "components/Loader";
function App() {
  const [redirect, setRedirect] = useState(false)
  const mainRoutes = useRoutes(routes)
  useEffect(() => {
    setTimeout(() => {
      setRedirect(true)
    }, 1000)
  }, [])

  if (!redirect){
    return <Loader/>
  }

  return (
    <>
      <Toaster position="top-right"/>
      {mainRoutes}
    </>
  )
  
}

export default App;
