import './Careers.css';

import { ReactComponent as Image } from 'app/routes/Careers/requirements.svg';
import { ReactComponent as Image2 } from 'app/routes/Careers/loot.svg';

function Careers() {
  return (
    <>
      <div className="careers-header">
        <h2>
          Hey! It's your unique
          <br />
          chance to join our team!
        </h2>
      </div>

      <div className="careers-container">
        <div className="requirements mx-auto">
          <div className="flex-wide">
            <Image />
          </div>

          <div className="flex-narrow">
            <h3>SKILLS</h3>

            <ul>
              <li>Willingness to improve air quality in the world</li>
              <li>Ability to work in a team</li>
              <li>Readiness to take on new challenges</li>
              <li>Experience in the field of environmental protection</li>
            </ul>
          </div>

          <div className="flex-narrow">
            <h3>LOOT</h3>

            <ul>
              <li>Collaboration with a very funny and young team</li>
              <li>A real impact on the improvement of the air condition</li>
              <li>Fruity Thursdays</li>
              <li>Consoles, board games and table football in the office!</li>
            </ul>
          </div>

          <div className="flex-wide">
            <Image2 />
          </div>
        </div>

        <div className="currentOffers">
          <h3>CURRENT JOB OFFERS</h3>

          <h4>
            Currently we are not looking <br />
            for any new employees. :(
          </h4>
        </div>
      </div>
    </>
  );
}

export default Careers;
