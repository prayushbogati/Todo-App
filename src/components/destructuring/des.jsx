import cars from "./cars";
function Des() {
    const [honda, tesla] = cars;
    const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
    const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
    const {coloursByPopularity : [teslaTopColor]} = tesla;
    const {coloursByPopularity : [hondaTopColor]} = honda;
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Top Speed</th>
                    <th>Top Colour</th>
                </tr>
                <tr>
                    <td>{tesla.model}</td>
                    <td>{teslaTopSpeed}</td>
                    <td>{teslaTopColor}</td>
                </tr>
                <tr>
                    <td>{honda.model}</td>
                    <td>{hondaTopSpeed}</td>
                    <td>{hondaTopColor}</td>
                </tr>
            </table>
        </div>
    )
}
export default Des;