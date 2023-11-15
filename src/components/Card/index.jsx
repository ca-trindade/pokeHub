import PropTypes from "prop-types";

export const Card = ({ namePokemon }) => {
  
  console.log(namePokemon);
  return (
    <>
      <div>
        {/* {namePokemon.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <img src="" alt="photo" />
            <h2>abilities abilities</h2>
            <h2>types types</h2>
          </div>
        ))} */}
      </div>
    </>
  );
};



Card.propTypes = {
  namePokemon: PropTypes.object.isRequired,
};
