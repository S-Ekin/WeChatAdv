"use strict";
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
                pagePath: "/pages/index/index",
                iconPath: "/image/icon_component.png",
                selectedIconPath: "/image/icon_component_HL.png",
                text: "首页"
            }, {
                pagePath: "/pages/logs/logs",
                iconPath: "/image/icon_API.png",
                selectedIconPath: "/image/icon_API_HL.png",
                text: "日志"
            }]
    },
    attached: function () {
    },
    methods: {
        switchTab: function (e) {
            var data = e.currentTarget.dataset;
            var url = data.path;
            this.setData({
                selected: data.index
            }, function () {
                wx.switchTab({ url: url });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUsU0FBUztRQUN4QixJQUFJLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxnQkFBZ0IsRUFBRSw4QkFBOEI7Z0JBQ2hELElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixnQkFBZ0IsRUFBRSx3QkFBd0I7Z0JBQzFDLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztLQUNIO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLFlBQUMsQ0FBQztZQUNULElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFBO1lBQ3BDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDckIsRUFBQztnQkFDQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUMsQ0FBQyxDQUFBO1lBQ3JCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOiB7XHJcbiAgICBzZWxlY3RlZDogMCxcclxuICAgIGNvbG9yOiBcIiM3QTdFODNcIixcclxuICAgIHNlbGVjdGVkQ29sb3I6IFwiIzNjYzUxZlwiLFxyXG4gICAgbGlzdDogW3tcclxuICAgICAgcGFnZVBhdGg6IFwiL3BhZ2VzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgIGljb25QYXRoOiBcIi9pbWFnZS9pY29uX2NvbXBvbmVudC5wbmdcIixcclxuICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIvaW1hZ2UvaWNvbl9jb21wb25lbnRfSEwucG5nXCIsXHJcbiAgICAgIHRleHQ6IFwi6aaW6aG1XCJcclxuICAgIH0sIHtcclxuICAgICAgcGFnZVBhdGg6IFwiL3BhZ2VzL2xvZ3MvbG9nc1wiLFxyXG4gICAgICBpY29uUGF0aDogXCIvaW1hZ2UvaWNvbl9BUEkucG5nXCIsXHJcbiAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiL2ltYWdlL2ljb25fQVBJX0hMLnBuZ1wiLFxyXG4gICAgICB0ZXh0OiBcIuaXpeW/l1wiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzd2l0Y2hUYWIoZSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgY29uc3QgdXJsID0gZGF0YS5wYXRoXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGRhdGEuaW5kZXhcclxuICAgICAgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgIHd4LnN3aXRjaFRhYih7dXJsfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19