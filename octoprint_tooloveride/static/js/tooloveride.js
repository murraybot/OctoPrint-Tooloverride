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
            updateIt = document.querySelector('[data-test-id="settings-save"]');
            setTimeout(()=>{updateIt.click()},9);
        }


        self.onBeforeBinding = function(){
            self.overrideEnabled(self.settings.settings.plugins.tooloveride.overrideEnabled());
            self.toolNumber(self.settings.settings.plugins.tooloveride.toolNumber());
        }

        
    }


    OCTOPRINT_VIEWMODELS.push([
        ToolOverideViewModel,
        ["settingsViewModel"],
        ["#sidebar_plugin_tooloveride"]
    ])

    
});