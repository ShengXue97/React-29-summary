import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const navigate = useNavigate();
    function onAddMeetup(meetupData) {
        console.log(meetupData);
        fetch('https://react-getting-started-4c1f1-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
}

export default NewMeetupPage;