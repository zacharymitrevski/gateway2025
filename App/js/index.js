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
                .setLeft("1.5238095238095237em")
                .setTop("5.333333333333333em")
                .setWidth("9.066666666666666em")
                .setCaption("Find Student ")
                .setImageClass("xui-icon-search")
                .beforeHoverEffect([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.FormLayout28",
                        "args" : [
                            {
                            }
                        ],
                        "method" : "open",
                        "event" : 2
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout9")
                .setLeft("30.17142857142857em")
                .setTop("5.0285714285714285em")
                .setWidth("29.63809523809524em")
                .setHeight("auto")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSolidGridlines(false)
                .setLayoutData({
                    "rows" : 4,
                    "cols" : 5,
                    "merged" : [
                        {
                            "row" : 0,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 3,
                            "rowspan" : 3,
                            "colspan" : 2,
                            "removed" : false
                        }
                    ],
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 42
                        },
                        "2" : {
                            "manualHeight" : 38
                        },
                        "3" : {
                            "manualHeight" : 41
                        },
                        "4" : {
                            "manualHeight" : 92
                        }
                    },
                    "colSetting" : {
                        "A" : {
                            "manualWidth" : 67
                        },
                        "B" : {
                            "manualWidth" : 73
                        },
                        "C" : {
                            "manualWidth" : 94
                        },
                        "D" : {
                            "manualWidth" : 62
                        },
                        "E" : {
                            "manualWidth" : 52
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "Staff"
                        },
                        "A2" : {
                            "value" : "Clock in"
                        },
                        "A3" : {
                            "value" : "Clock in time"
                        },
                        "A4" : {
                            "value" : "Clock Out"
                        }
                    }
                })
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "4px 4px 4px 4px"
                    }
                })
            );
            
            host.xui_ui_formlayout9.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox9")
                .setName("B2")
                .setItems([
                    {
                        "id" : "m",
                        "caption" : "In"
                    },
                    {
                        "id" : "f",
                        "caption" : "Out"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setWidth("12.647619047619047em")
                .setHeight("2.8190476190476192em")
                .setLabelPos("none")
                .setLabelHAlign("left")
                .setValue("a"),
                "B2"
            );
            
            host.xui_ui_formlayout9.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image15")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("11.733333333333333em")
                .setHeight("9.142857142857142em")
                .setSrc("{xui.ini.img_pic}"),
                "D1"
            );
            
            host.xui_ui_formlayout9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput24")
                .setName("B3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("12.647619047619047em")
                .setHeight("3.0476190476190474em")
                .setLabelPos("none")
                .setType("time"),
                "B3"
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput31")
                .setLeft("32.76190476190476em")
                .setTop("14.476190476190476em")
                .setWidth("15.695238095238095em")
                .setHeight("4.8em")
                .setLabelSize("8em")
                .setType("time")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput40")
                .setLeft("29.714285714285715em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setType("dropbutton")
                .setHeight("2.5142857142857142em")
                .setItems([
                    {
                        "id" : "2303",
                        "caption" : "z.mitrevski"
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