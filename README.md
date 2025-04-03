# OctoPrint-Tooloverride

This plugin allows you to configure a tool override, currently between tool 0 and 1. This is great for dual extruder single hot end printers. A lot of times you might have two different materials set for your separate extruders in your slicing software. Or you might keep two different materials loaded on either spool, and your slicing software only slices for tool 0. Normally, these printers have a dialogue when starting a print to override to a specific extruder or both. I have been working around this in Octoprint by editing the gcode manually to the preferred tool, but that is time consuming, and destructive. 
Currently, the only interface for this plugin is in the sidebar, which populates at the bottom. I am considering also having the options in a settings page as well as a toggle that lets you put the interface in the navbar. I feel like this needs to be front and center when loading files for the printer, but I would rather not create a modal interrupting the user’s workflow. 


## Setup

Install via the bundled [Plugin Manager](https://docs.octoprint.org/en/master/bundledplugins/pluginmanager.html)
or manually using this URL:

    https://github.com/murraybot/OctoPrint-Tooloverride/archive/master.zip

Feel free to install directly into your plugins directory, but I will be publishing on the official repo soon.

## Development notes

To be upfront, I do know that I misspelled override on the original plugin creation. I probably will get around to fixing it, but it is still in testing and experimental features and UI. Getting the sidebar bindings to apply, so the backend would have the options was a particular pain. I thought the bindings weren't working or that I was missing a step or would need to set up a simple API mixin and use a JS fetch function to post the data to that route on change. However, I found out if I just query select the save button in the settings modal and click it, it applies the bindings, and that is work around I can live with. If you're curious what printer I'm using, it is a Lotmaxx Shark V3.

## TODO

* Use printer settings to make the range of extruders match the number in the select element

* Try different interface locations

* Recieve feedback from users with a diverse variety of printers and Octoprint setups
