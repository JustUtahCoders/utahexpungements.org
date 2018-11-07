import * as React from 'react'
import {Scoped} from 'kremling'
import {darkGray, rawNavbarHeight} from 'src/styleguide.js'
import {Link} from 'react-router-dom'

class About extends React.Component {
  state = {
    people: []
  }

  componentDidMount () {
    fetch('https://api.github.com/repos/UtahAccessToJustice/utahexpungements.org/contributors')
      .then((response) =>{
        return response.json();
      })
      .then((myJson)  => {
        //filter out joel hoelting and set to state
        this.setState({ people: myJson.filter(p => p.id !== 17229217) })
      });
  }

  render () {
    return (
      <Scoped css={css}>
        <div className="main-content card">
          <div className="container">
            <h1>About this website</h1>
            <p>
              We've built this tool to help people with the process of expunging their criminal records in Utah. Here you can <Link to="/app/expungements-overview">read about expungements</Link>, <Link to="/app/forms">fill out forms</Link>, and <Link to="/app/sign-up">create an account</Link> to save your data and manage your cases.
            </p>
            <p>
              This tool is a work-in-progress. There will be frequent changes and updates, and, occasionally, bugs.
            </p>
            <p>
              You can track all the latest updates to the project <a href="https://github.com/UtahAccessToJustice/utahexpungements.org/commits/master">here</a>.
            </p>
            <p>
              If you have an idea for a new feature or you run into a problem, please let us know by going <a href="https://github.com/UtahAccessToJustice/utahexpungements.org/issues">here</a> and clicking the green "New Issue" button on the right. We appreciate your help in making this tool as useful as it can be!
            </p>
            <h1>Who we are</h1>
            <p>
              We're a group of developers based in Utah who believe that legal processes should be accessible to everyone.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {this.state.people.map(person => (
                <a
                  key={person.id}
                  href={`http://github.com/${person.login}`}
                  className="image-container"
                  style={{ position: 'relative', backgroundImage: `url(${person.avatar_url})`, cursor: 'pointer' }}
                >
                  <div className="name-card">{person.login}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Scoped>
    )
  }
}

export const css = `
  & .image-container {
    margin-bottom: 10px;
    width: 33%;
    height: 250px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 290px;
  }

  & .name-card {
    display: none;
  }

  & .image-container:hover > .name-card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A1674A;
    color: white;
    opacity: 0.85;
  }

  & .main-content {
    width: 75vw;
    max-width: 936rem;
    margin: ${rawNavbarHeight + 32}rem auto;
    padding: 32rem;
    border: 1rem solid ${darkGray};
  }
`

export default About
