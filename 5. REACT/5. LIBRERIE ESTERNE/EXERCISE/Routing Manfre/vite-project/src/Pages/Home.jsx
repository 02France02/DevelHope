import {Outlet} from "react-router-dom"
export function Home() {
    return (
        <>
        <h1>CONTATTI</h1>
        {/* Prende gli elementi nidificati */}
        <Outlet/>
        </>
    )
}