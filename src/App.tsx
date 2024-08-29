import { useRoutes } from "react-router-dom";
import { routerConfig } from "./router";
import useInitModal from "./hooks/useInitModal";
import ModalRoot, { ModalContext } from "./modals/ModalRoot";
import { useInitGlobalRouter } from "./hooks/useGlobalRouter";

const App = () => {
  // global navigater
  useInitGlobalRouter();

  const element = useRoutes(routerConfig);

  const { modalRef, globalModal } = useInitModal();

  return (
    <ModalContext.Provider value={globalModal}>
      <ModalRoot ref={modalRef} />
      {element}
    </ModalContext.Provider>
  );
};

export default App;
