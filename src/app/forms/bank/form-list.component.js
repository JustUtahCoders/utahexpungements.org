import React from 'react'
import {Scoped} from 'kremling'
import FilteredForms from './filtered-forms.component.js'
import FillableForm from './fillable-form.component.js'

export default class FormList extends React.Component {
  state = {
    searchValue: '',
  }
  render() {
    return (
      <Scoped css={css}>
        <h1>
          Form bank
        </h1>
        <div>
          <p>
            Welcome to the Form Bank! Here are all of the forms that you can fill out with utahexpungements.org.
          </p>
          <p>
            Once you fill out one form, all relevant data from that form flows to all the other forms you fill out,
            so that you don't have to type in the same info more than once.
          </p>
        </div>
        <input type="text" value={this.state.searchValue} onChange={this.updateSearch} placeholder="Search forms" />
        <div className="forms-list">
          <FilteredForms searchValue={this.state.searchValue}>
            <FillableForm
              name="Application for Expungement of Adult Criminal History"
              keywords="application certificate eligibility"
              shortDescription={__("app for coe short descr")}
              appUrl={this.props.match.url + '/adult-coe-form'}
              downloadUrl="https://bci.utah.gov/wp-content/uploads/sites/15/2018/07/Exp-App-7-2018.pdf"
              previewUrls={[
                '/static/forms/application-for-coe/Exp-App-7-2018-1.png',
                '/static/forms/application-for-coe/Exp-App-7-2018-2.png',
              ]}
            />
            <FillableForm
              name={__("petition conviction name")}
              keywords="petition conviction"
              shortDescription={__("petition conviction short descr")}
              appUrl={this.props.match.url + '/petition-for-conviction'}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/01_Petition_to_Expunge_Records_Criminal-conviction.pdf"
              previewUrls={[
                '/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-1.png',
                '/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png',
              ]}
            />
          </FilteredForms>
        </div>
      </Scoped>
    )
  }
  updateSearch = evt => {
    this.setState({
      searchValue: evt.target.value,
    })
  }
}

const css = `
  & .forms-list {
    margin-top: 24rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: -32rem;
    margin-bottom: -32rem;
  }
`

