var Backbone = require('backbone');
var ArtistModel = require('../Artist/ArtistModel');
var _ = require('underscore');

module.exports = Backbone.Collection.extend({
    url   : window.NzbDrone.ApiRoot + '/artist/lookup', 
    model : ArtistModel,

    parse : function(response) {
        var self = this;

        _.each(response, function(model) {
            model.id = undefined;

            if (self.unmappedFolderModel) {
                model.path = self.unmappedFolderModel.get('folder').path;
            }
            console.log('model: ', model);
        });
        console.log('response: ', response); // Note: this gets called after api responds with artist model

        return response;
    }
});