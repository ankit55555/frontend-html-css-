import { useEffect } from "react"
import useData from "../utils/useData"

export default function ShowPlayer() {
   const [data] = useData()
   useEffect(()=>{
        console.log(data)
   }, [data])
    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Country</th>
                <th>Total Matches Played</th>
            </thead>

            <tbody> {
                data.map(player => (

                    <tr>
                        <td>{
                            player.id
                        }</td>
                        <td>{
                            player.name
                        }</td>
                        <td>{
                            player.country
                        }</td>
                        <td>{
                            player.matchesPlayed
                        }</td>
                    </tr>
                ))
            } </tbody>
        </table>

    )
}
