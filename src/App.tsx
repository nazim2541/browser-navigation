
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavigator from "./AppNavigator";
import { NavigationProvider } from "./context/BackButtonNavigationContext";

const App = () => {
  return (
    <NavigationProvider>
     <AppNavigator/>
    </NavigationProvider>
  );
};

export default App;
