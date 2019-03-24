/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojbutton', 'ojs/ojdatetimepicker'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;
      
            self.formats = ko.observableArray(["english"]);
            self.date = ko.observable();
            self.greeting = ko.observable("Good Morning");
            self.localeDate = ko.observable();
            self.localeDate(oj.Translations.getTranslatedString('date')); 
            self.localeGreeting = ko.observable();
            
            self.localeGreeting(oj.Translations.getTranslatedString('greeting')); 
            self.setLang = function (data) {
                var newLang = '';
                switch (data) {
                    case 'Arabic':
                        newLang = 'ar-EG';
                        self.formats(["arabic"]);
                        break;
                    case 'Czech':
                        newLang = 'cs-CZ';
                        self.formats(["czech"]);
                        break;
                    case 'French':
                        newLang = 'fr-FR';
                        self.formats(["french"]);
                        break;
                    default:
                        newLang = 'en-US';
                        self.formats(["english"]);
                }
                oj.Config.setLocale(newLang,
                    function () {
                        $('html').attr('lang', newLang);
                        if (newLang === 'ar-EG') {
                            $('html').attr('dir', 'rtl');
                        } else {
                            $('html').attr('dir', 'ltr');
                        }
                        self.localeDate(oj.Translations.getTranslatedString('date')); 
                        self.localeGreeting(oj.Translations.getTranslatedString('greeting')); 
                        $('#dateInput').ojInputDateTime('refresh');
                    }
                );
            };
        
        
      
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
