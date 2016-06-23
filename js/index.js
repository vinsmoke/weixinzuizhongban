var weixin=angular.module('weixin',['ngAnimate','ngRoute','ngTouch']);

weixin.factory('$wxDate',[function () {
  return {
    news:[
      {
        name:'杨颖',
        current:'恩，好，后天见。',
        time:'22.14',
        img:'./image/img1.jpg',
        chat:[
          {content:'在哪？',isMe:false,sendTime:'10:10'},
          {content:'咋啦。',isMe:true,sendTime:'10:12'},
          {content:'后天一起唱歌演唱会吧。',isMe:false,sendTime:'10:13'},
          {content:'恩，好，后天见。',isMe:true,sendTime:'22:14'}
        ]
      },
      {
        name:'某某某',
        current:'何以解忧？唯有杜康。',
        time:'22.15',
        img:'./image/img2.jpg',
        chat:[
          {content:'对酒当歌，人生几何？',isMe:false,sendTime:'10:10'},
          {content:'譬如朝露，去日苦多。',isMe:true,sendTime:'10:12'},
          {content:'慨当以慷，忧思难忘。',isMe:false,sendTime:'10:13'},
          {content:'何以解忧？唯有杜康。',isMe:false,sendTime:'22:15'}
        ]
      },
      {
        name:'张翰',
        current:'没意义。',
        time:'22.16',
        img:'./image/img3.jpg',
        chat:[
          {content:'小爽可以幸福',isMe:false,sendTime:'10:10'},
          {content:'然后呢。',isMe:true,sendTime:'10:12'},
          {content:'我要和娜扎一起躁。',isMe:false,sendTime:'10:13'},
          {content:'没意义。',isMe:false,sendTime:'22:16'}
        ]
      },
      {
        name:'路人甲',
        current:'我是路人甲。',
        time:'22.17',
        img:'./image/img4.jpg',
        chat:[
          {content:'我是你的新朋友？',isMe:false,sendTime:'10:10'},
          {content:'叫什么。',isMe:true,sendTime:'10:12'},
          {content:'路人乙。',isMe:false,sendTime:'10:13'},
          {content:'我是路人甲。',isMe:false,sendTime:'22:17'}
        ]
      },
      {
        name:'李易峰',
        current:'以后开车慢点。',
        time:'22.14',
        img:'./image/img5.jpg',
        chat:[
          {content:'我撞车了',isMe:false,sendTime:'10:10'},
          {content:'看新闻了，人没事就好。',isMe:true,sendTime:'10:12'},
          {content:'赔了点钱，扣了24分。',isMe:false,sendTime:'10:13'},
          {content:'以后开车慢点。',isMe:false,sendTime:'22:14'}
        ]
      },
      {
        name:'邓超',
        current:'我真知道。',
        time:'22.19',
        img:'./image/img6.jpg',
        chat:[
          {content:'我有等等',isMe:false,sendTime:'10:10'},
          {content:'我知道。',isMe:true,sendTime:'10:12'},
          {content:'我真有等等。',isMe:false,sendTime:'10:13'},
          {content:'我真知道。',isMe:false,sendTime:'22:19'}
        ]
      },
      {
        name:'林俊杰',
        current:'好。',
        time:'22.20',
        img:'./image/img7.jpg',
        chat:[
          {content:'唱一首歌给你？',isMe:false,sendTime:'10:10'},
          {content:'我想听演唱会。',isMe:true,sendTime:'10:12'},
          {content:'明天就开。',isMe:false,sendTime:'10:13'},
          {content:'好。',isMe:false,sendTime:'22:20'}
        ]
      }
    ],
    addressBook:[
      {key:'A',
      entry:[
        {name:'测试1',img:'./image/usr1.png'},
        {name:'测试2',img:'./image/usr1.png'},
        {name:'测试3',img:'./image/usr1.png'},
        {name:'测试4',img:'./image/usr1.png'},
        {name:'测试5',img:'./image/usr1.png'},
        {name:'测试6',img:'./image/usr1.png'},
      ]
    },
    {key:'B',
    entry:[
      {name:'测试1',img:'./image/usr1.png'},
      {name:'测试2',img:'./image/usr1.png'},
      {name:'测试3',img:'./image/usr1.png'},
      {name:'测试4',img:'./image/usr1.png'},
      {name:'测试5',img:'./image/usr1.png'},
      {name:'测试6',img:'./image/usr1.png'},
    ]
  },
  {key:'C',
  entry:[
    {name:'测试1',img:'./image/usr1.png'},
    {name:'测试2',img:'./image/usr1.png'},
    {name:'测试3',img:'./image/usr1.png'},
    {name:'测试4',img:'./image/usr1.png'},
    {name:'测试5',img:'./image/usr1.png'},
    {name:'测试6',img:'./image/usr1.png'},
  ]
},
{key:'D',
entry:[
  {name:'测试1',img:'./image/usr1.png'},
  {name:'测试2',img:'./image/usr1.png'},
  {name:'测试3',img:'./image/usr1.png'},
  {name:'测试4',img:'./image/usr1.png'},
  {name:'测试5',img:'./image/usr1.png'},
  {name:'测试6',img:'./image/usr1.png'},
]
}
],
}
}])
weixin.controller('indexCtrl',['$scope',function ($scope) {
  $scope.cur=location.hash;

}])

