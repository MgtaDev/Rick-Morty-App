import Card from "../Card/Card";
import { connect } from "react-redux";

const Favorites = ({myFavorites}) => {
    console.log(myFavorites);
    return (
        <div>
            <h1 style={{color: "#7f7f7f"}}>Aqui toy</h1>
      {
          myFavorites?.map((fav) => {
              console.log(fav);
              return (
                  <Card
                  key={fav.id}
                  id={fav.id}
                  name={fav.name}
                  image={fav.image}/>
                  );
                })
            }
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(
    mapStateToProps,
     null
     )(Favorites);
