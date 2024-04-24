import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function Product() {
    const { id } = useParams()
    return (
        <>
            <h3><Link to={`products/${id}`}> item{id}</Link> </h3>
        </>
    )
}