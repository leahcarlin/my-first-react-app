export default function Pokemon(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle">
          {props.awesome ? "An Awesome Pokemon" : "Not Awesome"}
        </h6>
        <p>
          Weight: {props.weight} kg <br />
          Terrifying: {props.terrifying ? "very" : "nah, loveable"}
          <br />
          {props.abilities.length} Abilities:
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability, index) => {
          return (
            <li key={index} className="list-group-item">
              {ability}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
