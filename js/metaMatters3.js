new Dygraph(document.getElementById("metaMatters5"), "data/Class_Reports.csv",
    {
        "axes" : {
            "x" : {
                "pixelsPerLabel" : 60,
                "drawGrid" : false,
                "drawAxis" : true
            },
            "y" : {
                "drawGrid" : false,
                "drawAxis" : true
            }
        },
        "title" : "Class Reports",
        "labels" : [ "day", "Group 1", "Group 2", "Group 3", "Group 4", "Group 5" ],
        "retainDateWindow" : false,
        "ylabel" : "# of Reports Viewed",
        "showRangeSelector" : true,
        "rangeSelectorHeight" : 40,
        "rangeSelectorPlotFillColor" : "#A7B1C4",
        "rangeSelectorPlotStrokeColor" : "#808FAB",
        "interactionModel" : "Dygraph.Interaction.defaultModel",
        "stackedGraph" : false,
        "fillGraph" : false,
        "fillAlpha" : 0.15,
        "stepPlot" : false,
        "drawPoints" : false,
        "pointSize" : 1,
        "drawGapEdgePoints" : false,
        "connectSeparatedPoints" : false,
        "strokeWidth" : 2.25,
        "strokeBorderColor" : "white",
        "colors" : [ "#E41A1C", "#377EB8", "#4DAF4A", "#984EA3", "#FF7F00" ],
        "colorValue" : 0.5,
        "colorSaturation" : 1,
        "includeZero" : false,
        "drawAxesAtZero" : false,
        "logscale" : false,
        "axisTickSize" : 5,
        "axisLineColor" : "black",
        "axisLineWidth" : 1,
        "axisLabelColor" : "black",
        "axisLabelFontSize" : 16,
        "axisLabelWidth" : 60,
        "drawGrid" : true,
        "gridLineWidth" : 0.3,
        "rightGap" : 5,
        "digitsAfterDecimal" : 2,
        "labelsKMB" : false,
        "labelsKMG2" : false,
        "labelsUTC" : false,
        "maxNumberWidth" : 6,
        "animatedZooms" : false,
        "mobileDisableYTouch" : true,
        "disableZoom" : false,
        "series" : {
            "Group 1" : {
                "axis" : "y"
            },
            "Group 2" : {
                "axis" : "y"
            },
            "Group 3" : {
                "axis" : "y"
            },
            "Group 4" : {
                "axis" : "y"
            },
            "Group 5" : {
                "axis" : "y"
            }
        },
        "legend" : "always",
        "labelsDivWidth" : 600,
        "labelsShowZeroValues" : true,
        "labelsSeparateLines" : false,
        "highlightCircleSize" : 8,
        "highlightSeriesBackgroundAlpha" : 0.75,
        "highlightSeriesOpts" : {
            "strokeWidth" : 5
        },
        "hideOverlayOnMouseOut" : true,
        "titleHeight" : 56

    }
);