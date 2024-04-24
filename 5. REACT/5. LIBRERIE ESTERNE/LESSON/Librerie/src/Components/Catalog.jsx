import { Link, Outlet } from "react-router-dom";

export function Catalog() {
    return (
        <>
            <div>
                <h2>My Products</h2>
                
                <ul>
                    <li><Link to="/product/1">Product 1</Link></li>
                    <li><Link to="/product/2">Product 2</Link></li>
                    <li><Link to="/product/3">Product 3</Link></li>
                </ul>
                <Link to="/product">Back</Link>

                <hr />
                
                <Outlet/>
            </div>
        </>
    );
}
