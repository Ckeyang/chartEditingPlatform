/**
 * Created by Administrator on 2017/8/11.
 */
(function ($) {
    var httpGet = function (url, data, fn) {
        $.ajax({
            url: url,
            data: data,
            type: 'get',
            success: function (data) {
                fn(data)
            }
        })
    };
    var httpPost = function (url, data, fn) {
        $.ajax({
            url: url,
            data: data,
            type: 'post',
            success: function (data) {
                fn(data)
            }
        })
    };
    var httpFile = function (url, formData, fn) {
        $.ajax({
            url: url,
            data: formData,
            type: 'post',
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
                fn(data)
            }
        })
    };
    var imgBaseUrl = "./image/chart/";
    var defaultData = JSON.stringify({
        defaultData: [
            {
                visChartId: 1,
                defaultDataArray: {
                    title: {
                        show: true
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {
                                title: "保存",
                                show: true
                            }
                        }
                    },
                    legend: {
                        data: ["36氪", "网易汽车"]
                    },
                    grid: {
                        y: 65
                    },
                    axisPointer: {
                        show: true
                    },
                    tooltip: {
                        show: true
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: false,
                        data: ["2017/6/21", "2017/6/21"]
                    }],
                    yAxis: [{
                        type: "value"
                    }],
                    series: [
                        {
                            name: "36氪",
                            type: "line",
                            stack: "网站",
                            data: [120, 132]
                        },
                        {
                            name: "网易汽车",
                            type: "line",
                            stack: "网站",
                            data: [85, 456]
                        }
                    ]
                },
                defaultTableArray: [
                    [
                        "日期",
                        "网站",
                        "url"
                    ],
                    [
                        "2017/6/21",
                        "36氪",
                        "120"
                    ],
                    [
                        "2017/6/21",
                        "网易汽车",
                        "85"
                    ],
                    [
                        "2017/6/22",
                        "36氪",
                        "132"
                    ],
                    [
                        "2017/6/22",
                        "网易汽车",
                        "456"
                    ]
                ],
                inputFieldArray: [
                    {
                        "field": "xAxis",
                        "fieldName": "X轴"
                    },
                    {
                        "field": "yAxis",
                        "fieldName": "y轴"
                    },
                    {
                        "field": "k",
                        "fieldName": "图例"
                    }
                ]
            },
            {
                visChartId: 3,
                defaultDataArray: {
                    title: {
                        show: true
                    },
                    legend: {
                        data: ["36氪", "网易汽车"]
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {
                                title: "保存",
                                show: true
                            }
                        }
                    },
                    axisPointer: {
                        show: true
                    },
                    tooltip: {
                        show: true
                    },
                    xAxis: [{
                        type: "category",
                        axisLine: {
                            onZero: false
                        },
                        data: ["2017/6/21", "2017/6/21"]
                    }],
                    yAxis: [{
                        type: "value"
                    }],
                    series: [
                        {
                            name: "36氪",
                            type: "bar",
                            data: [120, 132]
                        },
                        {
                            name: "网易汽车",
                            type: "bar",
                            data: [85, 456]
                        }
                    ]
                },
                defaultTableArray: [
                    [
                        "日期",
                        "网站",
                        "url"
                    ],
                    [
                        "2017/6/21",
                        "36氪",
                        "120"
                    ],
                    [
                        "2017/6/21",
                        "网易汽车",
                        "85"
                    ],
                    [
                        "2017/6/22",
                        "36氪",
                        "132"
                    ],
                    [
                        "2017/6/22",
                        "网易汽车",
                        "456"
                    ]
                ],
                inputFieldArray: [
                    {
                        "field": "xAxis",
                        "fieldName": "X轴"
                    },
                    {
                        "field": "yAxis",
                        "fieldName": "y轴"
                    },
                    {
                        "field": "k",
                        "fieldName": "图例"
                    }
                ]
            }, {
                visChartId: 5,
                defaultDataArray: {
                    title: {
                        show: true
                    },
                    legend: {
                        data: ["36氪", "网易汽车"]
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {
                                title: "保存",
                                show: true
                            }
                        }
                    },
                    axisPointer: {
                        show: true
                    },
                    tooltip: {
                        show: true
                    },
                    series: [
                        {
                            name: "网站",
                            type: "pie",
                            data: [
                                {
                                    value: 335,
                                    name: "36氪"
                                },
                                {
                                    value: 310,
                                    name: "网易汽车"
                                }
                            ]
                        }
                    ]
                },
                defaultTableArray: [
                    [
                        "日期",
                        "网站",
                        "url"
                    ],
                    [
                        "2017/6/21",
                        "36氪",
                        "5"
                    ],
                    [
                        "2017/6/21",
                        "网易汽车",
                        "6"
                    ]
                ],
                inputFieldArray: [
                    {
                        "field": "xAxis",
                        "fieldName": "X轴"
                    },
                    {
                        "field": "yAxis",
                        "fieldName": "y轴"
                    },
                    {
                        "field": "k",
                        "fieldName": "图例"
                    }
                ]
            }, {
                visChartId: 6,
                defaultDataArray: "是打发的说",
                defaultTableArray: "是打发的说"
            }
        ],
        statisticsData: [
            {
                "dataResult": "统计数据",
                "itemList": [
                    {
                        "paramId": "1",
                        "name": "统计报告1",
                        "fieldList": [
                            {
                                "field": "dateTime", "fieldName": "日期"
                            }
                        ]
                    }
                ]
            }
        ]
    });
    /**
     * settings
     * @type {[*]}
     */
    var settingList = JSON.stringify([
        {
            type: "text",
            data: "",
            position: 1,
            paramSettings: [
                {
                    name: "颜色设置",
                    type: "color",
                    isShow: true,
                    params: [{
                        set: "color",
                        name: "颜色",
                        value: ""
                    }]
                },
                {
                    name: "文本属性",
                    type: "color",
                    isShow: true,
                    params: [
                        {
                            set: 'fontFamily',
                            name: "字体",
                            type: "text",
                            value: ""
                        }, {
                            set: 'fontSize',
                            name: "字体大小",
                            type: "text",
                            value: ""
                        }, {
                            set: 'fontWeight',
                            name: "是否加粗",
                            type: "checkbox",
                            value: ""
                        }, {
                            set: 'text-align',
                            name: "文字位置",
                            type: "checkbox",
                            value: ""
                        }, {
                            set: 'text-decoration',
                            name: "是否加下划线",
                            type: "checkbox",
                            value: ""
                        }
                    ]
                }
            ]
        }, {
            type: "chart",
            data: [],
            position: 2,
            paramSettings: [
                {
                    name: "表格",
                    type: "table",
                    isShow: true,
                    params: [
                        {
                            set: 'yAxis.min',
                            name: "从",
                            type: "text",
                            value: ''
                        },
                        {
                            set: 'yAxis.max',
                            name: "到",
                            type: "text",
                            value: ''
                        }
                    ]
                },
                {
                    name: "描述",
                    type: "desc",
                    isShow: true,
                    params: [
                        {
                            set: "xAxis.name",
                            name: "x轴描述",
                            type: "text",
                            value: ""
                        },
                        {
                            set: "yAxis.name",
                            name: "y轴描述",
                            type: "text",
                            value: ""
                        },
                        {
                            set: "title.text",
                            name: "标题",
                            type: "text",
                            value: ""
                        },
                        {
                            set: "title.subtext",
                            name: "副描述",
                            type: "text",
                            value: ""
                        }
                    ]
                }
            ]
        }
    ]);
    /**
     * 右侧设置栏
     */
    var settingBox = new Vue({
        el: "#chartsSettingBox",
        data: {
            settings: [],
            type: "",
            chooseItem: {}
        },
        methods: {
            initData: function (key, defaultData, type) {
                this.type = "data";
                var i = 0;
                while (true) {
                    if (JSON.parse(settingList)[i].type == type) {
                        var chooseItem = {
                            key: key,
                            settings: JSON.parse(settingList)[i],
                            tableData: defaultData.defaultTableArray,
                            data: defaultData.defaultDataArray
                        };
                        this.settings.push(chooseItem);
                        this.chooseItem = chooseItem;
                        break;
                    }
                    i++;
                }
                this.flashCharts();
            },
            flashCharts: function () {
                var obj = this.translateSettings();
                contentBox.createEcharts(this.chooseItem.key, this.chooseItem.settings.type, obj);
            },
            initKeyData: function (type, key) {
                var i = 0;
                var that = this;
                that.type = type;
                while (true) {
                    if (typeof that.settings[i].key == 'undefined') {
                        break;
                    }
                    if (that.settings[i].key == key) {
                        that.chooseItem = that.settings[i];
                        break;
                    }
                    i++;
                }
            },
            translateSettings: function () {
                var type = this.chooseItem.settings.type;
                var settings = this.chooseItem.settings.paramSettings;
                var obj = {};
                if (type == "chart") {
                    for (var key in this.chooseItem.data) {
                        obj[key] = this.chooseItem.data[key]
                    }
                    settings.forEach(function (item) {
                        item.params.forEach(function (jtem) {
                            if (jtem.value != "") {
                                var sets = jtem.set.split(".");
                                if (sets[0] == 'xAxis' || sets[0] == 'yAxis') {
                                    obj[sets[0]][0][sets[1]] = jtem.value;
                                } else {
                                    obj[sets[0]] = typeof obj[sets[0]] != 'undefined' ? obj[sets[0]] : {};
                                    obj[sets[0]] [sets[1]] = jtem.value;
                                }
                            }
                        });
                    });
                } else if (type == "text") {
                    settings.forEach(function (item) {
                        item.params.forEach(function (jtem) {
                            if (jtem.value != "") {
                                obj[jtem.set] = jtem.value;
                            }
                        });
                    });
                    obj.data = this.chooseItem.data;
                }
                return obj;
            },
            changeType: function (string) {
                this.type = string;
            },
            showItem: function (item) {
                item.isShow = !item.isShow;
            },
            changeData: function () {
                var obj = this.translateSettings();
                console.log(JSON.stringify(obj));
                contentBox.updateEcharts(this.chooseItem.key, obj);
                //触发修改表格
            },
            showSettingDataBox: function () {
                settingDataBox.$data.isShow = true;
            },
            /**
             * @param array
             */
            exchangeData: function (data) {
                this.chooseItem.tableData = data.defaultTableArray;
                this.chooseItem.tableData = data.defaultDataArray;
                this.flashCharts();
            }
        }
    });
    /**
     * 弹出框设置
     */
    var settingDataBox = new Vue({
        el: "#settingDataBox",
        data: {
            isShow: false,
            settingData: [{
                name: "统计数据1",
                id: 1,
                childrens: [{
                    name: "报告1",
                    id: 2,
                    childrens: [{
                        name: "字段3",
                        id: 5
                    }, {
                        name: "字段4",
                        id: 6
                    }]
                }, {
                    name: "报告2",
                    id: 3,
                    childrens: [{
                        name: "字段5",
                        id: 5
                    }, {
                        name: "字段6",
                        id: 6
                    }]
                }]
            }, {
                name: "统计数据2",
                id: 7,
                childrens: [{
                    name: "报告3",
                    id: 4,
                    childrens: [{
                        name: "字段1",
                        id: 5
                    }, {
                        name: "字段3",
                        id: 6
                    }]
                }, {
                    name: "报告4",
                    id: 5,
                    childrens: [{
                        name: "字段3",
                        id: 5
                    }, {
                        name: "字段6",
                        id: 6
                    }]
                }]
            }
            ],
            settingData2: [{
                name: "报告1",
                id: 2,
                childrens: [{}]
            }, {
                name: "报告2",
                id: 3,
                childrens: [{}]
            }],
            settingData3: [{
                name: "字段1",
                id: 5
            }, {
                name: "字段3",
                id: 6
            }],
            updateData: {
                aId: 1,
                bId: 2,
                cId: 5,
                dId: 5,
                eId: 5
            }
        },
        methods: {
            hiddenBox: function () {
                this.isShow = false;
            },
            getChildren: function () {
                var i = 0;
                while (true) {
                    if (this.updateData.aId == this.settingData[i].id) {
                        this.settingData2 = this.settingData[i].childrens;
                        this.updateData.bId = this.settingData2[0].id;
                        break;
                    }
                    i++;
                }
                this.getChildren2();
            },
            getChildren2: function () {
                var i = 0;
                while (true) {
                    if (this.updateData.bId == this.settingData2[i].id) {
                        this.settingData3 = this.settingData2[i].childrens;
                        this.updateData.cId = this.settingData3[0].id;
                        this.updateData.dId = this.settingData3[0].id;
                        this.updateData.eId = this.settingData3[0].id;
                        break;
                    }
                    i++;
                }
            },
            getData: function () {
                httpPost("text", this.updateData, function (data) {
                    console.log(data);
                    settingBox.settings.data = data.data;
                });
            }
        }
    });
    /*
     * echarts
     * */
    /* chartsList: [
     {
     type: "chart",
     option: {
     title: {
     text: "未来一周气温变化",
     subtext: "纯属虚构"
     },
     tooltip: {
     trigger: "axis"
     },
     legend: {
     data: ["最高气温", "最低气温"]
     },
     toolbox: {
     show: true,
     feature: {
     saveAsImage: {
     show: true,
     title: "保存"
     }
     }
     },
     calculable: true,
     xAxis: [
     {
     type: "category",
     boundaryGap: false,
     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
     }
     ],
     yAxis: [
     {
     type: "value",
     name: "°C"
     }
     ],
     series: [
     {
     name: "最高气温",
     type: "line",
     data: [11, 11, 15, 13, 12, 13, 10]
     },
     {
     name: "最低气温",
     type: "line",
     data: [1, -2, 2, 5, 3, 2, 0]
     }
     ]
     }
     }, {
     type: "chart", option: {
     tooltip: {
     trigger: "axis"
     },
     legend: {
     data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
     },
     calculable: true,
     xAxis: [
     {
     type: "category",
     boundaryGap: false,
     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
     }
     ],
     toolbox: {
     show: true,
     feature: {
     saveAsImage: {
     show: true,
     title: "保存"
     }
     }
     },
     yAxis: [
     {
     type: "value"
     }
     ],
     series: [
     {
     name: "邮件营销",
     type: "line",
     stack: "总量",
     itemStyle: {
     normal: {
     areaStyle: {
     type: "default"
     }
     }
     },
     data: [120, 132, 101, 134, 90, 230, 210]
     },
     {
     name: "联盟广告",
     type: "line",
     stack: "总量",
     itemStyle: {
     normal: {
     areaStyle: {
     type: "default"
     }
     }
     },
     data: [220, 182, 191, 234, 290, 330, 310]
     },
     {
     name: "视频广告",
     type: "line",
     stack: "总量",
     itemStyle: {
     normal: {
     areaStyle: {
     type: "default"
     }
     }
     },
     data: [150, 232, 201, 154, 190, 330, 410]
     },
     {
     name: "直接访问",
     type: "line",
     stack: "总量",
     itemStyle: {
     normal: {
     areaStyle: {
     type: "default"
     }
     }
     },
     data: [320, 332, 301, 334, 390, 330, 320]
     },
     {
     name: "搜索引擎",
     type: "line",
     stack: "总量",
     itemStyle: {
     normal: {
     areaStyle: {
     type: "default"
     }
     }
     },
     data: [820, 932, 901, 934, 1290, 1330, 1320]
     }
     ]
     }
     }, {
     type: "text", option: {
     value: "测试用的啊",
     "font-weight": "bold",
     "text-align": "center",
     "font-size": "25px"
     }
     }
     ]*/
    /**
     *
     * 中间画板
     */
    var contentBox = new Vue({
        el: "#chartsShowBox",
        data: {
            chartsList: []
        },
        methods: {
            createEcharts: function (key, type, options) {
                console.log(JSON.stringify(options));
                this.chartsList.push({
                    key: key, type: type, option: options
                });
                this.createAllEcharts();
            },
            updateEcharts: function (key, options) {
                var i = 0;
                var that = this;
                while (true) {
                    if (that.chartsList[i].key == key) {
                        that.chartsList[i].option = options;
                        break;
                    }
                    i++;
                }
                that.createAllEcharts();
            },
            createAllEcharts: function () {
                var that = this;
                setTimeout(function () {
                    var i = 0;
                    that.chartsList.map(function (item) {
                        console.log(item);
                        if (item.type == "chart") {
                            var myChart = echarts.init(document.getElementById(i));
                            myChart.setOption(item.option);
                            console.log(myChart.getDataURL("png"));
                            document.getElementById("img" + i).src = myChart.getDataURL("png");
                        } else if (item.type == "text") {
                            var div = $('#' + i);
                            for (var key in item.option) {
                                if (key == "data") {
                                    div.text(item.option[key])
                                }
                                div.css(key, item.option[key]);
                            }
                        }
                        i++;
                    });
                    that.createTz();
                }, 500);
            },
            createTz: function () {
                $("#chartsShowBox").dad({
                    draggable: ".tz"
                })
            },
            chooseThisData: function (item) {
                settingBox.initKeyData("data", item.key);
            },
            chooseThisSetting: function (item) {
                settingBox.initKeyData("setting", item.key);
            }
        }
    });
    /**
     * 左侧面板
     */
    var menu = {
        "menuList": [
            {
                "id": 1,
                img: imgBaseUrl + "../tb.png",
                "type": "chart",
                "name": "img"

            },
            {
                "id": 2,
                "img": "",
                "type": "text",
                "name": "A"
            }
        ],
        "menudata": [
            {
                type: "chart", list: [
                {
                    type: "折线图", typeItems: [
                    {
                        name: "线1",
                        type: "line",
                        pType: "chart",
                        img: imgBaseUrl + "dynamic-data2.png",
                        visChartId: "1"
                    }
                ]
                },
                {
                    type: "柱状图", typeItems: [
                    {
                        name: "柱1",
                        type: "bar",
                        pType: "chart",
                        img: imgBaseUrl + "bar-tick-align.png",
                        visChartId: "3"
                    }
                ]
                },
                {
                    type: "饼状图", typeItems: [
                    {
                        name: "饼1",
                        type: "pie",
                        pType: "chart",
                        img: imgBaseUrl + "pie-simple.png",
                        visChartId: "5"
                    }
                ]
                }
            ]
            },
            {
                type: "text", list: [
                {
                    type: "文字框", typeItems: [
                    {
                        name: "框1",
                        type: "text",
                        pType: "text",
                        img: "",
                        visChartId: "6"
                    }
                ]
                }
            ]
            }
        ]
    };
    /**
     * 具体菜单
     */
    var chartsBox = new Vue({
        el: "#chartsBox",
        data: {
            charsBox: []
        },
        methods: {
            chooseItem: function (data) {
                console.log("菜单选择visChartId:" + data.visChartId);
                var i = 0;
                while (true) {
                    if (JSON.parse(defaultData).defaultData[i].visChartId == data.visChartId) {
                        var date = new Date().getTime();
                        settingBox.initData(date, JSON.parse(defaultData).defaultData[i], data.pType);
                        break;
                    }
                    i++
                }
            }
        }
    });
    /*
     大菜单
     * */
    var menuBox = new Vue({
        el: "#charsMenu",
        data: {
            menuList: menu.menuList
        },
        methods: {
            chooseItem: function (type, e) {
                var top = e.offsetX;
                setChartsBox(type, top);
            }
        }
    });
    var makeChartsBox = function (data) {
        chartsBox.charsBox = data;
    };
    var setChartsBox = function (type, top) {
        setBoxTop(35);
        makeChartsBox(getMenuListData(type));
        setLeftBtn(360, 35);
    };
    var getMenuListData = function (type) {
        var i = 0;
        var result = [];
        while (true) {
            if (menu.menudata[i].type == type) {
                result = menu.menudata[i].list;
                break;
            }
            i++
        }
        return result;
    };

    /*
     * 页面事件
     * */
    $('#leftBtn').bind('click', function () {
        makeChartsBox([]);
        $('#leftBtn').css({"display": "none"});
    });
    var setLeftBtn = function (left, top) {
        $('#leftBtn').css({"left": left, "top": top, "display": "block"});
    };
    var setBoxTop = function (top) {
        $('#chartsBox').css({"top": top});
    };


})($);