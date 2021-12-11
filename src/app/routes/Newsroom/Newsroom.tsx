import './Newsroom.css';
import NewsroomArticle from './NewsroomArticle';

function Newsroom() {
  return (
    <div className="newsroom">
      <h2 className="newsroom-header">
        Let's keep up to date! <br/>
        Follow our news room.
      </h2>
      <NewsroomArticle />
      <NewsroomArticle />
      <NewsroomArticle />
      <NewsroomArticle />
    </div>
  );
}

export default Newsroom;
