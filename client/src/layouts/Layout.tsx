import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <header className="bg-slate-800">
        <div>
          <h1 className="text-4xl font-extrabold text-white">
            Administrador de Productos
          </h1>
        </div>
      </header>
      <Outlet />
    </>
  )
}
