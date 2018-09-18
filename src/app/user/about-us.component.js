import * as React from 'react'

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
      <div><h1>Who We Are</h1>
      
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          {this.state.people.map(person => <div><img src={person.avatar_url} style={{ width: '60%' }} /></div>)}

        </div>

      </div>
    )
  }
}

export default AboutUs
