'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
	$scope.left  = function() {
        if (!$scope.message || !$scope.message.length == 0)
            return;
        return $scope.message.length + " / " + 300;
    };
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


TODOApp.controller('todoCtrl', function($scope){
    //todolist initializing
    $scope.todoList = [
            {'done' : true,  'title':"주제 고르기"},
            {'done' : false, 'title':"작성하기"},
            {'done' : false, 'title':"놀기"}
        ];
     $scope.appName = 'Todo List';
    //초기 할일 목록 설정

    //새로운 할 일 추가
    $scope.addNewTodo = function(newTitle){
        $scope.todoList.push({done:false, title:newTitle});
        $scope.newTitle='';
    };

    //완료한 일 삭제
    $scope.archive = function(){
        for(var i=$scope.todoList.length-1; i>=0; i--){
            if($scope.todoList[i].done){
                $scope.todoList.splice(i,1);
            }
        };
    };

    //남은 할 일 수 계산
    $scope.remain=function(){
        var remainCount=0;
        angular.forEach($scope.todoList, function(value, key){
         if(value.done ==false) remainCount++;
        })
         return remainCount;
    }
});

TODOApp.controller('NoteCtrl', function($scope){

    //Notelist initializing
    $scope.NoteList = [
            {'content':"메모1"},
            {'content':"메모2"},
            {'content':"메모3"}
    ];

     $scope.appName = 'Note List';
    //초기 할일 목록 설정


    //새로운 메모 추가
    $scope.save = function(message){
        $scope.NoteList.push({
        content:message,
        order: $scope.NoteList.length+1
        });
        $scope.message='';
    };

    //메모 삭제
    $scope.remove = function(Note){
        var index =$scope.NoteList.indexOf(Note);
        $scope.NoteList.splice(index,1);
    };

  //메모 작성 취소
  $scope.cancel = function(){
    $scope.message="";
  }

  //입력 가능 글자
  $scope.left  = function() {return $scope.message.length + " / " + 300;};

}); //NoteCtrl
