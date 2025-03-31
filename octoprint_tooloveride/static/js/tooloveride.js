$(function() {
    function ToolOverideViewModel(parameters){
        let self = this;
        self.settings = parameters[0];

        self.overrideEnabled = ko.observable();
        self.toolNumber = ko.observable();

        console.log(self.settings)

        self.onBeforeBinding = function(){
            self.overrideEnabled(self.settings.settings.plugins.tooloveride.overrideEnabled());
            self.toolNumber(self.settings.settings.plugins.tooloveride.toolNumber());
        }

        self.onEventSettingsUpdated = function(payload){
            self.overrideEnabled(self.settings.settings.plugins.tooloveride.overrideEnabled());
            self.toolNumber(self.settings.settings.plugins.tooloveride.toolNumber());
            console.log(self.toolNumber)
        }
    }



    OCTOPRINT_VIEWMODELS.push([
        ToolOverideViewModel,
        ["settingsViewModel"],
        ["#settings_plugin_tooloveride"]
    ])

    
});