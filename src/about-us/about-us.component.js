import * as React from 'react'
import {Scoped} from 'kremling'
import {darkGray, rawNavbarHeight} from 'src/styleguide.js'

class AboutUs extends React.Component {
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
            <h1>Who We Are</h1>
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

export default AboutUs

