import { ReactNode, useContext } from "react";
import { AppFooter } from "../atoms/AppFooter/AppFooter";
import { AppNavbar } from "../atoms/AppNavbar/AppNavbar";
import { ModalContext } from "../../context/ModalContext";
import { Link } from "react-router-dom";
import { AppButton } from "../atoms/AppButton/AppButton";
interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  const { modalState, modalOff, modalName } = useContext(ModalContext);

  return (
    <div>
      <AppNavbar />
      <main className="min-h-screen relative">
        {modalState && (
          <>
        {modalName === 'list' &&  <div className="bg-light h-[40vh] overflow-y-auto custom-scrollbar ">
              <div className="md:px-52 md:py-3">
                <Link
                  to="/award/123"
                  onClick={modalOff}
                  className="p-3 bg-white block"
                >
                  <AppButton
                    appearance="text"
                    title="Link 1"
                    onClick={() => {}}
                  />
                  <hr className="my-1" />
                </Link>
                <Link
                  to="/award/123"
                  onClick={modalOff}
                  className="p-3 bg-white block"
                >
                  <AppButton
                    appearance="text"
                    title="Link 2"
                    onClick={() => {}}
                  />{" "}
                  <hr className="my-1" />
                </Link>
                <Link
                  to="/award/123"
                  onClick={modalOff}
                  className="p-3 bg-white block"
                >
                  <AppButton
                    appearance="text"
                    title="Link 3"
                    onClick={() => {}}
                  />{" "}
                  <hr className="my-1" />
                </Link>
                <Link
                  to="/award/123"
                  onClick={modalOff}
                  className="p-3 bg-white block"
                >
                  <AppButton
                    appearance="text"
                    title="Link 4"
                    onClick={() => {}}
                  />{" "}
                  <hr className="my-1" />
                </Link>
              </div>
            </div>}
            <div
              onClick={modalOff}
              style={{
                zIndex: 9,
                height: "100%",
                display: "block",
                opacity: 0.6,
                position: "absolute",
                background: "black",
                width: "100%",
              }}
            ></div>
          </>
        )}

        {children}
      </main>
      <AppFooter />
    </div>
  );
};
