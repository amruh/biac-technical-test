import Header from "../components/Header";

export default function AppLayouts({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
