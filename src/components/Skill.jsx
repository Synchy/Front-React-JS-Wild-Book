function Skill({ id, name }) {
    return (
        <div key={id}>
            <li>
                {name}
                <span className="votes"> 66 </span>
            </li>
        </div>
    );
}

export default Skill;