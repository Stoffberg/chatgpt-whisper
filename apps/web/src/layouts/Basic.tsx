import Navbar from "../components/Navbar";
import SeoHead from "../components/SeoHead";

interface BasicLayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
}

const BasicLayout = ({ children, mainClassName }: BasicLayoutProps) => {
  return (
    <>
      <SeoHead />
      <main className={"min-h-screen bg-main-dark tracking-normal" + (mainClassName ? " " + mainClassName : "")}>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default BasicLayout;
