import MainFrame from "./MainFrame";
import NavSide from "./Nav/NavSide";
import NavTop from "./Nav/NavTop";

const PageFrame = () => {
  return(
    <div className="grid grid-cols-[auto_1fr]">
      <NavTop />
      <NavSide />
      <MainFrame />
    </div>
  )
}

export default PageFrame;