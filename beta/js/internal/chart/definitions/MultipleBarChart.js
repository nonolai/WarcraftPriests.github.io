function getMultipleBarChartDefinition(wowheadTooltips, chartName, data) {
    return stackedCharDefinition = {
      xAxis: {
        categories: wowheadTooltips,
        useHTML: true,
      },
      yAxis: {
        min: '0',
        allowDecimals: true,
        stackLabels: {
          enabled: false,
        }
      },
      plotOptions: {
        series: {
          column: {
            dataLabels: {
                enabled: false,
            },
          },
          line: {
            label: {
              enabled: false,
            },
          },
          pointPadding: 1.0, 
          states: {
            hover: {
              enabled: false
            }
          },
          stacking: stackingNormal,
          enableMouseTracking: true,
          pointPadding: 1.5,
          pointWidth: 15,
          spacing: 100,
          events: {
            legendItemClick: function () { return false; }
          },
          allowPointSelect: false,
        },
      },
      title: {
        style: {
          color: defaultFontColor,
          fontWeight: fontWeightBold,
        },
        text: chartName,
      },
      tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: tooltipHeaderFormat, 
        style: {
          color: defaultFontColor,
        },
        pointFormat: tooltipPointFormat,
        padding: 5,
        formatter: function () {
          return formatterMultipleBar(this.points, this.x, data);
        },
      },
    };   
  }