import { BoardProvider } from "@/contexts/BoardContext";
import MainFrame from "./MainFrame";
import NavSide from "./Nav/NavSide";
import NavTop from "./Nav/NavTop";



const PageFrame = () => {

  return(
    <div className="grid grid-cols-[auto_1fr]">
      <BoardProvider>
        <NavTop />
        <NavSide />
        <MainFrame />
      </BoardProvider>
    </div>
  )
}

export default PageFrame;