import * as React from 'react'
import { Scoped } from 'kremling'

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
        console.log('this is myJson', myJson)
        this.setState({ people: myJson })
      });
  }

  render () {
    console.log('this is this.state', this.state)
    return (
      <Scoped css={css}>
      <div className="container">
        <h1>Who We Are</h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {this.state.people.map(person => (

            <div 
              className="image-container"
              style={{ position: 'relative', backgroundImage: `url(${person.avatar_url})`, cursor: 'pointer' }}
              onClick={() => window.location = 'github.com/users/'}
            >
              <div className="name-card">{person.login}</div>
            </div>
            ))}
          

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


  
`

export default AboutUs

