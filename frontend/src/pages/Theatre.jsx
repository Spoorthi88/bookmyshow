import { useNavigate } from "react-router-dom";

function Theatre() {
  const navigate = useNavigate();

  const theatres = [
    {
      id: 1,
      name: "PVR Cinemas",
      location: "Hyderabad",
    },
    {
      id: 2,
      name: "INOX",
      location: "Hyderabad",
    },
  ];

  const selectTheatre = (theatre) => {
    navigate("/seats", {
      state: { theatre },
    });
  };

  return (
    <div>
      <h1>Select Theatre</h1>

      {theatres.map((theatre) => (
        <div key={theatre.id}>
          <h2>{theatre.name}</h2>
          <p>{theatre.location}</p>

          <button onClick={() => selectTheatre(theatre)}>
            Select Theatre
          </button>
        </div>
      ))}
    </div>
  );
}

export default Theatre;
