/*
 *  This file contains the JS that handles the first init of each jQuery demonstration, and also switching
 *  between render modes.
 */
jsPlumb.ready(function () {
    var instance = jsPlumb.getInstance({
        ConnectionsDetachable: false,
        Container: "viewflowcontainer"
    });

    instance.connect({
		                source: "ATIDstart",
		                target: "ATID32",
		                anchors: ['LeftMiddle','LeftMiddle'],
		                endpoint: "Blank",
		                connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                        paintStyle:{ strokeStyle:"green", lineWidth:2 },
		                overlays: [
		                            ["Arrow", { location: 1 }],
                                    [ "Label", { 
                                            location: 0.7, 
                                            label:"Pending Manager Appoval",
                                            cssClass:"actionLabel startLabel" 
                                        } ]
		                          ]
		                });	
     instance.connect({
		                            source: "ATID32",
		                            target: "ATID34",
		                            anchors: ['BottomCenter','TopCenter'],
		                            endpoint: "Blank",
		                            connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                                paintStyle:{ strokeStyle:"green", lineWidth:2 },
		                            overlays: [
		                                ["Arrow", { location: 1 }],
                                        [ "Label", {
                                            location: 0.7,
                                            label:"Approve",
                                            cssClass:"actionLabel a1912Label"
                                        } ]
		                            ]
		                        });
                     instance.connect({
		                            source: "ATID32",
		                            target: "ATID33",
		                            anchors: ['RightMiddle','LeftMiddle'],
		                            endpoint: "Blank",
		                            connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                                paintStyle:{ strokeStyle:"red", lineWidth:2 },
		                            overlays: [
		                                ["Arrow", { location: 1 }],
                                        [ "Label", {
                                            location: 0.7,
                                            label:"Route Back",
                                            cssClass:"actionLabel a1913Label"
                                        } ]
		                            ]
		                        });
                    instance.connect({
		                            source: "ATID33",
		                            target: "ATID32",
		                            anchors: ['TopCenter','TopCenter'],
		                            endpoint: "Blank",
		                            connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                                paintStyle:{ strokeStyle:"red", lineWidth:2 },
		                            overlays: [
		                                ["Arrow", { location: 1 }],
                                        [ "Label", {
                                            location: 0.7,
                                            label:"Re Submit for Manager Approval",
                                            cssClass:"actionLabel a1914Label"
                                        } ]
		                            ]
		                        });
                    instance.connect({
		                            source: "ATID33",
		                            target: "ATID36",
		                            anchors: ['BottomCenter','TopCenter'],
		                            endpoint: "Blank",
		                            connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                                paintStyle:{ strokeStyle:"red", lineWidth:2 },
		                            overlays: [
		                                ["Arrow", { location: 1 }],
                                        [ "Label", {
                                            location: 0.7,
                                            label:"Withdraw",
                                            cssClass:"actionLabel a1915Label"
                                        } ]
		                            ]
		                        });
                    instance.connect({
		                            source: "ATID34",
		                            target: "ATID35",
		                            anchors: ['BottomCenter','TopCenter'],
		                            endpoint: "Blank",
		                            connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                                paintStyle:{ strokeStyle:"gray", lineWidth:2 },
		                            overlays: [
		                                ["Arrow", { location: 1 }],
                                        [ "Label", {
                                            location: 0.7,
                                            label:"Accepted By HR",
                                            cssClass:"actionLabel a1916Label"
                                        } ]
		                            ]
		                        });
                    instance.connect({
		                            source: "ATID35",
		                            target: "ATIDend",
		                            anchors: ['BottomCenter','TopCenter'],
		                            endpoint: "Blank",
		                            connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                                paintStyle:{ strokeStyle:"gray", lineWidth:2 },
		                            overlays: [
		                                ["Arrow", { location: 1 }],
                                        [ "Label", {
                                            location: 0.7,
                                            label:"Complete",
                                            cssClass:"actionLabel a1719Label"
                                        } ]
		                            ]
		                        });
                    instance.connect({
		                            source: "ATID36",
		                            target: "ATIDend",
		                            anchors: ['BottomCenter','RightMiddle'],
		                            endpoint: "Blank",
		                            connector: ["Flowchart", { stub: [15, 30], gap: 1.5 }],
                                paintStyle:{ strokeStyle:"red", lineWidth:2 },
		                            overlays: [
		                                ["Arrow", { location: 1 }],
                                        [ "Label", {
                                            location: 0.7,
                                            label:"Complete",
                                            cssClass:"actionLabel a1720Label"
                                        } ]
		                            ]
		                        });
});