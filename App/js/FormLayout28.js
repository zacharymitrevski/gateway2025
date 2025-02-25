xui.Class('App.FormLayout28', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("5.833333333333333em")
                .setTop("1.6666666666666667em")
                .setWidth("56.68571428571428em")
                .setHeight("33.2952380952381em")
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 6,
                    "merged" : [
                        {
                            "row" : 1,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
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
                            "row" : 1,
                            "col" : 4,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 4,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 5,
                            "removed" : false
                        },
                        {
                            "row" : 4,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 5,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 6,
                            "removed" : false
                        }
                    ],
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 50
                        },
                        "2" : {
                            "manualHeight" : 33
                        },
                        "3" : {
                            "manualHeight" : 32
                        },
                        "4" : {
                            "manualHeight" : 174
                        },
                        "5" : {
                            "manualHeight" : 24
                        }
                    },
                    "colSetting" : {
                        "E" : {
                            "manualWidth" : 50
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "Student Information",
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "A2" : {
                            "value" : "Full Name"
                        },
                        "D2" : {
                            "value" : "DOB"
                        },
                        "A3" : {
                            "value" : "Gender"
                        },
                        "A4" : {
                            "value" : "Desc"
                        },
                        "A5" : {
                            "value" : "Memo",
                            "style" : {
                                "backgroundColor" : "#FFE4B5"
                            }
                        },
                        "B5" : {
                            "value" : "This is a form layout demo!",
                            "style" : {
                                "textAlign" : "left",
                                "verticalAlign" : "bottom",
                                "fontStyle" : "italic",
                                "color" : "#BC8F8F",
                                "backgroundColor" : "#FFE4B5"
                            }
                        },
                        "B1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "C1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "D1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "E1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "F1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "C5" : {
                            "style" : {
                                "textAlign" : "left",
                                "verticalAlign" : "bottom",
                                "fontStyle" : "italic",
                                "color" : "#BC8F8F",
                                "backgroundColor" : "#FFE4B5"
                            }
                        },
                        "D5" : {
                            "style" : {
                                "textAlign" : "left",
                                "verticalAlign" : "bottom",
                                "fontStyle" : "italic",
                                "color" : "#BC8F8F",
                                "backgroundColor" : "#FFE4B5"
                            }
                        },
                        "E5" : {
                            "style" : {
                                "textAlign" : "left",
                                "verticalAlign" : "bottom",
                                "fontStyle" : "italic",
                                "color" : "#BC8F8F",
                                "backgroundColor" : "#FFE4B5"
                            }
                        },
                        "F5" : {
                            "style" : {
                                "textAlign" : "left",
                                "verticalAlign" : "bottom",
                                "fontStyle" : "italic",
                                "color" : "#BC8F8F",
                                "backgroundColor" : "#FFE4B5"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setName("B2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.580952380952382em")
                .setHeight("2.4380952380952383em")
                .setLabelPos("none"),
                "B2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput21")
                .setName("E2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("13.40952380952381em")
                .setHeight("2.4380952380952383em")
                .setLabelPos("none")
                .setType("date")
                .setValue("106322400000"),
                "E2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1")
                .setName("B3")
                .setItems([
                    {
                        "id" : "m",
                        "caption" : "Male"
                    },
                    {
                        "id" : "f",
                        "caption" : "Female"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.580952380952382em")
                .setHeight("2.361904761904762em")
                .setLabelPos("none")
                .setLabelHAlign("left")
                .setValue("a"),
                "B3"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput32")
                .setName("E3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("13.40952380952381em")
                .setHeight("2.361904761904762em")
                .setLabelPos("none")
                .setType("color"),
                "E3"
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput295")
                .setLeft("5.333333333333333em")
                .setTop("26.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Year Group")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "7",
                        "caption" : "7",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "8",
                        "caption" : "8",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "9",
                        "caption" : "9",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "10",
                        "caption" : "10",
                        "imageClass" : "xui-icon-number4",
                        "disabled" : true
                    },
                    {
                        "id" : "11",
                        "caption" : "11"
                    },
                    {
                        "id" : "12",
                        "caption" : "12"
                    }
                ])
                .setValue("d")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});