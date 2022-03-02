import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoritesContext = useContext(FavoritesContext);
    const itemIsFavorite = favoritesContext.itemIsFavorite(props.meetup.id);
    function toggleFavoriteStatus() {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props.meetup.id);
        } else {
            favoritesContext.addFavorite(props.meetup);
        }
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.meetup.image} alt={props.meetup.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.meetup.address}</address>
                <p>{props.meetup.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatus}>{
                    itemIsFavorite ? 'Remove from favorites' : 'Add to favorites'
                }
                </button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;