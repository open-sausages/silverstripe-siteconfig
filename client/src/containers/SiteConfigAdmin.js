import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import SilverStripeComponent from 'lib/SilverStripeComponent';
import FormBuilder from 'components/FormBuilder/FormBuilder';
import Toolbar from 'components/Toolbar/Toolbar';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

class SiteConfigAdmin extends SilverStripeComponent {

  render() {
    const formBuilderProps = {
      schemaUrl: this.props.sectionConfig.form.EditForm.schemaUrl,
    };
    // TODO Dynamic breadcrumbs
    const breadcrumbs = [
      {
        text: 'SiteConfig',
        href: '#',
      },
    ];
    return (
      <div className="cms-content__inner no-preview">
        <div className="cms-content__left collapse in">
          <Toolbar>
            <Breadcrumb multiline crumbs={breadcrumbs} />
          </Toolbar>
          <div className="panel panel--padded panel--scrollable panel--single-toolbar">
            <FormBuilder {...formBuilderProps} />
          </div>
        </div>
      </div>
    );
  }

}

SiteConfigAdmin.propTypes = {
  sectionConfig: React.PropTypes.object.isRequired,
  securityId: React.PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const sectionConfig = state.config.sections['SilverStripe\\SiteConfig\\SiteConfigLeftAndMain'];
  return {
    sectionConfig,
    securityId: state.config.SecurityID,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SiteConfigAdmin));
