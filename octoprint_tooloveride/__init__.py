# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class TooloveridePlugin(octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.StartupPlugin
):

    def on_after_startup(self):
        self._logger.info("Goofenshmee")

    def get_settings_defaults(self):
        return dict(
            overrideEnabled = False,
            toolNumber = "0"
        )

    def get_template_configs(self):
        return [
			dict(type="sidebar", custom_bindings=True),
            
		]
    ##~~ AssetPlugin mixin

    def get_assets(self):
        # Define your plugin's asset files to automatically include in the
        # core UI here.
        return {
            "js": ["js/tooloveride.js"],
            "css": ["css/tooloveride.css"],
            "less": ["less/tooloveride.less"]
        }

    ##~~ Softwareupdate hook

    def get_update_information(self):
        # Define the configuration for your plugin to use with the Software Update
        # Plugin here. See https://docs.octoprint.org/en/master/bundledplugins/softwareupdate.html
        # for details.
        return {
            "tooloveride": {
                "displayName": "Tooloveride Plugin",
                "displayVersion": self._plugin_version,

                # version check: github repository
                "type": "github_release",
                "user": "murraybot",
                "repo": "OctoPrint-Tooloveride",
                "current": self._plugin_version,

                # update method: pip
                "pip": "https://github.com/murraybot/OctoPrint-Tooloveride/archive/{target_version}.zip",
            }
        }
    
    def changeToolHead(self, comm_instance, phase, cmd, cmd_type, gcode, *args, **kwargs):
        if gcode and gcode[0] == "T":
            self._logger.info("Tool change command qued...")
            self._logger.info(str(self._settings.get(["overrideEnabled"]))+self._settings.get(["toolNumber"]))
            if self._settings.get(["overrideEnabled"]):
                self._logger.info("Override enabled, replacing command with tool "+self._settings.get(["toolNumber"]))
                cmd = "T"+self._settings.get(["toolNumber"])
        return cmd,

__plugin_name__ = "Tooloveride Plugin"


__plugin_pythoncompat__ = ">=3,<4"  # Only Python 3

def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = TooloveridePlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information,
        "octoprint.comm.protocol.gcode.queuing": __plugin_implementation__.changeToolHead
    }
