import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Layout from '../components/Layout';
import MyResume from '../components/pdf/MyResume';

class PDF extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  renderSpinner = () => <i className="fas fa-spinner spinner rotate"></i>;

  renderPDFViewer = () => (
    <div className="pdf-view">
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <MyResume />
      </PDFViewer>
    </div>
  );

  render() {
    return (
      <Layout isPDF>
        <div className="pdf-page">
          {this.state.loading ? this.renderSpinner() : this.renderPDFViewer()}
        </div>
      </Layout>
    );
  }
}

export default PDF;
