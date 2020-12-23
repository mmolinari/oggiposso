import React from "react"

function RegionSelector(props) {
    const { regions, state, dispatch } = props;

    const handleChange = (event) => {
        dispatch({type: 'region', 'region': event.target.value});
    }

    const items = []
    items.push(<option key="0" value="0">Scegli una regione</option>)
    for (const [key, value] of Object.entries(regions)) {
        items.push(<option key={key} value={key}>{value}</option>)
    }

    return (
        <select value={state.region} onChange={handleChange}>
            {items}
        </select>
    );
}

export default RegionSelector
