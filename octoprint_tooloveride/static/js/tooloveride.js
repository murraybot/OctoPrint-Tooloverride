$(function() {
    function ToolOverideViewModel(parameters){
        let self = this;
        self.settings = parameters[0];

        self.overrideEnabled = ko.observable();
        self.toolNumber = ko.observable();
        self.pluginName = "tooloveride";

        overrideUi = document.querySelector('.UI[name="Overide"]');
        toolUi = document.querySelector('.UI[name="tool"]');
        overrideUi.addEventListener("input", updateNow);
        toolUi.addEventListener("change", updateNow);

        function updateNow(e) {
            console.log(e.target.value)
            updateIt = document.querySelector('[data-test-id="settings-save"]');
            setTimeout(()=>{updateIt.click();console.log("wait?");},90);
        }


        self.onBeforeBinding = function(){
            self.overrideEnabled(self.settings.settings.plugins.tooloveride.overrideEnabled());
            self.toolNumber(self.settings.settings.plugins.tooloveride.toolNumber());
        }

        self.onEventSettingsUpdated = function(payload){

        }
        
    }


    OCTOPRINT_VIEWMODELS.push([
        ToolOverideViewModel,
        ["settingsViewModel"],
        ["#sidebar_plugin_tooloveride","#settings_plugin_tooloveride"]
    ])

    
});