import React from 'react'
import {Scoped} from 'kremling'
import FilteredForms from './filtered-forms.component.js'
import FillableForm from './fillable-form.component.js'

export default class FormList extends React.Component {
  state = {
    searchValue: '',
    showIncompleteForms: localStorage.getItem('show-incomplete-forms') === 'true',
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
        <div className="under-construction">
          <label>
            <input
              type="checkbox"
              checked={this.state.showIncompleteForms}
              onChange={this.updateShowIncomplete}
            />
            Show forms that are under construction and not full ready to use.
          </label>
        </div>
        <div className="forms-list">
          <FilteredForms searchValue={this.state.searchValue} showIncompleteForms={this.state.showIncompleteForms}>
            <FillableForm
              readyForUsers={true}
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
              name={__("app for coe no fees")}
              readyForUsers={false}
              keyworks="application certificate eligibility fees"
              shortDescription={__("app for coe no fees short descr")}
              appUrl={this.props.match.url + '/application-for-coe-no-fees'}
              downloadUrl="/static/forms/application-for-coe-no-fees/BCI_Third_Party_Release_Form_and_Application.pdf"
              previewUrls={[
                '/static/forms/application-for-coe-no-fees/BCI_Third_Party_Release_Form_and_Application-1.png',
                '/static/forms/application-for-coe-no-fees/BCI_Third_Party_Release_Form_and_Application-2.png',
              ]}
            />
            <FillableForm
              name={__("petition conviction name")}
              readyForUsers={false}
              keywords="petition conviction"
              shortDescription={__("petition conviction short descr")}
              appUrl={this.props.match.url + '/petition-for-conviction'}
              downloadUrl="https://www.utcourts.gov/howto/expunge/docs/01_Petition_to_Expunge_Records_Criminal-conviction.pdf"
              previewUrls={[
                '/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-1.png',
                '/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png',
              ]}
            />
            <FillableForm
              name={__("motion to waive fees name")}
              readyForUsers={false}
              keywords="waive fees motion"
              shortDescription={__("motion to waive fees short descr")}
              appUrl={this.props.match.url + '/motion-to-waive-fees'}
              downloadUrl="https://www.utcourts.gov/resources/forms/waiver/docs/01_Motion_and_Affidavit_to_Waive_Fees.pdf"
              previewUrls={[
                '/static/forms/motion-to-waive-fees/01_Motion_and_Affidavit_to_Waive_Fees-1.png',
                '/static/forms/motion-to-waive-fees/01_Motion_and_Affidavit_to_Waive_Fees-2.png',
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
  updateShowIncomplete = evt => {
    localStorage.setItem('show-incomplete-forms', evt.target.checked)
    this.setState({showIncompleteForms: evt.target.checked})
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

  & .under-construction {
    margin: 8rem 0;
  }
`

