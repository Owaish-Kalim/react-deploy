function Show(props) {

    var date = new Date(props.data.lastUpdate);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dt = date.getDate();

    if (dt < 10) {
    dt = '0' + dt;
    }
    if (month < 10) {
    month = '0' + month;
    }

    return (
        <div>
            <ul> Confirmed : {props.data.confirmed} </ul>
            <ul> Deaths : {props.data.deaths} </ul>
            <ul> Critical : {props.data.critical}</ul>
            <ul> Recovered : {props.data.recovered}</ul>
            <ul> Last Update : {year+'-' + month + '-'+dt} </ul>
            {/* <ul> Last Change : {props.data.lastChange} </ul> */}
        </div>
    )   
}

export default Show