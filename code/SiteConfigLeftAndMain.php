<?php

namespace SilverStripe\SiteConfig;

use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Control\Director;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\Form;
use SilverStripe\ORM\ValidationException;
use SilverStripe\ORM\ArrayList;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Requirements;
use SilverStripe\Control\Controller;

class SiteConfigLeftAndMain extends LeftAndMain
{
	/**
	 * @var string
	 */
	private static $url_segment = 'settings';

	/**
	 * @var string
	 */
	private static $url_rule = '/$Action/$ID/$OtherID';

	/**
	 * @var int
	 */
	private static $menu_priority = -1;

	/**
	 * @var string
	 */
	private static $menu_title = 'Settings';

	/**
	 * @var string
	 */
	private static $tree_class = 'SilverStripe\\SiteConfig\\SiteConfig';

	/**
	 * @var array
	 */
	private static $required_permission_codes = array('EDIT_SITECONFIG');

    public function init()
    {
        parent::init();

        Requirements::add_i18n_javascript('siteconfig/client/lang', false, true);
        Requirements::javascript("siteconfig/client/dist/js/bundle.js");
    }

    public function getClientConfig()
    {
        return array_merge( parent::getClientConfig(), [
            'reactRouter' => true,
            'form' => [
                'EditForm' => [
                    'schemaUrl' => $this->Link('schema/EditForm')
                ],
            ],
        ]);
    }

	/**
	 * @param null $id Not used.
	 * @param null $fields Not used.
	 *
	 * @return Form
	 */
    public function getEditForm($id = null, $fields = null)
    {
		$siteConfig = SiteConfig::current_site_config();
		$fields = $siteConfig->getCMSFields();

		// Tell the CMS what URL the preview should show
		$home = Director::absoluteBaseURL();
		$fields->push(new HiddenField('PreviewURL', 'Preview URL', $home));

		// Added in-line to the form, but plucked into different view by LeftAndMain.Preview.js upon load
        // TODO Fix navigator template
        /** @skipUpgrade */
//		$fields->push($navField = new LiteralField('SilverStripeNavigator', $this->getSilverStripeNavigator()));
//		$navField->setAllowHTML(true);

		// Retrieve validator, if one has been setup (e.g. via data extensions).
		if ($siteConfig->hasMethod("getCMSValidator")) {
			$validator = $siteConfig->getCMSValidator();
		} else {
			$validator = null;
		}

		$actions = $siteConfig->getCMSActions();

		/** @var Form $form */
		$form = Form::create($this, 'EditForm', $fields, $actions, $validator);
		$form->loadDataFrom($siteConfig);


        // Configure form to respond to validation errors with form schema
        // if requested via react.
        $form->setValidationResponseCallback(function() use ($form, $siteConfig) {
            $schemaId = Controller::join_links($this->Link('schema/EditForm'), $siteConfig->exists() ? $siteConfig->ID : '');
            return $this->getSchemaResponse($form, $schemaId);
        });

		$this->extend('updateEditForm', $form);

		return $form;
	}


    public function Breadcrumbs($unlinked = false)
    {
		return new ArrayList(array(
			new ArrayData(array(
				'Title' => static::menu_title(),
				'Link' => $this->Link()
			))
		));
	}
}
