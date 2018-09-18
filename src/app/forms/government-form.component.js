import React from 'react'
import DataContainer from '../forms/data-container.component.js'
import AppContext from '../../app-context.component.js'
import {Scoped} from 'kremling'
import {darkGray, lightGray} from 'src/styleguide.js'

export default class GovernmentForm extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <DataContainer context={context}>
            {props => (
              <Scoped css={css}>
                <div className="header">
                  <div className="expungement-form">
                    Expungement Form:
                  </div>
                  <div>
                    {this.props.name}
                  </div>
                </div>
                <this.props.WebForm {...props} />
                <this.props.PdfForm {...props} />
              </Scoped>
            )}
          </DataContainer>
        }
      </AppContext.Consumer>
    )
  }
}

const css = `
  & .header {
    font-size: 32rem;
    margin: -32rem 0 0 -32rem;
    padding: 12rem 0 12rem 12rem;
    border-bottom: 1rem solid ${lightGray};
    width: calc(100% + 64rem);
  }

  & .expungement-form {
    color: ${darkGray};
    font-size: 24rem;
  }

  & .form-name {
    font-size: 32rem;
  }
`
