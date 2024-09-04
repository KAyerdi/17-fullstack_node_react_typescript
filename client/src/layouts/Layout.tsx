import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <header className="bg-slate-500">
        <div>
            <h1 className="text-xl font-extrabold text-white">
            Administrador de Productos
            </h1>
        </div>
      </header>
      <Outlet />
    </>
  )
}
