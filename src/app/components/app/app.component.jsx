import React from 'react';
import FileSaver from 'file-saver';

import { CompaniesService } from '../../data/companies/companies.service';
import { RadioTabs } from '../form/radio-tabs/radio-tabs.component';
import { VList } from '../vlist/vlist.component';

import './app.styles.scss';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: [{
        label: 'ID',
        value: 'id',
      }],
      sortBy: 'id',
    };
  }

  onHandleSort(value) {
  }

  onHandleDownload() {
    try {
      FileSaver.saveAs(new Blob([JSON.stringify(this.state.data, null, '    ')], {
        type: 'text/plain;charset=utf-8',
      }), `data by ${ this.state.sortBy }.json`);
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('The file could not be downloaded. Please, make sure your browser supports Blob');
    }
  }

  render() {
    const { options, sortBy, data } = this.state;

    if (!data) {
      return <main className="app__base app--is-loading">Loading...</main>;
    }

    return (
      <main className="app__base">
        <header className="app__header">
          <RadioTabs name="sortBy" />
          <button type="button" className="app__download">DOWNLOAD</button>
        </header>

        <VList data={ data } sortBy={ sortBy } />
      </main>
    );
  }

}
