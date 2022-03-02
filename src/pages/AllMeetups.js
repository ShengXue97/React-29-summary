import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-4c1f1-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setMeetups(meetups);
        })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return <div>
        All Meetup Page
        <MeetupList meetups={meetups} />
    </div>
}

export default AllMeetupsPage;