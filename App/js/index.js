// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer1")
            );
            
            append(
                xui.create("xui.AnimBinder")
                .setHost(host,"ani_1")
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div80")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("57.21904761904762em")
                .setHeight("3.8857142857142857em")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#000000"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label13")
                .setLeft("-13.714285714285714em")
                .setTop("0em")
                .setWidth("29.333333333333332em")
                .setHeight("3.5047619047619047em")
                .setCaption("Gateway 2025")
                .setFontSize("30px")
                .setFontWeight("bolder")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FFFFFF"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image12")
                .setLeft("57.142857142857146em")
                .setTop("0em")
                .setWidth("4.114285714285714em")
                .setHeight("4.114285714285714em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button22")
                .setLeft("0.7619047619047619em")
                .setTop("8.380952380952381em")
                .setWidth("9.066666666666666em")
                .setCaption("Find Student ")
                .setImageClass("xui-icon-search")
                .onContextmenu([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.FormLayout28",
                        "args" : [
                            "{page.popUp()}",
                            "page"
                        ],
                        "method" : "popUp",
                        "redirection" : "page::",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_messageservice1")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});