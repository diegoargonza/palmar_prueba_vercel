

export const metadata = {
  title: "Inicio",
  description: "Pagina principal del sitio",
};
export default function PageLayout({ children}) {

  return (
    <div >
{/* 
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" /> */}
      <main className="wrapper">{children}</main>
    </div>
  );
}