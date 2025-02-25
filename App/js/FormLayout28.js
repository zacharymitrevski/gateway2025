xui.Class('App.FormLayout28', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("56.68571428571428em")
                .setHeight("33.2952380952381em")
                .setLayoutData({
                    "rows" : 3,
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
                        "D3" : {
                            "value" : "Student Flag"
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
                .setWidth("17.295238095238094em")
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
                .setWidth("12.41904761904762em")
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
                .setWidth("17.295238095238094em")
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
                .setWidth("12.41904761904762em")
                .setHeight("2.361904761904762em")
                .setLabelPos("none")
                .setType("color"),
                "E3"
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput295")
                .setLeft("-2.2857142857142856em")
                .setTop("9.142857142857142em")
                .setWidth("14.17142857142857em")
                .setLabelSize("8em")
                .setLabelCaption("Year Group")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "7",
                        "caption" : "7"
                    },
                    {
                        "id" : "8",
                        "caption" : "8"
                    },
                    {
                        "id" : "9",
                        "caption" : "9"
                    },
                    {
                        "id" : "10",
                        "caption" : "10"
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