weixin.controller('weixinCtrl',['$scope','$wxDate',function ($scope,$wxDate) {
  $scope.news=$wxDate.news;
  $scope.delList=function (index) {
    $scope.news=$scope.news.filter(function (v,i) {
      return index!==i;
    })
  }
}])

weixin.controller('addressBookCtrl',['$scope','$wxDate',function ($scope,$wxDate) {
  $scope.addressBook=$wxDate.addressBook;
}])
weixin.directive('linLetter',[function () {
  return{
    replace:true,
    restrict:'E',
    templateUrl:'template/lin-letter.html',
    link:function ($scope,el) {
      if(localStorage.scrollTop){
        $('#main').scrollTop(angular.fromJson(localStorage.scrollTop));
      };
      var letterDate={};
      $('.letter-content').each(function (i,v) {
        letterDate[$(v).text()]=$(v).position().top;
      })
      $('.shortcut-letter').on('touchstart','li',function () {
        var sct=letterDate[$(this).text()];
        $('#main').animate({'scrollTop':sct},400);
        localStorage.scrollTop=angular.toJson(sct);
      })

    }
  }
}])

weixin.controller('discoverCtrl',['$scope',function ($scope) {

}])

weixin.controller('meCtrl',['$scope',function ($scope) {

}])

weixin.controller('ChatAreaCtrl',['$scope','$routeParams','$wxDate',function ($scope,$routeParams,$wxDate) {
  var date=$wxDate.news[$routeParams.index];
  $scope.chatList=date.chat;
  $scope.taimg=date.img;
  $scope.myimg='./image/touxian.png';
}])
weixin.config(['$routeProvider',function ($routeProvider) {
  $routeProvider.when('/',{
    controller:'weixinCtrl',
    templateUrl:'template/weixin.html'
  })
  .when('/weixin',{
    controller:'weixinCtrl',
    templateUrl:'template/weixin.html'
  })
  .when('/ChatArea/:index',{
    controller:'ChatAreaCtrl',
    templateUrl:'template/ChatArea.html'
  })
  .when('/addressBook',{
    controller:'addressBookCtrl',
    templateUrl:'template/address-book.html'
  })
  .when('/discover',{
    controller:'discoverCtrl',
    templateUrl:'template/discover.html'
  })
  .when('/me',{
    controller:'meCtrl',
    templateUrl:'template/me.html'
  })
  .otherwise({
    redirectTo:'/'
  })
}])
