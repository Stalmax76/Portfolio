import imgUrl from '../../images/about/02.jpg';
const About = () => {
  return (
    <div className="about" style={{ paddingTop: '100px', minHeight: '100%' }}>
      <div className="about__container">
        <h1>
          I'm
          <a>
            <span>Vasyl Stelmakh</span>
          </a>
        </h1>
        <div>
          <img src={imgUrl} alt="My Photo"></img>
        </div>
        <div>
          <h2>Occupation</h2>
          <div>
            <p>
              I work as a service driver in international company, and I
              continue to study web dewelopment of computer technologies based
              on various franeworks and libraries.
            </p>
            <p>
              {' '}
              I also study at an English language academy, to I'm also learning
              English.
            </p>
          </div>
        </div>
        <div>
          <h2>Language</h2>
          <p>
            My native Language is Ukrainian. I also speak Russian well, and a
            little worse at Polish and Bielarusian. I'm also continue to
            learning English
          </p>
        </div>
        <div>
          <ul>
            <h2> Interests</h2>
            <li>
              Music:
              <p>
                I am professional musician, artist and orchestra conductor. I
                can play the accordeon. I like folk and jazz instrumental music,
                also classical and popular music{' '}
              </p>
            </li>
            <li>
              Films:
              <p>
                In my free time, i like to watch an interesting family film with
                different life situations
              </p>
            </li>
            <li>
              TV<p>I don't watch of TV</p>
            </li>
            <li>
              Sports:{' '}
              <p>
                {' '}
                I don't watch footbal, but I play table tenis once a week, and I
                also like billards
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
