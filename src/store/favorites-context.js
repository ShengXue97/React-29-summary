import { createContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesContextProvider(props) {
    const [favorites, setFavorites] = useState([]);
    const [totalFavorites, setTotalFavorites] = useState(0);
    const addFavorite = (meetup) => {
        setFavorites((prevFavorites) => {
            return [...prevFavorites, meetup];
        });
        setTotalFavorites(totalFavorites + 1);
    }
    const removeFavorite = (meetupId) => {
        setFavorites(favorites.filter(fav => fav.id !== meetupId));
        setTotalFavorites(totalFavorites - 1);
    }

    const itemIsFavorite = (meetupId) => {
        return favorites.some(meetup => meetup.id === meetupId);
    }
    return (
        <FavoritesContext.Provider value={{
            favorites,
            totalFavorites,
            addFavorite,
            removeFavorite,
            itemIsFavorite
        }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;