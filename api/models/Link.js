/**
 * Link
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	utmSource:{
      type: 'string',
      required: true
    },

    utmMedium: {
      type: 'string',
      required: true
    },

    utmCampaign: {
      type: 'string',
      required: true
    },

    utmTerm: {
      type: 'string'
    },

    utmContent: {
      type: 'string'
    },

    destinationUrl: {
      type: 'string',
      url: true,
      required: true
    },

    userId: {
      type: 'string',
      required: true
    },

    clicked: {
      type: 'integer',
      defaultsTo: 0
    },

    shortLink: function(){
      return process.env.ROOT_URL + "/r/" + this.id
    },

    fullUrl: function(){
      var others = ""

      if (this.utmTerm){
        others += "&utm_term=" + this.utmTerm
      }

      if (this.utmContent){
        others += "&utm_content=" + this.utmContent
      }

      var url = this.destinationUrl + "/?" + "utm_campaign=" + this.utmCampaign + "&utm_medium=" + this.utmMedium + "&utm_source=" + this.utmSource + others


      return url
    }
  },



};
